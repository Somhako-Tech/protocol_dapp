import {
    getCsrfToken,
    getProviders,
    signIn,
    useSession,
} from "next-auth/react";
import { useReferralStore } from "../../store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getProfileByHandleIdQuery } from "../../graphql/graphqlQueries";

export default function LogIn({ providers }: { providers: any }) {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) router.push("/");
    }, [session, router]);

    const { referral } = router.query;
    const [setReferredFrom] = useReferralStore((state) => [
        state.setReferredFrom,
        state.referredFrom,
    ]);

    //TODO Switch to graphql
    const handleReferralSignIn = async (provider_id: any) => {
        if (referral && typeof referral === "string") {
            await getProfileByHandleIdQuery(referral).then((profile) => {
                if (profile?.handle) {
                    const referredFrom = profile?.handle;
                    setReferredFrom(referredFrom);
                }
                signIn(provider_id);
            });
        } else signIn(provider_id);
    };

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                {referral &&
                                    `@${referral} has invited you to join Somhakohr\n`}
                                Sign in to mint your account
                            </p>

                            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400"></div>

                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    info@acme.org
                                </div>
                            </div>
                        </div>
                        <div className="container py-24 flex-col justify-center items-center text-white">
                            <h1 className="text-5xl font-bold text-center mb-6 text-white">
                                Welcome!
                            </h1>
                            <div className="flex flex-col items-center">
                                <p className="text-xl mb-4">
                                    Please sign in to continue:
                                </p>
                                {providers &&
                                    Object.values(providers).map(
                                        (provider: any) => (
                                            <div
                                                key={provider.name}
                                                className="my-2"
                                            >
                                                <button
                                                    className="w-full max-w-sm rounded-full bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                    onClick={() =>
                                                        handleReferralSignIn(
                                                            provider.id
                                                        )
                                                    }
                                                >
                                                    Sign in with {provider.name}
                                                </button>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            providers,
            csrfToken,
        },
    };
}
