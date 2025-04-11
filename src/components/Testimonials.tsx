
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "I save at least 2 hours a week using VoiceShop. It finds deals I would've missed on my own.",
    name: "Sarah Johnson",
    title: "Busy Mom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "As someone who hates browsing websites, this voice assistant is a game changer. It's like having a personal shopper.",
    name: "Michael Chen",
    title: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "The price comparison feature alone has saved me hundreds. It found me a 30% better deal on my new laptop.",
    name: "Emma Rodriguez",
    title: "College Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [count, setCount] = useState(0);
  
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
    
    if (isLeftSwipe) {
      nextTestimonial();
    }
    
    if (isRightSwipe) {
      prevTestimonial();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Animate count
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 10000) {
        setCount(prev => Math.min(prev + 123, 10000));
      } else {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [count]);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Join thousands of happy shoppers who save time and money.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-xl bg-purple-50 p-6 md:p-8 shadow-sm"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={cn(
                "transition-all duration-500 ease-in-out",
                isAnimating && "opacity-0"
              )}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="testimonial-avatar"
                />
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl font-medium mb-4 italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[activeIndex].title}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="h-8 w-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center hover:bg-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-2 -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="h-8 w-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center hover:bg-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "dot",
                    activeIndex === index && "active"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-purple-100 rounded-full px-4 py-2 text-purple-600 font-medium mb-3">
              <span className="text-2xl font-bold">{count.toLocaleString()}+</span>
            </div>
            <h3 className="text-xl font-bold">Recommendations Made</h3>
            <p className="text-gray-500">Our AI has helped thousands of shoppers find the best deals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
