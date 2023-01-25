export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/home", "/app", "/api/graphql"],
    pages: {
        signIn: "/",
    },
};
