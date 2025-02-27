import React, { useState } from 'react';
import Sertifikat1 from "../../../assets/Images/sertifikat1.jpg";
import Sertifikat2 from "../../../assets/Images/sertifikat2.jpg";
import Sertifikat3 from "../../../assets/Images/sertifikat3.jpg";
import Sertifikat4 from "../../../assets/Images/sertifikat4.jpg";

const CertificateGallery = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  
  const certificates = [
    { id: 1, src: Sertifikat1 },
    { id: 2, src: Sertifikat2 },
    { id: 3, src: Sertifikat3 },
    { id: 4, src: Sertifikat4 },
  ];
  
  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-[#15112c] p-4 w-full overflow-hidden">
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold mb-4 sm:mb-6 md:mb-8'>Sertifikatlar</h2>
      
      {/* Certificates Grid - Fixed responsive issues */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.src}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      
      {/* Modal with improved responsiveness */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-0 m-0"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'fadeIn 0.3s ease-out forwards',
              maxWidth: '95vw',
              maxHeight: '90vh'
            }}
          >
            <img
              src={selectedCert.src}
              alt="Certificate"
              className="max-w-full max-h-80 sm:max-h-screen object-contain rounded-lg shadow-xl"
            />
            
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-2 text-black hover:bg-opacity-100 transition-all"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Add animation keyframes directly */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CertificateGallery;