
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, ShoppingBag, Clock } from 'lucide-react';

export function Hero() {
  const handleTryNowClick = () => {
    // Find the ElevenLabs widget and click its button
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      const widgetButton = widget.shadowRoot?.querySelector('button');
      if (widgetButton) {
        widgetButton.click();
      }
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 hero-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-block p-2 bg-purple-100 rounded-full mb-2">
            <Mic className="h-6 w-6 text-purple-600" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="gradient-text">Shop Smarter</span> with Voice
          </h1>
          
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Save time and find the best deals with our AI-powered voice shopping assistant. Just say what you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="btn-primary text-lg h-12" onClick={handleTryNowClick}>
              Try Now Free
            </Button>
            <Button className="btn-secondary text-lg h-12">
              See How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-12">
            <div className="flex flex-col items-center">
              <ShoppingBag className="h-8 w-8 text-purple-500 mb-2" />
              <h3 className="text-xl font-bold">10x Faster</h3>
              <p className="text-sm text-gray-500">than traditional shopping</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-purple-500 mb-2" />
              <h3 className="text-xl font-bold">Save 3 Hours</h3>
              <p className="text-sm text-gray-500">weekly on shopping time</p>
            </div>
            <div className="flex flex-col items-center col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">%</div>
              <h3 className="text-xl font-bold">Save 15-30%</h3>
              <p className="text-sm text-gray-500">with smart price comparisons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
