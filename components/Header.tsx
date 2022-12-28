import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import UserDropdownButton from "./UserDropdownButton";
import Link from "next/link";
import { useMintStore } from "../store";

export default function Header() {
    const [handle, minted] = useMintStore((state) => [
        state.handle,
        state.minted,
    ]);

    return (
        <section className="w-full flex flex-wrap px-4 items-center justify-center">
            <div className="w-full lg:max-w-80 ">
                <div className="bg-white shadow-normal border-4 border-somhakohr2 rounded-[50px] p-6 center flex-col justify-center items-center">
                    <div className="flex justify-between items-center ">
                        <div className="font-semibold text-lg">
                            <Logo />
                        </div>
                        {minted && (
                            <div>
                                <Link
                                    className="text-lg  mr-4 text-somhakohr font-medium rounded-full px-5 py-1.5 text-center "
                                    href={"/home"}
                                >
                                    Explore
                                </Link>

                                <Link
                                    className="text-lg  mr-4 text-somhakohr font-medium rounded-full px-5 py-1.5 text-center "
                                    href={`/u/${handle}`}
                                >
                                    My Profile
                                </Link>
                            </div>
                        )}
                        <div className="flex items-center justify-center">
                            <UserDropdownButton
                                handle={handle}
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