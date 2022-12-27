import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
        maxAge: 30 * 24 * 60 * 60, // the session will last 30 days
    },
};

export default NextAuth(authOptions);
