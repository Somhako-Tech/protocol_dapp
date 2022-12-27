import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
    return (
        <section className="w-full flex flex-wrap px-4 items-center justify-center">
            <div className="w-full lg:max-w-80 ">
                <div className="bg-white shadow-normal border-4 border-somhakohr2 rounded-[50px] p-6 center flex-col justify-center items-center">
                    <div className="flex justify-between items-center ">
                        <div className="font-semibold text-lg">
                            <Logo />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="text-lg  mr-4 text-white bg-somhakohr font-medium rounded-full px-5 py-1.5 text-center  dark:bg-somhakohr"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
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
