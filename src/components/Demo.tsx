
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Mic, FileText } from 'lucide-react';

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDemo, setActiveDemo] = useState('video');
  
  return (
    <section id="demo" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See It In Action
          </h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Watch how easy it is to shop with just your voice.
          </p>
          
          <div className="flex space-x-2 bg-white p-1 rounded-lg border mt-4">
            <Button 
              variant={activeDemo === 'video' ? 'default' : 'ghost'}
              className={activeDemo === 'video' ? 'bg-purple-500' : ''}
              onClick={() => setActiveDemo('video')}
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
            <Button 
              variant={activeDemo === 'tryit' ? 'default' : 'ghost'}
              className={activeDemo === 'tryit' ? 'bg-purple-500' : ''}
              onClick={() => setActiveDemo('tryit')}
            >
              <Mic className="h-4 w-4 mr-2" />
              Try It
            </Button>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {activeDemo === 'video' ? (
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="rounded-full bg-purple-500 bg-opacity-90 text-white w-16 h-16 flex items-center justify-center hover:bg-opacity-100 transition-all"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <div className="w-4 h-8 flex space-x-1">
                      <div className="w-1.5 h-full bg-white"></div>
                      <div className="w-1.5 h-full bg-white"></div>
                    </div>
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-left">
                <div className="font-medium">Demo: Finding the Best Headphones Deal</div>
                <div className="text-sm text-white/80">0:45</div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="bg-purple-100 p-4 flex items-center justify-center">
                <div className="w-[280px] h-[560px] bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-navy-800 relative">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-navy-800 flex items-center justify-center">
                    <div className="w-20 h-6 bg-black rounded-b-xl"></div>
                  </div>
                  <div className="pt-12 pb-4 h-full bg-purple-50 flex flex-col">
                    <div className="p-4 bg-white mx-4 rounded-lg shadow-sm mb-4">
                      <h4 className="font-medium text-sm mb-1">What can I help you find today?</h4>
                      <p className="text-xs text-gray-500">Try saying or typing what you need...</p>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end px-4">
                      <div className="flex space-x-2 mb-4">
                        <Button 
                          variant="outline" 
                          className="flex-1 text-xs h-auto py-2"
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Type
                        </Button>
                        <Button 
                          className="flex-1 bg-purple-500 text-white text-xs h-auto py-2"
                        >
                          <Mic className="h-3 w-3 mr-1" />
                          Speak
                        </Button>
                      </div>
                      <p className="text-center text-xs text-gray-500 mb-4">
                        Try saying: "Find me the best deals on wireless headphones under $100"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Try the Voice Experience</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Our AI assistant understands natural language and helps you find exactly what you need, fast.
                </p>
                <Button className="btn-primary w-full">
                  Launch Full Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
