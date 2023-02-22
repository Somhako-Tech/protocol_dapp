import { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import { Profile } from "@prisma/client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useQuery } from "@tanstack/react-query";
import { ProfileFormSkeleton } from "../../components/skeletons";
import {
    axiosAPIInstance,
    axiosContractInstance,
} from "../../constants/axiosInstances";
import ProfileReview from "../../components/ProfileReview";
import { getProfilesQuery } from "../../graphql/graphqlQueries";
import { updateProfileMintingMutation } from "../../graphql/graphqlMutations";
import { useQueryClient } from "@tanstack/react-query";
import emails from "../../constants/email";
import { BigClipLoader } from "../../components/Loader";
export default function Explore() {
    const queryClient = useQueryClient();

    const {
        isLoading: isProfilesLoading,
        isError: profileListError,
        data: profiles,
    } = useQuery(["getProfiles"], async () => getProfilesQuery());

    if (isProfilesLoading) {
        return <BigClipLoader color="tertiary" />;
    }
    let profileList;

    const handleMint = async (profile: Profile) => {
        const response = await axiosContractInstance.post("/contract", {
            handle: profile.handle,
            address: profile.address,
            user_id: profile.user_id,
            ipfs_hash: profile.ipfs_hash,
            education: profile.education,
            experience: profile.experience,
        });

        if (response.data.success) {
            const updatedProfile = await updateProfileMintingMutation(
                profile.user_id,
                true
            );

            const resp = await axiosAPIInstance.post("/mail", {
                to: updatedProfile?.user.email,
                subject: emails.profileMinted.subject,
                html: emails.profileMinted.html,
            });
            if (resp.data.success)
                queryClient.invalidateQueries({ queryKey: ["getProfiles"] });
        } else console.log(response.data);

        return;
    };
    const handleRejection = (profile: Profile) => console.log(profile);

    if (!isProfilesLoading && !profileListError && profiles) {
        profileList = profiles?.map(
            (profile: any) =>
                profile && (
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
        <section className="flex w-full flex-wrap ">
            <div className="h-full w-full">
                <h1
                    className={
                        " mb-4 py-5 text-center text-4xl font-bold text-white"
                    }
                >
                    Profiles In Queue
                </h1>
                {profileList}
            </div>
        </section>
    );
}

import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getUserQuery } from "../../graphql/graphqlQueries";

export async function getServerSideProps(context: any) {
    const session: any = await getServerSession(
        context.req,
        context.res,
        authOptions
    );

    const user = session?.user ? session.user : { id: "default" };

    const getUser = async () => getUserQuery(user.id as string);
    const loggedInUser = await getUser();

    if (!loggedInUser?.is_admin)
        return {
            redirect: {
                destination: "/explore",
                permanent: false,
            },
        };

    return {
        props: {},
    };
}
