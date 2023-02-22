import { NextApiRequest } from "next";
import Jimp from "jimp";

const JWT = "Bearer " + process.env.PINATA_JWT;
export const config = {
    api: {
        bodyParser: false,
    },
};

import { parseForm, FormidableError } from "../../lib/parse-form";

var FormData = require("form-data");
import * as fs from "fs";

async function reconstructData(parsedData: any) {
    let newData = new FormData();

    Object.entries(parsedData.fields).forEach((element) => {
        newData.append(element[0], element[1]);
    });

    const newElement = parsedData.files.file;

    const filepath = newElement.filepath;
    await Jimp.read(filepath).then(async (image) => {
        const image2 = (
            await Jimp.read("./public/images/logo-small.png")
        ).resize(100, 100);

        await image
            .composite(image2, 400, 10, {
                mode: Jimp.BLEND_SOURCE_OVER,
                opacityDest: 1,
                opacitySource: 1,
            })
            .writeAsync(newElement.filepath);
    });

    newData.append("file", fs.createReadStream(newElement.filepath), "avatar");

    return newData;
}

export default async function handler(req: NextApiRequest, res: any) {
    // Just after the "Method Not Allowed" code
    try {
        const parsedData = await parseForm(req);

        const reconstructedData = await reconstructData(parsedData);

        const response = await (
            await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
                method: "POST",
                headers: {
                    Authorization: JWT,
                },
                body: reconstructedData,
            })
        ).json();

        console.log({ response });

        return res.json({ ...response, success: true });
    } catch (e) {
        if (e instanceof FormidableError) {
            res.status(e.httpCode || 400).json({
                data: null,
                error: e.message,
            });
        } else {
            console.error(e);
            res.status(500).json({
                data: null,
                error: e,
            });
        }
    }

    return res.status(200).end(req.body);
}
