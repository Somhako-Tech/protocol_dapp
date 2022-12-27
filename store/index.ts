import create from "zustand";
import { persist } from "zustand/middleware";

import { MintStore } from "../constants/types";
const useMintStore = create<MintStore>()(
    persist(
        (set) => ({
            minted: false,
            tokenId: 0,
            handle: "",
            setMintedSuccessful: () => set(() => ({ minted: true })),
            setTokenId: (id: number) => set(() => ({ tokenId: id })),
            setHandle: (handle: string) => set(() => ({ handle: handle })),
        }),
        {
            name: "mintStore", // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);

export { useMintStore };
