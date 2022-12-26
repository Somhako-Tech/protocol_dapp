import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import axios from "axios";
import Logo from "../components/Logo";
import ProfileForm from "../components/ProfileForm";
import SignInPopup from "../components/SignInPopup";
import { Profile } from "../constants/types";

import { axiosContractInstance } from "../constants/axiosInstances";
import { useSession, signIn, signOut } from "next-auth/react";
import InputBox from "../components/InputBox";
import SignInWith from "../components/SignInWith";
import { useRouter } from "next/router";
import ProfileSummary from "../components/ProfileSummary";

export default function MintPage() {
    const { address, isConnected } = useAccount();
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    const [isMinting, setIsMinting] = useState(false);
    const [mintSuccessful, setMintSuccessful] = useState(false);
    const [tokenId, setTokenId] = useState<number | null>(null);

    const [userProfile, setUserProfile] = useState<Profile>({
        handle: "",
        title: "",
        summary: "",
        jobType: "",
        prefLocation: "",
        salary: "",
        yearsOfExp: "",
        link: "",
        skills: [" "],
        education: [{ institution: " ", year: " ", title: " " }],
        experience: [
            { organization: " ", startYear: " ", endYear: " ", title: " " },
        ],
    });

    async function mint(profile: Profile) {
        const { handle } = profile;

        const response = await axiosContractInstance.post("/contract", {
            data: { handle, owner: address, id: "test" },
        });

        return response.data;
    }

    async function saveProfile(profile: Profile) {
        const response = await axiosContractInstance.post("/profile", {
            data: profile,
        });

        return response.data;
    }

    async function checkHandle(e: { preventDefault: () => void }) {
        e.preventDefault();

        // Make an API call to check if the handle already exists
        const handleExistsResponse = await axiosContractInstance.get(
            `/handle/${userProfile.handle}`
        );
        if (handleExistsResponse.data.exists) {
            // If the handle already exists, show an error message
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
        console.log(userProfile);

        // Make an API call to check if the handle already exists
        const handleExistsResponse = await axiosContractInstance.get(
            `/handle/${userProfile.handle}`
        );
        if (handleExistsResponse.data.exists) {
            // If the handle already exists, show an error message
            alert("Handle already exists");
            return;
        }

        setIsMinting(true);

        const response = await mint(userProfile);
        setIsMinting(false);

        if (response.success) {
            const id = parseInt(response.tokenId.hex);
            setTokenId(id);
            setMintSuccessful(true);
            await saveProfile(userProfile);
        }
    }

    useEffect(() => {
        if (isConnected) {
            setUserProfile((prevData) => ({
                ...prevData,
                owner: address,
                id: "test",
            }));
        }
    }, [isConnected, address]);

    return (
        <main className="py-8 bg-white">
            <section className="w-full flex flex-wrap px-4 items-center justify-center">
                <div className="w-full lg:max-w-80 ">
                    <div className="bg-white shadow-normal border-4 border-somhakohr2 rounded-[50px] p-6 center flex-col justify-center items-center">
                        <div className="flex justify-between items-center ">
                            <div className="font-semibold text-lg">
                                <Logo />
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    className="text-lg  mr-4 text-white bg-somhakohr font-medium rounded-full px-5 py-1.5 text-center  dark:bg-somhakohr"
                                    onClick={() => signOut()}
                                >
                                    Sign out
                                </button>
                                <div className="font-semibold text-lg">
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        {isConnected && !isMinting && !mintSuccessful ? (
                            <div className="flex-col items-center">
                                <form
                                    className="flex flex-col justify-center items-center"
                                    onSubmit={handleSubmit}
                                >
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
                                    <div className="text-left">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                                        >
                                            MINT
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : mintSuccessful ? (
                            <>
                                <h1 className={" font-bold text-2xl mb-4"}>
                                    Minting Complete! Your token id is{" "}
                                    {`'${tokenId}'`} with your handler{" "}
                                    <ProfileSummary userProfile={userProfile} />
                                </h1>
                            </>
                        ) : (
                            <h1 className={"loading font-bold text-2xl mb-4"}>
                                Loading...
                            </h1>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
