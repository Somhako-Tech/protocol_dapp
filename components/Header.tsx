import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import UserDropdownButton from "./UserDropdownButton";
import Link from "next/link";
import { useProfileStore } from "../store";

export default function Header({ handle }: { handle: string | null }) {
    const handleLink = `/u/${handle}`;
    return (
        <section className="w-full flex flex-wrap px-4 items-center justify-center max-h-[200px]">
            <div className="w-full lg:max-w-80 ">
                <div className="bg-white shadow-normal border-4 border-somhakohr2 rounded-[50px] p-6 center flex-col justify-center items-center">
                    <div className="flex justify-between items-center ">
                        <div className="font-semibold text-lg  max-h-[200px]">
                            <Logo width={200} height={200} />
                        </div>

                        <div className="flex items-center justify-center">
                            <UserDropdownButton
                                handleLink={handleLink}
                                signOut={signOut}
                            />

                            <div className="font-semibold text-lg">
                                <ConnectButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
