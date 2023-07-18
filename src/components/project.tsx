import type { Project } from "@/pages/api/getProjects"
import Link from "next/link"

export default function Project({ project }: { project: Project }) {

    return (
        <>
            <div className={`bg-gradient-to-tl to-[#ffffff40] from-[#c8c8d730] rounded-xl text-black no-underline max-w-2xl p-5 my-7 `}>
                <h2 className="text-2xl m-2">
                    {
                        project.name
                    }
                </h2>
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
                <Link className="block py-4 text-gray-300" target="_blank" href={project.github}>Source code (GitHub)</Link>
                {
                    project.link && <Link target="_blank" className="block py-4 text-gray-300" href={project.link}>Working demo</Link>
                }
            </div>
        </>
    )
}