import type { NextApiRequest, NextApiResponse } from "next";

export interface Project {
    name: string;
    description: string;
    link: string | null;
    github: string;
    languages: string[];
    stack: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
    res.status(200).json([
        {
            name: "Know ur teacher",
            description: "Know ur teacher is a website where you can know how your teacher is before going to their class.",
            link: "https://www.knowurteacher.com",
            github: "https://github.com/nicolello-dev/knowurteacher",
            languages: ["HTML", "Typescript", "Javascript", "CSS", "SQL"],
            stack: ["NextJS", "RDS", "Vercel", "Prisma", "PostgreSQL", "NextAuth"]
        },
        {
            name: "Organization Charter",
            description: "A website to easily view and manage all members of an organization, to find who you need faster. Made as a freelance service.",
            link: "https://organization-charter.vercel.app/",
            github: "https://github.com/nicolello-dev/organization-charter",
            languages: ["Typescript", "Javascript", "HTML", "CSS", "SQL"],
            stack: ["NextJS", "RDS", "Vercel", "Prisma", "PostgreSQL"]
        },
        {
            name: "AI trivia quiz for kids",
            description: "A chatbot application for kids for them to learn facts through trivia. Not openly hosted due to API costs. Made as a freelance service.",
            link: null,
            github: "https://github.com/nicolello-dev/Trivia-AI-Magic-Machine",
            languages: ["Python", "HTML", "CSS"],
            stack: ["ChatGPT", "Flask"]
        },
        {
            name: "Blasketball",
            description: "A blaseball-like online game where you can simulate many basket games at the same time. Made as a freelance service.",
            link: "https://blaseball-copy.vercel.app/",
            github: "https://github.com/nicolello-dev/Blaseball-copy",
            languages: ["Python", "HTML", "CSS"],
            stack: ["ChatGPT", "Flask"]
        }
    ])
}
