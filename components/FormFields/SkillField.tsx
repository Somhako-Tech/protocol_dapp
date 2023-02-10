import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchComboBox from "./SearchComboBoxMultiple";
import Alert from "@mui/material/Alert";
import { Transition } from "react-transition-group";

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

    console.log(userProfile.skills);
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
            <div className="my-2 flex items-center justify-start self-center border py-2  capitalize text-white">
                {userProfile.skills &&
                    (userProfile.skills.length > 0 ? (
                        <div className="grid max-w-md grid-cols-3 border-4 border-slate-500">
                            {userProfile.skills.map(
                                (item: string) =>
                                    item !== "" && (
                                        <button
                                            key={item}
                                            className="m-2 rounded-md bg-somhakohr px-4 py-1 hover:bg-somhakohr2"
                                            onClick={() => removeSkill(item)}
                                            type="button"
                                        >
                                            {item}
                                        </button>
                                    )
                            )}
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
