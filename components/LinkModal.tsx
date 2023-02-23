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

    const link = userProfile.link;

    const [currentLink, setCurrentLink] = useState("https://");

    const close = () => {
        
        handleChange({
            target: {
                id: "link",
                value: [...link, currentLink],
            },
        });
        handleClose();
        setCurrentLink("https://")
    };
    return (
        <Modal open={linkModalOpen} onClose={handleClose}>
            <>
                <div className="absolute top-1/2 left-1/2 my-4 flex w-auto min-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-stretch justify-center mb-6 rounded-[30px] border border-teal-400 bg-white  text-black  dark:bg-gray-800 dark:text-white p-10 shadow-md shadow-slate-200 transition-all duration-200">
                    
                    
                    <label
                        htmlFor="chooseLangProfeciency"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Enter a link to a social account <span className="mb-2 inline-block font-medium text-gray-500">
                            
                            (At least three are required)
                            </span>
                    </label>
                    <input
                        type="text"
                        placeholder="https//www.facebook.com"
                        className="w-full rounded-lg border-slate-300 dark:text-black"
                        defaultValue={"https://"}
                        value={currentLink}
                        onChange={e => setCurrentLink(e.target.value)}
                    />
                <div className="text-center mt-5">
                    <button
                        type="button"
                        className="disabled:cursor-normal rounded-lg bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] py-2.5 px-6 font-bold text-white transition-all hover:from-[#391188] hover:to-[#391188] disabled:opacity-30 md:min-w-[200px]"
                        onClick={e => close()}
                    >   
                        Save
                    </button>
                </div>
                </div>
            </>
        </Modal>
    );
}
