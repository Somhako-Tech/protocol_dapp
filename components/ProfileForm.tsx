import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
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
    const [selectTab, setSelectTab] = useState<"bio" | "background" | "resume">(
        "bio"
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [linkModalOpen, setLinkModalOpen] = useState(false);

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
            //TODO Switch to a snackbar
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
        if (selectedIndex == 2 && selectTab == "resume") {
            const ProfileExists = await doesHandleExist();

            if (!ProfileExists) handleSubmit(e);
        } else {
            if (selectTab == "bio") {
                setSelectTab("background");
                setSelectedIndex(1);
            } else {
                setSelectTab("resume");
                setSelectedIndex(2);
            }
        }
    };

    const FormButton = ({
        selectTab,
    }: {
        selectTab: "bio" | "background" | "resume";
    }) => {
        if (selectTab == "resume")
            return (
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                >
                    MINT
                </button>
            );
        else
            return (
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#6d27f9e3] to-somhakohr text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                >
                    {"Next >"}
                </button>
            );
    };

    const addLink = () => setLinkModalOpen(true);

    const links = Object.keys(userProfile.link as Object).map(
        (link: string, i) => {
            if ((userProfile.link as any)[link] == "") return;
            return (
                <div key={i} className="flex">
                    <label className="font-medium mb-2 leading-none inline-block">
                        {link}
                    </label>
                    <label className="font-normal mb-2 ml-10 leading-none inline-block">
                        {(userProfile.link as any)[link]}
                    </label>
                </div>
            );
        }
    );

    return (
        <div className="flex-col items-center w-full">
            <form
                className="flex flex-col justify-evenly items-center "
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
                    <Tab.List className="flex justify-center tabs w-full px-52 py-0 my-0">
                        <Tab
                            className={
                                selectTab == "bio"
                                    ? "border-b-2 tab mx-10"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("bio")}
                        >
                            Bio
                        </Tab>
                        <Tab
                            className={
                                selectTab == "background"
                                    ? "border-b-2 tab mx-10"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("background")}
                        >
                            Background
                        </Tab>
                        <Tab
                            className={
                                selectTab == "resume"
                                    ? "border-b-2 tab mx-10"
                                    : "tab mx-10 "
                            }
                            onClick={() => setSelectTab("resume")}
                        >
                            Resume
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="flex flex-col justify-center items-center w-full">
                                <div className="my-6 flex-row justify-between items-center">
                                    <label
                                        htmlFor="handle"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Handle
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="handle"
                                        name="handle"
                                        className="formInputs"
                                        value={userProfile.handle}
                                        onChange={handleChange}
                                        onBlur={doesHandleExist}
                                    />
                                </div>
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
                                                        ? "opacity-0 h-0 transition-all 400ms"
                                                        : "opacity-100 transition-all 400ms"
                                                }
                                            >
                                                Handle is already taken!
                                            </Alert>
                                        </div>
                                    )}
                                </Transition>
                                <div className="my-6">
                                    <label
                                        htmlFor="address"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Address
                                    </label>
                                    <label
                                        id="address"
                                        className="w-auto mx-4 rounded-full border-slate-300"
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
                            <div className="formInputSection">
                                <div className="formInputPair">
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
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        placeholder="Ex: Web Developer"
                                        className="formInputs"
                                    />
                                </div>
                                <div className="my-6 mx-6">
                                    <label
                                        htmlFor="summary"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Summary
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            required
                                            id="summary"
                                            placeholder="Something about yourself..."
                                            className="w-full min-w-[100px]  h-[150px]  resize-none pb-6 rounded-sm "
                                            value={userProfile.summary}
                                            onChange={handleChange}
                                            onBlur={handleChange}
                                        ></textarea>
                                        {userProfile.summary.length < 120 && (
                                            <span className="fixed right-3 bottom-3 text-gray-500">
                                                {120 -
                                                    userProfile.summary.length}
                                                2
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
                                                            ? "opacity-0 h-0 transition-all 400ms"
                                                            : "opacity-90 transition-all 400ms"
                                                    }
                                                >
                                                    Summary has to be at least
                                                    120 chars (
                                                    {userProfile.summary
                                                        .length < 120 &&
                                                        120 -
                                                            userProfile.summary
                                                                .length}
                                                    )
                                                </Alert>
                                            </div>
                                        )}
                                    </Transition>
                                </div>

                                <div className="formInputPair">
                                    <label className=" text-lg font-medium mb-2 leading-none inline-block">
                                        Links
                                    </label>
                                    <button
                                        type="button"
                                        className="border border-[#6D27F9] rounded-full py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                        onClick={() => addLink()}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="mb-6 flex-row justify-between items-center">
                                    {links}
                                </div>
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
                                                        ? "opacity-0 h-0 transition-all 400ms my-2"
                                                        : "opacity-90 transition-all 400ms my-2"
                                                }
                                            >
                                                You need at least 3 links.
                                            </Alert>
                                        </div>
                                    )}
                                </Transition>
                            </div>
                            <div className="formInputSection">
                                <div className="formInputPair">
                                    <label
                                        htmlFor="job_type"
                                        className="font-medium mb-4 leading-none inline-block"
                                    >
                                        Preferred Job Type
                                    </label>
                                    <input
                                        required
                                        id="job_type"
                                        type="text"
                                        placeholder="Ex: Fulltime"
                                        className="formInputs"
                                        value={userProfile.job_type}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    />
                                </div>
                                <LocationField
                                    userProfile={userProfile}
                                    handleChange={handleChange}
                                />
                                <div className="formInputPair">
                                    <label
                                        htmlFor="salary"
                                        className="font-medium mb-4 leading-none inline-block"
                                    >
                                        Salary
                                    </label>
                                    <input
                                        required
                                        id="salary"
                                        type="text"
                                        placeholder="Ex: 2 Lpa"
                                        value={userProfile.salary}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        className="formInputs"
                                    />
                                </div>
                                <div className="formInputPair">
                                    <label
                                        htmlFor="years_of_exp"
                                        className="font-medium mb-4 leading-none inline-block "
                                    >
                                        Years of Experience
                                    </label>
                                    <select
                                        required
                                        id="years_of_exp"
                                        className="formInputs"
                                        value={userProfile.years_of_exp}
                                        onChange={handleChange}
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
                        </Tab.Panel>
                        {/*Background page*/}
                        <Tab.Panel>
                            <div className="formInputSection">
                                <EducationFields
                                    handleChange={handleChange}
                                    userProfile={userProfile}
                                />
                                <SkillFields
                                    handleChange={handleChange}
                                    userProfile={userProfile}
                                />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="formInputSection">
                                <ExperienceFields
                                    handleChange={handleChange}
                                    userProfile={userProfile}
                                />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <FormButton selectTab={selectTab} />
            </form>
        </div>
    );
};

export default ProfileForm;
