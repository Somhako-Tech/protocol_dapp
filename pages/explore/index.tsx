import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
    getMintedProfilesQuery,
    getProfileByUserIdQuery,
} from "../../graphql/graphqlQueries";
import { ProfilePreviewSkeleton } from "../../components/skeletons";
import ProfilePreview from "../../components/ProfilePreview";
import Link from "next/link";
import { Transition } from "react-transition-group";
import { Profile } from "@prisma/client";
import Image from "next/image";
import userImage from "/public/images/userImage.png";
import { BigClipLoader } from "../../components/Loader";

export default function Explore() {
    const router = useRouter();
    const { data: session } = useSession();

    const user = session?.user ? session.user : { id: null, email: null };

    const [Profile, setProfile] = useState<Profile | null>(null);
    const [isQueryLoading, setIsQueryLoading] = useState(true);
    const [isRouteLoading, setIsRouteLoading] = useState(false);

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

    useEffect(() => {
        if (!session && !isRouteLoading) {
            router.push("/");
            setIsRouteLoading(true);
        }
    }, [session, router, isRouteLoading]);

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
        } else return <BigClipLoader color="tertiary" />;
    };

    return (
        <section className="py-10">
            <div className="container">
                <div className="rounded-normal bg-white p-4 shadow-normal dark:bg-gray-700 md:p-10">
                    <div className="mb-4 flex flex-wrap items-center">
                        <h1 className="mr-3 text-2xl font-bold dark:text-white">
                            {!Profile ? (
                                <>
                                    Create Your Profile and{" "}
                                    <span className="text-primary">Mint</span>{" "}
                                    Now
                                </>
                            ) : (
                                <>
                                    {"You're In the"}{" "}
                                    <span className="text-primary">Mint</span>{" "}
                                    Queue
                                </>
                            )}
                        </h1>
                        <Link
                            href={!Profile ? "/app" : "/u"}
                            className="my-3 inline-block rounded bg-gradient-to-r from-secondary to-tertiary py-2 px-6 text-sm font-bold text-white transition-all hover:from-primary hover:to-primary"
                        >
                            {!Profile ? "Mint Now" : "Mint Queue"}
                        </Link>
                    </div>
                    <p className="mb-4 font-bold dark:text-white">
                        Web 3 Profiles
                    </p>
                    <div className="mx-[-15px] flex flex-wrap">
                        {mintedProfileList()}
                    </div>
                </div>
            </div>
        </section>
    );
}
