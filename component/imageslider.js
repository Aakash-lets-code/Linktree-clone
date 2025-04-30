import { useEffect, useState } from 'react';

const images = [
    '/search.svg',
    '/check.svg',
    '/file.svg',
    '/globe.svg'
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (


        <div className="relative w-64 h-64 overflow-hidden">

            {images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

        </div>


    );
};

export default ImageSlider;
