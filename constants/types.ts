type Profile = {
    handle: string;

    title: string;
    summary: string;

    jobType: string;
    prefLocation: string;
    salary: string;
    yearsOfExp: string;

    link: string;

    skills: Array<string>;

    education: Education[];

    experience: Experience[];
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

type MintStore = {
    minted: boolean;
    tokenId: number;
    handle: string;
    setMintedSuccessful: () => void;
    setTokenId: (id: number) => void;
    setHandle: (handle: string) => void;
};
export type { Profile, MintStore };
