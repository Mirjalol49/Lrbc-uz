const ImageService = ({
  imageUrl,
  text,
  imageAlt = "Service image",
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 ${className}`}>
      {/* Background image */}
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-48 object-cover md:h-40"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/70 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-lg md:text-xl font-bold text-amber-400">{text}</h3>
      </div>
    </div>
  );
};

export default ImageService;
