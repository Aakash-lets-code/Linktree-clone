import { useState } from "react";

const images = [
  {
    src: "home-scroll-fifth/funkynnutmeg.webp",
    alt: "Image",
    text: "/funkynnutmeg",
    width: "w-72",
    height: "h-56",
    rounded: "rounded-full",
    background: "bg-blue-500"
  },
  {
    src: "home-scroll-fifth/hbo.webp",
    alt: "Image",
    text: "/hbo",
    width: "w-96",
    height: "h-72",
    rounded: "rounded-3xl",
    background: "bg-amber-800"
  },
  {
    src: "home-scroll-fifth/comedycentral.webp",
    alt: "Image",
    text: "/comedycentral",
    width: "w-96",
    height: "h-64",
    rounded: "rounded-4xl",
    background: "bg-fuchsia-900"
  },
  {
    src: "home-scroll-fifth/pharrell.webp",
    alt: "Image",
    text: "/pharrell",
    width: "w-64",
    height: "h-64",
    rounded: "rounded-full",
    background: "bg-purple-600"
  },
  {
    src: "home-scroll-fifth/tonyhawk.webp",
    alt: "Image",
    text: "/tonyhawk",
    width: "w-[500px]",
    height: "h-48",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
  {
    src: "home-scroll-fifth/ladippers.webp",
    alt: "Image",
    text: "/tonyhawk",
    width: "w-[500px]",
    height: "h-48",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
  {
    src: "home-scroll-fifth/selena-gomez.webp",
    alt: "Image",
    text: "/tonyhawk",
    width: "w-[500px]",
    height: "h-48",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="overflow-hidden w-full py-5">
      <div className="relative flex space-x-4 animate-slide group hover:pause-animation">

        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >

            <div className={`relative w-full h-full transition-all duration-300 transform ${hoveredIndex === index ? "rotate-y-180" : "rotate-y-0 "}`} >

              <img src={image.src} alt={image.alt} className={`${image.width} ${image.height} ${image.rounded} w-full h-full object-cover transition-all duration-300`} />

            </div>

            {hoveredIndex === index && (
              <div className={`absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-300 ${image.background} ${image.rounded} `}>
                <span className="text-center text-xs text-black p-3 px-4 rounded-full bg-white font-bold tracking-wide">{image.text}</span>
              </div>
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
