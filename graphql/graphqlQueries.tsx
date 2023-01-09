// useRequest.js

import { useQuery, gql } from "@apollo/client";
import { graphql } from "./gql";
import { request } from "graphql-request";
import { Prisma, Profile } from "@prisma/client";

const API_URL = `/api/graphql`;

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

export const getProfileByUserIdQueryDocument = graphql(`
    query getProfileById($user_id: String!) {
        getProfile(where: { user_id: $user_id }) {
            id
            handle
            title
            summary
            job_type
            pref_location
            salary
            years_of_exp
            skills
            experience
            education
            address
            link
            minted
            user_id
        }
    }
`);

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

export const getProfilesQueryDocument = graphql(`
    query getProfiles {
        profiles {
            address
            education
            experience
            handle
            id
            job_type
            link
            minted
            pref_location
            salary
            skills
            summary
            title
            user_id
            years_of_exp
        }
    }
`);

export const getProfilesQuery = async () => {
    const { profiles } = await request(API_URL, getProfilesQueryDocument).catch(
        (err) => {
            console.log(err);
            return { profiles: null };
        }
    );

    return profiles;
};

export const getReferralCountQueryDocument = graphql(`
    query getReferralCount($user_id: String!) {
        aggregateReferral(where: { user_id: { equals: $user_id } }) {
            _count {
                user_id
            }
        }
    }
`);

export const getReferralCountQuery = async (user_id: string) => {
    const { aggregateReferral } = await request(
        API_URL,
        getReferralCountQueryDocument,
        {
            user_id: user_id,
        }
    ).catch((err) => {
        console.log(err);
        return { aggregateReferral: null };
    });

    return aggregateReferral;
};
