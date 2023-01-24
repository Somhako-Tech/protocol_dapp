import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) router.push("/home");
        else router.push("/landing");
    }, [session, router]);
};

export default Home;
