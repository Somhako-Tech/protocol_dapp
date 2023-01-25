import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchComboBox from "./SearchComboBoxMultiple";

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

    console.log(Skills);

    return (
        <div className="mb-6 flex-col items-start justify-start">
            <label className=" text-lg font-medium mb-2 ">Key Skills</label>
            <SearchComboBox
                handleChange={(item) =>
                    handleChange({
                        target: {
                            id: "skills",
                            value: [...userProfile.skills, item],
                        },
                    })
                }
                setSearchParams={setSearchParams}
                data={queryLoading ? [] : Skills}
                value={userProfile.skills}
            />
        </div>
    );
}
