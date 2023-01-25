import React from "react";
import { Profile } from "../constants/types";

const ProfilePreview = ({ profile }: { profile: Profile }) => {
    //TODO Make it more programmatic
    return (
        <div className="bg-white shadow-normal border shadow-md shadow-slate-200 rounded-[30px] p-8 mb-6">
            <h1 className="font-medium mb-2 leading-none inline-block">
                @{profile.handle}
            </h1>
            <h2 className="font-medium mb-2 leading-none ">{profile.title}</h2>
            <div className="my-2" key="summary">
                <label
                    htmlFor="summary"
                    className="font-medium text-base mb-2 leading-none inline-block"
                >
                    Summary :
                </label>
                <label
                    id={"summary"}
                    className="font-medium text-base w-auto mx-4 "
                >
                    {profile.summary}
                </label>
            </div>
            <div className="my-2" key="job_type">
                <label
                    htmlFor="job_type"
                    className="font-medium text-base mb-2 leading-none inline-block"
                >
                    Job Type :
                </label>
                <label
                    id={"job_type"}
                    className="font-medium text-base w-auto mx-4 "
                >
                    {profile.job_type}
                </label>
            </div>
            <div className="my-2" key="pref_location">
                <label
                    htmlFor="pref_location"
                    className="font-medium text-base mb-2 leading-none inline-block"
                >
                    Preferred Location :
                </label>
                <label
                    id={"pref_location"}
                    className="font-medium text-base w-auto mx-4 "
                >
                    {profile.pref_location}
                </label>
            </div>
            <div className="my-2" key="salary">
                <label
                    htmlFor="salary"
                    className="font-medium text-base mb-2 leading-none inline-block"
                >
                    Ideal Salary :
                </label>
                <label
                    id={"salary"}
                    className="font-medium text-base w-auto mx-4 "
                >
                    {profile.salary}
                </label>
            </div>
            <div className="my-2" key="years_of_exp">
                <label
                    htmlFor="years_of_exp"
                    className="font-medium text-base mb-2 leading-none inline-block"
                >
                    Years of Experience :
                </label>
                <label
                    id={"years_of_exp"}
                    className="font-medium text-base w-auto mx-4 "
                >
                    {profile.years_of_exp}
                </label>
            </div>

            <h3 className="font-medium text-base w-auto ">Skills:</h3>
            <ul>
                {profile.skills.map((skill) => (
                    <li className="font-sm text-base w-auto mx-4 " key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <h3 className="font-medium text-base w-auto">Education:</h3>
            <ul>
                {profile.education.map(
                    (education, i) =>
                        education && (
                            <li
                                key={i}
                                className="font-sm text-base w-auto mx-4 "
                            >
                                {education.institution}: {education.title} (
                                {education.year.split("-")[0]})
                            </li>
                        )
                )}
            </ul>
            <h3 className="font-medium text-base w-auto ">Experience:</h3>
            <ul>
                {profile.experience.map((experience, i) => (
                    <li key={i} className="font-sm text-base w-auto mx-4 ">
                        {experience.organization}: {experience.title} (
                        {experience.startYear.split("-")[0]} -{" "}
                        {experience.endYear.split("-")[0]})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePreview;
