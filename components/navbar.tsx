"use client"

import { useState } from "react";
import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react"; // Puedes usar el icono que prefieras

const Navbar = () => {
    const router = usePathname();
    const [isExpanded, setIsExpanded] = useState(false); // Estado para manejar expansión/retracción

    // Función para alternar la expansión del navbar
    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-top h-full top-8 right-0 px-4 py-4">
            <nav>
                <div className="flex flex-col items-center justify-center gap-8 px-1 py-6 rounded-xl bg-white/15 background-blur-sm shadow-xl shadow-green-900">

                    {/* Botón para expandir/retraer el menú, visible solo en dispositivos móviles */}
                    <div className="lg:hidden px-2 py-2 transition duration-150 rounded-lg cursor-pointer hover:bg-secondary ">
                        <button onClick={toggleNavbar} className="flex flex-col items-center justify-center space-x-2"> 
                            {isExpanded ? <MenuIcon size={25} color="#fff" /> : <MenuIcon size={25} color="#fff" />}
                            Menu
                        </button>
                    </div>

                    {/* Mostrar ítems del navbar siempre en pantallas grandes (lg+), y solo en móviles si está expandido */}
                    <div className={`flex-col items-center justify-center gap-8 ${isExpanded ? 'flex' : 'hidden'} lg:flex`}>
                        {itemsNavbar.map((item) => (
                            <div
                                key={item.id}
                                className={`px-2 py-2 transition duration-150 rounded-lg cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                                data-tooltip-target="tooltip-default"
                            >
                                <Link href={item.link}>{item.icon}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </MotionTransition>
    );
};
export default Navbar;
