import { NextApiRequest } from "next";
import formidable from "formidable";

const JWT = "Bearer " + process.env.PINATA_JWT;
export const config = {
    api: {
        bodyParser: false,
    },
};

import { parseForm, FormidableError } from "../../lib/parse-form";

var FormData = require("form-data");
var fs = require("fs");

function reconstructData(parsedData: any) {
    let newData = new FormData();

    Object.entries(parsedData.fields).forEach((element) => {
        newData.append(element[0], element[1]);
    });

    Object.entries(parsedData.files).forEach((element: any) => {
        newData.append(
            element[0],
            fs.createReadStream(element[1].filepath),
            element[1].originalFilename
        );
    });

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
