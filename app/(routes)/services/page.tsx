import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

// Import PNG images
import Image from 'next/image';
import htmlLogo from '@/public/html-5.png';
import cssLogo from '@/public/css-3.png';
import jsLogo from '@/public/js.png';
import reactLogo from '@/public/react.png';
import nodeLogo from '@/public/node.png';
import bootstrap from '@/public/bootstrap.png';
import java from '@/public/java.png';
import python from '@/public/python.png';
import figmaLogo from '@/public/figma.png';
import spring from '@/public/spring.png';
import mysql from '@/public/mysql.png';
import csharp from '@/public/csharp.png';
import kotlin from '@/public/kotlin.png';
import tailwind from '@/public/tailwind.png';
import sqlserver from '@/public/sqlserver.png';
import mongodb from '@/public/mongodb.png';
import androidstudio from '@/public/androidstudio.png';
import git from '@/public/git.png';
import scrum from '@/public/scrum.png';
import ccna from '@/public/ccna.png';
import linux from '@/public/linux.png';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            {/*<CircleImage />
            <AvatarServices />*/}
            
            <div className="grid items-center justify-center h-screen max-w-4xl gap-6 mx-auto md:grid-cols-2 -mt-10">
                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
            
            <div className="grid items-center justify-center h-screen max-w-4xl gap-6 mx-auto -mt-32 ">
                {/* Skills Section */}
                <h1 className="text-2xl leading-tight text-center md:text-center text-4xl md:mb-5 ">
                    My <span className="font-bold text-blue-600">skills.</span>
                </h1>
                
                {/* Tech Stack Section */}
                <div className="max-w-4xl mx-auto p-10 -mt-20">
                    <h2 className="text-3xl font-bold text-center mb-5">Herramientas y Tecnologías</h2>
                    <p className="text-xl text-gray-300 text-center mb-8">Las herramientas con las que estoy familiarizado.</p>

                    {/* Frontend */}
                    <h3 className="text-2xl font-bold text-center mb-5">Frontend</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={htmlLogo} alt="HTML Logo" className="w-24 h-24 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={cssLogo} alt="CSS Logo" className="w-24 h-24 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={jsLogo} alt="JavaScript Logo" className="w-24 h-24 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={reactLogo} alt="React Logo" className="w-24 h-24 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={bootstrap} alt="Bootstrap Logo" className="w-28 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={tailwind} alt="Tailwind CSS Logo" className="w-32 h-12 rounded-xl" />
                        </div>
                    </div>

                    {/* Backend */}
                    <h3 className="text-2xl font-bold text-center mt-12 mb-5">Backend</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={java} alt="Java Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={python} alt="Python Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={csharp} alt="C# Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={spring} alt="Spring Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={nodeLogo} alt="Node.js Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                    </div>

                    {/* Desarrollo Móvil */}
                    <h3 className="text-2xl font-bold text-center mt-12 mb-5">Desarrollo Móvil</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={kotlin} alt="Kotlin Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={java} alt="Java Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={androidstudio} alt="Android Studio Logo" className="w-32 h-20 rounded-xl" />
                        </div>
                    </div>

                    {/* Bases de Datos */}
                    <h3 className="text-2xl font-bold text-center mt-12 mb-5">Bases de Datos</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={sqlserver} alt="SQL Server Logo" className="w-28 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={mysql} alt="MySQL Logo" className="w-28 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={mongodb} alt="MongoDB Logo" className="w-28 h-20 rounded-xl" />
                        </div>
                    </div>

                    {/* Otras Tecnologías */}
                    <h3 className="text-2xl font-bold text-center mt-12 mb-5">Otras Tecnologías</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={git} alt="Git Logo" className="w-20 h-16 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={figmaLogo} alt="Figma Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={scrum} alt="Scrum Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={ccna} alt="CCNA Logo" className="w-20 h-20 rounded-xl" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-xl shadow-xl shadow-[#85C1E9]">
                            <Image src={linux} alt="Linux Logo" className="w-20 h-20 rounded-xl" />
                        </div>
            
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
