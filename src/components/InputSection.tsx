
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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Analyze News Articles for Bias
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Paste an article, enter a URL, or upload a file to get detailed bias analysis, 
          sentiment scoring, and alternative perspectives from diverse sources.
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white">
        <CardContent className="p-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                activeTab === 'text'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} />
              <span>Paste Article</span>
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                activeTab === 'url'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Link size={18} />
              <span>Article URL</span>
            </button>
            <button
              onClick={() => setActiveTab('file')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                activeTab === 'file'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Upload size={18} />
              <span>Upload File</span>
            </button>
          </div>

          {/* Input Content */}
          <div className="mb-6">
            {activeTab === 'text' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Content
                </label>
                <Textarea
                  placeholder="Paste your news article here..."
                  value={articleText}
                  onChange={(e) => setArticleText(e.target.value)}
                  className="min-h-[200px] resize-none border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            {activeTab === 'url' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article URL
                </label>
                <Input
                  placeholder="https://example.com/news-article"
                  value={articleUrl}
                  onChange={(e) => setArticleUrl(e.target.value)}
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            {activeTab === 'file' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Article File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                  <div className="space-y-2">
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">TXT, DOC, or PDF files (Max 10MB)</p>
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

          {/* Analyze Button */}
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || (activeTab === 'text' && !articleText.trim()) || (activeTab === 'url' && !articleUrl.trim())}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium"
          >
            {isAnalyzing ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing Article...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Search size={20} />
                <span>Analyze for Bias</span>
              </div>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InputSection;
