import "../styles/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Session } from "next-auth";

const queryClient = new QueryClient();
export default function App({
    Component,
    pageProps,
}: AppProps<{
    session: Session;
}>) {
    const { chains, provider } = configureChains(
        [mainnet, polygon, polygonMumbai],
        [
            alchemyProvider({ apiKey: process.env.ALCHEMY_ID || " " }),
            publicProvider(),
        ]
    );

    const { connectors } = getDefaultWallets({
        appName: "My RainbowKit App",
        chains,
    });

    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider,
    });
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <SessionProvider session={pageProps.session}>
                    <QueryClientProvider client={queryClient}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        <ReactQueryDevtools initialIsOpen={true} />
                    </QueryClientProvider>
                </SessionProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
