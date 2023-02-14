import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
import ProfileForm from "../../components/ProfileForm";
import { Profile } from "@prisma/client";
import * as React from "react";

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
import { ClipLoader, GridLoader, RiseLoader } from "react-spinners";

export default function AppPage() {
    const router = useRouter();

    const { address, isConnected } = useAccount();

    const { data: session } = useSession();

    const [referredFrom] = useReferralStore((state) => [state.referredFrom]);

    const user = session?.user ? session.user : { id: null, email: null };

    const [Profile, setProfile] = useState<Profile | null>(null);
    const [isQueryLoading, setIsQueryLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            const profile = await getProfileByUserIdQuery(
                (user.id as string) || "default"
            );
            setProfile(profile || null);
            setIsQueryLoading(false);
        };
        if (session) {
            getProfile();
        }
    }, [session, user.id]);

    const [queryInMintQueue, setQueryInMintQueue] = useState(false);
    const [isProfileCreating, setIsProfileCreating] = useState(false);

    const [isRouteLoading, setIsRouteLoading] = useState(false);

    const [setHandle] = useProfileStore((state: any) => [state.setHandle]);

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
        if (!isQueryLoading && Profile)
            if (Profile.minted && isRouteLoading) {
                router.push(`/u/${Profile?.handle}`);
                setIsRouteLoading(true);
            } else setQueryInMintQueue(true);
    }, [Profile, isQueryLoading, isRouteLoading, router]);

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
        skills: [],
        education: [{ institution: "", year: "", title: "" }],
        experience: [
            { organization: "", startYear: "", endYear: "", title: "" },
        ],
        address: "",
        user_id: "",
    });

    async function saveProfile(profile: Profile) {
        console.log({ id: user.id as string, profile });
        setIsProfileCreating(true);
        await createProfileQuery((user.id as string) || "default", profile)
            .then((data) => {
                if (data) {
                    setHandle(data.handle);
                    setQueryInMintQueue(true);
                }
                return data;
            })
            .catch((err) => {
                console.log(err);
                throw new Error("Profile creation failed");
            });
        await axiosAPIInstance.post("/mail", {
            to: user.email,
            subject: emails.profileCreated.subject,
            html: emails.profileCreated.html,
        });

        if (referredFrom !== "" && referredFrom !== undefined) {
            const referrer = await getProfileByHandleIdQuery(referredFrom);
            if (referrer) {
                await createReferralQuery(
                    referrer.handle,
                    user.email || "default"
                );
            }
        }

        if (!isRouteLoading) {
            router.push("/u");
            setIsRouteLoading(true);
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
            <section className="flex w-full flex-wrap">
                <div className="h-full w-full">
                    <div className="flex-col items-center justify-center">
                        <div className=" shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] bg-white p-8 py-10 shadow-md shadow-slate-400 md:py-14 md:px-20 ">
                            <h1 className="mb-20 bg-somhakohr bg-clip-text pt-5 text-center text-4xl font-extrabold capitalize text-transparent">
                                Please connect your wallet to mint your profile
                            </h1>
                            <RiseLoader size={30} speedMultiplier={0.8} />
                        </div>
                    </div>
                </div>
            </section>
        );

    if (isQueryLoading || isProfileCreating)
        return (
            <section className="flex w-full flex-wrap ">
                <div className="h-full w-full">
                    <div className="flex-col items-center justify-center">
                        <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center rounded-[25px] p-8 md:py-14 md:px-20">
                            <ClipLoader
                                size={150}
                                speedMultiplier={0.8}
                                color="white"
                                cssOverride={{ borderWidth: 5 }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );

    return (
        <section className="flex w-full flex-wrap ">
            <div className="h-full w-full ">
                <div className="shadow-normal  bg-gradient-to-r from-[##a8c0ff] to-[##3f2b96] p-8 text-black  md:px-20">
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
                            <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] border border-slate-700 bg-white p-8 md:py-14 md:px-20">
                                <h1
                                    className={
                                        " mb-4 text-center text-2xl font-bold"
                                    }
                                >
                                    You are in the mint queue! We let you know
                                    as soon as your profile is minted!{" "}
                                </h1>

                                <button
                                    onClick={async () => {
                                        if (!isRouteLoading) {
                                            setIsRouteLoading(true);
                                            await router.push("/home");
                                        }
                                    }}
                                    className=" rounded-full bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] py-2.5 px-6 font-bold text-white transition-all hover:from-[#391188] hover:to-[#391188] md:min-w-[150px]"
                                >
                                    Home
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-col items-center justify-center">
                            <div className="shadow-normal mx-auto my-10 w-full max-w-[1000px] rounded-[25px] border  p-8 md:py-14 md:px-20 ">
                                <ProfileFormSkeleton />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
