import { Certificate } from "crypto";
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Terminal, Smartphone, Database, BarChart, Settings, Network, PenBox } from "lucide-react";

export const socialNetworks = [
    /*{
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },*/
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    /*{
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },*/
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <HomeIcon size={25} color="#fff" strokeWidth={2} />
                <span style={{ marginTop: 4, color: "#fff" }}>Inicio</span>
            </div>
        ),
        link: "/",
    },
    
    {
        id: 2,
        title: "Education",
        icon: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <BookText size={25} color="#fff" strokeWidth={2} />
                <span style={{ marginTop: 4, color: "#fff" }}>Educacion</span>
            </div>
        ),
        link: "/education",
    },
    {
        id: 3,
        title: "User",
        icon: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Terminal size={25} color="#fff" strokeWidth={2} />
                <span style={{ marginTop: 4, color: "#fff" }}>Skills</span>
            </div>
        ),
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CodeSquare size={25} color="#fff" strokeWidth={2} />
                <span style={{ marginTop: 4, color: "#fff" }}>Portafolio</span>
            </div>
        ),
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Speech size={25} color="#fff" strokeWidth={2} />
                <span style={{ marginTop: 4, color: "#fff" }}>Contacto</span>
            </div>
        ),
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Carrera Técnica en Desarrollo de Sistemas de Información",
        subtitle: "Instituto de Investigación y Desarrollo de Administración y Tecnología (IDAT) ",
        description: "Como estudiante de la carrera técnica en Desarrollo de Sistemas de Información, he adquirido habilidades para diseñar, desarrollar y gestionar aplicaciones y sistemas en diversas plataformas tecnológicas. A lo largo de mis estudios, me he especializado en áreas clave como programación, desarrollo de aplicaciones móviles y web, gestión de proyectos TIC y seguridad informática.",
        date: "Ago 2022 -Actualidad",
        certificate:"/Idat-certificado.pdf"
        
    },
    {
        id: 2,
        title: "Certificación en PCAP: Programming Essentials in Python",
        subtitle: "Cisco Networking Academy",
        description: "Certificado en PCAP: Programming Essentials in Python por Cisco Networking Academy en colaboración con OpenEDG Python Institute, donde adquirí habilidades fundamentales en programación con Python, manejo de herramientas de desarrollo, buenas prácticas de codificación y programación orientada a objetos (OOP).",
        date: "Ene 2023 -Abr 2023",
        certificate:"/Python.pdf"
    },
    {
        id: 3,
        title: "Certificación en CCNAv7: Introducción a Redes",
        subtitle: "Cisco Networking Academy",
        description: "He completado la certificación CCNAv7: Introducción a Redes de Cisco Networking Academy, donde adquirí conocimientos sobre configuración de redes locales y remotas, protocolos de enlace de datos, direccionamiento IPv4 e IPv6, capas del modelo OSI, y resolución de problemas de conectividad en redes pequeñas.",
        date: "Sept 2022 - Nov 2022",
        certificate:"/CCNA.pdf"
    },
    {
        id: 4,
        title: "Certificación en Operador de Centro de Control",
        subtitle: "Centro de Asesoría y Capacitación en Seguridad Integral (CACSI)",
        description: "He completado la certificación como Operador de Centro de Control por el Centro de Asesoría y Capacitación en Seguridad Integral (CACSI), donde adquirí conocimientos en videovigilancia (CCTV), sistemas GPS, control de acceso, sistemas de alarmas contra incendios, atención de emergencias y administración documental en centros de control.",
        date: "Mar 2024 - Abr 2024",
        certificate:"/CCTV.pdf"
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Smartphone  />,
        title: "Desarrollo de aplicaciones móviles",
        description: "Creación de aplicaciones móviles eficientes y fáciles de usar para Android y iOS.",
    },
    {
        icon: <Database />,
        title: "Bases de datos",
        description: "Diseño y optimización de bases de datos para almacenamiento eficiente y acceso rápido a la información.",
    },
    {
        icon: <BarChart />,
        title: "Big Data y análisis de datos",
        description: "Procesamiento y análisis de grandes volúmenes de datos para obtener información valiosa.",
    },
    {
        icon: <Settings />,
        title: "Automatización de procesos",
        description: "Automatización de tareas repetitivas para mejorar la eficiencia y reducir errores.",
    },
    {
        icon: <Network />,
        title: "Redes y conectividad",
        description: "Configuración y optimización de redes para garantizar conectividad segura y rápida.",
    },
    {
        icon: <PenBox />,
        title: "Programación en Python",
        description: "Desarrollo de aplicaciones utilizando Python, con un enfoque en la escalabilidad y mantenimiento.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema Ventas Botica Ricardo!.",
        image: "/proyecto_Botica.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Sistema Administracion Maquinaria Marshial's",
        image: "/proyecto_Maquinaria.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "APP Administracion Maquinaria Marshial's",
        image: "/proyecto_App.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
    /*{
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }*/
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];