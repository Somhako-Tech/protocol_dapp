import { Profile } from "@prisma/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

    const education = userProfile.education.map((education: any, i) => (
        <div key={i} className="w-full">
            <label className="text-md mb-2 leading-none inline-block">
                Education #{i + 1}
            </label>
            <div className="formInputPair">
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
            <div className="formInputPair">
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
                    className="formInputs "
                    onChange={(e) => updateEducation(e, i)}
                    value={education.title}
                />
            </div>
            <div className="formInputPair">
                <label
                    htmlFor="year"
                    className="font-medium mb-2 leading-none inline-block"
                >
                    Year
                </label>

                <DatePicker
                    selected={education.year}
                    wrapperClassName="formInputs"
                    dateFormat="dd/MM/yyyy"
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
    ));
    return (
        <div className="w-full">
            <div className="formInputPair">
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
            {education.length > 0 && education}
        </div>
    );
}
