import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import React from "react";

import { getProfileByHandleIdQuery } from "../../graphql/graphqlQueries";
import { useRouter } from "next/router";
import ProfileSummary from "../../components/ProfileSummary";
import { useQuery } from "@tanstack/react-query";
import { ProfileSummarySkeleton } from "../../components/skeletons";
import { Profile } from "@prisma/client";

export default function UserPage() {
    const router = useRouter();
    const { handle } = router.query;

    const {
        data: Profile,
        isLoading: isProfileQueryLoading,
        isError: isQueryError,
    } = useQuery(["getProfileByHandle", handle as string], () =>
        getProfileByHandleIdQuery((handle as string) || "default")
    );
    return (
        <section className="w-full flex flex-wrap ">
            <div className="h-full w-full">
                <div className="w-full max-w-[800px] mx-auto text-black	 bg-white shadow-normal  rounded-[25px] p-8 md:py-14 md:px-20">
                    <div className="flex-col items-center justify-center">
                        {isProfileQueryLoading ? (
                            <ProfileSummarySkeleton />
                        ) : (
                            <ProfileSummary userProfile={Profile as Profile} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
