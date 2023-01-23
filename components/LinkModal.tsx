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

    const currentPlaceholder = () => {
        if (currentLinkType == "LinkedIn") return "https://linkedin.com/in/you";
        if (currentLinkType == "Github") return "https://github.com/you";
        if (currentLinkType == "Twitter") return "https://twitter.com/you";
    };

    const handleLinkUpdate = (e: { target: { value: any } }) => {
        console.log({ link, c: e.target.value });
        console.log({ currentLinkType, currentVal: link[currentLinkType] });
        handleChange({
            target: {
                id: "link",
                value: {
                    ...(link as Object),
                    [currentLinkType]: e.target.value,
                },
            },
        });
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
                        value={link[currentLinkType]}
                        placeholder={currentPlaceholder()}
                        className="formInputs border"
                        onChange={handleLinkUpdate}
                    />
                </div>
                <button onClick={handleClose}>Save</button>
            </div>
        </Modal>
    );
}
