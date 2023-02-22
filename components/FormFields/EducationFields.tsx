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
                className="w-full rounded-lg border border-slate-300 py-2 px-4"
                onClick={onClick}
                onChange={() => {}}
                ref={ref}
                value={value || ""}
            />
        ));

    const deleteEducation = (i: number) => {
        console.log({ i });
        if (userProfile.education.length < 2) {
            handleChange({
                target: {
                    id: "education",
                    value: [{ institution: "", year: "", title: "" }],
                },
            });
        } else {
            const edu = userProfile.education;
            edu.splice(i, 1);
            handleChange({
                target: {
                    id: "education",
                    value: edu,
                },
            });
        }
    };
    const education = userProfile.education.map((education: any, i) => (
        <>
            <div
                className="relative mb-4 w-full rounded-[20px] border border-slate-200 bg-[#FAF8FF] p-4 pt-[35px] text-black dark:bg-gray-900 dark:text-white md:p-6 md:pr-[110px] md:pt-6"
                key={i}
            >
                <article>
                    <div className="mb-6">
                        <label
                            htmlFor="institution"
                            className="mb-2 inline-block font-medium leading-none"
                        >
                            Institution
                        </label>
                        <input
                            required
                            id="institution"
                            name="institution"
                            type="text"
                            className="w-full rounded-lg border-slate-300"
                            onChange={(e) => updateEducation(e, i)}
                            value={education.institution}
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
                            className="w-full rounded-lg border-slate-300"
                            onChange={(e) => updateEducation(e, i)}
                            value={education.title}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="year"
                            className="mb-2 inline-block font-medium leading-none"
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
                <div className="absolute right-0 top-[0px] rounded-tl-[20px] rounded-bl-[20px] bg-white p-1.5 text-[12px] shadow-md md:top-[15px] md:py-2.5 md:px-4 md:text-sm">
                    <button
                        type="button"
                        className="mx-2 text-red-500"
                        onClick={() => deleteEducation(i)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </>
    ));
    return (
        <div className="mb-6 rounded-[30px] border border-teal-400 bg-white p-8 text-black shadow-normal dark:bg-gray-800 dark:text-white">
            <div className="mb-4 flex items-center justify-between">
                <label className="inline-block font-medium leading-none">
                    Education
                </label>
                <button
                    type="button"
                    className="rounded-lg border border-[#6D27F9] py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                    onClick={() => addEducation()}
                >
                    Add
                </button>
            </div>
            {education.length > 0 && education}
        </div>
    );
}
