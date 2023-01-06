// useRequest.js

import { useQuery, gql } from "@apollo/client";
import { graphql } from "./gql";
import { request } from "graphql-request";
import { Prisma, Profile } from "@prisma/client";

const API_URL = `http://localhost:3030/graphql`;

export const getProfileByUserIdQueryDocument = graphql(`
    query getProfileById($user_id: String!) {
        getProfile(where: { user_id: $user_id }) {
            minted
            handle
        }
    }
`);

export const getProfileByHandleQueryDocument = graphql(`
    query getProfileByHandle($handle: String!) {
        getProfile(where: { handle: $handle }) {
            handle
        }
    }
`);

export const getProfileByHandleIdQuery = async (handle: string) => {
    const { getProfile } = await request(
        API_URL,
        getProfileByHandleQueryDocument,
        {
            handle: handle,
        }
    ).catch((err) => {
        return { getProfile: null };
    });

    return getProfile;
};

export const getProfileByUserIdQuery = async (user_id: string) => {
    const { getProfile } = await request(
        API_URL,
        getProfileByUserIdQueryDocument,
        {
            user_id: user_id,
        }
    ).catch((err) => {
        console.log(err);
        return { getProfile: null };
    });

    return getProfile;
};

export const getUserQueryDocument = graphql(`
    query getUser($id: String!) {
        getUser(where: { id: $id }) {
            created_at
            email
            emailVerified
            id
            is_admin
            name
            updated_at
        }
    }
`);

export const getUserQuery = async (id: string) => {
    const { getUser } = await request(API_URL, getUserQueryDocument, {
        id: id,
    }).catch((err) => {
        console.log(err);
        return { getUser: null };
    });

    return getUser;
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
        $link: String!
        $address: String!
        $education: [JSON!]!
        $experience: [JSON!]!
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
                link: $link
                address: $address
                education: { set: $education }
                experience: { set: $experience }
                minted: false
                user: { connect: { id: $user_id } }
            }
        ) {
            id
            handle
        }
    }
`);

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

export const createProfileQuery = async (user_id: string, profile: Profile) => {
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
            link: profile.link,
            address: profile.address,
            education: profile.education,
            experience: profile.experience,
            user_id: user_id,
        }
    ).catch((err) => {
        console.log(err);
        return { createOneProfile: null };
    });

    return createOneProfile;
};
