export { default } from "next-auth/middleware";

//TODO Add graphql auth check
export const config = {
    matcher: ["/home", "/app", "/admin"],
    pages: {
        signIn: "/",
    },
};
