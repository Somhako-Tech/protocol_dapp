import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) router.push("/app");
    }, [session, router]);
    return (
        <div className="container py-24 flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-center mb-6">Welcome!</h1>
            {!session && (
                <div className="flex flex-col items-center">
                    <p className="text-xl mb-4">
                        Please sign in or sign up to continue:
                    </p>
                    <button
                        className="w-full max-w-sm rounded-full bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        onClick={() => signIn()}
                    >
                        Sign in with Google
                    </button>
                    <button
                        className="w-full max-w-sm mt-4 rounded-full bg-gray-300 text-black font-bold py-2 px-4 hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                        onClick={() => signIn()}
                    >
                        Sign in with GitHub
                    </button>
                    <button
                        className="w-full max-w-sm mt-4 rounded-full bg-blue-100 text-blue-500 font-bold py-2 px-4 hover:bg-blue-200 focus:outline-none focus:shadow-outline"
                        onClick={() => signIn()}
                    >
                        Sign in with LinkedIn
                    </button>
                </div>
            )}
            {session && (
                <div className="flex flex-col items-center">
                    <p className="text-xl mb-4">You are signed in as:</p>
                    <p className="text-2xl font-bold">{session?.user?.name}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
