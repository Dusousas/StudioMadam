import { useState } from 'react';

interface Service {
    title: string;
    description: string;
    imageUrl: string;
}

const services: Service[] = [
    { title: 'Unhas', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make', imageUrl: 'UnhaService.jpg' },
    { title: 'Cabelos', description: 'Descrição para Cabelos...', imageUrl: 'UnhaService.jpg' },
    { title: 'Sobrancelhas', description: 'Descrição para Sobrancelhas...', imageUrl: 'UnhaService.jpg' },
    { title: 'Manicure', description: 'Descrição para Manicure...', imageUrl: 'UnhaService.jpg' },
    { title: 'Spa de pés', description: 'Descrição para Spa de pés...', imageUrl: 'UnhaService.jpg' },
];

const Services2: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service>(services[0]);

    return (
        <section id='services' className="py-20 bg-second">
            <div className="maxWidth">

                <div className="flex w-full lg:w-[80%] py-5 items-center mx-auto  justify-between rounded-md bg-white">
                    <div className=" py-4 space-y-4 lg:w-[300px]">
                        {services.map((service) => (
                            <button
                                key={service.title}
                                onClick={() => setSelectedService(service)}
                                className={`block w-full text-left  p-4 ${selectedService.title === service.title ? 'bg-second rounded-l rounded-full' : 'bg-gray-100 rounded-l rounded-full'
                                    }  focus:outline-none`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    <div className="hidden lg:block pl-20 ">
                        <img src={selectedService.imageUrl} alt={selectedService.title} className="rounded-full border-4 border-primary w-[300px] h-[300px]" />
                    </div>

                    <div className="w-1/2 p-6">
                        <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                        <p className="mt-4">{selectedService.description}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
        button {
          border: 1px solid transparent;
        }
      `}</style>
        </section>
    );
};

export default Services2;
