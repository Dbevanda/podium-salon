
import { images, getImageSrc } from '@/config/images';

const AboutHeroImage = () => {
  return (
    <div className="w-full">
      <div className="aspect-[16/6] bg-gray-50 rounded-lg shadow-sm overflow-hidden">
        <img 
          src={getImageSrc(images.about.hero)}
          alt="Podium Zagreb Salon Interior"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
    </div>
  );
};

export default AboutHeroImage;
