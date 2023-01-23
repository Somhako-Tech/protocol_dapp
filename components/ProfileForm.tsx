import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Profile } from "@prisma/client";
import Modal from "@mui/material/Modal";
import LinkModal from "./LinkModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfileForm = ({
    handleChange,
    userProfile,
    doesHandleExist,
    address,
    handleSubmit,
}: {
    handleChange: (e: any) => void;
    doesHandleExist: (e: any) => void;
    handleSubmit: (e: any) => void;
    userProfile: Profile;
    address: any;
}) => {
    const [selectTab, setSelectTab] = useState<"bio" | "background" | "resume">(
        "bio"
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [currentPageValid, setCurrentPageValid] = useState(false);

    const [linkModalOpen, setLinkModalOpen] = useState(false);

    const checkSubmit = (e: { preventDefault: () => void; target: any }) => {
        e.preventDefault();
        const form = e.target;
        const formValid = form.checkValidity();

        if (!formValid) return;
        if (selectedIndex == 2 && selectTab == "resume") handleSubmit(e);
        else {
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
        currentPageValid,
    }: {
        selectTab: "bio" | "background" | "resume";
        currentPageValid: Boolean;
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
                    className="bg-gradient-to-r from-[#928aa1] to-[#c9a7dd] text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                >
                    {"Next >"}
                </button>
            );
    };

    const updateSkill = (e: {
        target: {
            id: string;
            name: string | number;
            value: string;
        };
    }) => {
        const skills = userProfile.skills;

        skills[Number(e.target.id)] = e.target.value;
        handleChange({ target: { name: "skills", value: [...skills] } });
    };

    const updateEducation = (
        e: {
            target: {
                id: string;
                name: string | number;
                value: string;
            };
        },
        i: number
    ) => {
        const education = userProfile.education as any;

        if (e.target.id == "institution" && education !== null)
            education[i].institution = e.target.value;
        if (e.target.id == "title") education[i].title = e.target.value;
        if (e.target.id == "year") education[i].year = e.target.value;
        handleChange({ target: { id: "education", value: [...education] } });
    };

    const updateExperience = (
        e: {
            target: {
                id: string;
                name: string | number;
                value: string;
            };
        },
        i: number
    ) => {
        const experience = userProfile.experience as any;

        if (e.target.id == "title") experience[i].title = e.target.value;
        if (e.target.id == "organization")
            experience[i].organization = e.target.value;
        if (e.target.id == "startYear")
            experience[i].startYear = e.target.value;
        if (e.target.id == "endYear") experience[i].endYear = e.target.value;
        handleChange({
            target: { id: "experience", value: [...experience] },
        });
    };

    const addLink = () => setLinkModalOpen(true);
    const addSkill = () => {
        const skills = userProfile.skills;
        if (userProfile.skills.length > 3) return;
        handleChange({ target: { id: "skills", value: [...skills, " "] } });
    };

    const addExperience = () => {
        const experience = userProfile.experience;
        if (userProfile.experience.length > 1) return;
        handleChange({
            target: {
                id: "experience",
                value: [
                    ...experience,
                    {
                        title: " ",
                        startYear: "",
                        endYear: "",
                        organization: " ",
                    },
                ],
            },
        });
    };

    const addEducation = () => {
        const education = userProfile.education;
        if (userProfile.education.length > 1) return;
        handleChange({
            target: {
                id: "education",
                value: [
                    ...education,
                    { institution: " ", title: " ", year: "" },
                ],
            },
        });
    };

    const skills = userProfile.skills.map((skill, i) => (
        <div key={i}>
            <div className="my-6">
                <label
                    htmlFor={i.toString()}
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Skill #{i + 1}
                </label>
                <input
                    required
                    id={i.toString()}
                    name={i.toString()}
                    type="text"
                    className="formInputs"
                    onChange={updateSkill}
                    value={userProfile.skills[i]}
                />
            </div>
        </div>
    ));

    const education = userProfile.education.map((education: any, i) => (
        <div key={i} className="w-full">
            <label className="text-md mb-2 leading-none inline-block">
                Education #{i + 1}
            </label>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="institution"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Institution
                </label>
                <input
                    required
                    id="institution"
                    name="institution"
                    type="text"
                    className="formInputs"
                    onChange={(e) => updateEducation(e, i)}
                    value={education.institution}
                />
            </div>
            <div className="my-6 flex justify-between items-center" key={i}>
                <label
                    htmlFor="title"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Title
                </label>
                <input
                    required
                    id="title"
                    name="title"
                    type="text"
                    className="formInputs"
                    onChange={(e) => updateEducation(e, i)}
                    value={education.title}
                />
            </div>
            <div className="my-6 w-full flex justify-end items-center" key={i}>
                <label
                    htmlFor="year"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Year
                </label>

                <DatePicker
                    selected={education.year}
                    className="formInputs"
                    onChange={(date: any) =>
                        updateEducation(
                            {
                                target: {
                                    id: "year",
                                    value: date,
                                    name: "year",
                                },
                            },
                            i
                        )
                    }
                />
            </div>
        </div>
    ));

    const experience = userProfile.experience.map((experience: any, i) => (
        <div key={i}>
            <label className="text-md mb-2 leading-none inline-block">
                Experience #{i + 1}
            </label>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="organization"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Organization
                </label>
                <input
                    required
                    id="organization"
                    name="organization"
                    type="text"
                    className="formInputs"
                    onChange={(e) => updateExperience(e, i)}
                    value={experience.organization}
                />
            </div>
            <div className="my-6 flex justify-between items-center" key={i}>
                <label
                    htmlFor="startYear"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Start Year
                </label>

                <DatePicker
                    selected={experience.startYear}
                    className="formInputs"
                    onChange={(date: any) =>
                        updateExperience(
                            {
                                target: {
                                    id: "startYear",
                                    value: date,
                                    name: "startYear",
                                },
                            },
                            i
                        )
                    }
                />
            </div>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="endYear"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    End Year
                </label>
                <DatePicker
                    selected={experience.endYear}
                    className="formInputs"
                    onChange={(date: any) =>
                        updateExperience(
                            {
                                target: {
                                    id: "endYear",
                                    value: date,
                                    name: "endYear",
                                },
                            },
                            i
                        )
                    }
                />
            </div>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="title"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Title
                </label>
                <input
                    required
                    id="title"
                    name="title"
                    type="title"
                    className="formInputs"
                    onChange={(e) => updateExperience(e, i)}
                    value={experience.title}
                />
            </div>
        </div>
    ));

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
        <div className="flex-col items-center">
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={checkSubmit}
            >
                <LinkModal
                    linkModalOpen={linkModalOpen}
                    handleClose={() => setLinkModalOpen(false)}
                    handleChange={handleChange}
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
                    <Tab.Panels className="flex justify-between">
                        <Tab.Panel>
                            <div className="flex flex-col justify-center items-center">
                                <div className="my-6">
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
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        placeholder="Ex: Web Developer"
                                        className="formInputs"
                                    />
                                </div>
                                <div className="relative">
                                    <label
                                        htmlFor="summary"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Summary
                                    </label>
                                    <textarea
                                        required
                                        id="summary"
                                        placeholder="Something about yourself..."
                                        className="w-full rounded-[25px] h-[120px] border-slate-300 resize-none pb-6 formInputs"
                                        value={userProfile.summary}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    ></textarea>
                                    {/* <span className="absolute right-3 bottom-3 text-gray-500">
                                        20/300
                                    </span> */}
                                </div>

                                <div className="mb-6 flex justify-between items-center">
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
                            </div>
                            <div className="formInputSection">
                                <div className="flex flex-wrap justify-between">
                                    <div className="w-full lg:w-[47%] mb-6">
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
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="w-full lg:w-[47%] mb-6">
                                        <label
                                            htmlFor="pref_location"
                                            className="font-medium mb-4 leading-none inline-block"
                                        >
                                            Preferred Location
                                        </label>
                                        <select
                                            required
                                            id="pref_location"
                                            className="w-full rounded-full border-slate-300 formInputs"
                                            value={userProfile.pref_location}
                                            onChange={handleChange}
                                        >
                                            <option value="">
                                                Select Location
                                            </option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                        </select>
                                    </div>

                                    <div className="w-full lg:w-[47%] mb-6">
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
                                            className="w-full rounded-full border-slate-300 formInputs"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="w-full lg:w-[47%] mb-6">
                                        <label
                                            htmlFor="years_of_exp"
                                            className="font-medium mb-4 leading-none inline-block"
                                        >
                                            Years of Experience
                                        </label>
                                        <select
                                            required
                                            id="years_of_exp"
                                            className="w-full rounded-full border-slate-300 formInputs"
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
                            </div>
                        </Tab.Panel>
                        {/*Resume page*/}
                        <Tab.Panel>
                            <div className="formInputSection px-48">
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium mb-2 leading-none inline-block">
                                        Education
                                    </label>
                                    <button
                                        type="button"
                                        className="border border-[#6D27F9] rounded-full py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                        onClick={() => addEducation()}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex-col items-center justify-between mb-4 w-full">
                                    {education.length > 0 ? (
                                        <>
                                            {/* <p className="text-[#646464] mb-2">Skills</p> */}
                                            {education}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className="formInputSection px-48">
                                <div className="mb-6 flex justify-between items-center">
                                    <label className=" text-lg font-medium mb-2 leading-none inline-block">
                                        Key Skills
                                    </label>
                                    <button
                                        type="button"
                                        className="border border-[#6D27F9] rounded-full py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                        onClick={() => addSkill()}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex-col items-center justify-between mb-4">
                                    {skills.length > 0 ? (
                                        <>
                                            {/* <p className="text-[#646464] mb-2">Skills</p> */}
                                            {skills}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="formInputSection px-48">
                                <div className="mb-6 flex justify-between items-center">
                                    <label className="text-lg font-medium mb-2 leading-none inline-block">
                                        Experience
                                    </label>
                                    <button
                                        type="button"
                                        className="border border-[#6D27F9] rounded-full py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                        onClick={() => addExperience()}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex-col items-center justify-between mb-4">
                                    {experience.length > 0 ? (
                                        <>
                                            {/* <p className="text-[#646464] mb-2">Skills</p> */}
                                            {experience}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <FormButton
                    currentPageValid={currentPageValid}
                    selectTab={selectTab}
                />
            </form>
        </div>
    );
};

export default ProfileForm;
