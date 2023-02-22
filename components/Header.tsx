import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import UserDropdownButton from "./UserDropdownButton";
import Link from "next/link";
import { useProfileStore } from "../store";
import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
    const [smallMenu, toggleSmallMenu] = useState(false);
    const { theme, setTheme } = useTheme();
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
                                className={`w-[250px] md:w-full flex md:flex-row flex-col md:items-center md:justify-between w-full absolute md:static top-[110%] z-10 right-[-72px] sm:right-0 p-4 md:p-0 shadow-normal md:shadow-none rounded-lg md:rounded-[0px] ${
                                smallMenu ? "flex" : "hidden md:flex"
                                }`}
                            >
                                <Link
                                    href="/explore"
                                    className="hover:text-secondary dark:text-white dark:hover:text-secondary inline-block font-medium mb-4 md:mb-0"
                                >
                                    Explore
                                </Link>
                                <div className="connectBtn inline-block">
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                        <div className="text-right flex items-center justify-end">
                            <UserDropdownButton signOut={signOut} />
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="w-[35px] text-black dark:text-white px-2 py-1 rounded ml-2"
                                onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                                }
                            >
                                {theme === "dark" ? (
                                <>
                                    <i className="fa-solid fa-moon"></i>
                                </>
                                ) : (
                                <>
                                    <i className="fa-solid fa-sun"></i>
                                </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
