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
        <div className="flex flex-col items-stretch justify-center">
            <div className="my-6 mx-6 flex flex-row items-center justify-between">
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
                    searchParams={searchParams}
                    exclude={userProfile.skills}
                />
            </div>
            <div className="my-2 flex items-center justify-start self-center rounded-md py-2  capitalize text-white">
                {userProfile.skills &&
                    (userProfile.skills.length > 0 ? (
                        <div className="grid max-w-full grid-cols-4 border-2 border-slate-400 ">
                            {userProfile.skills.map((item: string) => (
                                <button
                                    key={item}
                                    className="m-2 rounded-md bg-somhako px-2 py-1 hover:bg-somhako2"
                                    onClick={() => removeSkill(item)}
                                    type="button"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    ) : (
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
                    ))}
            </div>
        </div>
    );
}
