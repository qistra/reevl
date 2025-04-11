
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <header className="w-full py-4 px-4 md:px-6 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-purple-600">VoiceShop</span>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">Features</a>
          <a href="#demo" className="text-sm font-medium hover:text-purple-600 transition-colors">Demo</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">Testimonials</a>
          <Button className="btn-primary" onClick={handleTryNowClick}>Try Now</Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
      )}>
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-lg font-medium py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#demo" 
            className="text-lg font-medium py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Demo
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="btn-primary w-full" 
            onClick={() => {
              setIsMenuOpen(false);
              handleTryNowClick();
            }}
          >
            Try Now
          </Button>
        </div>
      </div>
    </header>
  );
}
