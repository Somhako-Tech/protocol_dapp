import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import UserDropdownButton from "./UserDropdownButton";
import Link from "next/link";
import { useProfileStore } from "../store";
import { Fragment, useEffect, useState } from "react";

export default function Header() {
    const [smallMenu, toggleSmallMenu] = useState(false);
    return (
        <header>
            <div className="min-h-[80px]"></div>
            <div className="min-h-[80px] flex items-center bg-white dark:bg-gray-800 shadow-md py-3 absolute w-full top-0 left-0">
                <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-wrap items-center justify-between">
                    <div className="mr-6">
                        <Logo width={200} height={200} />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                        <div className="relative mr-2 flex-1 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => toggleSmallMenu(!smallMenu)}
                                className="md:hidden text-2xl flex text-black ml-auto"
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div
                                className={`w-[250px] md:w-full flex md:flex-row flex-col md:items-center md:justify-between w-full absolute md:static top-[110%] z-10 right-[-72px] sm:right-0 p-4 md:p-0 bg-white dark:bg-gray-700 shadow-normal md:shadow-none rounded-lg md:rounded-[0px] ${
                                smallMenu ? "flex" : "hidden md:flex"
                                }`}
                            >
                                <Link
                                    href="/explore"
                                    className="hover:text-[#6D27F9] inline-block font-medium mb-4 md:mb-0"
                                >
                                    Explore
                                </Link>
                                <div className="connectBtn inline-block">
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <UserDropdownButton signOut={signOut} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
