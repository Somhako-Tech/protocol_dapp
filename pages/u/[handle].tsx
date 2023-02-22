import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import React from "react";
import Image from "next/image";
import { getProfileByHandleIdQuery } from "../../graphql/graphqlQueries";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useQuery } from "@tanstack/react-query";
import { ProfileSummarySkeleton } from "../../components/skeletons";
import { Profile } from "@prisma/client";
import userImage from "/public/images/userImage.png";
import { BigClipLoader } from "../../components/Loader";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;

    const {
        data: userProfile,
        isLoading: isProfileQueryLoading,
        isError: isQueryError,
    } = useQuery(["getProfileByHandle", handle as string], () =>
        getProfileByHandleIdQuery((handle as string) || "default")
    );

    if (isProfileQueryLoading) return <BigClipLoader color="tertiary" />;
    if (!userProfile) {
        router.back();

        return <></>;
    }
    return (
        <>
            <div className="bg-white py-8">
                <div className="mx-auto w-full max-w-[920px] px-4">
                    <div className="mb-6 flex flex-wrap items-center rounded-normal p-7 text-center shadow-normal sm:text-left">
                        <div className="mb-6 w-full sm:mb-0 sm:max-w-[115px]">
                            <Image
                                src={
                                    "https://gateway.pinata.cloud/ipfs/" +
                                    userProfile?.ipfs_hash
                                }
                                alt="@Sam"
                                width={115}
                                height={115}
                                className="mx-auto rounded-full"
                            />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-115px)] sm:pl-6">
                            <h1 className="mb-2 text-2xl font-semibold">
                                @{userProfile?.handle}
                            </h1>
                            {/* <p className="mb-2 text-sm text-lightGray">
                                ID:2135478894
                            </p> */}
                            <div className="flex flex-wrap items-center justify-center sm:justify-start">
                                <h5 className="font-medium text-darkGray">
                                    {userProfile?.title}
                                </h5>
                                <p className="text-lightGray">
                                    | {userProfile?.address}
                                </p>
                            </div>
                            {userProfile?.minted && (
                                <div className="my-2">
                                    <label className="mb-2 inline-block pr-3 text-base font-medium leading-none">
                                        Minted
                                    </label>
                                    <VerifiedUserIcon color="success" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mb-6 rounded-normal border border-teal-400 p-6 shadow-normal">
                        <h3 className="mb-4 text-lg font-semibold">Summary</h3>
                        <div className="rounded-normal border p-6">
                            {userProfile?.summary}
                        </div>
                    </div>
                    <div className="mb-6 rounded-normal border border-teal-400 p-6 shadow-normal">
                        <h3 className="mb-4 text-lg font-semibold">Skills</h3>
                        <div className="flex flex-wrap items-start">
                            {userProfile?.skills.map((skill) => (
                                <p
                                    className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-900 dark:text-white"
                                    key={skill}
                                >
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6 rounded-normal border border-teal-400 p-6 shadow-normal">
                        <h3 className="mb-4 text-lg font-semibold">
                            Experience
                        </h3>
                        {userProfile?.experience.map((experience, i) => (
                            <div
                                className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] p-4 md:p-6"
                                key={i}
                            >
                                <article>
                                    <h4 className="mb-1 text-lg font-semibold">
                                        {experience.title}
                                    </h4>
                                    <p className="mb-2 font-medium text-[#6D27F9]">
                                        {experience.organization}
                                    </p>
                                    <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                        Started Date:-{" "}
                                        {experience.startYear.split("T")[0]}{" "}
                                        <br /> End Date:-{" "}
                                        {experience.endYear.split("T")[0]}
                                    </p>
                                </article>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6 rounded-normal border border-teal-400 p-6 shadow-normal">
                        <h3 className="mb-4 text-lg font-semibold">
                            Education
                        </h3>
                        {userProfile?.education.map((education, i) => (
                            <div
                                className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] p-4 md:p-6"
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
                                        {education.year.split("T")[0]}{" "}
                                    </p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className="flex w-full flex-wrap ">
                <div className="h-full w-full">
                    <div className="mx-auto w-full max-w-[800px] rounded-[25px]	 bg-white p-8  text-black shadow-normal md:py-14 md:px-20">
                        <div className="flex-col items-center justify-center">
                            {isProfileQueryLoading ? (
                                <ProfileSummarySkeleton />
                            ) : (
                                <ProfileSummary
                                    userProfile={userProfile as Profile}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
