
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
  
  // Treatment images - using working placeholder URLs
  treatments: {
    facial: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400',
    body: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400',
    antiAging: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400',
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
