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

    return (
        <section className="flex w-full flex-wrap ">
            <Snackbar
                open={isCopied}
                autoHideDuration={6000}
                message="Link copied"
            />
            <div className="h-full w-full">
                <div className="shadow-normal mx-auto w-full max-w-[800px]	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
                    <div className="flex-col items-center justify-center">
                        <h1 className={" mb-4 text-center text-2xl font-bold"}>
                            {/* TODO Add check for minting complete */}
                            {isProfileQueryLoading
                                ? "Profile loading"
                                : Profile &&
                                  (Profile?.minted
                                      ? "Your account has been minted! Check your email for more information."
                                      : "You're in the mint queue! We'll notify you as soon as your profile get minted!")}
                        </h1>

                        {isProfileQueryLoading ? (
                            <ProfileFormSkeleton />
                        ) : (
                            <ProfileSummary userProfile={Profile} />
                        )}
                        {Profile && (
                            <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] border border-slate-700 bg-white p-8 md:py-14 md:px-20">
                                <label
                                    htmlFor="referral"
                                    className={styles.profileLabel}
                                >
                                    Referral Link
                                </label>
                                <div>
                                    <label
                                        id="referral"
                                        className="mx-4 w-auto text-base font-medium text-somhakohr2"
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
                                        className="mx-4 w-auto text-base font-medium "
                                    >
                                        Referred Accounts :
                                    </label>
                                    <label
                                        id="referral"
                                        className="mx-4 w-auto text-base font-medium text-somhakohr2"
                                    >
                                        {referralCount}{" "}
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
