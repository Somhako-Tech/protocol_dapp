import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import PostgresAdapter from "../../../lib/PostgresAdapter";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test_somakohr",
    password: "K!sgPL&CASntu3kB",
    port: 5432,
});

export const authOptions = {
    // Configure one or more authentication providers
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
    adapter: PostgresAdapter(pool),
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async redirect({ baseUrl }: { baseUrl: string }) {
            return baseUrl;
        },
        async signIn({ user }: { user }) {
            const isAllowedToSignIn = true;
            await PostgresAdapter(pool)
                .getUser(user.id)
                .then(async (user) => {
                    if (!user) {
                        await PostgresAdapter(pool).createUser(user);
                    }
                })
                .catch(async (err) => {
                    await PostgresAdapter(pool).createUser(user);
                    console.log(err);
                });
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
