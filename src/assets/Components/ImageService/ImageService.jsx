const ImageService = ({
  imageUrl,
  text,
  imageAlt = "Service image",
  className = ""
}) => {
  return (
    <div className={`relative w-full h-72 overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${className}`}>
      {/* Background image */}
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay - Always Visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-xl font-bold text-yellow-400">{text}</h3>
      </div>
    </div>
  );
};

export default ImageService;