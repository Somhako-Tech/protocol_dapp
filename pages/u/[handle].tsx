import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import React from "react";
import { Profile } from "../../constants/types";

import { axiosContractInstance } from "../../constants/axiosInstances";
import InputBox from "../../components/InputBox";
import SignInWith from "../../components/SignInWith";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useMintStore } from "../../store";
import Header from "../../components/Header";

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;

    useEffect(() => {
        if (!handle || typeof handle !== "string") router.push("/app");
    }, [handle, router]);

    const [tokenId] = useMintStore((state) => [state.tokenId]);

    return (
        <main className="py-8 bg-white">
            <Header />
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
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
                    </div>
                </div>
            </section>
        </main>
    );
}
