
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp, Users, ExternalLink, BookOpen } from 'lucide-react';

interface AnalysisResultsProps {
  content: string;
  type: 'text' | 'url' | 'file';
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ content, type }) => {
  // Mock analysis data - in real app, this would come from your NLP API
  const analysisData = {
    sentiment: {
      score: 0.3,
      label: 'Slightly Positive',
      confidence: 85
    },
    politicalLean: {
      score: -0.4,
      label: 'Slightly Left',
      confidence: 78
    },
    tone: {
      emotional: 65,
      factual: 35,
      label: 'Moderately Emotional'
    },
    biasIndicators: [
      {
        type: 'Loaded Language',
        examples: ['devastated', 'remarkable progress', 'shocking revelation'],
        severity: 'medium'
      },
      {
        type: 'Selective Reporting',
        examples: ['Missing opposing viewpoints', 'Cherry-picked statistics'],
        severity: 'high'
      },
      {
        type: 'Source Bias',
        examples: ['Limited to single perspective sources'],
        severity: 'low'
      }
    ],
    alternativeSources: [
      {
        title: 'Alternative View: Economic Policy Analysis',
        source: 'Reuters',
        url: '#',
        lean: 'center',
        snippet: 'A more balanced perspective on the economic implications...'
      },
      {
        title: 'Conservative Take on Recent Policy Changes',
        source: 'Wall Street Journal',
        url: '#',
        lean: 'right',
        snippet: 'Business leaders express concerns about new regulations...'
      },
      {
        title: 'Progressive Analysis of Policy Impact',
        source: 'The Guardian',
        url: '#',
        lean: 'left',
        snippet: 'Advocates highlight positive social implications...'
      }
    ]
  };

  const getPoliticalColor = (score: number) => {
    if (score < -0.3) return 'text-blue-600 bg-blue-100';
    if (score > 0.3) return 'text-red-600 bg-red-100';
    return 'text-green-600 bg-green-100';
  };

  const getSentimentColor = (score: number) => {
    if (score > 0.3) return 'text-green-600 bg-green-100';
    if (score < -0.3) return 'text-red-600 bg-red-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  const getBiasColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getLeanBadgeColor = (lean: string) => {
    switch (lean) {
      case 'left': return 'bg-blue-100 text-blue-800';
      case 'right': return 'bg-red-100 text-red-800';
      case 'center': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Overall Analysis Summary */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <span>Analysis Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sentiment Analysis */}
            <div className="text-center">
              <div className="mb-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  {analysisData.sentiment.score > 0 ? '+' : ''}{Math.round(analysisData.sentiment.score * 100)}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Sentiment</h3>
              <Badge className={getSentimentColor(analysisData.sentiment.score)}>
                {analysisData.sentiment.label}
              </Badge>
              <p className="text-sm text-gray-600 mt-1">
                {analysisData.sentiment.confidence}% confidence
              </p>
            </div>

            {/* Political Leaning */}
            <div className="text-center">
              <div className="mb-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  {analysisData.politicalLean.score > 0 ? 'R' : analysisData.politicalLean.score < 0 ? 'L' : 'C'}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Political Lean</h3>
              <Badge className={getPoliticalColor(analysisData.politicalLean.score)}>
                {analysisData.politicalLean.label}
              </Badge>
              <p className="text-sm text-gray-600 mt-1">
                {analysisData.politicalLean.confidence}% confidence
              </p>
            </div>

            {/* Tone Analysis */}
            <div className="text-center">
              <div className="mb-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-sm font-bold">
                  {analysisData.tone.emotional}%
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Tone</h3>
              <Badge className="bg-orange-100 text-orange-800">
                {analysisData.tone.label}
              </Badge>
              <p className="text-sm text-gray-600 mt-1">
                {analysisData.tone.emotional}% emotional, {analysisData.tone.factual}% factual
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bias Indicators */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <span>Bias Indicators</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {analysisData.biasIndicators.map((indicator, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{indicator.type}</h4>
                  <Badge className={getBiasColor(indicator.severity)}>
                    {indicator.severity.toUpperCase()}
                  </Badge>
                </div>
                <div className="space-y-1">
                  {indicator.examples.map((example, idx) => (
                    <p key={idx} className="text-sm text-gray-600">• {example}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alternative Sources */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-green-600" />
            <span>Alternative Perspectives</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analysisData.alternativeSources.map((source, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                    {source.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <Badge className={getLeanBadgeColor(source.lean)}>
                    {source.lean}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {source.snippet}
                </p>
                <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read full article →
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Recommendations for Balanced Reading</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>✓ Read multiple sources:</strong> Cross-reference this article with the alternative perspectives above.
            </p>
            <p className="text-gray-700">
              <strong>✓ Check source credibility:</strong> Research the publication's editorial stance and funding sources.
            </p>
            <p className="text-gray-700">
              <strong>✓ Look for primary sources:</strong> Seek out original documents, studies, or direct quotes referenced in the article.
            </p>
            <p className="text-gray-700">
              <strong>✓ Consider timing:</strong> Check if this is breaking news that may lack complete information or context.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResults;
