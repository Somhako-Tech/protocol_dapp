import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Profile } from "../constants/types";

const ProfileForm = ({
    handleChange,
    userProfile,
}: {
    handleChange: (e: any) => void;
    userProfile: Profile;
}) => {
    const [selectTab, setSelectTab] = useState("bio");

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
        const education = userProfile.education;

        if (e.target.id == "institution")
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
        const experience = userProfile.experience;

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
                        startYear: " ",
                        endYear: " ",
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
                    { institution: " ", title: " ", year: " " },
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
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={updateSkill}
                    value={userProfile.skills[i]}
                />
            </div>
        </div>
    ));

    const education = userProfile.education.map((education, i) => (
        <div key={i}>
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
                    className="w-auto mx-4 rounded-full border border-black"
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
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={(e) => updateEducation(e, i)}
                    value={education.title}
                />
            </div>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="year"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Year
                </label>
                <input
                    required
                    id="year"
                    name="year"
                    type="text"
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={(e) => updateEducation(e, i)}
                    value={education.year}
                />
            </div>
        </div>
    ));

    const experience = userProfile.experience.map((experience, i) => (
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
                    className="w-auto mx-4 rounded-full border border-black"
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
                <input
                    required
                    id="startYear"
                    name="startYear"
                    type="text"
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={(e) => updateExperience(e, i)}
                    value={experience.startYear}
                />
            </div>
            <div className="my-6  flex justify-between items-center" key={i}>
                <label
                    htmlFor="endYear"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    End Year
                </label>
                <input
                    required
                    id="endYear"
                    name="endYear"
                    type="endYear"
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={(e) => updateExperience(e, i)}
                    value={experience.endYear}
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
                    className="w-auto mx-4 rounded-full border border-black"
                    onChange={(e) => updateExperience(e, i)}
                    value={experience.title}
                />
            </div>
        </div>
    ));

    return (
        <Tab.Group>
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
                    <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 mb-6">
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
                            <span className="absolute right-3 bottom-3 text-gray-500">
                                20/300
                            </span>
                        </div>
                    </div>
                    <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 mb-6">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full lg:w-[47%] mb-6">
                                <label
                                    htmlFor="jobType"
                                    className="font-medium mb-4 leading-none inline-block"
                                >
                                    Preferred Job Type
                                </label>
                                <input
                                    required
                                    id="jobType"
                                    type="text"
                                    placeholder="Ex: Fulltime"
                                    className="formInputs"
                                    value={userProfile.jobType}
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full lg:w-[47%] mb-6">
                                <label
                                    htmlFor="prefLocation"
                                    className="font-medium mb-4 leading-none inline-block"
                                >
                                    Preferred Location
                                </label>
                                <select
                                    required
                                    id="prefLocation"
                                    className="w-full rounded-full border-slate-300 formInputs"
                                    value={userProfile.prefLocation}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Location</option>
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
                                    htmlFor="yearsOfExp"
                                    className="font-medium mb-4 leading-none inline-block"
                                >
                                    Years of Experience
                                </label>
                                <select
                                    required
                                    id="yearsOfExp"
                                    className="w-full rounded-full border-slate-300 formInputs"
                                    value={userProfile.yearsOfExp}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Year Of Exp</option>
                                    <option value="No Experience">
                                        No Experience
                                    </option>
                                    <option value="1-5 years">1-5 years</option>
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
                    <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 px-48 mb-6">
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
                        <div className="flex-col items-center justify-between mb-4">
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
                    <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 px-48 mb-6">
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
                    <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 px-48 mb-6">
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
    );
};

export default ProfileForm;
