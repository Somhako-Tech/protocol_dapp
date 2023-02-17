import { Modal } from "@mui/material";
import { Profile } from "@prisma/client";
import { useState } from "react";

export default function LinkModal({
    linkModalOpen,
    handleClose,
    handleChange,
    userProfile,
}: {
    linkModalOpen: boolean;
    handleClose: () => void;
    handleChange: (e: any) => void;
    userProfile: Profile;
}) {
    type LinkType = "LinkedIn" | "Github" | "Twitter";

    const [currentLinkType, setCurrentLinkType] =
        useState<LinkType>("LinkedIn");

    const link = { ...(userProfile.link as any) };

    const [linkObj, setLinkObj] = useState<any>(link);

    const handleLinkUpdate = (e: { target: { value: any } }) => {
        console.log({ link, c: e.target.value });
        console.log({ currentLinkType, currentVal: link[currentLinkType] });

        setLinkObj((prev: any) => ({
            ...prev,
            [currentLinkType]: e.target.value.slice(1),
        }));
    };

    const close = () => {
        for (const key of Object.keys(linkObj)) {
            if (linkObj[key] === "") {
                setCurrentLinkType(key as LinkType);
                return;
            }
        }
        handleChange({
            target: {
                id: "link",
                value: { ...linkObj },
            },
        });
        handleClose();
    };
    return (
        <Modal open={linkModalOpen} onClose={handleClose}>
            <div className="absolute top-1/2 left-1/2 my-4 flex w-auto min-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-stretch justify-center rounded-[30px] border bg-white p-10 shadow-md shadow-slate-200 transition-all duration-200">
                <label
                    htmlFor="link"
                    className="mb-4 inline-block font-medium leading-none"
                >
                    Link for
                </label>
                <select
                    required
                    id="link"
                    className="mx-4 ml-6 w-1/2 rounded-full border border-slate-500 p-1 pl-3 "
                    value={currentLinkType}
                    onChange={(e) =>
                        setCurrentLinkType(e.target.value as LinkType)
                    }
                >
                    <option
                        value="LinkedIn"
                        className="hover:bg-somhako hover:text-white "
                    >
                        LinkedIn
                    </option>
                    <option
                        value="Github"
                        className="hover:bg-somhako hover:text-white "
                    >
                        Github
                    </option>
                    <option
                        value="Twitter"
                        className="hover:bg-somhako hover:text-white "
                    >
                        Twitter
                    </option>
                </select>
                <div className="my-6">
                    <input
                        required
                        type="text"
                        id="link"
                        name="link"
                        value={"@" + linkObj[currentLinkType]}
                        placeholder={"@dev"}
                        className="mx-4 ml-6 w-auto rounded-full border border border-slate-500 p-1"
                        onChange={handleLinkUpdate}
                    />
                </div>
                <button onClick={close} type="button">
                    Save
                </button>
            </div>
        </Modal>
    );
}
