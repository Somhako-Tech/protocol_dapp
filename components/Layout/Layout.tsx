import Head from "next/head";
import Header from "../Header";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getProfileByUserIdQuery } from "../../graphql/graphqlQueries";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: any }) {
    const { data: session } = useSession();

    const router = useRouter();

    const {
        data: ProfileData,
        isLoading: isQueryLoading,
        isError: isQueryError,
    } = useQuery(
        ["getProfile", session?.user.id as string],
        () =>
            getProfileByUserIdQuery((session?.user.id as string) || "default"),
        { enabled: !!session }
    );
    if (!session || router.asPath === "/")
        return (
            <main className="">
                <Head>
                    <title> Somhakohr Dapp </title>
                </Head>
                {children}
            </main>
        );

    if (isQueryLoading || isQueryError) {
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
