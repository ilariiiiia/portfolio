import type { Project } from "@/pages/api/getProjects"
import Link from "next/link"

export default function Project({ project, n }: { project: Project, n: number }) {

    console.log(n);
    const gradientPositions = [
        "br",
        "bl",
        "tl",
        "tr"
    ]

    const randGradient = gradientPositions[n % 4];

    return (
        <>
            <div className={`p-5 m-7 bg-gradient-to-${randGradient} to-[#ffffff] from-[#c8c8d7] rounded-xl text-black no-underline container max-w-2xl`}>
                <h5 className="text-2xl m-2">
                    {
                        project.name
                    }
                </h5>
                <p>
                    {
                        project.description
                    }
                </p>
                <p>
                    Language(s): <code className="inline">{project.languages.join(', ')}</code>
                </p>
                <p>
                    Tech stack: <code className="inline">{project.stack.join(', ')}</code>
                </p>
                <Link className="block m-1" target="_blank" href={project.github}>Source code (GitHub)</Link>
                {
                    project.link && <Link target="_blank" className="block m-1" href={project.link}>Working demo</Link>
                }
            </div>
        </>
    )
}