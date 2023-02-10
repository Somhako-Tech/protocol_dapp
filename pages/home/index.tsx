import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import {
    getMintedProfilesQuery,
    getProfileByUserIdQuery,
} from "../../graphql/graphqlQueries";
import { ProfilePreviewSkeleton } from "../../components/skeletons";
import ProfilePreview from "../../components/ProfilePreview";
import Link from "next/link";
import { Transition } from "react-transition-group";
import { Profile } from "@prisma/client";

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession();

    const user = session?.user ? session.user : { id: null, email: null };

    const [Profile, setProfile] = useState<Profile | null>(null);
    const [isQueryLoading, setIsQueryLoading] = useState(true);

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
    // const {
    //     isLoading: isProfileListLoading,
    //     isError: profileListError,
    //     data: profiles,
    // } = useQuery(["getMintedProfiles"], async () => getMintedProfilesQuery(), {
    //     staleTime: 60,
    // });

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

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
        <section className="mx-10 flex flex-wrap">
            <div className="flex w-full justify-center">
                <Transition
                    nodeRef={null}
                    in={!Profile}
                    timeout={400}
                    className="my-10"
                >
                    {(state) => (
                        <Link
                            href="/app"
                            className={
                                state == "exited"
                                    ? "400ms h-0 opacity-0 transition-all"
                                    : "400ms my-2 opacity-100 transition-all" +
                                      "z-0 bg-gradient-to-r from-purple-200 to-pink-300 bg-clip-text py-8 pt-5 text-center text-5xl font-extrabold text-transparent"
                            }
                        >
                            Create Your Profile and Mint Now
                        </Link>
                    )}
                </Transition>
            </div>

            <div className="shadow-normal mx-auto w-full rounded-[25px] bg-gradient-to-r from-slate-50 to-slate-200 p-8 text-black md:py-14 md:px-20">
                <h1 className={" mb-4 py-5 text-center text-4xl font-bold"}>
                    Web3 Profiles
                </h1>
                <div className="grid grid-flow-row grid-cols-4 gap-4 ">
                    {mintedProfileList()}
                </div>
            </div>
        </section>
    );
}
