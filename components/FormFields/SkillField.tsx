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

    return (
        <div className="flex flex-col justify-center items-stretch w-full">
            <div className="formInputPair">
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
            <div className="self-center flex justify-center items-center capitalize py-2 my-2 w-1/3">
                {userProfile.skills && userProfile.skills.length > 0 && (
                    <div className="font-medium w-[80%] grid-flow-row grid-cols-2 text-center">
                        {userProfile.skills.map(
                            (item: string) =>
                                item !== "" && (
                                    <div
                                        key={item}
                                        className="border border-orange-900 px-4 py-1"
                                    >
                                        {item}
                                    </div>
                                )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
