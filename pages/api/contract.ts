import { NextApiRequest } from "next";
import ProfileManagerABI from "../../constants/protocol/ProfileManagerABI.json";
import { ethers } from "ethers";
import { getAddress } from "ethers/lib/utils";
import { Profile } from "@prisma/client";
// This is an example of how to read a JSON Web Token from an API route
// import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "POST")
        return res.status(405).send({ error: "Wrong method" });

    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_PROVIDER as string
    );

    const profile: Profile = req.body;

    const contractAddress = process.env.CONTRACT_ADDRESS as string;

    const signer = new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        provider
    );

    try {
        const profileManagerContract = new ethers.Contract(
            contractAddress,
            ProfileManagerABI,
            provider
        );

        const user_address = getAddress(profile.address);

        const profileManagerWithSigner = profileManagerContract.connect(signer);

        const txReceipt = await profileManagerWithSigner.safeMint(
            {
                owner: user_address,
                id: profile.user_id,
                handle: profile.handle,
                image_location_hash: profile.ipfs_hash,
            },
            profile.education,
            profile.experience
        );

        await txReceipt.wait();

        res.setHeader("Access-Control-Allow-Origin", "*").send({
            success: true,
            txReceipt,
        });
    } catch (error: any) {
        res.send({ success: false, error });
    }
}
