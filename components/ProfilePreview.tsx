import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@prisma/client";
import {
    getProfileByUserIdQuery,
    getUserQuery,
} from "../graphql/graphqlQueries";
import { useQuery } from "@tanstack/react-query";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface ProfileWithImage extends Profile {
    user: { image: string };
}
const ProfilePreview = ({ userProfile }: { userProfile: ProfileWithImage }) => {
    const education = (userProfile.education as any).map(
        (education: { institution: string; year: string; title: string }) => (
            <div key={education.institution}>
                <label className="font-semibold text-lg mb-2 leading-none inline-block capitalize">
                    {education.institution} ({education.year.split("-")[0]})
                </label>
                <label className="font-normal text-base w-auto mx-4 leading-none inline-block capitalize">
                    {education.title}
                </label>
            </div>
        )
    );

    const experience = (userProfile.experience as any).map(
        (experience: {
            organization: string;
            startYear: string;
            endYear: string;
            title: string;
        }) => (
            <div key={experience.organization}>
                <label className="font-semibold text-lg mb-2 leading-none inline-block capitalize">
                    {experience.organization} (
                    {experience.startYear.split("-")[0]} -
                    {experience.endYear.split("-")[0]})
                </label>
                <label className="font-normal text-base w-auto mx-4 leading-none inline-block capitalize">
                    {experience.title}
                </label>
            </div>
        )
    );

    return (
        <div className="relative" key={userProfile.id}>
            <div className="flex flex-col justify-evenly shadow-normal border shadow-slate-200 rounded-[30px] py-6 px-16 mb-6 text-center hover:shadow-2xl h-72 absolute inset-0 z-10 opacity-0 hover:opacity-100 bg-white bg-opacity-98 duration-300">
                <div className="my-2">
                    <label className="font-medium text-lg mb-2 leading-none inline-block">
                        Experience
                    </label>
                    <label className="font-normal text-base w-auto mx-4 leading-none inline-block">
                        {userProfile.years_of_exp}
                    </label>
                </div>
                <div className="my-2">{experience}</div>
                <div className="my-2">{education}</div>
                <Link
                    href={`/u/${userProfile.handle}`}
                    className="font-normal text-somhakohr"
                >
                    {"More >"}
                </Link>
            </div>
            <div className="flex flex-col justify-evenly bg-white shadow-normal border shadow-slate-200 rounded-[30px] py-6 px-16 mb-6 text-center hover:shadow-2xl h-72">
                <div className="flex-col items-center justify-between">
                    <div className="flex justify-center mb-3 pb-2">
                        {userProfile.user.image ? (
                            <Image
                                src={userProfile.user.image}
                                alt={userProfile.handle}
                                className="rounded-full"
                                width={100}
                                height={60}
                            />
                        ) : (
                            <AccountCircleIcon
                                sx={{ fontSize: 100, color: "purple" }}
                            />
                        )}
                    </div>
                    <h1 className="font-medium text-xl mb-2 leading-none inline-block">
                        @{userProfile.handle}
                    </h1>
                    <h2 className="font-medium mb-2 text-xl leading-none ">
                        {userProfile.title}
                    </h2>
                    <div className="my-2" key="summary">
                        <label
                            htmlFor="summary"
                            className="font-medium text-lg mb-2 leading-none inline-block"
                        >
                            Summary
                        </label>
                        <label
                            id={"summary"}
                            className="font-medium text-base w-auto mx-4 "
                        >
                            {userProfile.summary.slice(0, 40) + "..."}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePreview;
