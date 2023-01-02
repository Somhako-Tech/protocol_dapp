import create from "zustand";
import { persist } from "zustand/middleware";

import { MintStore, ProfileStore, ReferralStore } from "../constants/types";

const useReferralStore = create<ReferralStore>()(
    persist(
        (set) => ({
            referredFrom: "",
            setReferredFrom: (handle: string) =>
                set(() => ({ referredFrom: handle })),
        }),
        {
            name: "referralStore",
            getStorage: () => localStorage,
        }
    )
);
const useProfileStore = create<ProfileStore>()(
    persist(
        (set) => ({
            handle: "",
            setHandle: (handle: string) => set(() => ({ handle: handle })),
        }),
        {
            name: "userStore", // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);

//TODO get rid of this, state should be pulled from server
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

export { useMintStore, useProfileStore, useReferralStore };
