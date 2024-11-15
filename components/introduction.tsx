import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full ">
            <div className="z-20 flex flex-col-reverse md:flex-row items-center justify-center h-full p-8 py-20 md:py-0 pr-10 mt-20 md:mt-10 gap-10">
                
                <div className="flex flex-col justify-center max-w-xl">
                    <h1 className="mb-5 text-xl leading-tight text-center md:text-left md:text-2xl md:mb-10"><b>CADA DESAFÍO ES UNA OPORTUNIDAD <br />
                        <TypeAnimation
                            sequence={[
                                ' DE APRENDER ',
                                2000,
                                ' DE INNOVAR',
                                2000,
                                ' DE CREAR ',
                                2000,
                                ' DE SUPERAR ',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-blue-600"
                        />
                    </b></h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-2 text-justify">
                        Soy un desarrollador de sistemas de información con experiencia en la creación de aplicaciones web y móviles. 
                    </p>
                    <p className="mx-auto mb-2 text-lg md:text-xl md:mx-0 md:mb-2 text-justify">
                        Con conocimiento en diversos lenguajes de programación como Python, C#, Kotlin, JS y Java. Estoy comprometido con el aprendizaje continuo y la innovación, y estoy abierto a nuevas oportunidades para aplicar mis habilidades y crecer profesionalmente.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a 
                            href="/CV_Salazar_Santos_Fernando.pdf" 
                            download="CV_Salazar_Santos_Fernando.pdf" 
                            className="font-bold px-3 py-2 my-2 transition-all border-4 cursor-pointer text-lg w-fit rounded-xl hover:scale-105 hover:bg-[#85C1E9] hover:text-white border-[#85C1E9]"
                        >
                            Descargar CV
                        </a>
                        <a href="/contact"
                            className="font-bold border-4 text-lg px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-white border-[#2ECC71] rounded-xl hover:scale-105 hover:bg-[#2ECC71] hover:text-white hover:animate-pulse">
                            Contactame
                        </a>
                    </div>
                </div>
                <Image
                    src="/home-4.png"
                    priority
                    width="300"
                    height="300"
                    alt="Avatar"
                    className="rounded-full shadow-xl shadow-[#85C1E9] border-2 border-[#85C1E9] transform hover:scale-105 hover:rotate-3 hover:skew-y-2 hover:shadow-2xl transition duration-300 ease-in-out mt-40 md:-mt-40"
                />
            </div>
        </div>
    );
}

export default Introduction;