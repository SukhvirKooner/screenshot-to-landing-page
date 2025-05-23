import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [chatText, setChatText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor flashlight effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 30%, transparent 70%)`
        }}
      />

      {/* Silhouette figure for shadow effect */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <svg
          width="600"
          height="900"
          viewBox="0 0 320 480"
          fill="black"
          fillOpacity="0.7"
          style={{
            filter: `drop-shadow(${(mousePosition.x - window.innerWidth / 2) / 8}px ${(mousePosition.y - window.innerHeight / 2) / 8}px 120px rgba(0,0,0,0.95)) drop-shadow(${(mousePosition.x - window.innerWidth / 2) / 16}px ${(mousePosition.y - window.innerHeight / 2) / 16}px 24px rgba(0,0,0,0.85))`
          }}
        >
          {/* Triangle head */}
          <path d="M160 40 L220 120 L100 120 Z" />
          {/* Body */}
          <rect x="55" y="200" width="210" height="250" rx="90" />
          {/* Base shadow */}
          <ellipse cx="160" cy="470" rx="90" ry="40" />
        </svg>
      </div>
      
      <div className="relative z-20 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Magic Your Site
            <br />
            <span className="text-6xl md:text-7xl">Chat by Chat</span>
          </h1>

          {/* Subheadline */}
          <div className="mb-12 text-orange-400 text-lg">
            👋 Hey! We're Wegic. Chat with us, share your website vision, and we'll build it in 1 minute.
          </div>

          {/* Chat interface */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 text-black text-left shadow-2xl">
              <div className="text-gray-500 text-sm mb-4">
                I want you to help me complete a website. Let me tell you my requirements: I would like to write a comprehensive guide about training dogs for beginners, sharing my experience in dog training, and offering mentorship tips.
                <br /><br />
                For players.
                <br />
                Display my product information to attract visitors to inquire actively.
              </div>
              
              <div className="flex items-center space-x-2 mt-6">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg"
                >
                  Build Via Chat
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg"
                >
                  Build Via Link
                </Button>
              </div>
            </div>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700">
              📚 Online education platform
            </Button>
            <Button className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700">
              🛒 E-commerce product page
            </Button>
            <Button className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700">
              🎮 Game community
            </Button>
            <Button className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700">
              📦 Product display page
            </Button>
            <Button className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700">
              🎨 Design studio
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="text-gray-400 text-sm">
            SCROLL TO EXPLORE ⭕
          </div>
        </div>
      </div>

      {/* Award badge */}
      <div className="absolute bottom-8 right-8 text-right">
        <div className="bg-gray-800/50 rounded-lg p-3 text-xs border border-gray-600">
          🏆 Golden Kitty Awards
          <br />
          <span className="font-bold">2024</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
