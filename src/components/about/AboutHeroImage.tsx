
import { images, getImageSrc } from '@/config/images';
import { OptimizedImage } from '@/components/common';

const AboutHeroImage = () => {
  return (
    <div className="w-full">
      <div className="aspect-[16/6] bg-gray-50 rounded-lg shadow-sm overflow-hidden">
        <OptimizedImage 
          src={getImageSrc(images.about.hero)}
          alt="Podium Zagreb Salon Interior"
          className="w-full h-full object-cover"
          fallback="/placeholder.svg"
        />
      </div>
    </div>
  );
};

export default AboutHeroImage;
