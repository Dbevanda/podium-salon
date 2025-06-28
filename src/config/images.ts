
// Central image configuration - easily update image paths here
export const images = {
  // About page images
  about: {
    hero: '/images/about/podium-salon-interior.jpg', // Replace with your image
    treatmentRoom: '/images/about/treatment-room.jpg', // Replace with your image
    wellnessArea: '/images/about/wellness-area.jpg', // Replace with your image
  },
  
  // Home page images
  home: {
    hero: '/images/home/podium-salon.jpg', // Replace with your image
  },
  
  // Treatment images
  treatments: {
    facial: '/images/treatments/facial-rejuvenation.jpg', // Replace with your image
    body: '/images/treatments/body-wellness.jpg', // Replace with your image
    antiAging: '/images/treatments/anti-aging.jpg', // Replace with your image
  },
  
  // 5 Elements images
  elements: {
    purification: '/images/elements/purification.jpg', // Replace with your image
    stimulation: '/images/elements/stimulation.jpg', // Replace with your image
    hydration: '/images/elements/hydration.jpg', // Replace with your image
    nourishment: '/images/elements/nourishment.jpg', // Replace with your image
    protection: '/images/elements/protection.jpg', // Replace with your image
  }
};

// Fallback to placeholder if local image doesn't exist
export const getImageSrc = (localPath: string, fallbackUrl?: string) => {
  return localPath || fallbackUrl || '/placeholder.svg';
};
