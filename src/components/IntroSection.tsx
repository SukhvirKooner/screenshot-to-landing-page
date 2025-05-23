
import React from 'react';

const IntroSection = () => {
  return (
    <div className="bg-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-8">
            Hi, We're <span className="italic font-bold">wegic</span>
          </h2>
          
          <h3 className="text-6xl md:text-7xl font-bold leading-tight mb-12">
            Your AI website team: designer, developer, and manager.
          </h3>
          
          <p className="text-4xl md:text-5xl font-light leading-relaxed mb-16 text-gray-300">
            Just chat with us, and we'll build, manage, and effortlessly update your site.
          </p>
          
          <h4 className="text-4xl md:text-5xl font-light text-gray-300">
            Let's get started!
          </h4>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex space-x-8 mt-20">
          <div className="w-16 h-16 bg-gray-800 rounded-lg"></div>
          <div className="w-16 h-16 bg-gray-800 rounded-lg"></div>
          <div className="w-16 h-16 bg-gray-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
