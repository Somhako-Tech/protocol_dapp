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
import Link from "next/link";
import Image from "next/image";

function geticon(param1: string) {
    if (param1.toLowerCase().includes("facebook")) {
        return "fa-brands fa-facebook";
    } else if (param1.toLowerCase().includes("twitter")) {
        return "fa-brands fa-twitter";
    } else if (param1.toLowerCase().includes("instagram")) {
        return "fa-brands fa-instagram";
    } else if (param1.toLowerCase().includes("linkedin")) {
        return "fa-brands fa-linkedin";
    } else if (param1.toLowerCase().includes("github")) {
        return "fa-brands fa-github";
    } else if (param1.toLowerCase().includes("discord")) {
        return "fa-brands fa-discord";
    } else if (param1.toLowerCase().includes("youtube")) {
        return "fa-brands fa-youtube";
    } else if (param1.toLowerCase().includes("behance")) {
        return "fa-brands fa-behance";
    } else if (param1.toLowerCase().includes("behance")) {
        return "fa-brands fa-behance";
    } else {
        return "fa-solid fa-link";
    }
}
type Education = { institution: string; year: string; title: string };
type Experience = {
    organization: string;
    startYear: string;
    endYear: string;
    title: string;
};

export default function UserPage() {
    const router = useRouter();
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

    const {
        data: userProfile,
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

    const referralLink = `${process.env.NEXT_PUBLIC_NEXT_URL}/join?referral=${userProfile?.handle}`;

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
        if (!isProfileQueryLoading && !userProfile && !isRouteLoading) {
            setIsRouteLoading(true);
            router.push("/app");
        }
    }, [isProfileQueryLoading, isRouteLoading, router, userProfile]);

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

    if (isProfileQueryLoading || !userProfile)
        return <BigClipLoader color="tertiary" />;
    return (
        <section>
            <Snackbar
                open={isCopied}
                autoHideDuration={6000}
                message="Link copied"
            />
            <>
                <div className="py-8">
                    <div className="container">
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white py-3 px-6 shadow-normal dark:bg-gray-800">
                            <div className="flex items-center">
                                <span className="mr-3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-green-500 text-white">
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                {userProfile.minted ? (
                                    <h4 className="text-lg font-bold dark:text-white">
                                        Your profile has been minted
                                    </h4>
                                ) : (
                                    <h4 className="text-lg font-bold dark:text-white">
                                        {"You're in the mint queue! Check your email for more information."}
                                    </h4>
                                )}
                            </div>
                        </div>
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white shadow-normal dark:bg-gray-800">
                            <div className="flex flex-wrap items-center p-6">
                                <div className="mb-6 w-full sm:mb-0 sm:max-w-[115px]">
                                    <Image
                                        src={
                                            "https://gateway.pinata.cloud/ipfs/" +
                                            userProfile.ipfs_hash
                                        }
                                        alt="@Sam"
                                        width={115}
                                        height={115}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex w-full flex-wrap justify-between sm:max-w-[calc(100%-115px)] sm:pl-6">
                                    <aside className="mr-4">
                                        <h1 className="mb-2 text-2xl font-semibold dark:text-white">
                                            @{userProfile.handle}
                                        </h1>
                                        <div className="flex flex-wrap items-center">
                                            <h5 className="font-medium text-darkGray dark:text-white">
                                                {userProfile.title}| &nbsp;
                                            </h5>
                                            <p className="break-all text-lightGray dark:text-white">
                                                {userProfile.address}
                                            </p>
                                        </div>
                                    </aside>
                                    <aside className="my-2">
                                        <ul className="flex items-center rounded-lg border border-slate-300 py-1 px-2 text-xl dark:bg-gray-700 dark:text-white">
                                            {userProfile.link.map((link) => (
                                                <li className="m-2" key={link}>
                                                    <Link
                                                        href={link}
                                                        target="_blank"
                                                        className="hover:text-primary"
                                                    >
                                                        <i
                                                            className={`${geticon(
                                                                link
                                                            )} iconGroup__icon`}
                                                        ></i>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                            <div className="rounded-bl-normal rounded-br-normal bg-gradient-to-tr from-[#A382E5] to-[#60C3E2] p-6">
                                <ul className="mx-auto flex w-full max-w-[750px] flex-wrap text-white">
                                    <li className="mb-3 flex w-full items-center break-all pr-1 font-light sm:max-w-[50%] lg:max-w-[33.33%]">
                                        <i className="fa-solid fa-envelope mr-3"></i>
                                        <span className="mr-2">:</span>
                                        <p>{userProfile.user.email}</p>
                                    </li>
                                    <li className="mb-3 flex w-full items-center pr-1 font-light sm:max-w-[50%] lg:max-w-[33.33%]">
                                        <i className="fa-solid fa-wallet mr-3"></i>
                                        <span className="mr-2">:</span>
                                        <p>$ {userProfile.salary}</p>
                                    </li>
                                    <li className="mb-3 flex w-full items-center pr-1 font-light sm:max-w-[50%] lg:max-w-[33.33%]">
                                        <i className="fa-solid fa-briefcase mr-3"></i>
                                        <span className="mr-2">:</span>
                                        <p>{userProfile.job_type}</p>
                                    </li>
                                    <li className="mb-3 flex w-full items-center pr-1 font-light sm:max-w-[50%] lg:max-w-[33.33%]">
                                        <i className="fa-solid fa-location-dot mr-3"></i>
                                        <span className="mr-2">:</span>
                                        <p>{userProfile.pref_location}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[920px] px-4">
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                            <div className="dark:text-white">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Summary
                                </h3>
                                <div className="rounded-normal border p-6 dark:bg-gray-700">
                                    {userProfile.summary}
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                            <div className="dark:text-white">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Skills
                                </h3>
                                <div className="flex flex-wrap items-start">
                                    {userProfile.skills.map((skill) => (
                                        <p
                                            className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-700 dark:text-white"
                                            key={skill}
                                        >
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                            <div className="dark:text-white">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Experience
                                </h3>
                                {userProfile.experience.map(
                                    (experience: any | Experience, i) => (
                                        <div
                                            className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] p-4 dark:bg-gray-700 md:p-6"
                                            key={i}
                                        >
                                            <article>
                                                <h4 className="mb-1 text-lg font-semibold">
                                                    {experience.title}
                                                </h4>
                                                <p className="mb-2 font-medium text-[#6D27F9]">
                                                    {experience?.organization}
                                                </p>
                                                <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                                    Started Date:-{" "}
                                                    {experience?.startYear}
                                                    <br /> End Date:-{" "}
                                                    {experience?.endYear}
                                                </p>
                                            </article>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                            <div className="dark:text-white">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Education
                                </h3>
                                {userProfile.education.map(
                                    (education: any | Education, i) => (
                                        <div
                                            className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] p-4 dark:bg-gray-700 md:p-6"
                                            key={i}
                                        >
                                            <article>
                                                <h4 className="mb-1 text-lg font-semibold">
                                                    {education.title}
                                                </h4>
                                                <p className="mb-2 font-medium text-[#6D27F9]">
                                                    {education.institution}
                                                </p>
                                                <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                                    Graduation Date:-{" "}
                                                    {education.year}
                                                </p>
                                            </article>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="mb-6 rounded-normal border border-teal-300 bg-white p-6 py-10 shadow-normal dark:bg-gray-800">
                            <div className="text-center dark:text-white">
                                <h3 className="mb-3 text-xl">Referral Link</h3>
                                <span className="mr-2 inline-block text-secondary">
                                    {referralLink}

                                </span>
                                    <ContentCopyIcon
                                        onClick={handleCopyClick}
                                    />
                                <Link
                                    href={"https//www.xyzmnzhfhfhhksjd.com"}
                                    className="mb-3 inline-block text-lg text-primary"
                                ></Link>
                                <h5 className="text-2xl font-bold">
                                    Referred Account: {referralCount}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </section>
    );
}
