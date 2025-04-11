
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-12 bg-navy-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">VoiceShop</h3>
            <p className="text-sm text-gray-400">
              AI-powered voice shopping assistant that saves you time and money.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} VoiceShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
