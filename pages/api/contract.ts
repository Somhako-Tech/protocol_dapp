import { NextApiRequest } from "next";
import ProfileManagerABI from "../../constants/protocol/ProfileManagerABI.json";
import { ethers } from "ethers";
import { getAddress } from "ethers/lib/utils";
// This is an example of how to read a JSON Web Token from an API route
// import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "POST")
        return res.status(405).send({ error: "Wrong method" });

    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_PROVIDER as string
    );

    const { address: owner, id, handle } = req.body;

    console.log(
        `minting: ${JSON.stringify(req.body)} @ ${process.env.RPC_PROVIDER}`
    );

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

        const user_address = getAddress(owner);

        const profileManagerWithSigner = profileManagerContract.connect(signer);

        const txReceipt = await profileManagerWithSigner.safeMint({
            owner: user_address,
            id: id,
            handle: handle,
        });

        await txReceipt.wait();

        const tokenId = await profileManagerWithSigner.balanceOf(owner);

        res.setHeader("Access-Control-Allow-Origin", "*").send({
            success: true,
            tokenId,
            txReceipt,
        });
    } catch (error: any) {
        res.send({ success: false, error });
    }
}
