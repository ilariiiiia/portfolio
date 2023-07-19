import type { NextApiRequest, NextApiResponse } from "next";

import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
    process.env.MJ_PUBLIC_KEY || "",
    process.env.MJ_PRIVATE_KEY || ""
);

interface messageRequest extends NextApiRequest {
    body: {
        message: string | undefined;
        email: string| undefined;
        name: string | undefined;
    }
}

export default function Handler(req: messageRequest, res: NextApiResponse) {
    if(req.body == undefined) {
        res.status(500).send("Something went wrong!");
        return;
    }
    const { message, name, email } = req.body;
    if(message == undefined || email == undefined || name == undefined) {
        res.status(400).send("Bad request! Something was undefined");
        return;
    }
    if(message?.length == 0 || email?.length == 0 || name?.length == 0) {
        res.status(400).send("Bad request! Something was empty");
        return;
    }
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
            From: {
                Email: 'nicolamigone179@gmail.com',
                Name: 'Me',
            },
            To: [
                {
                Email: 'nicola.migone.polimi@gmail.com',
                Name: 'Nicola Migone',
                },
            ],
            Subject: `New message from ${name}!`,
            HTMLPart:
                `Message sent by: <b>${name}</b> <br/> Whose email is: <b>${email}</b> <br/> and the following message: ${message}`,
            },
        ],
    })
    request
        .then(result => {
            console.log(result.body);
            res.status(200).send('Success!');
            return;
        })
        .catch(err => {
            console.log(JSON.stringify(err))
            res.status(500).send('Something went wrong');
            return;
        })
}