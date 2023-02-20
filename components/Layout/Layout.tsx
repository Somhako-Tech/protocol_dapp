import Head from "next/head";
import Header from "../Header";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getProfileByUserIdQuery } from "../../graphql/graphqlQueries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Profile } from "@prisma/client";
import Footer from "../footer";

export default function Layout({ children }: { children: any }) {
    const router = useRouter();

    if (router.asPath === "/" || router.asPath === "/join")
        return (
            <main>
                <Head>
                    <title> somhako Dapp </title>
                </Head>
                {children}
            </main>
        );

    return (
        <main>
            <Head>
                <title> Somhako Protocol </title>
            </Head>

            <div className="min-h-screen">
                <Header />
                {children}
                <Footer />
            </div>
        </main>
    );
}
