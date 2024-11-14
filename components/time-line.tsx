import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-5xl mx-auto md:pb-40 md:pt-20 ">
                <div className="my-6">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-6 pr-4 sm:pr-32 group">
                            <time className="sm:absolute right-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase md:w-20 w-auto px-3 md:h-12 h-6 mb-3 sm:mb-0 text-emerald-800 bg-emerald-100 rounded-xl text-center">{data.date}</time>
                            <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
                            
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:right-2 sm:before:right-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:mr-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:right-2 
                                        sm:after:right-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:mr-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                
                                <div className="text-xl font-bold text-gray-700">{data.subtitle}</div>
                                
                            </div>
                            <div className="text-slate-700">{data.description}</div>
                            
                            <button className="mt-4 px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500">
                            <a 
                                href={data.certificate} // Asegúrate de que la ruta coincida con la ubicación del archivo en tu proyecto
                                download="certificado.pdf" // Nombre de archivo sugerido al descargar
                                
                            >
                                Descargar Certificado
                            </a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;