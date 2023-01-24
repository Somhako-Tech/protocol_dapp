import { NextApiRequest } from "next";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: NextApiRequest, res: any) {
    const { search } = req.query;

    const datasetPath = path.join(process.cwd(), "constants/datasets");

    const skills = await JSON.parse(
        await fs.readFile(datasetPath + "/skills.json", "utf8")
    );

    const pattern = new RegExp(search as string, "i");

    const result = Object.keys(skills)
        .filter((item, i) => item.search(pattern) != -1)
        .sort(
            (item_a, item_b) => item_a.search(pattern) - item_b.search(pattern)
        )
        .slice(0, 6);

    res.status(200).json({ skills: result });
}
