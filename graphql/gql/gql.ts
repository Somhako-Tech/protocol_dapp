/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    mutation createOneReferral($email: String!, $user_id: String!) {\n        createOneReferral(\n            data: { email: $email, user: { connect: { id: $user_id } } }\n        ) {\n            id\n        }\n    }\n": types.CreateOneReferralDocument,
    "\n    mutation CreateProfileMutation(\n        $handle: String!\n        $title: String!\n        $summary: String!\n        $job_type: String!\n        $pref_location: String!\n        $salary: String!\n        $years_of_exp: String!\n        $skills: [String!]!\n        $link: [String!]!\n        $address: String!\n        $education: [JSON!]!\n        $experience: [JSON!]!\n        $ipfs_hash: String!\n        $resume: String!\n        $user_id: String!\n    ) {\n        createOneProfile(\n            data: {\n                handle: $handle\n                title: $title\n                summary: $summary\n                job_type: $job_type\n                pref_location: $pref_location\n                salary: $salary\n                years_of_exp: $years_of_exp\n                skills: {set: $skills}\n                link: {set: $link}\n                address: $address\n                education: { set: $education }\n                experience: { set: $experience }\n                minted: false\n                ipfs_hash: $ipfs_hash\n                resume: $resume\n                user: { connect: { id: $user_id } }\n            }\n        ) {\n            id\n            handle\n        }\n    }\n": types.CreateProfileMutationDocument,
    "\n    mutation updateProfileMintingMutation(\n        $user_id: String!\n        $minted: Boolean!\n    ) {\n        updateOneProfile(\n            data: { minted: { set: $minted } }\n            where: { user_id: $user_id }\n        ) {\n            id\n            user {\n                email\n            }\n        }\n    }\n": types.UpdateProfileMintingMutationDocument,
    "\n    query getProfileByHandle($handle: String!) {\n        getProfile(where: { handle: $handle }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            minted\n            ipfs_hash\n        }\n    }\n": types.GetProfileByHandleDocument,
    "\n    query getProfileById($user_id: String!) {\n        getProfile(where: { user_id: $user_id }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            link\n            minted\n            ipfs_hash\n            resume\n            user_id\n            user {\n                email\n            }\n        }\n    }\n": types.GetProfileByIdDocument,
    "\n    query getUserById($id: String!) {\n        getUser(where: { id: $id }) {\n            created_at\n            email\n            emailVerified\n            id\n            image\n            is_admin\n            name\n            updated_at\n        }\n    }\n": types.GetUserByIdDocument,
    "\n    query getUserByEmail($email: String!) {\n        getUser(where: { email: $email }) {\n            created_at\n            email\n            emailVerified\n            id\n            is_admin\n            name\n            updated_at\n        }\n    }\n": types.GetUserByEmailDocument,
    "\n    query getProfiles {\n        profiles {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            years_of_exp\n            resume\n            user {\n                image\n                email\n            }\n        }\n    }\n": types.GetProfilesDocument,
    "\n    query getMintedProfiles {\n        profiles(where: { minted: { equals: true } }) {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            resume\n            years_of_exp\n            user {\n                image\n            }\n        }\n    }\n": types.GetMintedProfilesDocument,
    "\n    query getReferralCount($user_id: String!) {\n        aggregateReferral(where: { user_id: { equals: $user_id } }) {\n            _count {\n                user_id\n            }\n        }\n    }\n": types.GetReferralCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createOneReferral($email: String!, $user_id: String!) {\n        createOneReferral(\n            data: { email: $email, user: { connect: { id: $user_id } } }\n        ) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation createOneReferral($email: String!, $user_id: String!) {\n        createOneReferral(\n            data: { email: $email, user: { connect: { id: $user_id } } }\n        ) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateProfileMutation(\n        $handle: String!\n        $title: String!\n        $summary: String!\n        $job_type: String!\n        $pref_location: String!\n        $salary: String!\n        $years_of_exp: String!\n        $skills: [String!]!\n        $link: [String!]!\n        $address: String!\n        $education: [JSON!]!\n        $experience: [JSON!]!\n        $ipfs_hash: String!\n        $resume: String!\n        $user_id: String!\n    ) {\n        createOneProfile(\n            data: {\n                handle: $handle\n                title: $title\n                summary: $summary\n                job_type: $job_type\n                pref_location: $pref_location\n                salary: $salary\n                years_of_exp: $years_of_exp\n                skills: {set: $skills}\n                link: {set: $link}\n                address: $address\n                education: { set: $education }\n                experience: { set: $experience }\n                minted: false\n                ipfs_hash: $ipfs_hash\n                resume: $resume\n                user: { connect: { id: $user_id } }\n            }\n        ) {\n            id\n            handle\n        }\n    }\n"): (typeof documents)["\n    mutation CreateProfileMutation(\n        $handle: String!\n        $title: String!\n        $summary: String!\n        $job_type: String!\n        $pref_location: String!\n        $salary: String!\n        $years_of_exp: String!\n        $skills: [String!]!\n        $link: [String!]!\n        $address: String!\n        $education: [JSON!]!\n        $experience: [JSON!]!\n        $ipfs_hash: String!\n        $resume: String!\n        $user_id: String!\n    ) {\n        createOneProfile(\n            data: {\n                handle: $handle\n                title: $title\n                summary: $summary\n                job_type: $job_type\n                pref_location: $pref_location\n                salary: $salary\n                years_of_exp: $years_of_exp\n                skills: {set: $skills}\n                link: {set: $link}\n                address: $address\n                education: { set: $education }\n                experience: { set: $experience }\n                minted: false\n                ipfs_hash: $ipfs_hash\n                resume: $resume\n                user: { connect: { id: $user_id } }\n            }\n        ) {\n            id\n            handle\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateProfileMintingMutation(\n        $user_id: String!\n        $minted: Boolean!\n    ) {\n        updateOneProfile(\n            data: { minted: { set: $minted } }\n            where: { user_id: $user_id }\n        ) {\n            id\n            user {\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation updateProfileMintingMutation(\n        $user_id: String!\n        $minted: Boolean!\n    ) {\n        updateOneProfile(\n            data: { minted: { set: $minted } }\n            where: { user_id: $user_id }\n        ) {\n            id\n            user {\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProfileByHandle($handle: String!) {\n        getProfile(where: { handle: $handle }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            minted\n            ipfs_hash\n        }\n    }\n"): (typeof documents)["\n    query getProfileByHandle($handle: String!) {\n        getProfile(where: { handle: $handle }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            minted\n            ipfs_hash\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProfileById($user_id: String!) {\n        getProfile(where: { user_id: $user_id }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            link\n            minted\n            ipfs_hash\n            resume\n            user_id\n            user {\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    query getProfileById($user_id: String!) {\n        getProfile(where: { user_id: $user_id }) {\n            id\n            handle\n            title\n            summary\n            job_type\n            pref_location\n            salary\n            years_of_exp\n            skills\n            experience\n            education\n            address\n            link\n            minted\n            ipfs_hash\n            resume\n            user_id\n            user {\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserById($id: String!) {\n        getUser(where: { id: $id }) {\n            created_at\n            email\n            emailVerified\n            id\n            image\n            is_admin\n            name\n            updated_at\n        }\n    }\n"): (typeof documents)["\n    query getUserById($id: String!) {\n        getUser(where: { id: $id }) {\n            created_at\n            email\n            emailVerified\n            id\n            image\n            is_admin\n            name\n            updated_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserByEmail($email: String!) {\n        getUser(where: { email: $email }) {\n            created_at\n            email\n            emailVerified\n            id\n            is_admin\n            name\n            updated_at\n        }\n    }\n"): (typeof documents)["\n    query getUserByEmail($email: String!) {\n        getUser(where: { email: $email }) {\n            created_at\n            email\n            emailVerified\n            id\n            is_admin\n            name\n            updated_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProfiles {\n        profiles {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            years_of_exp\n            resume\n            user {\n                image\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    query getProfiles {\n        profiles {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            years_of_exp\n            resume\n            user {\n                image\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getMintedProfiles {\n        profiles(where: { minted: { equals: true } }) {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            resume\n            years_of_exp\n            user {\n                image\n            }\n        }\n    }\n"): (typeof documents)["\n    query getMintedProfiles {\n        profiles(where: { minted: { equals: true } }) {\n            address\n            education\n            experience\n            handle\n            id\n            job_type\n            link\n            minted\n            pref_location\n            salary\n            skills\n            summary\n            title\n            ipfs_hash\n            user_id\n            resume\n            years_of_exp\n            user {\n                image\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getReferralCount($user_id: String!) {\n        aggregateReferral(where: { user_id: { equals: $user_id } }) {\n            _count {\n                user_id\n            }\n        }\n    }\n"): (typeof documents)["\n    query getReferralCount($user_id: String!) {\n        aggregateReferral(where: { user_id: { equals: $user_id } }) {\n            _count {\n                user_id\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;