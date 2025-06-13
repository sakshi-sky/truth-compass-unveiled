
import React, { useState } from 'react';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import AnalysisResults from '@/components/AnalysisResults';

const Index = () => {
  const [analysisData, setAnalysisData] = useState<{
    content: string;
    type: 'text' | 'url' | 'file';
  } | null>(null);

  const handleAnalyze = (content: string, type: 'text' | 'url' | 'file') => {
    setAnalysisData({ content, type });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Uncover Bias in News
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Paste an article or URL to analyze sentiment, tone, and political leaning.
          </p>
          <p className="text-lg text-gray-500 mb-12">
            News & Nuance
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-16">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Paste Article
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Upload File
            </button>
          </div>
        </div>

        {/* Search Results Section */}
        {!analysisData && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Search Results
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <p className="text-gray-500">
                No results yet. Upload an article or paste text to begin analysis.
              </p>
            </div>
          </div>
        )}
        
        {/* Input Section - Hidden initially, shown when buttons are clicked */}
        <div className="hidden">
          <InputSection onAnalyze={handleAnalyze} />
        </div>
        
        {analysisData && (
          <div className="mt-12">
            <AnalysisResults 
              content={analysisData.content} 
              type={analysisData.type} 
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 Nuze. Promoting informed, balanced news consumption.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
