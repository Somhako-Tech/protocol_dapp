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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ProfileFormSkeleton } from "../../components/skeletons";
import styles from "./u.module.css";
import { BigClipLoader } from "../../components/Loader";

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;
    const { data: session } = useSession();

    const user = session?.user ? session.user : { id: null, email: null };
    const [isRouteLoading, setIsRouteLoading] = useState(false);

    const {
        data: aggregateReferral,
        isLoading: isReferralLoading,
        isError: isReferralError,
    } = useQuery(["getReferralCount", user?.id], () =>
        getReferralCountQuery(user?.id || "default")
    );

    // TODO Get user by handle
    const {
        data: Profile,
        isLoading: isProfileQueryLoading,
        isError: isQueryError,
    } = useQuery(
        ["getProfile", user.id as string],
        () => getProfileByUserIdQuery((user.id as string) || "default"),
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
        if (!isProfileQueryLoading && !Profile && !isRouteLoading) {
            setIsRouteLoading(true);
            router.push("/app");
        }
    }, [Profile, handle, isProfileQueryLoading, isRouteLoading, router]);

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

    if (isProfileQueryLoading) return <BigClipLoader />;
    return (
        <section className="flex w-full flex-wrap ">
            <Snackbar
                open={isCopied}
                autoHideDuration={6000}
                message="Link copied"
            />
            <div className="h-full w-full">
                <div className="m-10 rounded-lg border-2 border-slate-400 py-4 px-4 transition-all hover:scale-105 hover:border-0 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-200 hover:shadow-md hover:shadow-white">
                    <h1
                        className={
                            " z-0 bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text text-5xl font-extrabold text-transparent hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-900"
                        }
                    >
                        {/* TODO Add check for minting complete */}
                        {Profile &&
                            (Profile?.minted
                                ? "Your account has been minted! Check your email for more information."
                                : "You're in the mint queue! We'll notify you as soon as your profile get minted!")}
                    </h1>
                </div>

                <ProfileSummary userProfile={Profile} />
                {Profile && (
                    <div className="shadow-normal mx-auto w-full max-w-[800px]	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
                        <label
                            htmlFor="referral"
                            className={styles.profileLabel}
                        >
                            Referral Link
                        </label>
                        <div>
                            <label
                                id="referral"
                                className="mx-4 w-auto text-base font-medium text-somhako2"
                            >
                                {referralLink}{" "}
                            </label>
                            <ContentCopyIcon onClick={handleCopyClick} />
                        </div>
                        <div>
                            <label
                                id="referral"
                                className="mx-4 w-auto text-base font-medium "
                            >
                                Referred Accounts :
                            </label>
                            <label
                                id="referral"
                                className="mx-4 w-auto text-base font-medium text-somhako2"
                            >
                                {referralCount}{" "}
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
