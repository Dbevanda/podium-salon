
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
  
  // Treatment images - using your uploaded images
  treatments: {
    resetDetoxify: '/lovable-uploads/d898a72b-d303-49ca-9a42-61558ac8204b.png', // Image 1
    wellAging: '/lovable-uploads/3f089c64-148f-4662-a2c2-146bf1b042d3.png', // Image 2
    deactivateStress: '/lovable-uploads/04417ae4-c162-4da9-9dac-efb02bb26ba7.png', // Image 3
    proRenewalPeel: '/lovable-uploads/3eb993bc-3411-409a-8109-bb72e619b4b6.png', // Image 4
    brighteningTouch: '/lovable-uploads/6919a21a-73dd-424e-a95b-4c3bd01b0411.png', // Image 5
    sixtyMinutes: '/lovable-uploads/6b31bf2c-b02e-475a-a29d-57e7778f0773.png', // Image 6
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
