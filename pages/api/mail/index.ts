import { NextApiRequest } from "next";
import path from "path";
import { promises as fs } from "fs";
import * as jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "POST")
        return res.status(405).send("Failed to authenticate");

    //TODO Finish auth
    // const secret = process.env.NEXTAUTH_SECRET || "";

    // const token = req.headers.authorization?.split(" ")[1];

    // const resp = jwt.verify(token as string, secret, (error, decodedToken) => {
    //     if (error || !decodedToken) {
    //         console.log({ error });
    //         return res.status(401).json({ error: "not authorized" });
    //     } else return res.status(200).json({ message: "success" });
    // });

    const sgMail = require("@sendgrid/mail");

    const { to, subject, html } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: to,
        from: process.env.DEFAULT_FROM_EMAIL,
        subject: subject,
        html: html,
    };
    const resp = await sgMail.send(msg);

    if (resp) res.status(200).json({ success: true });
    else res.status(500);
}
