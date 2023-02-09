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
                className="formInputs"
                onClick={onClick}
                ref={ref}
                value={value || ""}
            />
        ));

    const education = userProfile.education.map((education: any, i) => (
        <div key={i} className="w-full">
            <label className="text-md mb-2 inline-block leading-none">
                Education #{i + 1}
            </label>
            <div className="formInputPair">
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
                    className="formInputs"
                    onChange={(e) => updateEducation(e, i)}
                    value={education.institution}
                />
            </div>
            <div className="formInputPair">
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
                    className="formInputs "
                    onChange={(e) => updateEducation(e, i)}
                    value={education.title}
                />
            </div>
            <div className="formInputPair">
                <label
                    htmlFor="year"
                    className="mb-2 inline-block font-medium leading-none"
                >
                    Year
                </label>
                <div className="w-auto">
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
            </div>
        </div>
    ));
    return (
        <div className="w-full">
            <div className="formInputPair">
                <label className="mb-2 inline-block text-lg font-medium leading-none">
                    Education
                </label>
                <button
                    type="button"
                    className="rounded-full border border-[#6D27F9] py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                    onClick={() => addEducation()}
                >
                    Add
                </button>
            </div>
            {education.length > 0 && education}
        </div>
    );
}
