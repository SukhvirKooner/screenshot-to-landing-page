
import React from 'react';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  return (
    <div className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Step 1 - Build in 10s */}
          <div className="text-center">
            <div className="bg-gray-900 rounded-3xl p-8 mb-8 aspect-square flex flex-col justify-between">
              <h3 className="text-3xl font-bold text-white text-left">Build in 10s</h3>
              
              <div className="bg-gray-800 rounded-xl p-6 mx-4">
                <div className="bg-black rounded-lg p-4 mb-4">
                  <div className="text-white text-sm mb-2">Chat with me...</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">🤖</span>
                    </div>
                    <Button className="bg-white text-black rounded-full px-4 py-1 text-sm">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-500 text-xs text-left mx-4">
                Various website templates and examples
              </div>
            </div>
          </div>

          {/* Step 2 - Edit easily */}
          <div className="text-center">
            <div className="bg-gray-900 rounded-3xl p-8 mb-8 aspect-square flex flex-col justify-between">
              <h3 className="text-3xl font-bold text-white text-left">Edit easily</h3>
              
              <div className="bg-gray-800 rounded-xl p-6 mx-4">
                <div className="text-gray-400 text-sm mb-4">Understand Our Services</div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full absolute top-8 left-1/2 transform -translate-x-1/2"></div>
                  <div className="border-2 border-green-400 rounded-full w-20 h-12 absolute top-6 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  This is a brave swordsman to see.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Go live in 1 click */}
          <div className="text-center">
            <div className="bg-gray-900 rounded-3xl p-8 mb-8 aspect-square flex flex-col justify-between">
              <h3 className="text-3xl font-bold text-white text-left">Go live in 1 click</h3>
              
              <div className="bg-gray-800 rounded-xl p-6 mx-4">
                <Button className="bg-white text-black rounded-full px-6 py-2 mb-4">
                  Publish!
                </Button>
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-green-400 rounded"></div>
                  <div className="w-6 h-6 bg-pink-400 rounded"></div>
                  <div className="w-6 h-6 bg-purple-400 rounded"></div>
                </div>
              </div>
              
              <div className="text-gray-500 text-xs text-left mx-4">
                Understand Our Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
