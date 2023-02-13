import { NextApiRequest } from "next";
import formidable from "formidable";

const JWT = "Bearer " + process.env.PINATA_JWT;
export const config = {
    api: {
        bodyParser: false,
    },
};

import { parseForm, FormidableError } from "../../lib/parse-form";

export default async function handler(req: NextApiRequest, res: any) {
    // Just after the "Method Not Allowed" code
    try {
        const { fields, files } = await parseForm(req);

        const file: any = files.file;
        const metadata = JSON.stringify({
            name: "test",
        });

        const options = JSON.stringify({
            cidVersion: 0,
        });

        if (file === null) return null;
        try {
            const pinataRes = await fetch(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                {
                    body: file,
                    method: "POST",
                    headers: {
                        Authorization: JWT,
                    },
                }
            );
            console.log(await pinataRes.json());
        } catch (error) {
            console.log({ error });
        }

        res.status(200).json({
            data: {
                url: "/uploaded-file-url",
            },
            error: null,
        });
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
                error: "Internal Server Error",
            });
        }
    }

    // res.status(200).end(req.body);
}
