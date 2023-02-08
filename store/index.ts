import { create } from "zustand";
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
            minted: false,
            setHandle: (handle: string) => set(() => ({ handle: handle })),
            setMinted: (handle: string) => set(() => ({ handle: handle })),
        }),
        {
            name: "userStore", // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);

export { useProfileStore, useReferralStore };
