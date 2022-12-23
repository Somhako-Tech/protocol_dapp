import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
    const { chains, provider } = configureChains(
        [mainnet, polygon],
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
                {" "}
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
