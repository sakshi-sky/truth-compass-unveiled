
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Nuze</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Upload Article</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Paste Text</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Search Trending</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input
                placeholder="Search news..."
                className="w-64 bg-gray-100 border-gray-200 focus:bg-white"
              />
            </div>
            <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-800">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
