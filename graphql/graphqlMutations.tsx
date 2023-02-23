// useRequest.js

import { useQuery, gql } from "@apollo/client";
import { graphql } from "./gql";
import { request } from "graphql-request";
import { Profile } from "@prisma/client";

const API_URL =
    process.env.NEXTAUTH_URL === undefined
        ? `/api/graphql`
        : `${process.env.NEXTAUTH_URL}/api/graphql`;

export const createReferralQueryDocument = graphql(`
    mutation createOneReferral($email: String!, $user_id: String!) {
        createOneReferral(
            data: { email: $email, user: { connect: { id: $user_id } } }
        ) {
            id
        }
    }
`);

export const createReferralQuery = async (user_id: string, email: string) => {
    const { createOneReferral } = await request(
        API_URL,
        createReferralQueryDocument,
        {
            email,
            user_id,
        }
    ).catch((err) => {
        console.log(err);
        return { createOneReferral: null };
    });

    return createOneReferral;
};

export const createProfileQueryDocument = graphql(`
    mutation CreateProfileMutation(
        $handle: String!
        $title: String!
        $summary: String!
        $job_type: String!
        $pref_location: String!
        $salary: String!
        $years_of_exp: String!
        $skills: [String!]!
        $link: [String!]!
        $address: String!
        $education: [JSON!]!
        $experience: [JSON!]!
        $ipfs_hash: String!
        $resume: String!
        $user_id: String!
    ) {
        createOneProfile(
            data: {
                handle: $handle
                title: $title
                summary: $summary
                job_type: $job_type
                pref_location: $pref_location
                salary: $salary
                years_of_exp: $years_of_exp
                skills: {set: $skills}
                link: {set: $link}
                address: $address
                education: { set: $education }
                experience: { set: $experience }
                minted: false
                ipfs_hash: $ipfs_hash
                resume: $resume
                user: { connect: { id: $user_id } }
            }
        ) {
            id
            handle
        }
    }
`);

export const createProfileQuery = async (user_id: string, profile: Profile) => {

    console.log({user_id, profile})
    const { createOneProfile } = await request(
        API_URL,
        createProfileQueryDocument,
        {
            handle: profile.handle,
            title: profile.handle,
            summary: profile.summary,
            job_type: profile.job_type,
            pref_location: profile.pref_location,
            salary: profile.salary,
            years_of_exp: profile.years_of_exp,
            skills: profile.skills,
            link: profile.link,
            address: profile.address,
            education: profile.education,
            experience: profile.experience,
            ipfs_hash: profile.ipfs_hash,
            resume: profile.resume,
            user_id: user_id,
        }
        
        
    ).catch((err) => {
        console.log(err);
        return { createOneProfile: null };
    });

    return createOneProfile;
};

const updateProfileMintingMutationDocument = graphql(`
    mutation updateProfileMintingMutation(
        $user_id: String!
        $minted: Boolean!
    ) {
        updateOneProfile(
            data: { minted: { set: $minted } }
            where: { user_id: $user_id }
        ) {
            id
            user {
                email
            }
        }
    }
`);

export const updateProfileMintingMutation = async (
    user_id: string,
    minted: boolean
) => {
    const { updateOneProfile } = await request(
        API_URL,
        updateProfileMintingMutationDocument,
        {
            user_id: user_id,
            minted: minted,
        }
    ).catch((err) => {
        console.log(err);
        return { updateOneProfile: null };
    });

    return updateOneProfile;
};
