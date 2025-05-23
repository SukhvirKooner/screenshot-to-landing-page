
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
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero title area with flashlight effect */}
          <div className="relative mb-12">
            {/* Cursor flashlight effect - limited to title area */}
            <div 
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y - window.scrollY}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 30%, transparent 70%)`
              }}
            />

            {/* Silhouette figure for shadow effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <svg
                width="600"
                height="500"
                viewBox="0 0 320 280"
                fill="black"
                fillOpacity="0.6"
                style={{
                  filter: `drop-shadow(${(mousePosition.x - window.innerWidth / 2) / 8}px ${(mousePosition.y - window.innerHeight / 2) / 8}px 80px rgba(0,0,0,0.9)) drop-shadow(${(mousePosition.x - window.innerWidth / 2) / 16}px ${(mousePosition.y - window.innerHeight / 2) / 16}px 20px rgba(0,0,0,0.8))`
                }}
              >
                <ellipse cx="160" cy="80" rx="70" ry="90" /> {/* Head/shoulders */}
                <rect x="75" y="140" width="170" height="120" rx="70" /> {/* Body */}
              </svg>
            </div>

            {/* Main headline */}
            <h1 className="relative z-10 text-7xl md:text-8xl font-bold leading-tight">
              Magic Your Site
              <br />
              <span className="text-6xl md:text-7xl">Chat by Chat</span>
            </h1>
          </div>

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
