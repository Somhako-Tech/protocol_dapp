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
            <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 formInputSection">
                <label
                    htmlFor="link"
                    className="font-medium mb-4 leading-none inline-block"
                >
                    Link for
                </label>
                <select
                    required
                    id="link"
                    className="w-full rounded-full border-slate-300 formInputs"
                    value={currentLinkType}
                    onChange={(e) =>
                        setCurrentLinkType(e.target.value as LinkType)
                    }
                >
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                </select>
                <div className="my-6">
                    <input
                        required
                        type="text"
                        id="link"
                        name="link"
                        value={"@" + linkObj[currentLinkType]}
                        placeholder={"@dev"}
                        className="formInputs border"
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
