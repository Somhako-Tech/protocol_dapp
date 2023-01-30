import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import {
    getMintedProfilesQuery,
    getProfileByUserIdQuery,
    getProfilesQuery,
    getUserQuery,
} from "../../graphql/graphqlQueries";
import { ProfileFormSkeleton } from "../../components/skeletons";
import ProfilePreview from "../../components/ProfilePreview";
import Link from "next/link";
import { Transition } from "react-transition-group";

export default function Home({
    profileCreated = false,
}: {
    profileCreated: boolean;
}) {
    const router = useRouter();
    const { data: session } = useSession();

    const {
        isLoading: isProfileListLoading,
        isError: profileListError,
        data: Profiles,
    } = useQuery(["getMintedProfiles"], async () => getMintedProfilesQuery(), {
        cacheTime: 60,
    });

    useEffect(() => {
        if (!session) router.push("/");
    }, [session, router]);

    if (isProfileListLoading) {
        return (
            <section className="w-full flex flex-wrap ">
                <div className="h-full w-full">
                    <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                        <ProfileFormSkeleton />
                    </div>
                </div>
            </section>
        );
    }

    let mintedProfileList = () => {
        if (!isProfileListLoading && !profileListError && Profiles) {
            const mintedProfileList = Profiles?.map((profile: any) => {
                return (
                    <ProfilePreview
                        userProfile={profile}
                        key={profile.handle}
                    />
                );
            });

            return mintedProfileList;
        } else return <></>;
    };

    return (
        <section className="w-full  flex flex-wrap ">
            <div className=" h-full w-full">
                <div className="w-full flex justify-center ">
                    <Transition
                        nodeRef={null}
                        in={!profileCreated}
                        timeout={400}
                        className="my-10"
                    >
                        {(state) => (
                            <Link
                                href="/app"
                                className={
                                    state == "exited"
                                        ? "opacity-0 h-0 transition-all 400ms"
                                        : "opacity-100 transition-all 400ms my-2" +
                                          "z-0 font-extrabold text-5xl text-center pt-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                                }
                            >
                                Create Your Profile and Mint Now
                            </Link>
                        )}
                    </Transition>
                </div>

                <div className="w-full mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <h1 className={" font-bold text-4xl mb-4 text-center py-5"}>
                        Minted Profiles
                    </h1>
                    <div className="grid grid-cols-3 grid-flow-row gap-4">
                        {mintedProfileList()}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export async function getServerSideProps(context: any) {
    //TODO Fix this type
    const session: any = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );

    const user = session?.user ? session.user : { id: "default" };

    const userProfile = await getProfileByUserIdQuery(user.id as string);

    return {
        props: {
            profileCreated: userProfile !== null,
        },
    };
}
