import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import * as changeCase from "change-case";
import { ProfileFormSkeleton } from "./skeletons";

export default function ProfileSummary({
    userProfile,
}: {
    userProfile: Profile | undefined | null;
}) {
    const ListInfo = userProfile ? (
        Object.keys(userProfile).map((key) => {
            if (
                key === "education" ||
                key === "experience" ||
                key === "years_of_exp" ||
                key === "skills"
            )
                return;

            let label: string = changeCase.sentenceCase(key);
            const value: string = userProfile[key as keyof Profile].toString();
            if (key === "pref_location") label = "Preferred Location";

            return (
                <div className="my-2" key={key}>
                    <label
                        htmlFor={key}
                        className="font-medium text-base mb-2 leading-none inline-block"
                    >
                        {label}
                    </label>
                    <label
                        id={key}
                        className="font-medium text-base w-auto mx-4 "
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
        <div className="container">
            <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 flex flex-col justify-center items-center">
                <h2 className="font-semibold text-lg md:text-3xl mb-4">
                    Profile Summary
                </h2>
                {ListInfo}
            </div>
        </div>
    );
}
