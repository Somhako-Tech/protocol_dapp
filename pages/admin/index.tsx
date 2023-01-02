import { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import { Profile } from "../../constants/types";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useQuery } from "@tanstack/react-query";
import { ProfileFormSkeleton } from "../../components/skeletons";
import { axiosAPIInstance } from "../../constants/axiosInstances";
import ProfileReview from "../../components/ProfileReview";

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession();

    const {
        isLoading: isProfileListLoading,
        isError: profileListError,
        data: ProfileList,
    } = useQuery({
        queryKey: ["profiles"],
        queryFn: () =>
            fetch("http://localhost:3030/profile").then((res) => res.json()),
    });

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    if (isProfileListLoading) {
        return (
            <main className="py-8 bg-white">
                <Header inMintQueue={false} />
                <section className="w-full flex flex-wrap ">
                    <div className="container h-full">
                        <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                            <ProfileFormSkeleton />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
    let profileList = "Loading";

    if (profileListError) {
        profileList = "Failed to load";
    }

    const handleMint = async (profile: Profile) => {
        const { handle, address } = profile;

        const response = await axiosAPIInstance.post("/contract", {
            data: { handle, address, id: profile.user_id },
        });

        if (response.data.success) {
            await axiosAPIInstance
                .patch(`/profile/${profile.user_id}`, {
                    minted: true,
                })
                .catch((err) => console.error(err));
        }

        return response.data;
    };
    const handleRejection = (profile: Profile) => console.log(profile);

    if (!isProfileListLoading && !profileListError) {
        profileList = ProfileList.profiles.map((profile: any) =>
            profile.minted ? (
                <></>
            ) : (
                <ProfileReview
                    profile={profile}
                    key={profile.handle}
                    handleMint={handleMint}
                    handleRejection={handleRejection}
                />
            )
        );
    }

    return (
        <main className="py-8 bg-white">
            <Header inMintQueue={false} />
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full max-w-5xl mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        <h1
                            className={
                                " font-bold text-4xl mb-4 text-center py-5"
                            }
                        >
                            Profiles In Queue
                        </h1>
                        {profileList}
                    </div>
                </div>
            </section>
        </main>
    );
}
