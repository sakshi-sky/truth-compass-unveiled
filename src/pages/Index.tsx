
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <InputSection onAnalyze={handleAnalyze} />
        
        {analysisData && (
          <div className="mt-12">
            <AnalysisResults 
              content={analysisData.content} 
              type={analysisData.type} 
            />
          </div>
        )}

        {/* Hero Section - shown when no analysis yet */}
        {!analysisData && (
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Use BiasDetector?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Detect Hidden Bias</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced NLP models identify subtle bias patterns, loaded language, and selective reporting.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Find Balance</h4>
                  <p className="text-gray-600 text-sm">
                    Get recommended articles from diverse sources to see all sides of the story.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Stay Informed</h4>
                  <p className="text-gray-600 text-sm">
                    Make better decisions with comprehensive analysis and critical thinking tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 BiasDetector. Promoting informed, balanced news consumption.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
