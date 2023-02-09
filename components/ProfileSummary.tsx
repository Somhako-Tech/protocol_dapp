import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import * as changeCase from "change-case";
import { ProfileFormSkeleton } from "./skeletons";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import styles from "./components.module.css";

export default function ProfileSummary({
    userProfile,
}: {
    userProfile: Profile | undefined | null;
}) {
    const ListInfo = userProfile ? (
        Object.keys(userProfile).map((key) => {
            if (key === "id" || key === "handle" || key === "skills") return;

            if (key === "link") {
                const links = userProfile.link as any;

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

            if (key === "education")
                return (
                    <div className="py-1 text-center">
                        <label
                            className={styles.profileLabel + " pb-2 underline"}
                        >
                            Education
                        </label>
                        {(userProfile.education as any).map(
                            (education: {
                                institution: string;
                                year: string;
                                title: string;
                            }) => (
                                <div key={education.institution}>
                                    <label className="mb-2 inline-block text-lg font-semibold capitalize leading-none">
                                        {education.institution} (
                                        {education.year.split("-")[0]})
                                    </label>
                                    <label className="mx-4 inline-block w-auto text-base font-normal capitalize leading-none">
                                        {education.title}
                                    </label>
                                </div>
                            )
                        )}
                    </div>
                );

            if (key === "experience")
                return (
                    <div className="py-1 text-center">
                        <label
                            className={styles.profileLabel + " pb-2 underline"}
                        >
                            Experience
                        </label>
                        {(userProfile.experience as any).map(
                            (experience: {
                                organization: string;
                                startYear: string;
                                endYear: string;
                                title: string;
                            }) => (
                                <div key={experience.organization}>
                                    <label className="mb-2 inline-block text-lg font-semibold capitalize leading-none">
                                        {experience.organization} (
                                        {experience.startYear.split("-")[0]} -
                                        {experience.endYear.split("-")[0]})
                                    </label>
                                    <label className="mx-4 inline-block w-auto text-base font-normal capitalize leading-none">
                                        {experience.title}
                                    </label>
                                </div>
                            )
                        )}
                    </div>
                );

            let label: string = changeCase.sentenceCase(key);
            const value: string = userProfile[key as keyof Profile]!.toString();

            if (key === "minted") {
                return (
                    <div className="my-2" key={key}>
                        <label
                            htmlFor={key}
                            className="mb-2 inline-block pr-3 text-base font-medium leading-none"
                        >
                            {label}
                        </label>
                        <VerifiedUserIcon color="success" />
                    </div>
                );
            }
            if (key === "pref_location") label = "Preferred Location";
            if (key === "years_of_exp") label = "Years of Experience";

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
        <></>
    );

    if (!userProfile) return <ProfileFormSkeleton />;
    return (
        <div className="w-full">
            <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] border border-slate-700 bg-white p-8 md:py-14 md:px-20">
                <h2 className="mb-4 text-lg font-semibold md:text-3xl">
                    @{userProfile.handle}
                </h2>
                {ListInfo}
            </div>
        </div>
    );
}
