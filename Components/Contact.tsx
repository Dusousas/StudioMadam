import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <>
            <section id="contact" className=" py-10 lg:py-20">
                <h1 className=" hidden text-center text-primary2 lg:block">Precisando de Ajuda?</h1>
                <h1 className=" hidden text-center uppercase font-Marcellus text-4xl text-primary2 mb-20 lg:block">Estamos Aqui Para Você!</h1>

                <div className="maxWidth lg:flex">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center text-primary2 lg:text-left">Ficou com alguma dúvida?</h1>
                        <h1 className="text-center uppercase font-Marcellus text-4xl text-primary2 lg:text-left">Fale Conosco</h1>
                        <p className="text-center pt-6 lg:text-left">Não perca mais tempo e entre em contato com nossa equipe de especialistas. Teremos o mais prazer em ajudar você.</p>

                        <article className="flex items-center justify-center pt-6 gap-4 lg:justify-start ">
                            <a href="#"><FontAwesomeIcon className="text-primary2 text-3xl mb-2" icon={faSquareInstagram} /></a>
                            <a href="#"><FontAwesomeIcon className="text-primary2 text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                            <a href="#"><FontAwesomeIcon className="text-primary2 text-3xl mb-2" icon={faSquareFacebook} /></a>
                        </article>

                        <article className="flex justify-center gap-2 items-center pt-6 lg:justify-start">
                            <img src="/pin.png" alt="" />
                            <p className="lg:text-left">Rua Amitaba, 24. São Paulo, Brazil 05831055</p>
                        </article>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center ">
                        <form className="mt-6 border-[1px] rounded-md p-10 gap-4  max-w-[550px]" >
                            <h1 className="text-primary2 text-xl mb-2">Formulário de contato</h1>
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite seu primeiro nome*" />
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite um e-mail valido*" />
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Ex: (11)9 1234-0000*" />
                            <textarea className="border w-full py-6 px-2 resize-none mb-4 outline-none" placeholder="Conte-nos tudo*" />
                            <button className="text-white uppercase text-center py-2 px-6 rounded bg-primary2" type="submit">Enviar</button>

                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}