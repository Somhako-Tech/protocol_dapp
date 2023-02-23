import { NextApiRequest } from "next";
import path from "path";
import { promises as fs } from "fs";
import jwt from "jsonwebtoken";
import emails from "../../../constants/email";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: any) {
    if (req.method !== "POST")
        return res.status(405).send("Failed to authenticate");

    //TODO Finish auth
    const secret = process.env.NEXTAUTH_SECRET || "";
    const session: any = await getSession({ req });

    if (!session) {
        const token = req.headers["protocol-token"];

        const tokenDec = await new Promise((resolve, reject) =>
            jwt.verify(token as string, secret, (error, decodedToken) => {
                if (error || !decodedToken) {
                    console.log({ error });
                    reject(error);
                }
                resolve(decodedToken);
            })
        );

        if (!tokenDec) return res.json({ error: "Authentication failed" });
    }
    const sgMail = require("@sendgrid/mail");

    const { to, subject, html } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    if (!subject && !html) {
        const msg = {
            to: to,
            from: process.env.DEFAULT_FROM_EMAIL,
            subject: emails.profileCreated.subject,
            html: emails.profileCreated.html,
        };
        const resp = await sgMail.send(msg);

        if (resp) res.status(200).json({ success: true });
        else res.status(500);
    } else {
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
}
