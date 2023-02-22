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
                onChange={() => {}}
                ref={ref}
                value={value || ""}
            />
        ));

    const deleteExperience = (i: number) => {
        if (userProfile.experience.length < 2) {
            handleChange({
                target: {
                    id: "experience",
                    value: [
                        {
                            organization: "",
                            startYear: "",
                            endYear: "",
                            title: "",
                        },
                    ],
                },
            });
        } else {
            const exp = userProfile.experience;
            exp.splice(i, 1);
            handleChange({
                target: {
                    id: "experience",
                    value: exp,
                },
            });
        }
    };

    const experience = userProfile.experience.map((experience: any, i) => (
        <div
            className="relative mb-4 w-full rounded-[20px] border border-slate-200 bg-[#FAF8FF] p-4 pt-[35px] text-black dark:bg-gray-900 dark:text-white md:p-6 md:pr-[110px] md:pt-6"
            key={i}
        >
            <article>
                <div className="mb-6">
                    <label
                        htmlFor="organization"
                        className="mb-2 inline-block font-medium leading-none"
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
                        className="mb-2 inline-block font-medium leading-none"
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
                        className="mb-2 inline-block font-medium leading-none"
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
                        className="mb-2 inline-block font-medium leading-none"
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
            <div className="absolute right-0 top-[0px] rounded-tl-[20px] rounded-bl-[20px] bg-white p-1.5 text-[12px] shadow-md md:top-[15px] md:py-2.5 md:px-4 md:text-sm">
                <button
                    type="button"
                    className="mx-2 text-red-500"
                    onClick={() => deleteExperience(i)}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <div className="mb-6 rounded-[30px] border border-teal-400 bg-white p-8 text-black shadow-normal dark:bg-gray-800 dark:text-white">
            <div className="mb-4 flex items-center justify-between">
                <label className="inline-block font-medium leading-none">
                    Experience
                </label>
                <button
                    type="button"
                    className="rounded-lg border border-[#6D27F9] py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                    onClick={() => addExperience()}
                >
                    Add
                </button>
            </div>
            {experience.length > 0 ? (
                <>{experience}</>
            ) : (
                <>
                    <p className="text-sm text-darkGray">Add Experience</p>
                </>
            )}
        </div>
    );
}
