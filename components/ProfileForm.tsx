import { Tab } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import Modal from "@mui/material/Modal";
import LinkModal from "./LinkModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EducationFields from "./FormFields/EducationFields";
import SkillFields from "./FormFields/SkillField";
import ExperienceFields from "./FormFields/ExperienceFields";
import Alert from "@mui/material/Alert";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import { getProfileByHandleIdQuery } from "../graphql/graphqlQueries";
import LocationField from "./FormFields/LocationField";
import Link from "next/link";
import Avatar, { genConfig, AvatarConfig } from "react-nice-avatar";
import AvatarEditor from "./AvatarEditor";

const tabs = ["bio", "background", "resume", "mint"] as const;

type TabType = (typeof tabs)[number];

const ProfileForm = ({
    handleChange,
    userProfile,
    address,
    handleSubmit,
}: {
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
    userProfile: Profile;
    address: any;
}) => {
    const [avatarConfig, setAvatarConfig] = useState(genConfig("somhakohr"));

    const [selectTab, setSelectTab] = useState<TabType>("bio");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [linkModalOpen, setLinkModalOpen] = useState(false);

    const [resume, setResume] = useState<any>();

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
                    className="rounded-full bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] py-2.5 px-6 font-bold text-white transition-all hover:from-[#391188] hover:to-[#391188] md:min-w-[150px]"
                >
                    MINT
                </button>
            );
        else if (selectTab == "bio")
            return (
                <button
                    type="button"
                    className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  hover:bg-[#391188] md:min-w-[80px]"
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
                        className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  hover:bg-[#391188] md:min-w-[80px]"
                        onClick={() => {
                            setSelectedIndex((prev) => prev - 1);
                        }}
                    >
                        {"<"}
                    </button>
                    <button
                        type="button"
                        className="mx-4 rounded-full bg-somhakohr py-2.5 px-6 font-bold text-white  hover:bg-[#391188] md:min-w-[80px]"
                        onClick={() => {
                            setSelectedIndex((prev) => prev + 1);
                        }}
                    >
                        {">"}
                    </button>
                </div>
            );
    };

    //TODO Improve validation
    const [showHandleAlert, setShowHandleAlert] = useState(false);

    const [validationError, setValidationError] = useState<{
        valid: boolean;
        error: string | null;
    }>({ valid: false, error: null });

    const validations = {
        summary_length: "Summary needs to be longer",
        link_count: "You need to add more links",
    };

    const validateValues = () => {
        if (userProfile.summary.length < 120)
            return { valid: false, error: validations.summary_length };

        const links = userProfile.link as { [x: string]: string };

        const linkCount = Object.keys(Object(links)).map((link: string) => {
            if (links[link] !== "") return link;
        });
        if (linkCount.length < 2)
            return { valid: false, error: validations.link_count };

        return { valid: true, error: null };
    };

    async function doesHandleExist(e?: { preventDefault: () => void }) {
        e?.preventDefault();
        // Make an API call to check if the handle already exists
        const data = await getProfileByHandleIdQuery(userProfile.handle);
        if (data !== null) {
            setShowHandleAlert(true);
            return true;
        }

        setShowHandleAlert(false);
        return false;
    }

    const checkSubmit = async (e: {
        preventDefault: () => void;
        target: any;
    }) => {
        e.preventDefault();
        const form = e.target;
        const formValid = form.reportValidity();

        if (!formValid) return;

        const validity = validateValues();

        console.log(validity);

        if (!validity.valid) {
            setValidationError(validity);
            return;
        }
        if (selectedIndex == 3 && selectTab == "mint") {
            const ProfileExists = await doesHandleExist();

            if (!ProfileExists) handleSubmit(e);
        }
    };

    const addLink = () => setLinkModalOpen(true);

    const getFullUrl = (linkType: string, username: string) => {
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
                                ? getFullUrl(links, links[link])
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
                onSubmit={checkSubmit}
            >
                <LinkModal
                    linkModalOpen={linkModalOpen}
                    handleClose={() => setLinkModalOpen(false)}
                    handleChange={(e) => {
                        setValidationError({ valid: true, error: null });
                        handleChange(e);
                    }}
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
                        <Tab.Panel className="my-4 flex w-auto min-w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <div className="flex flex-row justify-between">
                                <div className="my-6 flex-row items-center justify-between">
                                    <label
                                        htmlFor="handle"
                                        className="mb-2 inline-block font-semibold leading-none"
                                    >
                                        Handle
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="handle"
                                        name="handle"
                                        className="mx-4 ml-6 w-auto rounded-full border border-slate-500 p-1 pl-2"
                                        value={userProfile.handle}
                                        onChange={handleChange}
                                        onBlur={doesHandleExist}
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
                            <Transition
                                nodeRef={null}
                                in={showHandleAlert}
                                timeout={400}
                            >
                                {(state) => (
                                    <div ref={null}>
                                        <Alert
                                            severity="error"
                                            className={
                                                state == "exited"
                                                    ? "400ms h-0 w-1/3 opacity-0 transition-all"
                                                    : "400ms w-1/2 opacity-100 transition-all"
                                            }
                                        >
                                            Handle is already taken!
                                        </Alert>
                                    </div>
                                )}
                            </Transition>
                            <div className="flex flex-row items-center justify-start gap-11">
                                <label
                                    htmlFor="title"
                                    className="mb-2 inline-block justify-self-start font-medium leading-none"
                                >
                                    Title
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="title"
                                    value={userProfile.title}
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                    placeholder="Ex: Web Developer"
                                    className="rounded-full border border-slate-500 p-1 pl-2"
                                />
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
                                        onChange={handleChange}
                                        onBlur={handleChange}
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
                                    onClick={() => addLink()}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="w-full px-20 py-10">{links}</div>
                        </Tab.Panel>
                        {/*Background page*/}
                        <Tab.Panel className="my-4 flex w-auto min-w-[700px] flex-col items-stretch justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                            <Transition
                                nodeRef={null}
                                in={
                                    !validationError.valid &&
                                    validationError.error ==
                                        validations.link_count
                                }
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
                            <div className="my-6 mx-6 flex flex-row items-center justify-between">
                                <label
                                    htmlFor="job_type"
                                    className="mb-4 inline-block font-medium leading-none"
                                >
                                    Preferred Job Type
                                </label>

                                <select
                                    required
                                    id="job_type"
                                    className="mx-4 ml-6 w-auto rounded-full border border-slate-500 p-1 px-10"
                                    value={userProfile.job_type}
                                    onChange={handleChange}
                                >
                                    <option value="Not sure">Not sure</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Fulltime">Fulltime</option>
                                </select>
                            </div>
                            <LocationField
                                userProfile={userProfile}
                                handleChange={handleChange}
                            />
                            <label
                                htmlFor="salary"
                                className="mb-4 inline-block font-medium leading-none"
                            >
                                Salary
                            </label>
                            <input
                                required
                                id="salary"
                                type="number"
                                placeholder="Ex: 2 Lpa"
                                value={userProfile.salary}
                                onChange={handleChange}
                                onBlur={handleChange}
                                className="mx-4 ml-6 w-auto rounded-full border border-slate-500 p-1"
                            />
                            <label
                                htmlFor="years_of_exp"
                                className="mb-4 inline-block font-medium leading-none "
                            >
                                Years of Experience
                            </label>
                            <select
                                required
                                id="years_of_exp"
                                className="mx-4 ml-6 w-auto rounded-full border border-slate-500 p-1"
                                value={userProfile.years_of_exp}
                                onChange={handleChange}
                            >
                                <option value="">Select Year Of Exp</option>
                                <option value="No Experience">
                                    No Experience
                                </option>
                                <option value="1-5 years">1-5 years</option>
                                <option value="5-10 years">5-10 years</option>
                                <option value="10-15 years">10-15 years</option>
                            </select>
                            <EducationFields
                                handleChange={handleChange}
                                userProfile={userProfile}
                            />
                            <SkillFields
                                handleChange={handleChange}
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
                                handleChange={handleChange}
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
