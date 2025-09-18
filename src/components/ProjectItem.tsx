import { Github, ExternalLink, Youtube } from "lucide-react"

interface ProjectCardProps {
    title?: string
    description?: string
    image?: string
    tags?: string[]
    links?: {
        github?: string
        demo?: string
        youtube?: string
    }
}

export default function ProjectCard({
    title = "TITULO",
    description = " ",
    image = "",
    tags = [],
    links = {},

}: ProjectCardProps) {
    return (
        <div className="max-w-sm xl:max-w-sm w-full rounded-lg shadow-lg border overflow-hidden bg-white">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />

                <div className="absolute top-2 right-2 flex gap-3 text-gray-700">
                    {links.demo && (
                        <a className="shadow-xl bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center" href={links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 hover:text-black" />
                        </a>
                    )}
                    {links.github && (
                        <a className="shadow-xl bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center" href={links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 hover:text-black" />
                        </a>
                    )}
                    {links.youtube && (
                        <a className="shadow-xl bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center" href={links.youtube} target="_blank" rel="noopener noreferrer">
                            <Youtube className="w-5 h-5 hover:text-red-600" />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-4 ">
                <h2 className="text-center text-lg font-bold">{title}</h2>
                <p className="bg-gray-100 shadow-sm text-center text-sm text-gray-800 rounded-md p-3 mt-2">
                    {description}
                </p>
            </div>

            <div className="flex gap-2 flex-wrap px-4 pb-4">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-gray-200 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}