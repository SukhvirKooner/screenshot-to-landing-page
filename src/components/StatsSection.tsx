
import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Jazz Transmit Music */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-black mb-6">
                <h3 className="text-2xl font-bold">JAZZ TRANSMIT MUSIC</h3>
                <p className="text-lg opacity-80">Vinyl Record Display and Sales</p>
              </div>
              
              {/* Laptop mockup */}
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-white rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-black">
                    <h4 className="text-3xl font-bold mb-2">JAZZ<br />TRANSMIT<br />MUSIC</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Countries stat */}
          <div className="text-right">
            <div className="text-8xl font-bold text-gray-400 mb-4">230</div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Countries and regions covered
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-32">
          {/* Left side - Websites stat */}
          <div>
            <div className="text-8xl font-bold text-gray-400 mb-4">500,000+</div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Websites built and managed
            </h3>
          </div>

          {/* Right side - InfinityAI */}
          <div className="relative">
            <div className="bg-gray-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-white mb-6">
                <h3 className="text-xl font-bold">InfinityAI</h3>
                <p className="text-sm opacity-80">Product Official Website</p>
              </div>
              
              {/* Laptop mockup */}
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-black rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">∞</div>
                    <p className="text-sm">Premium AI content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-32">
          {/* Left side - Language stat */}
          <div>
            <div className="text-8xl font-bold text-gray-400 mb-4">95%</div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Chat in their native language
            </h3>
          </div>

          {/* Right side - Morning Brew Coffee */}
          <div className="relative">
            <div className="bg-green-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-black mb-6">
                <h3 className="text-xl font-bold">MORNINGBREW COFFEE</h3>
                <p className="text-sm opacity-80">Small business homepage</p>
              </div>
              
              {/* Website mockup */}
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold">MORNINGBREW</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-gray-200 h-16 rounded"></div>
                  <div className="bg-gray-200 h-16 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-32">
          <div className="text-8xl font-bold text-gray-400 mb-4">80%</div>
          <h3 className="text-4xl font-bold text-black">
            Starting from zero
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
