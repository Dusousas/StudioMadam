import { useState, useRef } from 'react';

export default function Gallery() {
    const [expanded, setExpanded] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    const toggleExpand = () => {
        setExpanded(!expanded);
        if (!expanded) {
            setTimeout(() => {
                if (galleryRef.current) {
                    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200); // Delay para garantir que a galeria esteja completamente expandida antes do scroll
        }
    };

    const openImageModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    const images = [
        "../Galeria1.jpeg",
        "../Galeria2.jpg",
        "../Galeria3.jpg",
        "../Galeria4.jpeg",

        "../Galeria1.jpeg",
        "../Galeria2.jpg",
        "../Galeria3.jpg",
        "../Galeria4.jpeg",

        "../Galeria1.jpeg",
        "../Galeria2.jpg",
        "../Galeria3.jpg",
        "../Galeria4.jpeg",

    ];

    const initialImages = images.slice(0, 6);

    const ImageGallery = ({ images }: { images: string[] }) => (
        <article className="flex flex-wrap justify-center items-center gap-4">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`Imagem ${index + 1}`} 
                    onClick={() => openImageModal(index)}
                    className="cursor-pointer w-[540px] h-[380px] object-cover"
                />
            ))}
        </article>
    );

    return (
        <>
            <section id='galery' className="py-20 bg-second gradient1">
                <div className="maxWidth">
                    <h1 className="text-center text-primary2">Um pouco mais</h1>
                    <h1 className="text-center uppercase font-Marcellus text-4xl text-primary2">Galeria da beleza</h1>
                    <div className="flex items-center justify-center mt-10">
                        <div className="">
                            <ImageGallery images={initialImages} />
                            {!expanded && (
                                <div className="flex justify-center">
                                    <button onClick={toggleExpand} className="text-white uppercase text-center py-2 px-6 mt-8 rounded bg-primary2 transition duration-300 hover:bg-opacity-80">Ver mais</button>
                                </div>
                            )}
                            {expanded && (
                                <div ref={galleryRef} className="flex items-center justify-center mt-[16px]">
                                    <ImageGallery images={images} />
                                </div>
                            )}
                            {expanded && (
                                <div className="flex justify-center mt-8">
                                    <button onClick={toggleExpand} className="text-white uppercase text-center py-2 px-6 rounded bg-primary2 transition duration-300 hover:bg-opacity-80">Ver menos</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button onClick={prevImage} className="absolute left-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full">{"<"}</button>
                    <div className="relative">
                        <img src={images[selectedImageIndex]} alt={`Imagem ampliada ${selectedImageIndex + 1}`} className="max-h-screen max-w-full" />
                        <button onClick={closeImageModal} className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded">X</button>
                    </div>
                    <button onClick={nextImage} className="absolute right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full">{">"}</button>
                </div>
            )}
        </>
    );
}
