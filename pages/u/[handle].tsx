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
import userImage from '/public/images/userImage.png'

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;

    const {
        data: Profile,
        isLoading: isProfileQueryLoading,
        isError: isQueryError,
    } = useQuery(["getProfileByHandle", handle as string], () =>
        getProfileByHandleIdQuery((handle as string) || "default")
    );
    return (
        <>
            <div className="bg-white py-8">
                <div className="w-full max-w-[920px] mx-auto px-4">
                    <div className="shadow-normal rounded-normal p-7 flex flex-wrap items-center mb-6 text-center sm:text-left">
                        <div className="w-full sm:max-w-[115px] mb-6 sm:mb-0">
                            <Image src={userImage} alt="@Sam" width={115} height={115} className="rounded-full mx-auto" />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-115px)] sm:pl-6">
                            <h1 className="font-semibold text-2xl mb-2">@SAM</h1>
                            <p className="text-lightGray text-sm mb-2">ID:2135478894</p>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start">
                                <h5 className="text-darkGray font-medium">Product Manager&nbsp;</h5>
                                <p className="text-lightGray">| Address: xyz</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-normal border border-teal-400 rounded-normal p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">
                        Summary
                        </h3>
                        <div className="rounded-normal border p-6">
                        Lorem impsum
                        </div>
                    </div>
                    <div className="shadow-normal border border-teal-400 rounded-normal p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Skills</h3>
                        <div className="flex flex-wrap items-start">
                            <p className="bg-[#C9B3FF] dark:bg-gray-900 dark:text-white rounded-lg py-2 px-3 flex items-center text-[14px] mr-2 mb-3"                            >
                            PHP
                            <span className="pl-1 text-[10px] flex text-[#FEF401] mt-[2px]">
                                <i className="fa-solid fa-star ml-1"></i>
                                <i className="fa-solid fa-star ml-1"></i>
                                <i className="fa-solid fa-star ml-1"></i>
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="shadow-normal border border-teal-400 rounded-normal p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Experience</h3>
                        <div className="rounded-normal bg-[#FAF8FF] border border-slate-200 p-4 md:p-6 mb-4">
                            <article>
                                <h4 className="font-semibold mb-1 text-lg">
                                    Web developer
                                </h4>
                                <p className="text-[#6D27F9] font-medium mb-2">
                                    XYZ Company Name
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Started Date:- 01-02-2021 <br /> End Date:- 06-02-2022
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Type:- Full Time
                                </p>
                                <h6 className="font-medium">About</h6>
                                <p className="text-[#333] dark:text-white font-light text-sm">
                                    Lorem impsum about the role of the company
                                </p>
                            </article>
                        </div>
                        <div className="rounded-normal bg-[#FAF8FF] border border-slate-200 p-4 md:p-6 mb-4">
                            <article>
                                <h4 className="font-semibold mb-1 text-lg">
                                    Web developer
                                </h4>
                                <p className="text-[#6D27F9] font-medium mb-2">
                                    XYZ Company Name
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Started Date:- 01-02-2021 <br /> End Date:- 06-02-2022
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Type:- Full Time
                                </p>
                                <h6 className="font-medium">About</h6>
                                <p className="text-[#333] dark:text-white font-light text-sm">
                                    Lorem impsum about the role of the company
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="shadow-normal border border-teal-400 rounded-normal p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Education</h3>
                        <div className="rounded-normal bg-[#FAF8FF] border border-slate-200 p-4 md:p-6 mb-4">
                            <article>
                                <h4 className="font-semibold mb-1 text-lg">
                                    BCA 3 Years
                                </h4>
                                <p className="text-[#6D27F9] font-medium mb-2">
                                    XYZ University, From UK
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Started Date:- 01-02-2021 <br /> End Date:- 01-02-2023
                                </p>
                                <h6 className="font-medium">About</h6>
                                <p className="text-[#333] dark:text-white font-light text-sm">
                                    Lorem impsum something about the education prgramm
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="shadow-normal border border-teal-400 rounded-normal p-6">
                        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                        <div className="rounded-normal bg-[#FAF8FF] border border-slate-200 p-4 md:p-6 mb-4">
                            <article>
                                <h4 className="font-semibold mb-1 text-lg">
                                    Certificate Name
                                </h4>
                                <p className="text-[#6D27F9] font-medium mb-2">
                                    Certificate Company Name
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Issued Date:- 01-01-2021 <br /> Expiry Date:- 01-06-2021
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Credentials:- https://dsadasd.com
                                </p>
                                <a
                                    type="button"
                                    href={'https://dsadasd.com'}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-[#6D27F9] rounded-lg py-1.5 px-4 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                >
                                    Show Certificate
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex w-full flex-wrap ">
                <div className="h-full w-full">
                    <div className="shadow-normal mx-auto w-full max-w-[800px]	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
                        <div className="flex-col items-center justify-center">
                            {isProfileQueryLoading ? (
                                <ProfileSummarySkeleton />
                            ) : (
                                <ProfileSummary userProfile={Profile as Profile} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
