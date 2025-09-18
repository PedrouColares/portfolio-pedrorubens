import { useState } from "react"
import br from "@/assets/pt-br.png"
import us from "@/assets/us.png"
import { cn } from "@/lib/utils"

const device_lang = navigator.language
const translatePage = device_lang.toLowerCase().match('pt') ? true : false

const translations: Record<string, string> = {
  'Projetos': 'Projects',
  'Início': 'Home',
  'Linguagem': 'Language',
  'FERRAMENTAS': 'TOOLS',
  'Transformo ideias em soluções digitais.': "I transform ideas into digital solutions.",
  'TECNOLOGIAS': 'TECH STACK',
  'MINHA JORNADA': 'MY JOURNEY',
  'Desenvolvi um jogo dentro Engine Roblox Studio utilizando a linguagem Lua para o seu funcionamento. Esse jogo já me rendeu mais de 5000 dólares e continua rendendo até hoje.': 'I developed a game in Roblox Studio using the Lua programming language. This game has already earned me over $5,000 and continues to do so today.',
  'Iniciei meu curso de Computação na Universidade do Estado do Amazonas (UEA).': 'I started my Bachelor\'s degree in Computer Science Education at the Amazonas State University (UEA).',
  'Atualmente, sou estagiário de Suporte Técnico de Tecnologida Informação no TRT-11 (Tribunal Regional do Trabalho).': 'Currently serving as an IT Support Intern at the Regional Labor Court of the 11th Region (TRT-11).',
  'Desenvolvedor de Jogos': 'Game Developer',
  'Suporte Técnico TI': 'IT Support Intern',
  '2021 - Atualmente': '2021 - Currently',
  'Desenvolvedor Mobile': 'Mobile Developer',
  '© Desenvolvido por Pedro Rubens': '© Developed by Pedro Rubens'
}

function translateText(text: string, isPT: boolean) {
  if (isPT) return text
  return translations[text] || text
}

export function LanguageToggle() {
  const [isPT, setIsPT] = useState(true)
  const toggleLanguage = () => { setIsPT((prev) => !prev) }

  return (
    <button onClick={toggleLanguage} className="flex items-center justify-between w-16 h-8 rounded-full border bg-input dark:bg-input/80 transition-all p-[2px]" >
      <img src={us} alt="US" className={cn("w-6 h-6 rounded-full transition-all", isPT ? "blur-sm opacity-80" : "blur-0 opacity-100")} />
      <img src={br} alt="BR" className={cn("w-6 h-6 rounded-full transition-all", isPT ? "blur-0 opacity-100" : "blur-sm opacity-80")} />
    </button>
  )
}
