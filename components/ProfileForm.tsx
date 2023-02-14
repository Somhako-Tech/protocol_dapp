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
import { singleFieldValidation } from "../lib/validator";
import { useClient } from "wagmi";

const tabs = ["bio", "background", "resume", "mint"] as const;

type TabType = (typeof tabs)[number];

const ProfileForm = ({
    address,
    handleSubmit,
}: {
    handleSubmit: (userProfile: Profile) => void;
    address: any;
}) => {
    function updateUserProfile(
        prevState: Profile,
        event: { target: { id: keyof Profile | string; value: any } }
    ) {
        const { id: key, value } = event.target;

        debounceSingleFieldValidation({ key, value });
        switch (key) {
            case "link": {
                console.log({ [key]: value });
            }
        }

        return { ...prevState, [event.target.id]: event.target.value };
    }

    const debounceSingleFieldValidation = debounce(async ({ key, value }) => {
        const { isValid, errors } = singleFieldValidation({ key, value });
        console.log({ isValid, errors });
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
        user_id: "",
    });

    const [avatarConfig, setAvatarConfig] = useState(genConfig("somhakohr"));

    const [selectTab, setSelectTab] = useState<TabType>("bio");

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [linkModalOpen, setLinkModalOpen] = useState(false);

    const [handleSearching, setHandleSearching] = useState(false);

    const [formErrors, setFormErrors] = useState<any>({});

    const [resume, setResume] = useState<any>();

    // const checkHandleExists = useCallback(async () => {
    //     // Make an API call to check if the handle already exists
    //     console.log(userProfile.handle);
    //     const data = await getProfileByHandleIdQuery(userProfile.handle);
    //     console.log({ data });
    //     if (data !== null) {
    //         setFormErrors((prevErr: any) => ({
    //             ...prevErr,
    //             handle: ["Handle is already taken."],
    //         }));
    //     } else setFormErrors((prevErr: any) => ({ ...prevErr, handle: null }));
    //     setHandleSearching(false);
    // }, [userProfile.handle]);

    // const debouncedEventHandler = useMemo(
    //     () =>
    //         debounce(async () => {
    //             // Make an API call to check if the handle already exists
    //             console.log(userProfile.handle);
    //             const data = await getProfileByHandleIdQuery(
    //                 userProfile.handle
    //             );
    //             console.log({ data });
    //             if (data !== null) {
    //                 setFormErrors((prevErr: any) => ({
    //                     ...prevErr,
    //                     handle: ["Handle is already taken."],
    //                 }));
    //             } else
    //                 setFormErrors((prevErr: any) => ({
    //                     ...prevErr,
    //                     handle: null,
    //                 }));
    //             setHandleSearching(false);
    //         }, 300),
    //     [userProfile.handle]
    // );

    useEffect(() => {
        const checkUserName = async () => {
            if (userProfile.handle.length < 5) {
                setHandleSearching(false);
                return;
            }
            const data = await getProfileByHandleIdQuery(userProfile.handle);
            console.log({ data });
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

    const FormButton = ({ selectTab }: { selectTab: TabType }) => {
        if (selectTab == "mint")
            return (
                <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] py-2.5 px-6 font-bold text-white shadow-md shadow-gray-500 transition-all hover:from-[#391188] hover:to-[#391188] md:min-w-[150px]"
                >
                    MINT
                </button>
            );
        else if (selectTab == "bio")
            return (
                <button
                    type="button"
                    className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  shadow-md shadow-gray-500 hover:bg-[#391188] md:min-w-[80px]"
                    onClick={() => {
                        setSelectedIndex((prev) => prev + 1);
                    }}
                >
                    {">"}
                </button>
            );
        else
            return (
                <div>
                    <button
                        type="button"
                        className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  shadow-md shadow-gray-500 hover:bg-[#391188] md:min-w-[80px]"
                        onClick={() => {
                            setSelectedIndex((prev) => prev - 1);
                        }}
                    >
                        {"<"}
                    </button>
                    <button
                        type="button"
                        className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  shadow-md shadow-gray-500 hover:bg-[#391188] md:min-w-[80px]"
                        onClick={() => {
                            setSelectedIndex((prev) => prev + 1);
                        }}
                    >
                        {">"}
                    </button>
                </div>
            );
    };

    // const checkSubmit = async (e: {
    //     preventDefault: () => void;
    //     target: any;
    // }) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const formValid = form.reportValidity();

    //     if (!formValid) return;

    //     const validity = validateValues();

    //     console.log(validity);

    //     if (!validity.valid) {
    //         setValidationError(validity);
    //         return;
    //     }
    //     if (selectedIndex == 3 && selectTab == "mint") {
    //         const ProfileExists = await doesHandleExist();

    //         if (!ProfileExists) handleSubmit(userProfile);
    //     }
    // };

    const getFullUrl = (linkType: string, username: string) => {
        console.log({ linkType });
        if (linkType == "LinkedIn")
            return "https://linkedin.com/in/" + username;
        else if (linkType == "Github") return "https://github.com/" + username;
        else return "https://twitter.com/" + username;
    };

    const links = Object.keys(userProfile.link as Object).map(
        (link: string, i) => {
            const links = userProfile.link as any;
            return (
                <div
                    key={i}
                    className="flex w-full flex-row justify-between px-10"
                >
                    <label className="inline-blocks mb-2 font-medium leading-none">
                        {link}
                    </label>
                    <Link
                        href={
                            links[link] != ""
                                ? getFullUrl(link, links[link])
                                : "/"
                        }
                        target="_blank"
                        className="mb-2 ml-10 inline-block font-normal leading-none text-cyan-700"
                    >
                        {links[link] != ""
                            ? getFullUrl(link, links[link])
                            : "No link"}
                    </Link>
                </div>
            );
        }
    );

    return (
        <div className="w-full flex-col items-center ">
            <form
                className="flex flex-col items-center justify-evenly p-5"
                onSubmit={() => {}}
            >
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
                    <Tab.List className="tabs my-0 flex max-w-md justify-center py-0 font-semibold text-white">
                        <Tab
                            className={
                                selectTab == "bio"
                                    ? "tab mx-10 border-b-2"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("bio")}
                        >
                            Bio
                        </Tab>
                        <Tab
                            className={
                                selectTab == "background"
                                    ? "tab mx-10 border-b-2"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("background")}
                        >
                            Background
                        </Tab>
                        <Tab
                            className={
                                selectTab == "resume"
                                    ? "tab mx-10 border-b-2"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("resume")}
                        >
                            Resume
                        </Tab>

                        <Tab
                            className={
                                selectTab == "mint"
                                    ? "tab mx-10 border-b-2"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("mint")}
                        >
                            Mint
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className="my-4 flex w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex w-1/2 flex-row items-center justify-start">
                                    <label
                                        htmlFor="title"
                                        className="mb-2 inline-block font-semibold leading-none"
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
                                        className="ml-auto mr-6 w-auto rounded-full border border-slate-500 p-1 pl-2"
                                    />
                                </div>

                                <div className="my-6">
                                    <label
                                        htmlFor="address"
                                        className="mb-2 inline-block font-medium leading-none"
                                    >
                                        Address
                                    </label>
                                    <label
                                        id="address"
                                        className="mx-4 w-auto  border-2 border-slate-300 p-2 font-mono"
                                    >
                                        {address &&
                                            address.slice(0, 10) +
                                                "..." +
                                                address.slice(
                                                    address.length - 8
                                                )}
                                    </label>
                                </div>
                            </div>
                            {/* TODO: Change this into a search bar */}

                            <div className="flex flex-row items-center justify-start">
                                <div className="flex w-1/2 flex-row items-center justify-start">
                                    <label
                                        htmlFor="handle"
                                        className="mb-2 inline-block p-1 font-semibold leading-none "
                                    >
                                        Handle
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="handle"
                                        name="handle"
                                        className="ml-auto mr-6 w-auto rounded-full border border-slate-500 p-1 pl-2"
                                        value={userProfile.handle}
                                        onChange={(e) => {
                                            dispatch(e);
                                            setHandleSearching(true);
                                        }}
                                        onBlur={dispatch}
                                    />
                                </div>
                                <div className="relative">
                                    {handleSearching ? (
                                        <h1 className="loading-normal ml-0 transition-all duration-150">
                                            ...
                                        </h1>
                                    ) : formErrors.handle ? (
                                        <Alert
                                            severity="error"
                                            className={
                                                "absolute top-0 mt-0 ml-0 w-[250px] -translate-y-5 opacity-100 transition-all duration-150"
                                            }
                                        >
                                            {formErrors.handle}
                                        </Alert>
                                    ) : (
                                        <Alert
                                            severity="success"
                                            className={
                                                "absolute top-0 mt-0 ml-0 w-[250px] -translate-y-5 opacity-100 transition-all duration-150"
                                            }
                                        >
                                            All set!
                                        </Alert>
                                    )}
                                </div>
                            </div>

                            <div className="my-6">
                                <label
                                    htmlFor="summary"
                                    className="mb-2 inline-block font-medium leading-none"
                                >
                                    Summary
                                </label>
                                <div className="relative">
                                    <textarea
                                        required
                                        id="summary"
                                        placeholder="Something about yourself..."
                                        className="h-[150px] w-full  min-w-[100px]  resize-none rounded-sm border border-slate-500 p-1 pb-6 pl-2"
                                        value={userProfile.summary}
                                        onChange={dispatch}
                                        onBlur={dispatch}
                                    ></textarea>
                                    {userProfile.summary.length < 120 && (
                                        <span className="absolute right-3 bottom-3 text-gray-500">
                                            {userProfile.summary.length < 120 &&
                                                120 -
                                                    userProfile.summary.length}
                                        </span>
                                    )}
                                </div>

                                <Transition
                                    nodeRef={null}
                                    in={userProfile.summary.length < 120}
                                    timeout={400}
                                    className="my-10"
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
                                                Summary has to be at least 120
                                                chars
                                            </Alert>
                                        </div>
                                    )}
                                </Transition>
                            </div>

                            <div className="flex flex-row items-center justify-around">
                                <label className=" mb-2 inline-block text-lg font-medium leading-none">
                                    Links
                                </label>
                                <button
                                    type="button"
                                    className="rounded-full border border-[#6D27F9] py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                    onClick={() => setLinkModalOpen(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="w-full px-20 py-10">{links}</div>
                        </Tab.Panel>
                        {/*Background page*/}
                        <Tab.Panel className="my-4 flex w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <div className="m-0 w-3/4 p-0">
                                <Transition
                                    nodeRef={null}
                                    in={formErrors.links}
                                    timeout={400}
                                    className="my-10"
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
                                <div className="mb-10 flex flex-row items-center justify-between">
                                    <label
                                        htmlFor="job_type"
                                        className="mb-2 inline-block font-semibold leading-none"
                                    >
                                        Preferred Job Type
                                    </label>

                                    <select
                                        required
                                        id="job_type"
                                        className="mx-4 ml-6 w-1/2 rounded-full border border-slate-500 p-1 pl-3"
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
                                <LocationField
                                    userProfile={userProfile}
                                    handleChange={dispatch}
                                />
                                <div className="mb-10 flex flex-row items-center justify-between">
                                    <label
                                        htmlFor="salary"
                                        className="mb-2 inline-block font-semibold leading-none"
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
                                        className="mx-4 ml-6 w-1/2 rounded-full border border-slate-500 p-1 pl-3"
                                    />
                                </div>
                                <div className="mb-5 flex flex-row items-center justify-between">
                                    <label
                                        htmlFor="years_of_exp"
                                        className="mb-2 inline-block font-semibold leading-none"
                                    >
                                        Years of Experience
                                    </label>
                                    <select
                                        required
                                        id="years_of_exp"
                                        className="mx-4 ml-6 w-1/2 rounded-full border border-slate-500 p-1 pl-3"
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

                            <EducationFields
                                handleChange={dispatch}
                                userProfile={userProfile}
                            />
                            <SkillsField
                                handleChange={dispatch}
                                userProfile={userProfile}
                            />
                            <div className="mb-6">
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
                        <Tab.Panel className="my-4 flex w-auto min-w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <ExperienceFields
                                handleChange={dispatch}
                                userProfile={userProfile}
                            />
                        </Tab.Panel>
                        <Tab.Panel className="my-4 flex w-auto min-w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <AvatarEditor
                                setAvatarConfig={setAvatarConfig}
                                avatarConfig={avatarConfig}
                            />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <FormButton selectTab={selectTab} />
            </form>
        </div>
    );
};

export default ProfileForm;
