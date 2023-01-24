import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function SkillFields({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
    const [selectedSkills, setSelectedSkills] = useState([""]);
    const [searchParams, setSearchParams] = useState("");

    const {
        data: Skills,
        isLoading: queryLoading,
        isError: queryError,
    } = useQuery(["getSkills", searchParams], () =>
        fetch(`/api/search/skills?search=${searchParams}`).then((data) =>
            data.json().then((j) => j.skills)
        )
    );

    const addSkill = () => {
        const skills = userProfile.skills;
        if (userProfile.skills.length > 3) return;
        handleChange({ target: { id: "skills", value: [...skills, " "] } });
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

    return (
        <>
            <div className="mb-6 flex-col items-start justify-start">
                <label className=" text-lg font-medium mb-2 ">Key Skills</label>
                <Combobox value={selectedSkills} multiple>
                    <Combobox.Input
                        onChange={(e) => setSearchParams(e.target.value)}
                        className="formInputs"
                    />
                    <Combobox.Options className="bg-white border fixed">
                        {Skills &&
                            Skills.map((skill: string) => (
                                <Combobox.Option
                                    key={skill}
                                    value={skill}
                                    className="hover:bg-slate-400 hover:text-white p-1"
                                    onClick={() =>
                                        setSelectedSkills((prev) => [
                                            ...prev,
                                            skill,
                                        ])
                                    }
                                >
                                    {skill}
                                </Combobox.Option>
                            ))}
                    </Combobox.Options>
                    <div className="flex justify-start items-center capitalize border py-2 my-2">
                        {selectedSkills.length > 0 && (
                            <ul className="p-1 font-medium">
                                {selectedSkills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </Combobox>
            </div>
        </>
    );
}
