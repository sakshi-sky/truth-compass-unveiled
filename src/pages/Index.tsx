import React, { useState } from 'react';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import AnalysisResults from '@/components/AnalysisResults';
const Index = () => {
  const [analysisData, setAnalysisData] = useState<{
    content: string;
    type: 'text' | 'url' | 'file';
  } | null>(null);
  const [showInput, setShowInput] = useState(false);
  const handleAnalyze = (content: string, type: 'text' | 'url' | 'file') => {
    setAnalysisData({
      content,
      type
    });
  };
  const handleShowInput = (type: 'paste' | 'upload') => {
    setShowInput(true);
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative">
      {/* Subtle newspaper background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M8 8h2v2H8V8zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm4-48h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
      
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight md:text-6xl">
              Uncover Bias in News
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-[#829ec7] font-medium">
              Paste an article or URL to analyze sentiment, tone, and political leaning.
            </p>
            <p className="text-lg text-slate-500 mb-16 font-light tracking-wide">Uncover the Bias. Understand the News.</p>
          </div>
          
          {/* Action Buttons with Enhanced Interactions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button onClick={() => handleShowInput('paste')} className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                📄 Paste Article
              </span>
            </button>
            <button onClick={() => handleShowInput('upload')} className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                📁 Upload File
              </span>
            </button>
          </div>
        </div>

        {/* Input Section - Animated entrance */}
        <div className={`transition-all duration-500 transform ${showInput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          {showInput && <div className="mb-16">
              <InputSection onAnalyze={handleAnalyze} />
            </div>}
        </div>

        {/* Search Results Section */}
        {!analysisData && !showInput && <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
              Ready to Analyze
            </h2>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 p-16 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-slate-600 text-lg font-medium">
                Upload an article or paste text to begin your unbiased news analysis
              </p>
              <p className="text-slate-500 mt-2">
                Get insights on sentiment, political leaning, and discover alternative perspectives
              </p>
            </div>
          </div>}
        
        {analysisData && <div className="mt-16 animate-fade-in">
            <AnalysisResults content={analysisData.content} type={analysisData.type} />
          </div>}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-slate-200/50 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-800">
            </h3>
              <p className="text-slate-600 font-medium">
            </p>
            </div>
            <p className="text-slate-500">© 2025 Nuze. Promoting informed, balanced news consumption and helping you put the full story together.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;