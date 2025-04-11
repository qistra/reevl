
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-purple-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Saving Time Today
          </h2>
          <p className="md:text-xl max-w-[700px] text-purple-100">
            Join thousands of smart shoppers who use VoiceShop to find better deals in less time.
          </p>
          
          <div className="w-full max-w-sm mt-6">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-12 w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
              <Button className="h-12 bg-navy-800 hover:bg-navy-900 px-4">
                Start
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs mt-2 text-purple-200">
              Free to try. No credit card required.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-purple-300 border-2 border-purple-500 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">1,000+</span> people joined this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
