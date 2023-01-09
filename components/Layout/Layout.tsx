import Head from "next/head";
import Header from "../Header";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getProfileByUserIdQuery } from "../../graphql/graphqlQueries";

export default function Layout({ children }: { children: any }) {
    const { data: session } = useSession();

    const {
        data: ProfileData,
        isLoading: isQueryLoading,
        isError: isQueryError,
    } = useQuery(
        ["getProfile", session?.user.id],
        () => getProfileByUserIdQuery(session?.user.id || "default"),
        { enabled: !!session }
    );

    if (isQueryLoading || isQueryError) {
        return (
            <main className="">
                <Head>
                    <title> Somhakohr Dapp </title>
                </Head>
                {children}
            </main>
        );
    }

    if (!ProfileData) {
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

    if (!session)
        return (
            <main className="">
                <Head>
                    <title> Somhakohr Dapp </title>
                </Head>
                {children}
            </main>
        );
    return (
        <main className="py-8 bg-white">
            <Head>
                <title> Somhakohr Dapp </title>
            </Head>
            <Header handle={ProfileData?.handle}></Header>
            {children}
        </main>
    );
}
