
import { motion } from "framer-motion";

export default function Main() {
    return (
        <>
            <section id="inicio" className="custom customH flex mainBG">
                <div className="maxWidth w-full flex justify-center ">

                    <article className="h-1/2 w-full flex flex-col justify-center lg:h-full lg:justify-center z-10">
                        <motion.h1 className="font-Marcellus text-5xl text-primary2 text-center" initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}>Ame-se com nossos tratamentos de beleza</motion.h1>
                        <motion.p className="text-center mt-4 lg:text-center" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}>Descubra uma nova versão de você com nossos serviços de beleza.</motion.p>
                        <div className="mt-4 flex justify-center">
                            <motion.a className="bg-primary2 text-white py-2  px-4 rounded" href="" initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 1 }}>Agende agora</motion.a>
                        </div>
                    </article>

                    <article className="absolute bottom-0 left-0">
                        <div>
                            <img src="../Flormain.png" alt="Rosa com traços finos" />
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}