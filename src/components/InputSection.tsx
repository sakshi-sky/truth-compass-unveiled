
import React, { useState } from 'react';
import { FileText, Link, Upload, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface InputSectionProps {
  onAnalyze: (content: string, type: 'text' | 'url' | 'file') => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onAnalyze }) => {
  const [activeTab, setActiveTab] = useState<'text' | 'url' | 'file'>('text');
  const [articleText, setArticleText] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      let content = '';
      switch (activeTab) {
        case 'text':
          content = articleText;
          break;
        case 'url':
          content = articleUrl;
          break;
        case 'file':
          content = 'File content would be processed here';
          break;
      }
      onAnalyze(content, activeTab);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setArticleText(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Analyze News Articles for Bias
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Paste an article, enter a URL, or upload a file to get detailed bias analysis, 
          sentiment scoring, and alternative perspectives from diverse sources.
        </p>
      </div>

      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden">
        <CardContent className="p-8">
          {/* Enhanced Tab Navigation */}
          <div className="flex space-x-2 bg-slate-100/80 p-2 rounded-2xl mb-8 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
                activeTab === 'text'
                  ? 'bg-white text-blue-600 shadow-lg transform scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
            >
              <FileText size={20} />
              <span>Paste Article</span>
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
                activeTab === 'url'
                  ? 'bg-white text-blue-600 shadow-lg transform scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
            >
              <Link size={20} />
              <span>Article URL</span>
            </button>
            <button
              onClick={() => setActiveTab('file')}
              className={`flex-1 flex items-center justify-center space-x-3 py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
                activeTab === 'file'
                  ? 'bg-white text-blue-600 shadow-lg transform scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
            >
              <Upload size={20} />
              <span>Upload File</span>
            </button>
          </div>

          {/* Enhanced Input Content */}
          <div className="mb-8">
            {activeTab === 'text' && (
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-slate-700">
                  Article Content
                </label>
                <Textarea
                  placeholder="Paste your news article here... We'll analyze it for bias, sentiment, and tone."
                  value={articleText}
                  onChange={(e) => setArticleText(e.target.value)}
                  className="min-h-[250px] resize-none border-2 border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 rounded-2xl bg-slate-50/50 text-slate-700 text-base leading-relaxed p-6"
                />
              </div>
            )}

            {activeTab === 'url' && (
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-slate-700">
                  Article URL
                </label>
                <Input
                  placeholder="https://example.com/news-article"
                  value={articleUrl}
                  onChange={(e) => setArticleUrl(e.target.value)}
                  className="border-2 border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 rounded-2xl bg-slate-50/50 text-base py-6 px-6"
                />
              </div>
            )}

            {activeTab === 'file' && (
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-slate-700">
                  Upload Article File
                </label>
                <div className="relative border-3 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 bg-slate-50/30 group cursor-pointer">
                  <Upload className="mx-auto w-16 h-16 text-slate-400 mb-6 group-hover:text-blue-500 transition-colors duration-300" />
                  <div className="space-y-3">
                    <p className="text-slate-700 text-lg font-medium">Click to upload or drag and drop</p>
                    <p className="text-slate-500">TXT, DOC, or PDF files (Max 10MB)</p>
                  </div>
                  <input
                    type="file"
                    accept=".txt,.doc,.docx,.pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Analyze Button */}
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || (activeTab === 'text' && !articleText.trim()) || (activeTab === 'url' && !articleUrl.trim())}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing Article...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                <Search size={24} />
                <span>Analyze for Bias & Insights</span>
              </div>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InputSection;
