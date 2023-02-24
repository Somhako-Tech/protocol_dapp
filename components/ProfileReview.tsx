import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import * as changeCase from "change-case";
import { ProfileFormSkeleton } from "./skeletons";
import styles from "./components.module.css";
import { BigClipLoader } from "./Loader";
import Link from "next/link";
import Image from "next/image";

interface ProfileFromQuery extends Profile {
    user: {
        email: string;
    };
}

type Education = { institution: string; year: string; title: string };
type Experience = {
    organization: string;
    startYear: string;
    endYear: string;
    title: string;
};

export default function ProfileSummary({
    profile: userProfile,
    handleMint,
    handleRejection,
}: {
    profile: ProfileFromQuery;
    handleMint: (profile: Profile) => void;
    handleRejection: (profile: Profile) => void;
}) {
    const [handlingSubmit, setHandlingSubmit] = useState(false);


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

    if (handlingSubmit)
        return (
            <div className="w-full">
                <>
                    <div className="py-8">
                        <div className="mx-auto w-full max-w-[920px] px-4">
                            <div className="rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                                <h2 className="mb-4 text-lg font-semibold md:text-3xl text-center text-white">
                                    Minting Profile{" "}
                                    <span className="font-thin italic">
                                        {" "}
                                        ID: {userProfile.user_id}
                                    </span>
                                </h2>
                                <BigClipLoader color="tertiary" />
                            </div>
                        </div>
                    </div>
                </>
            </div>
        );

    return (
        <div className="w-full">
            <>
                <div className="py-8">
                    <div className="mx-auto w-full max-w-[920px] px-4">
                        <div className="rounded-normal border border-teal-300 bg-white p-6 shadow-normal dark:bg-gray-800">
                            <div className="flex flex-wrap items-center border-b pb-6">
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
                                <div className="w-full sm:max-w-[calc(100%-115px)] sm:pl-6">
                                    <h1 className="mb-2 text-2xl font-semibold dark:text-white">
                                        @{userProfile.handle}
                                    </h1>
                                    <p className="mb-2 text-sm text-lightGray">
                                        ID:{userProfile.user_id}
                                    </p>
                                    <div className="flex flex-wrap items-center">
                                        <h5 className="font-medium text-darkGray dark:text-white">
                                            {userProfile.title} | &nbsp;
                                        </h5>
                                        <p className="break-all text-lightGray dark:text-white">
                                            {userProfile.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b py-6">
                                <div className="mb-3 flex flex-wrap items-center justify-between">
                                    <ul className="mr-4 flex items-center rounded-lg border border-slate-300 py-2 px-3 text-2xl dark:bg-gray-700 dark:text-white">
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
                                    <Link
                                        href={userProfile.resume}
                                        target="_blank"
                                        className="my-2 inline-block rounded-lg bg-primary py-3 px-6 text-center text-white hover:bg-secondary"
                                    >
                                        Resume{" "}
                                        <i className="fa-solid fa-download ml-2"></i>
                                    </Link>
                                </div>
                                <div className="rounded-lg bg-[#FAF8FF] p-6 dark:bg-gray-700">
                                    <ul className="flex flex-wrap text-darkGray dark:text-white">
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
                            <div className="border-b py-6 dark:text-white">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Summary
                                </h3>
                                <div className="rounded-normal border p-6 dark:bg-gray-700">
                                    {userProfile.summary}
                                </div>
                            </div>
                            <div className="border-b py-6 dark:text-white">
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
                            <div className="border-b py-6 dark:text-white">
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
                            <div className="border-b py-6 dark:text-white">
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
                            <div className="mt-8 flex flex-row items-center justify-center gap-10">
                                <button
                                    onClick={() => {
                                        handleRejection(userProfile);
                                        setHandlingSubmit(true);
                                    }}
                                    className="w-[200px] rounded-full bg-red-500 py-2.5 px-6 font-bold text-white transition-all md:min-w-[150px]"
                                >
                                    Reject
                                    <i className="fa-solid fa-thumbs-down ml-3"></i>
                                </button>
                                <button
                                    onClick={() => {
                                        handleMint(userProfile);
                                        setHandlingSubmit(true);
                                    }}
                                    className="w-[200px] rounded-full bg-green-300 py-2.5 px-6 font-bold transition-all hover:bg-green-500 md:min-w-[150px]"
                                >
                                    Approve
                                    <i className="fa-solid fa-thumbs-up ml-3"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}
