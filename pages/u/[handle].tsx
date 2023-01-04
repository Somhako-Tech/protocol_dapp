import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import React from "react";

import { getReferralCount } from "../../constants/axiosInstances";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useMintStore } from "../../store";
import Header from "../../components/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;
    const { data: session } = useSession();

    const { data, isLoading, isError } = useQuery(
        ["referral", session?.user?.id],
        () => getReferralCount(session?.user?.id ? session.user.id : 0)
    );

    const referralCount = isLoading ? 0 : isError ? 0 : data.count;

    useEffect(() => {
        if (!handle || typeof handle !== "string") router.push("/app");
    }, [handle, router]);

    const [tokenId] = useMintStore((state) => [state.tokenId]);

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text: string) {
        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand("copy", true, text);
        }
    }

    const referralLink = `http://localhost:3000/join?referral=${handle}`;

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(referralLink)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section className="w-full flex flex-wrap ">
            <Snackbar
                open={isCopied}
                autoHideDuration={6000}
                message="Link copied"
            />
            <div className="container h-full">
                <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <div className="flex-col items-center justify-center">
                        <h1 className={" font-bold text-2xl mb-4 text-center"}>
                            Minting Complete! Your token id is {`'${tokenId}'`}!
                            <ProfileSummary handle={handle} />
                            <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 flex flex-col justify-center items-center">
                                <label
                                    htmlFor="referral"
                                    className="font-medium text-base mb-2 leading-none inline-block"
                                >
                                    Referral Link
                                </label>
                                <div>
                                    <label
                                        id="referral"
                                        className="font-medium text-base w-auto mx-4 text-somhakohr2"
                                    >
                                        {referralLink}{" "}
                                    </label>
                                    <ContentCopyIcon
                                        onClick={handleCopyClick}
                                    />
                                </div>
                                <div>
                                    <label
                                        id="referral"
                                        className="font-medium text-base w-auto mx-4 "
                                    >
                                        Referred Accounts :
                                    </label>
                                    <label
                                        id="referral"
                                        className="font-medium text-base w-auto mx-4 text-somhakohr2"
                                    >
                                        {referralCount}{" "}
                                    </label>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
