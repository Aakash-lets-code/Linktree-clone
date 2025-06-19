import { useState } from "react";

const images = [
  {
    src: "home-scroll-fifth/funkynnutmeg.webp",
    alt: "Image",
    text: "/funkynnutmeg",
    width: "300px",
    height: "h-96",
    rounded: "rounded-full",
    background: "bg-blue-500"
  },
  {
    src: "home-scroll-fifth/hbo.webp",
    alt: "Image",
    text: "/hbo",
    width: "450px",
    height: "h-96",
    rounded: "rounded-3xl",
    background: "bg-amber-800"
  },
  {
    src: "home-scroll-fifth/comedycentral.webp",
    alt: "Image",
    text: "/comedycentral",
    width: "300px",
    height: "h-96",
    rounded: "rounded-4xl",
    background: "bg-fuchsia-900"
  },
  {
    src: "home-scroll-fifth/pharrell.webp",
    alt: "Image",
    text: "/pharrell",
    width: "250px",
    height: "h-96",
    rounded: "rounded-full",
    background: "bg-purple-600"
  },
  {
    src: "home-scroll-fifth/tonyhawk.webp",
    alt: "Image",
    text: "/tonyhawk",
    width: "450px",
    height: "h-96",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
  {
    src: "home-scroll-fifth/laclippers.webp",
    alt: "Image",
    text: "/ladippers",
    width: "250px",
    height: "h-96",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
  {
    src: "home-scroll-fifth/selena-gomez.webp",
    alt: "Image",
    text: "/selenagomez",
    width: "250px",
    height: "h-96",
    rounded: "rounded-lg",
    background: "bg-red-700"
  },
];

const ImageSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="overflow-hidden w-full py-5">
      <div className="relative flex space-x-4 animate-slide group hover:pause-animation min-w-max">

        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >

            <div className={`relative transition-all duration-300 transform ${hoveredIndex === index ? "rotate-y-180" : "rotate-y-0 "}`} >

              <img src={image.src} alt={image.alt} style={{ width: image.width }} className={`${image.height} ${image.rounded} object-cover transition-all duration-300`} />

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

export default ImageSlider;
