import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import ProjectItem from '../components/ProjectItem'

import contacerto from '../assets/contacerto.png'

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="w-max border-b text-4xl font-bold text-gray-800 whitespace-nowrap">MEUS PROJETOS</h2>

            <div className="flex items-center justify-center p-10">
                <FlickeringGrid maxOpacity={0.05} squareSize={3} className="fixed -z-10" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectItem
                        title="APP de Agência de Viagens para Parintins"

                        links={{
                            demo: "https://github.com/PedrouColares"
                        }}

                        description="EM DESENVOLVIMENTO 🔨"

                        tags={["Kotlin", 'Android Studio', 'Sqlite']}
                    />

                    <ProjectItem
                        title="ContaCerto - Educação Financeira"

                        links={{
                            demo: "https://contacerto.vercel.app/"
                        }}

                        image={contacerto}

                        description="Sistema desenvolvido durante meu curso de computação com um colega de sala. O objetivo era proporcionar um sistema gamificado para a aprendizagem de educação financeira."

                        tags={["JavaScript", 'Tailwind CSS']}
                    />
                </div>

            </div>
        </div>
    )
}