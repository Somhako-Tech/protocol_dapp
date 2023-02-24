import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "ethers";
import { Profile } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
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
import ReactPaginate from "react-paginate";

export default function Explore() {
    const queryClient = useQueryClient();

    const {
        isLoading: isProfilesLoading,
        isError: profileListError,
        data: profiles,
    } = useQuery(["getProfiles"], async () => getProfilesQuery());

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

    let profileList: any[] = [];
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    if (!isProfilesLoading && !profileListError && profiles) {
        profileList = profiles?.map(
            (profile: any) =>
                profile && !profile.minted && (
                    <ProfileReview
                        profile={profile}
                        key={profile.handle}
                        handleMint={handleMint}
                        handleRejection={handleRejection}
                    />
                )
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    const currentList = profileList?.slice(itemOffset, endOffset);
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        setPageCount(profileList.length / itemsPerPage);
    }, [profileList.length])


    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % profileList.length;

        setItemOffset(newOffset);
        window.scrollTo(0, 0)

    };

    if (isProfilesLoading) {
        return <BigClipLoader color="tertiary" />;
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
                {currentList}
                <div className="p-10">
                    <ReactPaginate
                        activeClassName="px-4 py-2 rounded-full bg-secondary text-white"
                        breakLabel="..."
                        nextLabel=">"
                        nextClassName="px-4 py-2 bg-white rounded-full font-bold shadow-md mx-5"
                        previousLabel="<"
                        previousClassName="px-4 py-2 bg-white rounded-full font-bold shadow-md mx-5"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        pageClassName="mx-2 text-white"
                        containerClassName="w-max-[500px] flex flex-row items-center justify-center"
                    />
                </div>
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
