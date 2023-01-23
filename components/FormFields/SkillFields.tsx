import { Profile } from "@prisma/client";

export default function SkillFields({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
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
            <div className="mb-6 flex justify-between items-center">
                <label className=" text-lg font-medium mb-2 leading-none inline-block">
                    Key Skills
                </label>
                <button
                    type="button"
                    className="border border-[#6D27F9] rounded-full py-1 px-8 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                    onClick={() => addSkill()}
                >
                    Add
                </button>
            </div>
            <div className="flex-col items-center justify-between mb-4">
                {skills.length > 0 ? (
                    <>
                        {/* <p className="text-[#646464] mb-2">Skills</p> */}
                        {skills}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
