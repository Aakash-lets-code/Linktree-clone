import { useState } from "react";

const images = [
  { src: "home-scroll-fifth/comedycentral.webp", alt: "Image 1", text: "Image 1", width: "w-24", height: "h-64", rounded: "rounded-lg" },
  { src: "home-scroll-fifth/tonyhawk.webp", alt: "Image 2", text: "Image 2" },
  { src: "home-scroll-fifth/funkynnutmeg.webp", alt: "Image 3", text: "Image 3" },
  { src: "home-scroll-fifth/hbo.webp", alt: "Image 3", text: "Image 3" },
  { src: "home-scroll-fifth/pharrell.webp", alt: "Image 3", text: "Image 3" }
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="overflow-hidden w-full">
      <div className="relative flex space-x-4 animate-slide group hover:pause-animation" onMouseEnter={() => setHoveredIndex(true)} onMouseLeave={() => setHoveredIndex(false)}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-64 h-64 overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.src} alt={image.alt} className={`w-full h-full object-cover transition-all duration-300 ${
                hoveredIndex === index ? "rotate-180 bg-blue-500 text-white" : ""  }`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-300">
                <span className="text-center text-xl">{image.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
