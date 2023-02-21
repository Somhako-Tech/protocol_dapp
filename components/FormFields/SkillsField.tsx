import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchComboBox from "./SearchComboBoxMultiple";
import Alert from "@mui/material/Alert";
import { Transition } from "react-transition-group";

export default function SkillsField({
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

    function removeSkill(item: string): void {
        const skills = userProfile.skills.filter(
            (skill) => skill !== item && skill !== ""
        );

        handleChange({
            target: {
                id: "skills",
                value: skills,
            },
        });
    }

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-normal border border-teal-400 rounded-[30px] p-8 mb-6">
            <div className="mb-2">
                <label className="font-medium leading-none inline-block">
                Key Skills
                </label>
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
                    searchParams={searchParams}
                    exclude={userProfile.skills}
                />
            </div>
            <div>
                {userProfile.skills &&
                    (userProfile.skills.length > 0 ? (
                        <div className="w-full rounded-lg border border-slate-300 p-6 min-h-[200px]">
                            <div className="flex flex-wrap items-start">
                                {userProfile.skills.map((item: string) => (
                                    <p
                                    className="relative bg-[#C9B3FF] dark:bg-gray-900 dark:text-white rounded-lg py-2 px-3 flex items-center text-[14px] mr-2 mb-3"
                                    key={item}
                                    >
                                    {item}
                                    <span
                                        className="pl-1 text-[10px] flex text-[#FEF401] mt-[2px]"
                                    >
                                        <i className="fa-solid fa-star ml-1"></i>
                                        <i className="fa-solid fa-star ml-1"></i>
                                        <i className="fa-solid fa-star ml-1"></i>
                                    </span>
                                    <button
                                        type="button"
                                        className="absolute right-[0] top-[-5px] leading-none shadow-normal bg-white text-red-500 text-[10px] w-[15px] h-[15px] rounded"
                                        onClick={() => removeSkill(item)}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ) 
                    : 
                    (
                        <Transition
                            nodeRef={null}
                            in={userProfile.skills.length === 0}
                            timeout={400}
                        >
                            {(state) => (
                                <div ref={null}>
                                    <Alert
                                        severity="info"
                                        className={
                                            state == "exited"
                                                ? "400ms h-0 opacity-0 transition-all"
                                                : "400ms opacity-100 transition-all"
                                        }
                                    >
                                        Add skills!
                                    </Alert>
                                </div>
                            )}
                        </Transition>
                    )
                )}
            </div>
        </div>
    );
}
