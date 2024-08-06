import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';


export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setShouldAnimate(true);
            }, 200); // Meio segundo em milissegundos
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <>
            <section className="bg-white custom py-20 gradient lg:py-44 lg:mt-10" id='about' ref={ref}>
                <div className="maxWidth flex flex-col items-center lg:flex-row lg:justify-between lg:gap-4">

                    <article className="w-full lg:w-[60%]">
                        <h1 className="text-center font-Marcellus font-bold uppercase text-primary2 lg:text-left">Sobre nós</h1>
                        <h1 className="text-center text-4xl text-primary2 lg:text-left">Bem vindo ao Studio Madam</h1>
                        <p className="text-center mt-2 lg:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, temporibus.</p>
                        <p className="text-center mt-4 lg:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates commodi laudantium veritatis, omnis pariatur atque ut at! Maxime accusamus eveniet ea deserunt enim at minus, expedita velit autem totam voluptate voluptatibus explicabo laboriosam? Nostrum, qui ad. Nihil, soluta nulla!</p>
                        <div className="bg-primary flex flex-wrap justify-center gap-4 py-6 mt-6 text-white">
                            <article className="flex gap-2 items-center">
                                <div>
                                    <img src="feliz.png" alt="Icone de rosto feliz" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Clientes Realizados</h1>
                                    <p className="text-xl font-semibold">500+</p>
                                </div>
                            </article>
                            <article className="flex gap-2 items-center">
                                <div>
                                    <img src="experiencia.png" alt="Icone de uma pessoa experiente" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Anos de Experiência</h1>
                                    <p className="text-xl font-semibold">10</p>
                                </div>
                            </article>
                            <article className="flex gap-4 items-center px-4">
                                <div>
                                    <img src="Lista.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Serviços Oferecidos</h1>
                                    <p className="text-xl font-semibold">20+</p>
                                </div>
                            </article>
                        </div>
                    </article>

                    <article className="mt-8">
                        <div>
                            <motion.img className="" src="../Madam1.png" alt="Foto da equipe do Studio Madam" animate={{ x: ["-3%", "3%"] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2,
                                    ease: "easeInOut"
                                }} />

                        </div>
                    </article>

                </div>
            </section>


        </>
    );
}