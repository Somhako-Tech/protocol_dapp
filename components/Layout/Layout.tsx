import Head from "next/head";
import Header from "../Header";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getProfileById } from "../../constants/axiosInstances";

export default function Layout({ children }: { children: any }) {
    const { data: session } = useSession();

    const {
        data: ProfileData,
        isLoading: isQueryLoading,
        isError: isQueryError,
    } = useQuery(["profileById", session?.user?.id], () =>
        getProfileById(session?.user?.id ? session.user.id : 0)
    );

    if (isQueryLoading || isQueryError || ProfileData.error) {
        return (
            <main className="py-8 bg-white">
                <Head>
                    <title> Somhakohr Dapp </title>
                </Head>
                <Header handle={null}></Header>
                {children}
            </main>
        );
    }

    console.log(ProfileData);
    return (
        <main className="py-8 bg-white">
            <Head>
                <title> Somhakohr Dapp </title>
            </Head>
            <Header handle={ProfileData.profile.handle}></Header>
            {children}
        </main>
    );
}
