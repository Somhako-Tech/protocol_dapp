import { Profile } from "@prisma/client";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";

export default function ExperienceFields({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
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

    const CustomDateInput =
        // eslint-disable-next-line react/display-name
        forwardRef(({ value, onClick }: any, ref: any) => (
            <input
                className="w-full rounded-lg bg-white dark:text-black border border-slate-300 py-2 px-4"
                onClick={onClick}
                ref={ref}
                value={value || ""}
                defaultValue={""}
            />
        ));

    const experience = userProfile.experience.map((experience: any, i) => (
        <div className="w-full rounded-[20px] bg-[#FAF8FF] dark:bg-gray-900 text-black dark:text-white border border-slate-200 p-4 md:p-6 md:pr-[110px] pt-[35px] md:pt-6 mb-4 relative" key={i}>
            <article>
                <div className="mb-6">
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
                        onChange={(e) => updateExperience(e, i)}
                        value={experience.organization}
                        className="w-full rounded-lg border-slate-300 dark:text-black"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="startYear"
                        className="font-medium mb-2 leading-none inline-block"
                    >
                        Start Year
                    </label>
                    <DatePicker
                        selected={experience.startYear}
                        customInput={<CustomDateInput />}
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
                <div className="mb-6">
                    <label
                        htmlFor="endYear"
                        className="font-medium mb-2 leading-none inline-block"
                    >
                        End Year
                    </label>
                    <DatePicker
                        selected={experience.endYear}
                        customInput={<CustomDateInput />}
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
                <div className="mb-6">
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
                        onChange={(e) => updateExperience(e, i)}
                        value={experience.title}
                        className="w-full rounded-lg border-slate-300 dark:text-black"
                    />
                </div>
            </article>
            <div className="bg-white shadow-md rounded-tl-[20px] rounded-bl-[20px] absolute right-0 top-[0px] md:top-[15px] p-1.5 md:py-2.5 md:px-4 text-[12px] md:text-sm">
                <button type="button" className="text-[#6D27F9] mx-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" className="text-red-500 mx-2">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
            <div className="flex items-center justify-between mb-4">
                <label className="font-medium leading-none inline-block">
                Experience
                </label>
                <button
                type="button"
                className="border border-[#6D27F9] rounded-lg py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                onClick={() => addExperience()}
                >
                Add
                </button>
            </div>
            {experience.length > 0 ? (
                <>
                    {experience}
                </>
            ) : (
                <>
                    <p className="text-darkGray text-sm">Add Experience</p>
                </>
            )}
        </div>
    );
}
