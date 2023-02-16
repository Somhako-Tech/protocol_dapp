import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import * as changeCase from "change-case";
import { ProfileFormSkeleton } from "./skeletons";
import styles from "./components.module.css";
import { BigClipLoader } from "./Loader";

export default function ProfileSummary({
    profile,
    handleMint,
    handleRejection,
}: {
    profile: Profile;
    handleMint: (profile: Profile) => void;
    handleRejection: (profile: Profile) => void;
}) {
    const [handlingSubmit, setHandlingSubmit] = useState(false);

    const getExperience = (profile: Profile) =>
        profile.experience.map((experience: any, key) => (
            <div key={key} className="my-2">
                <label className="mb-2 inline-block  text-lg font-bold leading-none">
                    Experience #{key + 1}
                </label>
                <div
                    className="my-6  flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="organization"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Organization
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {experience.organization}
                    </label>
                </div>
                <div
                    className="my-6 flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="startYear"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Start Year
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {experience.startYear}
                    </label>
                </div>
                <div
                    className="my-6  flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="endYear"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        End Year
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {experience.endYear}
                    </label>
                </div>
                <div
                    className="my-6  flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="title"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Title
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {experience.title}
                    </label>
                </div>
            </div>
        ));

    const getEducation = (profile: Profile) =>
        profile.education.map((education: any, key) => (
            <div key={key} className="my-2">
                <label className="my-6 mb-2 inline-block text-lg font-bold leading-none">
                    Education #{key + 1}
                </label>
                <div
                    className="my-6 flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="institution"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Institution
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {education.institution}
                    </label>
                </div>
                <div
                    className="my-6 flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="title"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Title
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {education.title}
                    </label>
                </div>
                <div
                    className="my-6  flex items-center justify-between"
                    key={key}
                >
                    <label
                        htmlFor="year"
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Year
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {education.year}
                    </label>
                </div>
            </div>
        ));

    const getSkills = (profile: Profile) =>
        profile.skills.map((skill, key) => (
            <div key={key}>
                <div className="my-1">
                    <label
                        htmlFor={key.toString()}
                        className="mb-2 inline-block font-medium leading-none"
                    >
                        Skill #{key + 1}
                    </label>
                    <label
                        id={key.toString()}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {skill}
                    </label>
                </div>
            </div>
        ));

    const ProfileInfo = profile ? (
        Object.keys(profile).map((key) => {
            if (key === "experience") return getExperience(profile);
            if (key === "education") return getEducation(profile);
            if (key === "skills") return getSkills(profile);
            if (
                key === "user_id" ||
                key === "minted" ||
                key === "key" ||
                key === "user"
            )
                return;

            if (key === "link") {
                const links = profile.link as any;

                const linkList = links;

                return Object.keys(linkList).map(
                    (item: string) =>
                        linkList[item] !== "" && (
                            <div className="my-2" key={item}>
                                <label
                                    htmlFor={key}
                                    className={styles.profileLabel}
                                >
                                    {item}
                                </label>
                                <label
                                    id={key}
                                    className="mx-4 w-auto text-base font-medium "
                                >
                                    {linkList[item]}
                                </label>
                            </div>
                        )
                );
            }

            let label: string = changeCase.sentenceCase(key);
            const value: string | undefined =
                profile[key as keyof Profile]?.toString();

            console.log({ key, value });
            if (!value) return;
            if (key === "pref_location") label = "Preferred Location";

            return (
                <div className="my-2" key={key}>
                    <label htmlFor={key} className={styles.profileLabel}>
                        {label}
                    </label>
                    <label
                        id={key}
                        className="mx-4 w-auto text-base font-medium "
                    >
                        {value}
                    </label>
                </div>
            );
        })
    ) : (
        <ProfileFormSkeleton />
    );

    if (handlingSubmit)
        return (
            <div className="w-full">
                <div className="my-4 mx-auto flex max-w-[700px] flex-col items-center justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                    <h2 className="mb-4 text-lg font-semibold md:text-3xl">
                        Minting Profile{" "}
                        <span className="font-thin italic">
                            {" "}
                            ID: {profile.user_id}
                        </span>
                    </h2>
                    <BigClipLoader />
                </div>
            </div>
        );

    return (
        <div className="w-full">
            <div className="my-4 mx-auto flex max-w-[700px] flex-col items-center justify-center rounded-[30px] border bg-gradient-to-r from-slate-50 to-slate-200 p-10 shadow-2xl shadow-slate-200">
                {/* className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] border border-slate-700 bg-white p-8 md:py-14 md:px-20"> */}
                <h2 className="mb-4 text-lg font-semibold md:text-3xl">
                    Profile Summary{" "}
                    <span className="font-thin italic">
                        {" "}
                        ID: {profile.user_id}
                    </span>
                </h2>
                <div className="grid">{ProfileInfo}</div>
                <div className="grid grid-cols-2 gap-20 pt-11">
                    <button
                        onClick={() => {
                            handleRejection(profile);
                            setHandlingSubmit(true);
                        }}
                        className=" rounded-full bg-gradient-to-r from-[#a85959] to-somhakohr py-2.5 px-6 font-bold text-white transition-all hover:from-[#391188] hover:to-[#391188] md:min-w-[150px]"
                    >
                        Reject
                    </button>
                    <button
                        onClick={() => {
                            handleMint(profile);
                            setHandlingSubmit(true);
                        }}
                        className=" rounded-full bg-gradient-to-r from-[#6D27F9] to-somhakohr py-2.5 px-6 font-bold text-white transition-all hover:from-[#391188] hover:to-[#391188] md:min-w-[150px]"
                    >
                        Approve
                    </button>
                </div>
            </div>
        </div>
    );
}
