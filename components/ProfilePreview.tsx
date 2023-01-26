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

const ProfilePreview = ({ userProfile }: { userProfile: Profile }) => {
    const [image, setImage] = useState("");

    const { isLoading: isUserQueryLoading, data: User } = useQuery(
        ["getUser", userProfile.user_id as string],
        async () => getUserQuery((userProfile.user_id as string) || "default")
    );

    useEffect(() => {
        if (!isUserQueryLoading) setImage(User?.image as string);
    }, [User?.image, isUserQueryLoading]);

    if (!userProfile) return <></>;

    return (
        <div className="relative" key={userProfile.id}>
            <div className=" shadow-normal border shadow-slate-200 rounded-[30px] py-6 px-16 mb-6 text-center hover:shadow-2xl h-72 absolute inset-0 z-10 opacity-0 hover:opacity-100 bg-white bg-opacity-98 duration-300">
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
                <div className="my-2">
                    <label className="font-medium text-lg mb-2 leading-none inline-block">
                        Experience
                    </label>
                    <label className="font-medium text-base w-auto mx-4 leading-none inline-block">
                        {userProfile.years_of_exp}
                    </label>
                </div>
                <div className="my-2">
                    <label className="font-medium text-lg mb-2 leading-none inline-block">
                        Links
                    </label>
                    <label className="font-medium text-base w-auto mx-4 flex flex-row justify-center">
                        {userProfile.link &&
                            Object.keys(userProfile.link as any).map(
                                (linkName: string) =>
                                    (userProfile?.link as any)[linkName] !==
                                        "" && (
                                        <Link
                                            href={
                                                (userProfile?.link as any)[
                                                    linkName
                                                ]
                                            }
                                            key={linkName}
                                            className="p-1"
                                        >
                                            {linkName === "Github" ? (
                                                <Image
                                                    src="/images/github_icon.png"
                                                    width={30}
                                                    height={30}
                                                    alt="Github Icon"
                                                />
                                            ) : linkName === "LinkedIn" ? (
                                                <Image
                                                    src="/images/linkedin_icon.png"
                                                    width={30}
                                                    height={30}
                                                    alt="Github Icon"
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </Link>
                                    )
                            )}
                    </label>
                </div>
            </div>
            <div className="bg-white shadow-normal border shadow-slate-200 rounded-[30px] py-6 px-16 mb-6 text-center hover:shadow-2xl h-72">
                <div className="flex-col items-center justify-between">
                    <div className="flex justify-center mb-3 pb-2">
                        {image ? (
                            <Image
                                src={image}
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
                </div>
            </div>
        </div>
    );
};

export default ProfilePreview;
