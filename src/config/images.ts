
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
  
  // Treatment images - using uploaded images
  treatments: {
    facial: '/lovable-uploads/390e4043-c6c1-4a57-860f-41bbc2d3a3f7.png',
    body: '/lovable-uploads/6da874c1-d4f8-4efb-8712-c328e0d4ceba.png',
    antiAging: '/lovable-uploads/cf5029f9-2a5e-4b11-9100-477afe6ec2c0.png',
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
