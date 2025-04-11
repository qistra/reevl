
import React, { useState } from 'react';
import { ShoppingBag, Mic, Clock, Search, Tag, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    icon: Mic,
    title: "Voice-First Shopping",
    description: "Just speak naturally and our AI understands exactly what you need."
  },
  {
    id: 2,
    icon: Search,
    title: "Smart Search",
    description: "Our AI searches hundreds of retailers to find the perfect products."
  },
  {
    id: 3,
    icon: Tag,
    title: "Deal Finder",
    description: "Automatically applies the best coupons and finds price drops."
  },
  {
    id: 4,
    icon: Clock,
    title: "Time Saving",
    description: "Completes in seconds what would take you hours of browsing."
  },
  {
    id: 5,
    icon: ShoppingBag,
    title: "Universal Cart",
    description: "One checkout for items across multiple stores."
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Shop Anywhere",
    description: "Use on the go, at home, or while browsing other apps."
  }
];

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Required min distance between touch start and end to be detected as a swipe
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeIndex < features.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    }
    
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="features" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Our AI voice assistant makes shopping effortless with these smart features.
          </p>
        </div>
        
        <div 
          className="relative w-full max-w-md mx-auto overflow-hidden mt-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="card-feature h-full flex flex-col items-center text-center p-8">
                  <div className="feature-icon">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "dot",
                  activeIndex === index && "active"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Progress text */}
          <div className="text-center text-sm text-gray-400 mt-2">
            {activeIndex + 1} of {features.length}
          </div>
        </div>
      </div>
    </section>
  );
}
