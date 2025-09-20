import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917045946449" 
      className="fixed  bottom-16 md:bottom-20 right-4 z-50 flex items-center justify-center bg-white rounded-full shadow-lg transition-transform transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="/whatsap.svg" 
        alt="WhatsApp" 
        className="w-11 h-11 md:w-13 md:h-13" 
      />
    </a>
  );
};

export default WhatsAppButton;
