import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@prisma/client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./components.module.css";

interface ProfileWithImage extends Profile {
    user: { image: string };
}
const ProfilePreview = ({ userProfile }: { userProfile: ProfileWithImage }) => {
    const education = (userProfile.education as any).map(
        (education: { institution: string; year: string; title: string }) => (
            <div key={education.institution}>
                <label className="mb-2 inline-block text-lg font-semibold capitalize leading-none">
                    {education.institution} ({education.year.split("-")[0]})
                </label>
                <label className="mx-4 inline-block w-auto text-base font-normal capitalize leading-none">
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
    );

    return (
        <div className="relative" key={userProfile.id}>
            <div className="shadow-normal bg-opacity-98 absolute inset-0 z-10 mb-6 flex min-h-[350px] flex-col justify-evenly rounded-[30px] border bg-white  py-6 px-16 pb-6 text-center opacity-0 shadow-slate-200 duration-300 hover:opacity-100 hover:shadow-2xl">
                <div className="my-2">
                    <label className="mb-2 inline-block text-lg font-medium leading-none">
                        Experience
                    </label>
                    <label className="mx-4 inline-block w-auto text-base font-normal leading-none">
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
            <div className="shadow-normal mb-6 flex min-h-[350px] flex-col justify-start rounded-[30px] border bg-white py-6 px-16 pb-6 text-center shadow-slate-200 hover:shadow-2xl">
                <div className="flex-col items-center justify-between">
                    <div className="mb-3 flex justify-center pb-2">
                        {userProfile.user.image ? (
                            <Image
                                src={
                                    "https://gateway.pinata.cloud/ipfs/" +
                                    userProfile.ipfs_hash
                                }
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
                    <h1 className="mb-2 inline-block text-xl font-medium leading-none">
                        @{userProfile.handle}
                    </h1>
                    <h2 className="mb-2 text-xl font-medium leading-none ">
                        {userProfile.title}
                    </h2>
                    <div className="my-2" key="summary">
                        <label id={"summary"} className={styles.profileText}>
                            {userProfile.summary.length > 120
                                ? userProfile.summary.slice(0, 80) + "..."
                                : userProfile.summary}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePreview;
