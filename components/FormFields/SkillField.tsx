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
        <div className="flex w-full flex-col items-stretch justify-center">
            <div className="formInputPair">
                <label className=" mb-2 text-lg font-medium ">Key Skills</label>
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
            <div className="my-2 flex w-1/3 items-center justify-center self-center py-2 capitalize">
                {userProfile.skills && userProfile.skills.length > 0 && (
                    <div className="grid-cols-4">
                        {userProfile.skills.map(
                            (item: string) =>
                                item !== "" && (
                                    <div
                                        key={item}
                                        // className="border border-orange-900 px-4 py-1"
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
