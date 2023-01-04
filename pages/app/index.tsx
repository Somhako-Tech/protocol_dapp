import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
import ProfileForm from "../../components/ProfileForm";
import { Profile } from "../../constants/types";
import * as React from "react";

import { SnackbarOrigin } from "@mui/material/Snackbar";

import { useQuery } from "@tanstack/react-query";

import {
    axiosAPIInstance,
    getProfileById,
} from "../../constants/axiosInstances";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useProfileStore, useReferralStore } from "../../store";
import Header from "../../components/Header";
import { ProfileFormSkeleton } from "../../components/skeletons";

export default function AppPage() {
    const router = useRouter();

    const { address, isConnected } = useAccount();

    const { data: session } = useSession();

    const [referredFrom] = useReferralStore((state) => [state.referredFrom]);

    const {
        data: ProfileData,
        isLoading: isQueryLoading,
        isError: isQueryError,
    } = useQuery(["profileById", session?.user?.id], () =>
        getProfileById(session?.user?.id ? session.user.id : 0)
    );

    const [queryInMintQueue, setQueryInMintQueue] = useState(false);

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

    //Accounts not signed in should go to root
    useEffect(() => {
        if (!session) {
            // router.push("/");
        }
    }, [session, router]);

    //Minted accounts should go to profile page
    useEffect(() => {
        if (!isQueryLoading && !isQueryError && !ProfileData.error)
            if (ProfileData.profile.minted)
                router.push(`/u/${ProfileData.profile.handle}`);
            else setQueryInMintQueue(true);
        // if (mintSuccessful) router.push(`/u/${handle}`);
    }, [ProfileData, isQueryError, isQueryLoading, router]);

    const [userProfile, setUserProfile] = useState<Profile>({
        handle: "",
        title: "",
        summary: "",
        job_type: "",
        pref_location: "",
        salary: "",
        years_of_exp: "",
        link: "",
        skills: [""],
        education: [{ institution: "", year: "", title: "" }],
        experience: [
            { organization: "", startYear: "", endYear: "", title: "" },
        ],
        address: "",
        user_id: 0,
    });

    const [snackBarState, setSnackBarState] = React.useState({
        open: false,
        vertical: "top",
        horizontal: "center",
    });

    const {
        vertical: snackBarVertical,
        horizontal: snackBarHorizontal,
        open: snackBarOpen,
    } = snackBarState;

    const handleAlert = (newState: SnackbarOrigin) => () => {
        setSnackBarState({ open: true, ...newState });
    };

    const handleClose = () => {
        setSnackBarState({ ...snackBarState, open: false });
    };

    async function saveProfile(profile: Profile) {
        const id = session?.user?.id || 0;

        const response = await axiosAPIInstance.post("/profile", {
            data: { ...profile, user_id: id },
        });

        if (referredFrom !== "" && referredFrom !== undefined) {
            await axiosAPIInstance
                .post("/referral", {
                    user_id: id,
                    email: session?.user?.email,
                })
                .catch((err) => console.error(err));
        }

        setHandle(profile.handle);
        return response.data;
    }

    async function checkHandle(e: { preventDefault: () => void }) {
        e.preventDefault();

        // Make an API call to check if the handle already exists
        const handleExistsResponse = await axiosAPIInstance.get(
            `/handle/${userProfile.handle}`
        );
        if (handleExistsResponse.data.exists) {
            // If the handle already exists, show an error message
            handleAlert({
                vertical: "top",
                horizontal: "right",
            });
            //TODO Switch to a snackbar
            alert("Handle already exists");
            return;
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

        // Make an API call to check if the handle already exists
        const handleExistsResponse = await axiosAPIInstance.get(
            `/handle/${userProfile.handle}`
        );

        if (handleExistsResponse.data.exists) {
            // If the handle already exists, show an error message
            // TODO update to support better UI
            alert("Handle already exists");
            return;
        }

        await saveProfile(userProfile)
            .then(() => {
                setQueryInMintQueue(true);
            })
            .catch((err) => console.log(err));
    }

    if (!isConnected || isQueryLoading)
        return (
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
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
            <div className="container h-full">
                <div className="text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    {ProfileData.error ? (
                        <div className="flex-col items-center">
                            <form
                                className="flex flex-col justify-center items-center"
                                onSubmit={handleSubmit}
                            >
                                {/* 
                                    * TODO Finish snackbar
                                    <div>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: snackBarVertical,
                                                horizontal: snackBarHorizontal,
                                            }}
                                            open={snackBarOpen}
                                            onClose={handleClose}
                                            message="I love snacks"
                                            key={
                                                snackBarVertical +
                                                snackBarHorizontal
                                            }
                                        />
                                    </div> */}
                                <div className="my-6">
                                    <label
                                        htmlFor="handle"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Handle
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="handle"
                                        name="handle"
                                        className="w-auto mx-4 rounded-full border border-black"
                                        value={userProfile.handle}
                                        onChange={handleChange}
                                        onBlur={checkHandle}
                                    />
                                </div>
                                <div className="my-6">
                                    <label
                                        htmlFor="address"
                                        className="font-medium mb-2 leading-none inline-block"
                                    >
                                        Address
                                    </label>
                                    <label
                                        id="address"
                                        className="w-auto mx-4 rounded-full border-slate-300"
                                    >
                                        {address &&
                                            address.slice(0, 10) +
                                                "..." +
                                                address.slice(
                                                    address.length - 8
                                                )}
                                    </label>
                                </div>
                                <ProfileForm
                                    handleChange={handleChange}
                                    userProfile={userProfile}
                                />
                            </form>
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
