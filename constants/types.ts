type Profile = {
    handle: string;

    title: string;
    summary: string;

    job_type: string;
    pref_location: string;
    salary: string;
    years_of_exp: string;

    link: {};

    skills: Array<string>;

    education: Education[];

    experience: Experience[];

    address: string;
    user_id: string | "0";
};

type Education = {
    institution: string;

    title: string;

    year: string;
};

type Experience = {
    organization: string;
    startYear: string;
    endYear: string;
    title: string;
};

type Account = {
    id: number;
    compound_id: string;
    user_id: number;
    provider_type: string;
    provider_id: string;
    provider_account_id: string;
    refresh_token: string;
    access_token: string;
    access_token_expires: Date;
    created_at: Date;
    updated_at: Date;
};

type Session = {
    id: number;
    user_id: number;
    expires: Date;
    session_token: string;
    access_token: string;
    created_at: Date;
    updated_at: Date;
};

type User = {
    id: number;
    name: string;
    email: string;
    email_verified: Date;
    image: string;
    created_at: Date;
    updated_at: Date;
};

type ProfileStore = {
    handle: string;
    setHandle: (handle: string) => void;
};

type ReferralStore = {
    referredFrom: string;
    setReferredFrom: (handle: string) => void;
};
type MintStore = {
    minted: boolean;
    tokenId: number;
    handle: string;
    setMintedSuccessful: () => void;
    setTokenId: (id: number) => void;
    setHandle: (handle: string) => void;
};
export type {
    Profile,
    MintStore,
    User,
    Session,
    Account,
    ProfileStore,
    ReferralStore,
};
