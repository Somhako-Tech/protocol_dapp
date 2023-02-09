import { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import { Profile } from "../../constants/types";

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
export default function Home() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { data: session } = useSession();

    const {
        isLoading: isProfilesLoading,
        isError: profileListError,
        data: Profiles,
    } = useQuery(["getProfiles"], async () => getProfilesQuery());

    if (isProfilesLoading) {
        return (
            <section className="flex w-full flex-wrap ">
                <div className=" h-full w-full">
                    <div className="shadow-normal mx-auto w-full	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
                        <ProfileFormSkeleton />
                    </div>
                </div>
            </section>
        );
    }
    let profileList = <></>;

    const handleMint = async (profile: Profile) => {
        const { handle, address } = profile;

        //TODO Test with contract
        const response = await axiosContractInstance.post("/contract", {
            handle,
            address,
            id: profile.user_id,
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

    if (!isProfilesLoading && !profileListError && Profiles) {
        profileList = (
            <>
                {Profiles?.map((profile: any) =>
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
                )}
            </>
        );
    }

    return (
        <section className="flex w-full flex-wrap ">
            <div className="h-full w-full">
                <div className="shadow-normal mx-auto w-full max-w-5xl	 rounded-[25px] bg-white  p-8 text-black md:py-14 md:px-20">
                    <h1 className={" mb-4 py-5 text-center text-4xl font-bold"}>
                        Profiles In Queue
                    </h1>
                    {profileList}
                </div>
            </div>
        </section>
    );
}

import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getUserQuery } from "../../graphql/graphqlQueries";
import { Session, SessionStrategy } from "next-auth/core/types";

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
                destination: "/home",
                permanent: false,
            },
        };

    return {
        props: {},
    };
}
