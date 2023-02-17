import { NextApiRequest } from "next";
import ProfileManagerABI from "../../../constants/protocol/ProfileManagerABI.json";
import { ethers } from "ethers";
import { getAddress } from "ethers/lib/utils";
// This is an example of how to read a JSON Web Token from an API route
// import { getToken } from "next-auth/jwt";

const getProfile = (object: any) => ({
    description: "An NFT Profile created using Protocol.Somhako.com",
    external_url: "https://protocol.somhako.com/u/" + object[0][1],
    handle: object[0][1],
    address: object[0][2],
    image: "https://gateway.pinata.cloud/" + object[0][3],
});

const getEducation = (object: any) =>
    object[1].map((education: any) => ({
        institution: education[0],
        year: education[1],
        title: education[2],
    }));
const getExperience = (object: any) =>
    object[2].map((experience: any) => ({
        organization: experience[0],
        startYear: experience[1],
        endYear: experience[2],
        title: experience[3],
    }));
export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "GET")
        return res.status(405).send({ error: "Wrong method" });

    const provider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_PROVIDER as string
    );

    const { tokenId } = req.query;

    const contractAddress = process.env.CONTRACT_ADDRESS as string;

    try {
        const profileManagerContract = new ethers.Contract(
            contractAddress,
            ProfileManagerABI,
            provider
        );

        const profile = await profileManagerContract.getProfileFromToken(
            tokenId
        );

        const prof = getProfile(profile);
        const edu = getEducation(profile);
        const exp = getExperience(profile);

        res.setHeader("Access-Control-Allow-Origin", "*").send({
            ...prof,
            education: edu,
            experience: exp,
        });
    } catch (error: any) {
        res.send({ success: false, error });
    }
}
