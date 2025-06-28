
import { useState } from 'react';

interface ElementCardProps {
  element: {
    name: string;
    description: string;
    image: string;
  };
  index: number;
}

const ElementCard = ({ element, index }: ElementCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="relative group cursor-pointer">
      {/* Mobile Layout - Stacked */}
      <div className="block md:hidden">
        <div className="mb-6">
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
            {!imageError ? (
              <img 
                src={element.image} 
                alt={element.name} 
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Image not available
              </div>
            )}
          </div>
        </div>
        <div className="px-4">
          <h3 className="text-xl font-light text-gray-900 mb-3">{element.name}</h3>
          <p className="text-gray-700 leading-relaxed text-sm">{element.description}</p>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:block">
        {/* Background Image */}
        <div className={`absolute inset-0 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center pointer-events-none`}>
          <div className="w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 bg-gray-100">
            {!imageError ? (
              <img 
                src={element.image} 
                alt={element.name} 
                className={`w-full h-full object-cover ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Image not available
              </div>
            )}
          </div>
        </div>
        
        {/* Text Content */}
        <div className={`relative z-10 max-w-2xl ${index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <div className="bg-white bg-opacity-95 p-8 lg:p-12 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 mb-4 lg:mb-6">{element.name}</h3>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">{element.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementCard;
