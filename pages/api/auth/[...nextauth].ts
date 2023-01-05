import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth/core/types";
import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // ...add more providers here
    ],
    session: {
        jwt: true,
        maxAge: 15 * 24 * 60 * 60, // the session will last 15 days
    },
    pages: {
        signIn: "/join",
    },
    callbacks: {
        session: async ({ session, user }: { session: Session; user: any }) => {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        },
        async redirect({ baseUrl }: { baseUrl: string }) {
            return baseUrl;
        },
        async signIn({ user }: { user: any }) {
            const isAllowedToSignIn = true;

            console.log("siginng in");
            if (isAllowedToSignIn) {
                return true;
            } else {
                // Return false to display a default error message
                return false;
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
    },
};

export default NextAuth(authOptions);
