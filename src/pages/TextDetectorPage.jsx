import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaUpload, FaPlay, FaDownload, FaExclamationTriangle, FaCheckCircle, FaEye, FaBrain, FaFlag, FaShieldAlt } from 'react-icons/fa'

const TextDetectorPage = () => {
  const [inputText, setInputText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const analyzeText = () => {
    if (!inputText.trim()) return
    
    setIsAnalyzing(true)
    setResults(null)
    
    setTimeout(() => {
      const aiProbability = Math.floor(Math.random() * 40) + 60
      const humanProbability = 100 - aiProbability
      const isAI = aiProbability > 70
      
      const mockResults = {
        aiProbability,
        humanProbability,
        confidence: Math.floor(Math.random() * 20) + 80,
        classification: isAI ? 'AI-Generated' : aiProbability > 50 ? 'Mixed Content' : 'Human-Written',
        riskLevel: isAI ? 'High' : aiProbability > 50 ? 'Medium' : 'Low',
        patterns: [
          { text: 'repetitive sentence structure', severity: 'high', found: Math.random() > 0.5 },
          { text: 'uniform tone throughout', severity: 'medium', found: Math.random() > 0.3 },
          { text: 'low perplexity patterns', severity: 'high', found: Math.random() > 0.4 },
          { text: 'predictable word choices', severity: 'medium', found: Math.random() > 0.6 }
        ],
        styleConsistency: Math.floor(Math.random() * 30) + 70,
        emotionRisk: Math.floor(Math.random() * 50) + 20,
        manipulationRisk: Math.floor(Math.random() * 40) + 10,
        hallucinationWarnings: Math.floor(Math.random() * 3) + 1
      }
      
      setResults(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  const highlightSuspiciousText = (text) => {
    if (!results) return text
    
    const sentences = text.split('. ')
    return sentences.map((sentence, index) => {
      const isHighlighted = Math.random() > 0.7
      return (
        <span
          key={index}
          className={isHighlighted ? 'bg-red-500/20 border-b-2 border-red-500/50 cursor-help' : ''}
          title={isHighlighted ? 'Suspicious pattern detected: Repetitive structure' : ''}
        >
          {sentence}{index < sentences.length - 1 ? '. ' : ''}
        </span>
      )
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaFileAlt className="text-6xl text-neon-cyan mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
              AI Text Detector
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Analyze text content to detect AI-generated writing. Get detailed insights with explainable AI and authenticity scoring.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Input Panel */}
            <div className="cyber-card">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                <FaFileAlt />
                Text Input
              </h2>
              
              <div className="space-y-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your text content here for AI detection analysis..."
                  className="w-full h-64 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white resize-none focus:border-neon-cyan focus:outline-none transition-colors"
                />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {inputText.length} characters
                  </span>
                  <button className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    <FaUpload />
                    Upload File
                  </button>
                </div>
                
                <button
                  onClick={analyzeText}
                  disabled={!inputText.trim() || isAnalyzing}
                  className={`w-full neon-button text-lg py-4 ${
                    !inputText.trim() || isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-neon-cyan inline-block mr-3"></div>
                      Analyzing Text...
                    </>
                  ) : (
                    <>
                      <FaPlay className="inline mr-3" />
                      Analyze Text
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Detection Results */}
            {results && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="cyber-card"
              >
                <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                  <FaShieldAlt />
                  Detection Results
                </h2>
                
                <div className="space-y-6">
                  {/* Classification */}
                  <div className={`p-4 rounded-lg border text-center ${
                    results.classification === 'AI-Generated' ? 'bg-red-500/20 border-red-500/50' :
                    results.classification === 'Mixed Content' ? 'bg-yellow-500/20 border-yellow-500/50' :
                    'bg-green-500/20 border-green-500/50'
                  }`}>
                    <h3 className={`font-bold text-xl mb-2 ${
                      results.classification === 'AI-Generated' ? 'text-red-400' :
                      results.classification === 'Mixed Content' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {results.classification}
                    </h3>
                    <p className="text-gray-300 text-sm">Final Classification</p>
                  </div>

                  {/* Probability Meters */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-600" />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            stroke="currentColor" 
                            strokeWidth="4" 
                            fill="transparent" 
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - results.aiProbability / 100)}`}
                            className="text-red-500 transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-red-400">{results.aiProbability}%</span>
                        </div>
                      </div>
                      <p className="text-red-400 font-semibold">AI-Generated</p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-600" />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            stroke="currentColor" 
                            strokeWidth="4" 
                            fill="transparent" 
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - results.humanProbability / 100)}`}
                            className="text-green-500 transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-green-400">{results.humanProbability}%</span>
                        </div>
                      </div>
                      <p className="text-green-400 font-semibold">Human-Written</p>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Confidence Score</span>
                      <span className="text-neon-cyan font-bold">{results.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-neon-cyan h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${results.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Explainable AI Section */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-8"
            >
              {/* Text Analysis */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-purple flex items-center gap-3">
                  <FaEye />
                  Explainable AI Analysis
                </h3>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {highlightSuspiciousText(inputText)}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.patterns.map((pattern, index) => (
                    pattern.found && (
                      <div key={index} className={`p-3 rounded-lg border ${
                        pattern.severity === 'high' ? 'bg-red-500/10 border-red-500/30' : 'bg-yellow-500/10 border-yellow-500/30'
                      }`}>
                        <h4 className={`font-semibold ${
                          pattern.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {pattern.text}
                        </h4>
                        <p className="text-gray-300 text-sm capitalize">{pattern.severity} confidence</p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Risk Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-orange-500 flex items-center gap-3">
                    <FaBrain />
                    Linguistic Analysis
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Style Consistency</span>
                      <span className="text-neon-green font-bold">{results.styleConsistency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-neon-green h-2 rounded-full"
                        style={{ width: `${results.styleConsistency}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Emotion Risk</span>
                      <span className="text-yellow-400 font-bold">{results.emotionRisk}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${results.emotionRisk}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Manipulation Risk</span>
                      <span className="text-red-400 font-bold">{results.manipulationRisk}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${results.manipulationRisk}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-red-500 flex items-center gap-3">
                    <FaFlag />
                    Fact & Hallucination Warning
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-red-400" />
                        <span className="text-red-400 font-semibold">Potential Hallucinations</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        {results.hallucinationWarnings} potential factual inconsistencies detected
                      </p>
                      <div className="space-y-2">
                        <div className="bg-red-500/20 rounded px-3 py-1 text-xs text-red-300">
                          Unverifiable claim detected
                        </div>
                        <div className="bg-yellow-500/20 rounded px-3 py-1 text-xs text-yellow-300">
                          Statistical inconsistency
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Confidence Disclaimer</h4>
                      <p className="text-gray-300 text-sm">
                        AI detection is probabilistic. Always verify important information through multiple sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Generation */}
              <div className="cyber-card text-center">
                <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center justify-center gap-3">
                  <FaDownload />
                  Text Authenticity Report
                </h3>
                <p className="text-gray-300 mb-6">Generate a comprehensive analysis report with detailed findings</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Report ID:</p>
                    <p className="text-white font-mono">TXT-{Date.now().toString().slice(-6)}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Analysis Date:</p>
                    <p className="text-white">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Text Length:</p>
                    <p className="text-white">{inputText.length} chars</p>
                  </div>
                </div>
                
                <button className="neon-button text-lg px-8 py-3">
                  <FaDownload className="inline mr-3" />
                  Download Analysis Report
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default TextDetectorPage