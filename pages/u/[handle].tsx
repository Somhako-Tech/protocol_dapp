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
        <section className="flex w-full flex-wrap ">
            <div className="h-full w-full">
                <div className="shadow-normal mx-auto w-full max-w-[800px]	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
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
