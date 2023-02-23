import { Profile } from "@prisma/client";
import Validator, { Rules } from "validatorjs";

const profileFormRules: Rules = {
    id: "required",
    minted: "required",
    handle: "required|min:5",
    title: "required",
    summary: "required",
    job_type: "required",
    pref_location: "required",
    salary: "required",
    years_of_exp: "required",
    link: { Twitter: "required", Github: "required", LinkedIn: "required" },
    skills: "array|min:3",
    "education.*": {
        institution: "required",
        year: "required|date",
        title: "required",
    },
    "experience.*": {
        organization: "required",
        startYear: "required|date",
        endYear: "required|date",
        title: "required",
    },
    address: "required",
    ipfs_hash: "required",
    resume: "required",
    user_id: "required",
};

export const singleFieldValidation = ({
    key,
    value,
}: {
    key: keyof Profile;
    value: any;
}) => {
    const validationResponse: any = { isValid: true };
    if (profileFormRules[key]) {
        const validation = new Validator(
            { [key]: value },
            { [key]: profileFormRules[key] }
        );
        validationResponse.isValid = validation.passes();
        if (!validationResponse.isValid) {
            validationResponse.errors = validation.errors.all();
        }
    }
    return validationResponse;
};

export const allFieldsValidation = (data: Profile) => {
    const validation = new Validator(data, profileFormRules);
    const validationResponse: any = { isValid: validation.passes() };
    if (!validationResponse.isValid) {
        validationResponse.errors = validation.errors.all();
    }
    return validationResponse;
};
