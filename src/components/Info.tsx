
import Techs from './Techs'
import Career from './Career'
import Footer from './Footer'

export default function Info() {

    return (
        <div>
            <div className="xl:p-6 xl:pr-10 xl:pl-85">
                <div className='flex flex-items xl:items-start flex-col gap-6'>
                    <div className='xl:mt-4 xl:text-left text-center'>
                        <span className='text-gray-500'>"Se você falha ao planejar, está planejando falhar."</span>
                    </div>

                    <Techs />

                    <div className='flex flex-col xl:items-start items-center'>
                        <h2 className="w-max mt-7 border-b text-2xl font-bold text-gray-800 whitespace-nowrap">MINHA JORNADA</h2>
                        <div className='mt-5 flex flex-col gap-0 xl:flex-row items-center'>
                            <Career title={'Suporte Técnico TI'} description={'Atualmente, sou estagiário de Suporte Técnico de Tecnologia Informação no TRT-11 (Tribunal Regional do Trabalho).'} date={'2025 - 2026'} image={'https://dev-ecommerce-assets-dist.direcaoconcursos.com.br/concourse/image/aac4e716-32e2-4359-94a1-35d081a0cfdd.jpg'} />
                            <hr className='w-full hidden xl:block' />
                            <div className='xl:hidden w-[0.5px] h-10 bg-gray-300 p-0'></div>
                            <Career title={'UEA'} description={'Iniciei meu curso de Computação na Universidade do Estado do Amazonas (UEA).'} date={'2021 - Atualmente'} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Brasaouea.png/1224px-Brasaouea.png'} />
                            <hr className='w-full hidden xl:block' />
                            <div className='xl:hidden w-[0.5px] h-10 bg-gray-300 p-0'></div>
                            <Career title={'Desenvolvedor de Jogos'} description={'Desenvolvi um jogo dentro Engine Roblox Studio utilizando a linguagem Lua para o seu funcionamento. Esse jogo já me rendeu mais de 5000 dólares e continua rendendo até hoje.'} date={'2017 - 2024'} image={'https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png'} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}