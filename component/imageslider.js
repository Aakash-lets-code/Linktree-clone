import { useState } from "react";

const images = [
  {
    src: "home-scroll-fifth/funkynnutmeg.webp",
    alt: "Image",
    text: "/funkynnutmeg",
    width: "w-72",
    height: "h-56",
    rounded: "rounded-full"
  },
  {
    src: "home-scroll-fifth/hbo.webp",
    alt: "Image",
    text: "/hbo",
    width: "w-96",
    height: "h-72",
    rounded: "rounded-3xl"
  },
  {
    src: "home-scroll-fifth/comedycentral.webp",
    alt: "Image",
    text: "/comedycentral",
    width: "w-96",
    height: "h-64",
    rounded: "rounded-4xl"
  },
  {
    src: "home-scroll-fifth/pharrell.webp",
    alt: "Image",
    text: "/pharrell",
    width: "w-64",
    height: "h-64",
    rounded: "rounded-full"
  },
  {
    src: "home-scroll-fifth/tonyhawk.webp",
    alt: "Image",
    text: "/tonyhawk",
    width: "w-[500px]",
    height: "h-48",
    rounded: "rounded-lg"
  },
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="overflow-hidden w-full py-5">
      <div className="relative flex space-x-4 animate-slide group hover:pause-animation">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >
            <div className={`relative w-full h-full transition-all duration-300 transform ${hoveredIndex === index ? "rotate-y-180 bg-blue-500" : "rotate-y-0 transition-transform"}`} >
              <img src={image.src} alt={image.alt} className={`${image.width} ${image.height} ${image.rounded} w-full h-full object-cover transition-all duration-300`} />
              {hoveredIndex === index && (<div className="absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-300">  <span className="text-center text-xl text-invert">{image.text}</span> </div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
