import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import React from "react";

import {
    getProfileByUserIdQuery,
    getReferralCountQuery,
} from "../../graphql/graphqlQueries";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useMintStore } from "../../store";
import Header from "../../components/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ProfileFormSkeleton } from "../../components/skeletons";
import styles from "./u.module.css";

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;
    const { data: session } = useSession();

    const {
        data: aggregateReferral,
        isLoading: isReferralLoading,
        isError: isReferralError,
    } = useQuery(["getReferralCount", session?.user?.id], () =>
        getReferralCountQuery(session?.user?.id || "default")
    );

    // TODO Get user by handle
    const {
        data: Profile,
        isLoading: isProfileQueryLoading,
        isError: isQueryError,
    } = useQuery(
        ["getProfile", session?.user.id as string],
        () =>
            getProfileByUserIdQuery((session?.user.id as string) || "default"),
        { enabled: !!session }
    );

    const [referralCount, setReferralCount] = useState(0);

    const [tokenId] = useState(0);

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text: string) {
        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand("copy", true, text);
        }
    }

    const base_url = process.env.NEXT_PUBLIC_NEXT_URL;

    const referralLink = `${base_url}/join?referral=${handle}`;

    useEffect(() => {
        setReferralCount(
            isReferralLoading
                ? 0
                : isReferralError
                ? 0
                : aggregateReferral?._count?.user_id || 0
        );
    }, [isReferralLoading, isReferralError, aggregateReferral]);

    useEffect(() => {
        if (!isProfileQueryLoading && !Profile) router.push("/app");
    }, [Profile, handle, isProfileQueryLoading, router]);

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
            <div className="h-full w-full">
                <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <div className="flex-col items-center justify-center">
                        <h1 className={" font-bold text-2xl mb-4 text-center"}>
                            {/* TODO Add check for minting complete */}
                            {isProfileQueryLoading
                                ? "Profile loading"
                                : Profile?.minted
                                ? "Your account has been minted! Check your email for more information."
                                : "You're in the mint queue! We'll notify you as soon as your profile get minted!"}
                        </h1>

                        {isProfileQueryLoading ? (
                            <ProfileFormSkeleton />
                        ) : (
                            <ProfileSummary userProfile={Profile} />
                        )}
                        <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 flex flex-col justify-center items-center">
                            <label
                                htmlFor="referral"
                                className={styles.profileLabel}
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
                                <ContentCopyIcon onClick={handleCopyClick} />
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
                    </div>
                </div>
            </div>
        </section>
    );
}
