import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Header = () => {
  return <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center group cursor-pointer">
              <div className="mr-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Nuze
                </h1>
                <p className="text-xs text-slate-500 font-medium -mt-1">News & Nuance</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium hover:underline underline-offset-4 decoration-2 decoration-blue-600/30">
                Upload Article
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium hover:underline underline-offset-4 decoration-2 decoration-blue-600/30">
                Paste Text
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium hover:underline underline-offset-4 decoration-2 decoration-blue-600/30">
                Trending Analysis
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input placeholder="Search news topics..." className="w-72 bg-slate-50/80 border-slate-200 focus:bg-white focus:border-blue-300 focus:ring-blue-200 transition-all duration-200 rounded-xl" />
            </div>
            <Button variant="outline" className="bg-slate-800 text-white hover:bg-slate-700 border-slate-800 hover:border-slate-700 rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;