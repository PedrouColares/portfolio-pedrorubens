import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip"

export default function Profile() {
    return (
        <aside className='flex flex-col items-center w-lg gap-5 w-max xl:fixed xl:left-0 pt-5'>
            <img className='shadow-lg border-1 border-black-500 shadow-gray-400 rounded-full w-40 h-40 md:w-60 md:h-60 mt-2' src="https://avatars.githubusercontent.com/u/144164771?v=4" alt="foto-pedro-rubens" />
            <div className="w-full flex flex-col xl:items-start xl:ml-40 gap-5 items-center">
                <div className="flex flex-col xl:items-start items-center">
                    <h1 className="text-2xl font-bold text-gray-800 xl:mb-2 text-left whitespace-nowrap">PEDRO RUBENS</h1>
                    <p className="text-1xl text-gray-600 mb-8 text-left whitespace-nowrap">Desenvolvedor de Software</p>
                </div>

                <div className="flex xl:flex-col xl:gap-2 gap-10 flex-row items-start">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="inline-flex flex-row items-center w-max xl:gap-2 gap-1 text-gray-600 hover:text-black mb-2 text-left whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                    <p className="text-gray-500 mx-0">&middot;</p>
                                    <span><a target="" href="">Currículo</a></span>
                                </div>
                            </TooltipTrigger>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="inline-flex flex-row items-center w-max xl:gap-2 gap-1 text-gray-600 hover:text-black mb-2 text-left whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    <p className="text-gray-500 mx-0">&middot;</p>
                                    <span><a target="_blank" href="https://github.com/PedrouColares">Github</a></span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                @PedrouColares
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="inline-flex flex-row items-center w-max xl:gap-2 gap-1 text-gray-600 hover:text-black mb-2 text-left whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    <p className="text-gray-500 mx-0">&middot;</p>
                                    <span><a target="_blank" href="https://www.linkedin.com/in/pedro-rubens-souza/">Linkedin</a></span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                @pedro-rubens-souza
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="hidden sm:inline-flex flex-row items-center w-max xl:gap-2 gap-1 text-gray-600 hover:text-black mb-2 text-left whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                                    <p className="text-gray-500 mx-0">&middot;</p>
                                    <span><a href="mailto:pedro.colaressrubens15789@gmail.com?subject=Assunto%20da%20Mensagem&body=Corpo%20do%20e-mail">E-mail</a></span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                pedro.colaressrubens15789@gmail.com
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </aside>
    )
}