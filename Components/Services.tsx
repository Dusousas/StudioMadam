export default function Services() {
    return (
        <>
            <section id="services" className="custom py-10 bg-second lg:py-20">
                <div className="maxWidth">
                    <h1 className="text-center text-primary2">Nossos Serviços</h1>
                    <h1 className="text-center uppercase font-Marcellus text-4xl text-primary2 ">Nossos principais serviços</h1>
                    
                    <article className="flex justify-center mt-20 ">
                        <div className="flex flex-col flex-wrap justify-center gap-x-20 gap-y-10 lg:flex-row ">
                            <div className="flex flex-col items-center w-[192px] z-10">
                                <div className="icon-wrapper bg-primary flex items-center justify-center rounded-full p-4">
                                    <img src="unha.png" alt="Spa" />
                                </div>
                                <h2 className="text-cente mt-2">Alongamento de Unhas</h2>
                            </div>
    
                            <div className="flex flex-col items-center w-[192px] z-10">
                                <div className="icon-wrapper bg-primary flex items-center justify-center rounded-full p-4">
                                    <img src="cabelo.png" alt="Hair Makeup" />
                                </div>
                                <h2 className="text-center mt-2">Cabelos</h2>
                            </div>
    
                            <div className="flex flex-col items-center w-[192px] z-10">
                                <div className="icon-wrapper bg-primary flex items-center justify-center rounded-full p-4">
                                    <img src="sobrancelha.png" alt="Waxing" />
                                </div>
                                <h2 className="text-center mt-2">Sobrancelhas | Cílios</h2>
                            </div>
    
                            <div className="flex flex-col items-center w-[192px] z-10">
                                <div className="icon-wrapper bg-primary flex items-center justify-center rounded-full p-4">
                                    <img src="manicure.png" alt="Facial" />
                                </div>
                                <h2 className="text-center mt-2">Manicure | Pedicure</h2>
                            </div>
    
                            <div className="flex flex-col items-center w-[192px] z-10">
                                <div className="icon-wrapper bg-primary flex items-center justify-center rounded-full p-4">
                                    <img src="spa.png" alt="Massage" />
                                </div>
                                <h2 className="text-center mt-2">Spa de pés</h2>
                            </div>
                        </div>
                    </article>

                    <div className="hidden line relative customSc:block"></div>

                </div>
            </section>
        </>
    );
}
