type Profile = {
    handle: string;

    title: string;
    summary: string;

    jobType: string;
    preLocation: string;
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

export type { Profile };
