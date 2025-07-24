import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ImageSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "photo-1469474968028-56623f02e425",
      title: t('nav.treatments'),
      link: "/treatments",
      alt: "Mountain landscape with sun rays"
    },
    {
      image: "photo-1458668383970-8ddd3927deed",
      title: t('nav.about'),
      link: "/about", 
      alt: "Mountain alps landscape"
    },
    {
      image: "photo-1500375592092-40eb2168fd21",
      title: t('nav.elements'),
      link: "/the-5-elements",
      alt: "Ocean wave at beach"
    },
    {
      image: "photo-1506744038136-46273834b3fb",
      title: t('nav.contact'),
      link: "/contact",
      alt: "Body of water surrounded by trees"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=1920&q=80`}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
                {slide.title}
              </h2>
              <Link
                to={slide.link}
                className="inline-block px-8 py-3 bg-white text-gray-900 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200"
              >
                {slide.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;