import { NextApiRequest } from "next";
import ProfileManagerABI from "../../../constants/protocol/ProfileManagerABI.json";
import { ethers } from "ethers";
import { getAddress } from "ethers/lib/utils";
// This is an example of how to read a JSON Web Token from an API route
// import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "GET")
        return res.status(405).send({ error: "Wrong method" });

    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_PROVIDER as string
    );

    const { tokenId } = req.query;

    console.log(`minting: ${tokenId} @ ${process.env.RPC_PROVIDER}`);

    const contractAddress = process.env.CONTRACT_ADDRESS as string;

    try {
        const profileManagerContract = new ethers.Contract(
            contractAddress,
            ProfileManagerABI,
            provider
        );

        const profile = await profileManagerContract.getProfileFromToken(
            ethers.BigNumber.from(tokenId)
        );

        console.log(profile);

        res.setHeader("Access-Control-Allow-Origin", "*").send({
            profile,
        });
    } catch (error: any) {
        res.send({ success: false, error });
    }
}
