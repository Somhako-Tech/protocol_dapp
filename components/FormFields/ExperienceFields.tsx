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
                className="formInputs"
                onClick={onClick}
                ref={ref}
                value={value || ""}
            />
        ));

    const experience = userProfile.experience.map((experience: any, i) => (
        <div key={i}>
            <label className="text-md mb-2 leading-none inline-block">
                Experience #{i + 1}
            </label>
            <div className="formInputPair" key={i}>
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
            <div className="formInputPair" key={i}>
                <label htmlFor="startYear" className="font-medium mb-2">
                    Start Year
                </label>

                <div className="w-auto">
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
            </div>

            <div className="formInputPair" key={i}>
                <label
                    htmlFor="endYear"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    End Year
                </label>
                <div className="w-auto">
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
            </div>
            <div className="formInputPair" key={i}>
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

    return (
        <>
            <div className="formInputPair">
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
        </>
    );
}
