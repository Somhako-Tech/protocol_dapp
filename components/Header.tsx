import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import UserDropdownButton from "./UserDropdownButton";
import Link from "next/link";
import { useProfileStore } from "../store";

export default function Header() {
    return (
        <section className="mt-0 flex max-h-[200px] w-full flex-wrap items-center justify-center ">
            <div className="lg:max-w-80 w-full ">
                <div className="shadow-normal bg-white px-6 py-4 ">
                    <div className="flex items-center justify-between ">
                        <div className="flex flex-row items-center justify-between">
                            <div className="max-h-[200px] text-lg  font-semibold">
                                <Logo width={200} height={200} />
                            </div>
                            <Link
                                href="/explore"
                                className="ml-10 hover:text-[#6D27F9] inline-flex items-center font-medium"
                            >
                                Explore
                            </Link>
                        </div>

                        <div className="flex items-center justify-center">
                            <UserDropdownButton signOut={signOut} />

                            <div className="text-lg font-semibold">
                                <ConnectButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
