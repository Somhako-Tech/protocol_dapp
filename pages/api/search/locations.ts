import { NextApiRequest } from "next";
import path from "path";
import * as fs from "fs";
import { parse } from "csv-parse";

async function getLocations(search: string) {
    const datasetPath = path.join(process.cwd(), "constants/datasets");
    const pattern = new RegExp(search as string, "i");

    const result: Array<string> = [];

    return new Promise(function (resolve, reject) {
        fs.createReadStream(datasetPath + "/worldcities.csv")
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                if (row[0].search(pattern) != -1) {
                    result.push(`${row[0]}, ${row[4]}`);
                }
            })
            .on("end", () => {
                result
                    .sort(
                        (item_a, item_b) =>
                            item_a.search(pattern) - item_b.search(pattern)
                    )
                    .slice(0, 6);
                resolve(result);
            })
            .on("error", reject);
    });
}

export default async function handler(req: NextApiRequest, res: any) {
    const { search } = req.query;

    const result = await getLocations(search as string);

    return res.status(200).json({ locations: result });
}
