import { Profile } from "@prisma/client";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";

export default function EducationFields({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
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

    const education = userProfile.education.map((education: any, i) => (
        <>
        <div
            className="w-full rounded-[20px] bg-[#FAF8FF] dark:bg-gray-900 text-black dark:text-white border border-slate-200 p-4 md:p-6 md:pr-[110px] pt-[35px] md:pt-6 mb-4 relative"
            key={i}
        >
            <article>
                <div className="mb-6">
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
                        className="w-full rounded-lg border-slate-300 dark:text-black"
                        onChange={(e) => updateEducation(e, i)}
                        value={education.institution}
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
                        className="w-full rounded-lg border-slate-300 dark:text-black"
                        onChange={(e) => updateEducation(e, i)}
                        value={education.title}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="year"
                        className="font-medium mb-2 leading-none inline-block"
                    >
                        Year
                    </label>
                    <DatePicker
                        selected={education.year}
                        customInput={<CustomDateInput />}
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
                        id="year"
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
        </>
    ));
    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
            <div className="flex items-center justify-between mb-4">
                <label className="font-medium leading-none inline-block">
                Education
                </label>
                <button
                type="button"
                className="border border-[#6D27F9] rounded-lg py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                onClick={() => addEducation()}
                >
                Add
                </button>
            </div>
            {education.length > 0 && education}
        </div>
    );
}
