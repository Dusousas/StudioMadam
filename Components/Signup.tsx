export default function Signup() {
    return (
        <>
            <section id="services" className="SingBg py-24">
                <div className="maxWidth">

                        <h1 className="text-center text-primary2">Fique por dentro de todas as novidades que acontecem no Studio Madam</h1>
                        <h1 className="text-center uppercase font-Marcellus text-4xl mt-4 text-primary2">Se inscreva para receber nossas promoções</h1>
                        <div className=" flex mx-auto mt-6 items-center gap-2 md:w-[50%]">
                            <input className="w-full py-2 px-2 rounded-md" placeholder="Seu email*" type="text" />
                            <div>
                                <button className="bg-primary text-white py-2  px-4 rounded">Enviar</button>
                            </div>
                        </div>
                 
                </div>
            </section>
        </>
    );
}