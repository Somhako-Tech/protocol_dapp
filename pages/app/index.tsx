import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
import ProfileForm from "../../components/ProfileForm";
import { Profile } from "../../constants/types";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

import { axiosContractInstance } from "../../constants/axiosInstances";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useMintStore } from "../../store";
import Header from "../../components/Header";

export default function MintPage() {
    const router = useRouter();

    const { address, isConnected } = useAccount();

    const { data: session } = useSession();

    const [isMinting, setIsMinting] = useState(false);

    const [mintSuccessful, setMintSuccessful] = useMintStore((state) => [
        state.minted,
        state.setMintedSuccessful,
    ]);

    const [tokenId, setTokenId, handle, setHandle] = useMintStore((state) => [
        state.tokenId,
        state.setTokenId,
        state.handle,
        state.setHandle,
    ]);

    const [userProfile, setUserProfile] = useState<Profile>({
        handle: "",
        title: "",
        summary: "",
        jobType: "",
        prefLocation: "",
        salary: "",
        yearsOfExp: "",
        link: "",
        skills: [""],
        education: [{ institution: "", year: "", title: "" }],
        experience: [
            { organization: "", startYear: "", endYear: "", title: "" },
        ],
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

    async function mint(profile: Profile) {
        const { handle } = profile;

        const response = await axiosContractInstance.post("/contract", {
            data: { handle, owner: address, id: "test" },
        });

        return response.data;
    }

    async function saveProfile(profile: Profile) {
        const response = await axiosContractInstance.post("/profile", {
            data: { ...profile },
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
            handleAlert({
                vertical: "top",
                horizontal: "right",
            });
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
            // TODO update to support better UI
            alert("Handle already exists");
            return;
        }

        setIsMinting(true);

        const response = await mint(userProfile);
        setIsMinting(false);

        console.log(response);
        if (response.success) {
            const id = parseInt(response.tokenId.hex);
            await saveProfile(userProfile)
                .then(() => {
                    setTokenId(id);
                    setHandle(userProfile.handle);
                    setMintSuccessful();
                })
                .catch((err) => console.log(err));
        }
    }

    //TODO update id
    //Updates address on connection
    useEffect(() => {
        if (isConnected) {
            setUserProfile((prevData) => ({
                ...prevData,
                owner: address,
                id: "test",
            }));
        }
    }, [isConnected, address]);

    //Accounts not signed in should go to root
    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    //Accounts not signed in should go to root
    useEffect(() => {
        if (mintSuccessful) router.push(`/u/${handle}`);
    }, [mintSuccessful, handle, router]);

    return (
        <main className="py-8 bg-white">
            <Header />
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        {isConnected && !isMinting && !mintSuccessful ? (
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
                            <div className="flex-col items-center justify-center">
                                <h1
                                    className={
                                        " font-bold text-2xl mb-4 text-center"
                                    }
                                >
                                    Minting Complete! Your token id is{" "}
                                    {`'${tokenId}'`}!
                                    <ProfileSummary handle={handle} />
                                    <button
                                        onClick={() => router.push("/home")}
                                        className=" bg-gradient-to-r from-[#6D27F9] to-[#9F09FB] text-white font-bold rounded-full py-2.5 px-6 md:min-w-[150px] transition-all hover:from-[#391188] hover:to-[#391188]"
                                    >
                                        Home
                                    </button>
                                </h1>
                            </div>
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
