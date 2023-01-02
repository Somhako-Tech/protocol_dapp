import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useMintStore } from "../store";

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) router.push("/home");
        else router.push("/join");
    }, [session, router]);
};

export default Home;
