"use client";

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';
import emailjs from 'emailjs-com';

const TestimonialsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    // Función para actualizar el estado formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para enviar el formulario
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_n9hc1ho', 'template_tapmhmu', e.target as HTMLFormElement, 'zAcf88iWE0VUZQITm')
            .then((result) => {
                console.log('Mensaje enviado:', result.text);
                setStatusMessage('El formulario se ha enviado correctamente.');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.log('Error:', error.text);
                setStatusMessage('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
            });
    };

    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center items-center mt-20 h-lvh px-14'>
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunos métodos 
                    <span className="block font-bold text-secondary"> de contactarme!</span>
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-start mt-8 space-y-6 md:space-y-0 md:space-x-8 max-w-4xl mx-auto">
                    {/* Lado izquierdo: Formulario */}
                    <form onSubmit={sendEmail} className="flex-1 space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="text-black w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-black w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="text-black w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="text-black w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="px-6 py-2 font-semibold text-white transition-all bg-secondary rounded-xl hover:bg-secondary-dark">
                                Enviar Mensaje
                            </button>
                        </div>
                        {statusMessage && (
                            <p className="mt-4 text-lg text-center text-green-800">{statusMessage}</p>
                        )}
                    </form>

                    {/* Lado derecho: Contacto por WhatsApp */}
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <p className="text-lg font-semibold text-gray-800">
                            O también puedes contactarme directamente a mi WhatsApp:
                        </p>
                        <a
                            href="https://wa.me/qr/55NATHJWTU4CE1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 font-semibold text-white transition-all bg-green-500 rounded-xl hover:bg-green-600"
                        >
                            Enviar mensaje por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;
