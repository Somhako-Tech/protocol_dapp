import { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import { Profile } from "../../constants/types";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMintStore } from "../../store";
import Header from "../../components/Header";
import { useQuery } from "@tanstack/react-query";
import ProfilePreview from "../../components/ProfilePreview";

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession();

    const [mintSuccessful] = useMintStore((state) => [state.minted]);

    //TODO turn this into a middleware
    useEffect(() => {
        if (!mintSuccessful) router.push("/app");
    }, [mintSuccessful, router]);

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    const { isLoading, error, data } = useQuery({
        queryKey: ["profiles"],
        queryFn: () =>
            fetch("http://localhost:3030/profile").then((res) => res.json()),
    });

    let profileList = "Loading";

    if (error) {
        profileList = "Failed to load";
    }

    if (!isLoading && !error) {
        profileList = data.profiles.map((profile: Profile) => (
            <ProfilePreview profile={profile} key={profile.handle} />
        ));
    }

    return (
        <main className="py-8 bg-white">
            <Header />
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        <h1
                            className={
                                " font-bold text-4xl mb-4 text-center py-5"
                            }
                        >
                            Minted Profiles
                        </h1>
                        <div className="grid grid-cols-4 grid-flow-row gap-4">
                            {profileList}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
