
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      image: "/lovable-uploads/6c102122-b219-4ca3-b981-e62f823012b8.png",
      title: t('nav.treatments'),
      link: "/treatments",
      alt: "Spa treatment tools and skincare products"
    },
    {
      image: "/lovable-uploads/6d3438e7-148b-46dd-9c76-41defa912d90.png",
      title: t('nav.about'),
      link: "/about", 
      alt: "Elegant consultation area with comfortable seating"
    },
    {
      image: "/lovable-uploads/05ae8591-7522-4d65-b51f-5798effc4515.png",
      title: t('nav.elements'),
      link: "/the-5-elements",
      alt: "Elegant candles creating spa ambiance"
    },
    {
      image: "/lovable-uploads/8a9c85bd-a4d1-47c1-ad57-f310ae6f73cc.png",
      title: t('nav.contact'),
      link: "/contact",
      alt: "Modern treatment room with natural lighting"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section 
      className="relative h-[70vh] w-full overflow-hidden pt-28"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
                {slide.title}
              </h2>
              <Link
                to={slide.link}
                className="inline-block px-6 py-2 bg-white text-gray-900 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200"
              >
                {slide.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-colors duration-200 disabled:opacity-50 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
