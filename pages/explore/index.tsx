import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
    getMintedProfilesQuery,
    getProfileByUserIdQuery,
} from "../../graphql/graphqlQueries";
import { ProfilePreviewSkeleton } from "../../components/skeletons";
import ProfilePreview from "../../components/ProfilePreview";
import Link from "next/link";
import { Transition } from "react-transition-group";
import { Profile } from "@prisma/client";
import Image from "next/image";
import userImage from '/public/images/userImage.png'

export default function Explore() {
    const router = useRouter();
    const { data: session } = useSession();

    const user = session?.user ? session.user : { id: null, email: null };

    const [Profile, setProfile] = useState<Profile | null>(null);
    const [isQueryLoading, setIsQueryLoading] = useState(true);
    const [isRouteLoading, setIsRouteLoading] = useState(false);

    useEffect(() => {
        const getProfile = async () => {
            const profile = await getProfileByUserIdQuery(
                (user.id as string) || "default"
            );
            profile && setProfile(profile);
            setIsQueryLoading(false);
        };
        if (session) {
            getProfile();
        }
    }, [session, user.id]);

    const [profiles, setProfiles] = useState<Array<Profile> | null>(null);
    const [isProfilesQueryLoading, setIsProfilesQueryLoading] = useState(true);

    useEffect(() => {
        const getProfiles = async () => {
            const profiles = await getMintedProfilesQuery();
            setIsProfilesQueryLoading(false);
            setProfiles(profiles);
        };

        getProfiles();
    }, []);

    useEffect(() => {
        if (!session && !isRouteLoading) {
            router.push("/");
            setIsRouteLoading(true);
        }
    }, [session, router, isRouteLoading]);

    let mintedProfileList = () => {
        if (!isProfilesQueryLoading && profiles) {
            const mintedProfileList = profiles?.map((profile: any) => {
                return (
                    <ProfilePreview
                        userProfile={profile}
                        key={profile.handle}
                    />
                );
            });

            return mintedProfileList;
        } else
            return [...Array(4).keys()].map((i) => (
                <ProfilePreviewSkeleton key={i} />
            ));
    };

    return (
        <section className="py-10">
            <div className="container">
                <div className="shadow-normal rounded-normal p-4 md:p-10 bg-white">
                    <div className="mb-4 flex flex-wrap items-center">
                        <h1 className="mr-3 font-bold text-2xl">
                            {
                            !Profile
                            ? <>Create Your Profile and <span className="text-primary">Mint</span> Now</>
                            : <>You're In the <span className="text-primary">Mint</span> Queue</>
                            }
                        </h1>
                        <Link
                            href={!Profile ? "/app" : "/u"}
                            className="inline-block my-3 bg-gradient-to-r from-secondary to-tertiary text-white text-sm font-bold rounded py-2 px-6 transition-all hover:from-primary hover:to-primary"
                        >
                            {
                            !Profile
                            ? "Mint Now"
                            : "Mint Queue"
                            }
                        </Link>

                    </div>
                    <p className="font-semibold mb-4 font-bold">Web 3 Profiles</p>
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="w-full md:max-w-[50%] xl:max-w-[calc(100%/3)] mb-6 px-[15px]">
                            <div className="border rounded-lg shadow-md p-5 h-full">    
                                <div className="flex flex-wrap items-center mb-3">
                                    <div className="w-full sm:max-w-[65px] mb-6 sm:mb-0">
                                        <Image src={userImage} alt="@Sam" width={65} height={65} className="rounded-full" />
                                    </div>
                                    <div className="w-full sm:max-w-[calc(100%-65px)] sm:pl-6">
                                        <h1 className="font-semibold mb-2">@SAM</h1>
                                        <h5 className="text-darkGray font-medium">Product Manager</h5>
                                    </div>
                                </div>
                                <ul className="flex flex-wrap items-center uppercase mb-3">
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        HTML
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        php
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        Java
                                    </li>
                                </ul>
                                <p className="text-darkGray text-sm my-2">Notice Period - 30 Days</p>
                                <p className="text-darkGray text-sm my-2 mb-6">Expectation - 7.5 LPA</p>
                                <Link href={'#'} className="inline-block bg-gradient-to-r from-secondary to-tertiary text-white text-sm font-bold rounded py-2 px-8 transition-all hover:from-primary hover:to-primary">View</Link>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[50%] xl:max-w-[calc(100%/3)] mb-6 px-[15px]">
                            <div className="border rounded-lg shadow-md p-5 h-full">    
                                <div className="flex flex-wrap items-center mb-3">
                                    <div className="w-full sm:max-w-[65px] mb-6 sm:mb-0">
                                        <Image src={userImage} alt="@Sam" width={65} height={65} className="rounded-full" />
                                    </div>
                                    <div className="w-full sm:max-w-[calc(100%-65px)] sm:pl-6">
                                        <h1 className="font-semibold mb-2">@SAM</h1>
                                        <h5 className="text-darkGray font-medium">Product Manager</h5>
                                    </div>
                                </div>
                                <ul className="flex flex-wrap items-center uppercase mb-3">
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        HTML
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        php
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        Java
                                    </li>
                                </ul>
                                <p className="text-darkGray text-sm my-2">Notice Period - 30 Days</p>
                                <p className="text-darkGray text-sm my-2 mb-6">Expectation - 7.5 LPA</p>
                                <Link href={'#'} className="inline-block bg-gradient-to-r from-secondary to-tertiary text-white text-sm font-bold rounded py-2 px-8 transition-all hover:from-primary hover:to-primary">View</Link>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[50%] xl:max-w-[calc(100%/3)] mb-6 px-[15px]">
                            <div className="border rounded-lg shadow-md p-5 h-full">    
                                <div className="flex flex-wrap items-center mb-3">
                                    <div className="w-full sm:max-w-[65px] mb-6 sm:mb-0">
                                        <Image src={userImage} alt="@Sam" width={65} height={65} className="rounded-full" />
                                    </div>
                                    <div className="w-full sm:max-w-[calc(100%-65px)] sm:pl-6">
                                        <h1 className="font-semibold mb-2">@SAM</h1>
                                        <h5 className="text-darkGray font-medium">Product Manager</h5>
                                    </div>
                                </div>
                                <ul className="flex flex-wrap items-center uppercase mb-3">
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        HTML
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        php
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        Java
                                    </li>
                                </ul>
                                <p className="text-darkGray text-sm my-2">Notice Period - 30 Days</p>
                                <p className="text-darkGray text-sm my-2 mb-6">Expectation - 7.5 LPA</p>
                                <Link href={'#'} className="inline-block bg-gradient-to-r from-secondary to-tertiary text-white text-sm font-bold rounded py-2 px-8 transition-all hover:from-primary hover:to-primary">View</Link>
                            </div>
                        </div>
                        <div className="w-full md:max-w-[50%] xl:max-w-[calc(100%/3)] mb-6 px-[15px]">
                            <div className="border rounded-lg shadow-md p-5 h-full">    
                                <div className="flex flex-wrap items-center mb-3">
                                    <div className="w-full sm:max-w-[65px] mb-6 sm:mb-0">
                                        <Image src={userImage} alt="@Sam" width={65} height={65} className="rounded-full" />
                                    </div>
                                    <div className="w-full sm:max-w-[calc(100%-65px)] sm:pl-6">
                                        <h1 className="font-semibold mb-2">@SAM</h1>
                                        <h5 className="text-darkGray font-medium">Product Manager</h5>
                                    </div>
                                </div>
                                <ul className="flex flex-wrap items-center uppercase mb-3">
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        HTML
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        php
                                    </li>
                                    <li className="bg-gray-200 text-sm text-center min-w-[80px] rounded-full text-black p-1 px-2 my-2 mr-3">
                                        Java
                                    </li>
                                </ul>
                                <p className="text-darkGray text-sm my-2">Notice Period - 30 Days</p>
                                <p className="text-darkGray text-sm my-2 mb-6">Expectation - 7.5 LPA</p>
                                <Link href={'#'} className="inline-block bg-gradient-to-r from-secondary to-tertiary text-white text-sm font-bold rounded py-2 px-8 transition-all hover:from-primary hover:to-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center ">
                    <div
                        className={
                            !isQueryLoading
                                ? "m-10 rounded-lg border-2 border-slate-400 py-4 px-4 transition-all hover:scale-105 hover:border-0 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-200 hover:shadow-md hover:shadow-white"
                                : " m-10 py-4 px-4 transition-all"
                        }
                    >
                        <Link
                            href={!Profile ? "/app" : "/u"}
                            className={
                                isQueryLoading
                                    ? "400ms h-0 opacity-0 transition-all"
                                    : "400ms my-2 opacity-100 transition-all" +
                                    " z-0 bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text text-5xl font-extrabold text-transparent hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-900"
                            }
                        >
                            {!Profile
                                ? "Create Your Profile and Mint Now"
                                : "You're In the Mint Queue"}
                        </Link>
                    </div>
                </div>
                <div className="shadow-normal mx-auto w-full rounded-[25px] bg-gradient-to-r from-slate-50 to-slate-200 p-8 text-black md:py-14 md:px-20">
                    <h1 className={" mb-4 py-5 text-center text-4xl font-bold"}>
                        Web3 Profiles
                    </h1>
                    <div className="grid grid-flow-row grid-cols-4 gap-4 ">
                        {mintedProfileList()}
                    </div>
                </div>
            </div>
        </section>
    );
}
