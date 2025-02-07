import React from 'react';

const ImageService = ({
  imageUrl = "/api/placeholder/800/800",
 
  text = "Years of Experience",
  imageAlt = "Experience background",
  className = "",
  // Gradient control props
  gradientStart = "transparent",
  gradientMiddle = "rgb(30, 58, 138, 0.7)", // blue-900 with opacity
  gradientEnd = "rgb(30, 58, 138, 0.95)", // blue-900 with opacity
  gradientStops = {
    start: "0%",
    middle: "25%",
    end: "100%"
  }
}) => {
  // Convert gradient stops to CSS custom properties
  const gradientStyle = {
    '--gradient-start': gradientStart,
    '--gradient-middle': gradientMiddle,
    '--gradient-end': gradientEnd,
    '--gradient-stop-start': gradientStops.start,
    '--gradient-stop-middle': gradientStops.middle,
    '--gradient-stop-end': gradientStops.end,
    background: `linear-gradient(to top, 
      var(--gradient-end) var(--gradient-stop-start),
      var(--gradient-middle) var(--gradient-stop-middle),
      var(--gradient-start) var(--gradient-stop-end)
    )`
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Background image */}
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-[320px] h-auto object-cover"
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={gradientStyle}
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
       
        
        {/* Text */}
        <h3 className="text-2xl font-bold text-amber-400">
          {text}
        </h3>
      </div>
    </div>
  );
};

export default ImageService;