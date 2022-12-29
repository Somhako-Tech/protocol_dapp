import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useMintStore } from "../store";

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [mintSuccessful] = useMintStore((state) => [state.minted]);

    useEffect(() => {
        if (session) router.push("/app");
        else router.push("/auth/signin");
    }, [session, router]);
};

export default Home;
