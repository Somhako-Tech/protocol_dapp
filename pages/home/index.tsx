import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
// import { axiosInstance } from "../api/axiosApi";
import { Profile } from "../../constants/types";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useQuery } from "@tanstack/react-query";
import ProfilePreview from "../../components/ProfilePreview";
import { ProfileFormSkeleton } from "../../components/skeletons";
import { getProfileById, getUserById } from "../../constants/axiosInstances";

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

    const { isLoading: isProfileQueryLoading, data: Profile } = useQuery(
        ["profileById", session?.user?.id],
        () => getProfileById(session?.user?.id ? session.user.id : 0),
        { enabled: !!session }
    );

    const { isLoading: isUserQueryLoading, data: User } = useQuery(
        ["userById", session?.user?.id],
        () => getUserById(session?.user?.id ? session.user.id : 0),
        { enabled: !!session }
    );

    const [inMintQueue, setInMintQueue] = useState(false);

    //TODO turn this into a middleware
    useEffect(() => {
        if (!isProfileQueryLoading && !isUserQueryLoading) {
            console.log(User);
            if (User.data.is_admin) router.push("/admin");
            if (Profile.error && !User.data.is_admin) {
                router.push("/app");
            } else setInMintQueue(true);
        }
    }, [
        Profile,
        User,
        inMintQueue,
        isProfileQueryLoading,
        isUserQueryLoading,
        router,
    ]);

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    if (isProfileListLoading) {
        return (
            <section className="w-full flex flex-wrap ">
                <div className="container h-full">
                    <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        <ProfileFormSkeleton />
                    </div>
                </div>
            </section>
        );
    }
    let queuedProfileList = <></>;
    let mintedProfileList = <></>;

    if (!isProfileListLoading && !profileListError) {
        mintedProfileList = ProfileList.profiles.map((profile: any) => {
            if (profile.minted)
                return (
                    <ProfilePreview profile={profile} key={profile.handle} />
                );
            else return;
        });
        queuedProfileList = ProfileList.profiles.map((profile: any) => {
            if (profile.minted) return;
            else
                return (
                    <ProfilePreview profile={profile} key={profile.handle} />
                );
        });
    }

    return (
        <section className="w-full flex flex-wrap ">
            <div className="container h-full">
                <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <h1 className={" font-bold text-4xl mb-4 text-center py-5"}>
                        Profiles In Queue
                    </h1>
                    <div className="grid grid-cols-3 grid-flow-row gap-4">
                        {queuedProfileList}
                    </div>
                </div>
                <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <h1 className={" font-bold text-4xl mb-4 text-center py-5"}>
                        Minted Profiles
                    </h1>
                    <div className="grid grid-cols-3 grid-flow-row gap-4">
                        {mintedProfileList}
                    </div>
                </div>
            </div>
        </section>
    );
}
