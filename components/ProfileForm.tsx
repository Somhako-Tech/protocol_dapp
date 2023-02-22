import { Tab } from "@headlessui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Profile } from "@prisma/client";
import Modal from "@mui/material/Modal";
import LinkModal from "./LinkModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EducationFields from "./FormFields/EducationFields";
import SkillsField from "./FormFields/SkillsField";
import ExperienceFields from "./FormFields/ExperienceFields";
import Alert from "@mui/material/Alert";
import { Transition } from "react-transition-group";
import { useReducer } from "react";
import { getProfileByHandleIdQuery } from "../graphql/graphqlQueries";
import LocationField from "./FormFields/LocationField";
import Link from "next/link";
import Avatar, { genConfig, AvatarConfig } from "react-nice-avatar";
import AvatarEditor from "./AvatarEditor";
import debounce from "lodash.debounce";
import { singleFieldValidation, allFieldsValidation } from "../lib/validator";
import Snackbar from "@mui/material/Snackbar";

import DomToImage from "dom-to-image";
import { buffer } from "stream/consumers";
import { useSession } from "next-auth/react";
import { ClipLoader } from "react-spinners";

const tabs = ["bio", "background", "resume", "mint"] as const;

type TabType = (typeof tabs)[number];

const ProfileForm = ({
    address,
    handleSubmit,
}: {
    handleSubmit: (userProfile: Profile) => void;
    address: any;
}) => {
    const { data: session } = useSession();

    const user = useMemo(
        () => (session?.user ? session.user : { id: null, email: null }),
        [session]
    );

    function updateUserProfile(
        prevState: Profile,
        event: { target: { id: keyof Profile | string; value: any } }
    ) {
        const { id: key, value } = event.target;

        debounceSingleFieldValidation({ key, value });

        return { ...prevState, [event.target.id]: event.target.value };
    }

    const debounceSingleFieldValidation = debounce(async ({ key, value }) => {
        const { isValid, errors } = singleFieldValidation({ key, value });
        if (!isValid) {
            setFormErrors((prevErr: any) => ({
                ...prevErr,
                [key]: errors[key],
            }));
        } else {
            if (key === "handle") return;
            setFormErrors((prevErr: any) => ({ ...prevErr, [key]: null }));
        }
    }, 500);

    const saveAvatarToIpfs = async (): Promise<{
        IpfsHash: string;
        PinSize: number;
        Timestamp: string;
    } | null> => {
        const node = document.getElementById("avatarId");
        const scale = 2;
        if (node) {
            const nodeWidth = node.offsetWidth;
            const nodeHeight = node.offsetHeight;

            const avatar = await DomToImage.toBlob(node, {
                height: node.offsetHeight * scale,
                style: {
                    transform: `scale(${scale}) translate(${
                        nodeWidth / 2 / scale - 25
                    }px, ${nodeHeight / 2 / scale - 25}px)`,
                    "border-radius": 0,
                },
                width: node.offsetWidth * scale,
            });

            const formData = new FormData();

            formData.append("file", avatar);

            const response = await fetch("/api/pinata", {
                body: formData,
                method: "POST",
            }).catch((err) => console.log({ err }));

            return response ? await response?.json() : null;
        } else return null;
    };

    const [formErrors, setFormErrors] = useState<any>({});

    const checkSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        setSubmittingForm(true);
        const avatar = await saveAvatarToIpfs();

        if (!avatar) {
            throw new Error("Cannot save to ipfs");
            return;
        }
        const { isValid, errors } = await allFieldsValidation({
            ...userProfile,
            ipfs_hash: avatar.IpfsHash,
        });

        if (isValid) handleSubmit(userProfile);
        else {
            console.log(errors);
            setFormErrors(errors);
            setShowValidationErrors(true);
            setSubmittingForm(false);

            return;
        }
    };

    const [userProfile, dispatch] = useReducer(updateUserProfile, {
        id: 0,
        minted: false,
        handle: "",
        title: "",
        summary: "",
        job_type: "",
        pref_location: "",
        salary: "",
        years_of_exp: "",
        link: { Twitter: "", Github: "", LinkedIn: "" },
        skills: [],
        education: [{ institution: "", year: "", title: "" }],
        experience: [
            { organization: "", startYear: "", endYear: "", title: "" },
        ],
        address: "",
        ipfs_hash: "",
        user_id: "",
    });

    const [avatarConfig, setAvatarConfig] = useState(genConfig("somhako"));

    const [selectTab, setSelectTab] = useState<TabType>("bio");

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [linkModalOpen, setLinkModalOpen] = useState(false);

    const [handleSearching, setHandleSearching] = useState(false);

    const [showValidationErrors, setShowValidationErrors] = useState(false);

    const [submittingForm, setSubmittingForm] = useState(false);

    const [resume, setResume] = useState<any>();

    //Check handle
    useEffect(() => {
        const checkUserName = async () => {
            if (userProfile.handle.length < 5) {
                setHandleSearching(false);
                return;
            }
            const data = await getProfileByHandleIdQuery(userProfile.handle);
            if (data !== null) {
                setFormErrors((prevErr: any) => ({
                    ...prevErr,
                    handle: ["Handle is already taken."],
                }));
            } else
                setFormErrors((prevErr: any) => ({ ...prevErr, handle: null }));
            setHandleSearching(false);
        };
        checkUserName();
    }, [userProfile.handle]);

    useEffect(() => {
        dispatch({ target: { id: "address", value: address } });
        dispatch({ target: { id: "user_id", value: user.id } });
    }, [address, user]);

    useEffect(() => {
        setShowValidationErrors(false);
    }, [userProfile]);
    //Track tab
    useEffect(() => {
        setSelectTab(tabs[selectedIndex]);
    }, [selectedIndex]);

    //save resume
    useEffect(() => {
        if (resume) {
            const formData = new FormData();
            formData.append("file", resume);
            // addResume(formData)
        }
    }, [resume]);

    const getFullUrl = (linkType: string, username: string) => {
        if (linkType == "LinkedIn")
            return "https://linkedin.com/in/" + username;
        else if (linkType == "Github") return "https://github.com/" + username;
        else return "https://twitter.com/" + username;
    };

    const FormButton = ({
        selectTab,
        submittingForm,
    }: {
        selectTab: TabType;
        submittingForm: boolean;
    }) => {
        if (selectTab == "mint")
            return (
                <button
                    type="submit"
                    className="inline-block rounded bg-gradient-to-r from-secondary to-tertiary py-2 px-8 text-sm font-bold text-white transition-all hover:from-primary hover:to-primary m-2"
                >
                    {!submittingForm ? (
                        "MINT"
                    ) : (
                        <i className="fa-solid fa-rotate fa-spin"></i>
                    )}
                </button>
            );
        else if (selectTab == "bio")
            return (
                <button
                    type="button"
                    className="inline-block rounded bg-gradient-to-r from-secondary to-tertiary py-2 px-8 text-sm font-bold text-white transition-all hover:from-primary hover:to-primary m-2"
                    onClick={() => {
                        setSelectedIndex((prev) => prev + 1);
                    }}
                >
                    {"Next"}
                </button>
            );
        else
            return (
                <div>
                    <button
                        type="button"
                        className="inline-block rounded bg-gradient-to-r from-secondary to-tertiary py-2 px-8 text-sm font-bold text-white transition-all hover:from-primary hover:to-primary m-2"
                        onClick={() => {
                            setSelectedIndex((prev) => prev - 1);
                        }}
                    >
                        {"Prev"}
                    </button>
                    <button
                        type="button"
                        className="inline-block rounded bg-gradient-to-r from-secondary to-tertiary py-2 px-8 text-sm font-bold text-white transition-all hover:from-primary hover:to-primary m-2"
                        onClick={() => {
                            setSelectedIndex((prev) => prev + 1);
                        }}
                    >
                        {"Next"}
                    </button>
                </div>
            );
    };

    const links = Object.keys(userProfile.link as Object).map(
        (link: string, i) => {
            const links = userProfile.link as any;
            return (
                <div className="w-full lg:w-[47%] mb-6" key={i}>
                    <Link className="iconGroup social delete" 
                    href={links[link] != "" ? getFullUrl(link, links[link]) : "/"}
                    target="_blank"
                    >
                        <input
                            type="text"
                            value={links[link] != ""? getFullUrl(link, links[link]) : "No link"}
                            className="w-full rounded-lg border-slate-300 dark:bg-gray-800 focus:border-slate-300 focus:ring-0 focus:outline-0 focus:shadow-none"
                            readOnly
                        />
                        {/* <i
                            className={`${geticon(
                            link.title
                            )} iconGroup__icon`}
                        ></i>
                        <i
                            className="fa-solid fa-trash iconGroup__icon-delete"
                            onClick={e => deleteLink(link.id)}
                        ></i> */}
                    </Link>
                </div>
            );
        }
    );

    const ValidationErrors = ({ formErrors, setSelectedIndex }: any) => {
        let error = "Profile form is incomplete";

        const errorList = Object.keys(formErrors).map(
            (item) => item.split(".")[0]
        );

        const pageFields = {
            handle: 0,
            title: 0,
            summary: 0,
            link: 0,
            job_type: 1,
            pref_location: 1,
            salary: 1,
            years_of_exp: 1,
            skills: 1,
            education: 1,
            experience: 2,
        };

        const errorPage = (pageFields as any)[
            errorList.filter((item) =>
                Object.keys(pageFields).includes(item)
            )[0]
        ];

        errorPage !== undefined && setSelectedIndex(errorPage);

        console.log({
            errorPage,
            valid: errorPage !== undefined && errorPage?.length > 0,
        });
        console.log({ errorList });

        if (errorList.includes("skills"))
            error = "At least 3 skills are required";
        if (errorList.includes("link")) error = "At least 3 links are required";
        return (
            <Snackbar
                open={true}
                autoHideDuration={6000}
                onClose={() => setShowValidationErrors(false)}
            >
                <Alert severity="error">{error}</Alert>
            </Snackbar>
        );
    };

    return (
        <form onSubmit={checkSubmit} className="w-full max-w-[700px] mx-auto">
            {showValidationErrors && (
                <div className="flex flex-col items-center justify-evenly">
                    <ValidationErrors
                        formErrors={formErrors}
                        setSelectedIndex={setSelectedIndex}
                    />
                </div>
            )}
            <LinkModal
                linkModalOpen={linkModalOpen}
                handleClose={() => setLinkModalOpen(false)}
                handleChange={dispatch}
                userProfile={userProfile}
            />
            <Tab.Group
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex} 
            >
                <Tab.List className="overflow-x-auto flex items-center justify-between border border-slate-300 rounded-full text-center text-darkGray text-[14px] font-semibold mb-6">
                    <Tab
                        className={
                            selectTab == "bio"
                                ? "border-b-4 border-b-primary p-2 mx-8 text-primary"
                                : "border-b-4 border-b-transparent p-2 mx-8"
                        }
                        onClick={() => setSelectTab("bio")}
                    >
                        Bio
                    </Tab>
                    <Tab
                        className={
                            selectTab == "background"
                                ? "border-b-4 border-b-primary p-2 mx-8 text-primary"
                                : "border-b-4 border-b-transparent p-2 mx-8"
                        }
                        onClick={() => setSelectTab("background")}
                    >
                        Background
                    </Tab>
                    <Tab
                        className={
                            selectTab == "resume"
                                ? "border-b-4 border-b-primary p-2 mx-8 text-primary"
                                : "border-b-4 border-b-transparent p-2 mx-8"
                        }
                        onClick={() => setSelectTab("resume")}
                    >
                        Resume
                    </Tab>
                    <Tab
                        className={
                            selectTab == "mint"
                                ? "border-b-4 border-b-primary p-2 mx-8 text-primary"
                                : "border-b-4 border-b-transparent p-2 mx-8"
                        }
                        onClick={() => setSelectTab("mint")}
                    >
                        Mint
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
                            <div className="mb-6">
                                <label
                                    htmlFor="title"
                                    className="font-medium mb-2 leading-none inline-block"
                                >
                                    Title
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="title"
                                    value={userProfile.title}
                                    onChange={dispatch}
                                    onBlur={dispatch}
                                    placeholder="Ex: Web Developer"
                                    className="w-full rounded-lg border-slate-300"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="address"
                                    className="font-medium mb-2 leading-none inline-block"
                                >
                                    Address
                                </label>
                                <div id="address" className="w-full rounded-lg border border-slate-300 text-darkGray py-2 px-3">
                                    {address &&
                                        address.slice(0, 10) +
                                        "..." +
                                        address.slice(
                                        address.length - 8
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="handle"
                                    className="font-medium mb-2 leading-none inline-block"
                                >
                                    Handle
                                </label>
                                <input required
                                    type="text"
                                    id="handle"
                                    name="handle"
                                    className="w-full rounded-lg border-slate-300"
                                    value={userProfile.handle}
                                    onChange={(e) => {
                                        dispatch(e);
                                        setHandleSearching(true);
                                    }}
                                    onBlur={dispatch}
                                    placeholder="Username"
                                />
                                {userProfile.handle !== "" && (
                                    <div className="mt-3">
                                        {handleSearching ? (
                                            <>
                                                <div className="bg-indigo-200 py-2 px-3 rounded">
                                                    <i className="fa-solid fa-rotate fa-spin"></i>
                                                </div>
                                            </>
                                        ) : formErrors.handle ? (
                                            <Alert
                                                severity="error"
                                            >
                                                {formErrors.handle}
                                            </Alert>
                                        ) : (
                                            <Alert
                                                severity="success"
                                            >
                                                All set!
                                            </Alert>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
                            <label
                                htmlFor="summary"
                                className="font-medium mb-2 leading-none inline-block"
                            >
                                Summary
                            </label>
                            <div className="relative mb-2">
                                <textarea
                                id="summary"
                                placeholder="Something about yourself..."
                                className="w-full rounded-lg h-[120px] border-slate-300 resize-none pb-6"
                                value={userProfile.summary}
                                onChange={dispatch}
                                onBlur={dispatch}
                                ></textarea> 
                                {userProfile.summary.length < 120 && (
                                    <span className="absolute right-3 bottom-3 text-sm text-gray-500">
                                        {userProfile.summary.length < 120 && 120 - userProfile.summary.length}
                                    </span>
                                )}
                            </div>
                            <Transition
                                nodeRef={null}
                                in={userProfile.summary.length < 120}
                                timeout={400}
                            >
                                {(state) => (
                                    <div ref={null}>
                                        <Alert
                                            severity="error"
                                            className={
                                                state == "exited"
                                                    ? "400ms h-0 opacity-0 transition-all"
                                                    : "400ms opacity-90 transition-all"
                                            }
                                        >
                                            Summary has to be at least 120 chars
                                        </Alert>
                                    </div>
                                )}
                            </Transition>
                        </div>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
                            <div className="md:border border-slate-300 rounded-normal md:py-6 md:px-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4>
                                    Social <span className="text-[#6D27F9]">Media</span>
                                    </h4>
                                    <button
                                    type="button"
                                    className="border border-[#6D27F9] rounded-lg py-1 px-4 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                    onClick={() => setLinkModalOpen(true)}
                                    >
                                    Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    {links}
                                </div>
                            </div>
                            <Transition
                                nodeRef={null}
                                in={formErrors.links}
                                timeout={400}
                            >
                                {(state) => (
                                    <div ref={null}>
                                        <Alert
                                            severity="error"
                                            className={
                                                state == "exited"
                                                    ? "400ms my-2 h-0 opacity-0 transition-all"
                                                    : "400ms my-2 opacity-90 transition-all"
                                            }
                                        >
                                            You need at least 3 links.
                                        </Alert>
                                    </div>
                                )}
                            </Transition>
                        </div>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full lg:w-[47%] mb-6">
                                    <label
                                        htmlFor="job_type"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Preferred Job Type
                                    </label>
                                    <select
                                        required
                                        id="job_type"
                                        className="w-full rounded-lg border-slate-300"
                                        value={userProfile.job_type}
                                        onChange={dispatch}
                                    >
                                        <option value="Not sure">
                                            Not sure
                                        </option>
                                        <option value="Part-time">
                                            Part-time
                                        </option>
                                        <option value="Fulltime">
                                            Fulltime
                                        </option>
                                    </select>
                                </div>
                                <div className="w-full lg:w-[47%] mb-6">
                                    <label
                                        htmlFor="salary"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Salary
                                    </label>
                                    <input
                                        required
                                        id="salary"
                                        type="number"
                                        placeholder="In USD"
                                        value={userProfile.salary}
                                        onChange={dispatch}
                                        onBlur={dispatch}
                                        className="w-full rounded-lg border-slate-300"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full lg:w-[47%] mb-6">
                                    <LocationField
                                        userProfile={userProfile}
                                        handleChange={dispatch}
                                    />
                                </div>
                                <div className="w-full lg:w-[47%] mb-6">
                                    <label
                                        htmlFor="years_of_exp"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Years of Experience
                                    </label>
                                    <select
                                        required
                                        id="years_of_exp"
                                        className="w-full rounded-lg border-slate-300"
                                        value={userProfile.years_of_exp}
                                        onChange={dispatch}
                                    >
                                        <option value="">
                                            Select Year Of Exp
                                        </option>
                                        <option value="No Experience">
                                            No Experience
                                        </option>
                                        <option value="1-5 years">
                                            1-5 years
                                        </option>
                                        <option value="5-10 years">
                                            5-10 years
                                        </option>
                                        <option value="10-15 years">
                                            10-15 years
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <SkillsField
                            handleChange={dispatch}
                            userProfile={userProfile}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <EducationFields
                            handleChange={dispatch}
                            userProfile={userProfile}
                        />
                        <ExperienceFields
                            handleChange={dispatch}
                            userProfile={userProfile}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
                            <label className="mb-4 inline-block font-medium leading-none">
                                Resume
                            </label>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="uploadCV"
                                    className="mb-2 w-[150px] cursor-pointer rounded-md border border-dashed border-teal-500 p-2.5 px-4 text-center text-sm font-semibold "
                                >
                                    <span>
                                        {resume
                                            ? "Uploaded"
                                            : "Upload" + " "}
                                        <i className="fa-solid fa-cloud-arrow-up ml-1 text-[#6D27F9]"></i>
                                    </span>
                                    <input
                                        type="file"
                                        id="uploadCV"
                                        accept="application/pdf,application/msword,.rtf"
                                        className="hidden"
                                        onChange={(e) =>
                                            setResume(
                                                e.target.files
                                                    ? e.target.files[0]
                                                    : null
                                            )
                                        }
                                    />
                                </label>
                                <span className="text-[12px] text-[#333] dark:text-white">
                                    Supported Formats: doc, docx, rtf, pdf,
                                    upto 2 MB
                                </span>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <AvatarEditor
                            setAvatarConfig={setAvatarConfig}
                            avatarConfig={avatarConfig}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="text-center">
                <FormButton
                    selectTab={selectTab}
                    submittingForm={submittingForm}
                />
            </div>
        </form>
    );
};

export default ProfileForm;
