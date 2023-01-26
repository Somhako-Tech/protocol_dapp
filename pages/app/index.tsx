import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
import ProfileForm from "../../components/ProfileForm";
import { Profile } from "@prisma/client";
import * as React from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useProfileStore, useReferralStore } from "../../store";
import { ProfileFormSkeleton } from "../../components/skeletons";
import {
    getProfileByUserIdQuery,
    getProfileByHandleIdQuery,
} from "../../graphql/graphqlQueries";

import {
    createReferralQuery,
    createProfileQuery,
} from "../../graphql/graphqlMutations";
import { axiosAPIInstance } from "../../constants/axiosInstances";
import emails from "../../constants/email";

export default function AppPage() {
    const router = useRouter();

    const queryClient = useQueryClient();

    const { address, isConnected } = useAccount();

    const { data: session } = useSession();

    const [referredFrom] = useReferralStore((state) => [state.referredFrom]);

    const {
        data: Profile,
        isLoading: isQueryLoading,
        isError: isQueryError,
    } = useQuery(
        ["getProfile", session?.user.id as string],
        () =>
            getProfileByUserIdQuery((session?.user.id as string) || "default"),
        { enabled: !!session }
    );

    const [queryInMintQueue, setQueryInMintQueue] = useState(false);
    const [isProfileCreating, setIsProfileCreating] = useState(false);

    const [setHandle] = useProfileStore((state) => [state.setHandle]);

    //TODO update id
    //Updates address on connection
    useEffect(() => {
        if (isConnected) {
            setUserProfile((prevData) => ({
                ...prevData,
                address: address || "",
            }));
        }
    }, [isConnected, address]);

    //Minted accounts should go to profile page
    useEffect(() => {
        if (!isQueryLoading && !isQueryError && Profile)
            if (Profile.minted) router.push(`/u/${Profile?.handle}`);
            else setQueryInMintQueue(true);
        // if (mintSuccessful) router.push(`/u/${handle}`);
    }, [Profile, isQueryError, isQueryLoading, router]);

    const [userProfile, setUserProfile] = useState<Profile>({
        id: 0,
        minted: false,
        handle: "",
        title: "",
        summary: "",
        job_type: "",
        pref_location: "",
        salary: "",
        years_of_exp: "",
        link: { Twitter: "", Github: "", LinkedIn: "" },
        skills: [""],
        education: [{ institution: "", year: "", title: "" }],
        experience: [
            { organization: "", startYear: "", endYear: "", title: "" },
        ],
        address: "",
        user_id: "",
    });

    async function saveProfile(profile: Profile) {
        console.log({ id: session?.user.id as string, profile });
        setIsProfileCreating(true);
        await createProfileQuery(
            (session?.user.id as string) || "default",
            profile
        )
            .then((data) => {
                if (data) {
                    setHandle(data.handle);
                    setQueryInMintQueue(true);
                }
                queryClient.invalidateQueries({ queryKey: ["getProfile"] });
                return data;
            })
            .catch((err) => {
                console.log(err);
                throw new Error("Profile creation failed");
            });
        await axiosAPIInstance.post("/mail", {
            to: session?.user.email,
            subject: emails.profileCreated.subject,
            html: emails.profileCreated.html,
        });

        if (referredFrom !== "" && referredFrom !== undefined) {
            const referrer = await getProfileByHandleIdQuery(referredFrom);
            if (referrer) {
                await createReferralQuery(
                    referrer.handle,
                    session?.user.email || "default"
                );
            }
        }
    }
    const handleChange = (e: {
        target: {
            id: any;
            name: any;
            value: any;
        };
    }) => {
        setUserProfile({ ...userProfile, [e.target.id]: e.target.value });
    };

    async function handleSubmit(e: any) {
        e.preventDefault();

        await saveProfile(userProfile);
        setIsProfileCreating(false);
    }

    if (!isConnected)
        return (
            <section className="w-full flex flex-wrap ">
                <div className="h-full w-full">
                    <div className="flex-col items-center justify-center">
                        <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 ">
                            <h1 className="text-3xl font-semibold capitalize text-center">
                                Please connect your wallet to mint your profile.
                            </h1>
                            <ProfileFormSkeleton />
                        </div>
                    </div>
                </div>
            </section>
        );

    if (isQueryLoading || isProfileCreating)
        return (
            <section className="w-full flex flex-wrap ">
                <div className="h-full w-full">
                    <div className="flex-col items-center justify-center">
                        <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 ">
                            <ProfileFormSkeleton />
                        </div>
                    </div>
                </div>
            </section>
        );

    return (
        <section className="w-full flex flex-wrap ">
            <div className="h-full w-full">
                <div className="text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    {!Profile ? (
                        <div className="flex-col items-center">
                            <ProfileForm
                                handleChange={handleChange}
                                userProfile={userProfile}
                                address={address}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    ) : queryInMintQueue ? (
                        <div className="flex-col items-center justify-center">
                            <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 flex flex-col justify-center items-center">
                                <h1
                                    className={
                                        " font-bold text-2xl mb-4 text-center"
                                    }
                                >
                                    You are in the mint queue! We let you know
                                    as soon as your profile is minted!{" "}
                                </h1>

                                <button
                                    onClick={() => router.push("/home")}
                                    className=" bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                                >
                                    Home
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-col items-center justify-center">
                            <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 ">
                                <ProfileFormSkeleton />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
