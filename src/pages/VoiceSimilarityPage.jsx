import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMicrophone, FaUpload, FaPlay, FaPause, FaDownload, FaExclamationTriangle, FaCheckCircle, FaEye, FaBrain, FaWaveSquare, FaShieldAlt } from 'react-icons/fa'

const VoiceSimilarityPage = () => {
  const [voiceA, setVoiceA] = useState(null)
  const [voiceB, setVoiceB] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const [playingA, setPlayingA] = useState(false)
  const [playingB, setPlayingB] = useState(false)

  const handleVoiceUpload = (file, type) => {
    if (file && file.type.startsWith('audio/')) {
      const voiceData = {
        file,
        name: file.name,
        duration: (Math.random() * 30 + 10).toFixed(1),
        size: (file.size / 1024 / 1024).toFixed(2)
      }
      
      if (type === 'A') {
        setVoiceA(voiceData)
      } else {
        setVoiceB(voiceData)
      }
      setResults(null)
    }
  }

  const analyzeVoices = () => {
    if (!voiceA || !voiceB) return
    
    setIsAnalyzing(true)
    setResults(null)
    
    setTimeout(() => {
      const similarity = Math.floor(Math.random() * 40) + 60
      const isSameSpeaker = similarity > 75
      
      const mockResults = {
        similarity,
        confidence: similarity > 85 ? 'High' : similarity > 70 ? 'Medium' : 'Low',
        verdict: isSameSpeaker ? 'Same Speaker' : 'Different Speaker',
        pitchSimilarity: Math.floor(Math.random() * 30) + 70,
        rhythmSimilarity: Math.floor(Math.random() * 25) + 75,
        energySimilarity: Math.floor(Math.random() * 35) + 65,
        deepfakeRisk: Math.floor(Math.random() * 40) + 20,
        cloneRisk: isSameSpeaker ? 'Low' : 'Medium',
        features: [
          { name: 'Fundamental Frequency', match: Math.random() > 0.3, confidence: 87 },
          { name: 'Formant Structure', match: Math.random() > 0.4, confidence: 92 },
          { name: 'Speech Rhythm', match: Math.random() > 0.5, confidence: 78 },
          { name: 'Vocal Tract Length', match: Math.random() > 0.6, confidence: 85 }
        ]
      }
      
      setResults(mockResults)
      setIsAnalyzing(false)
    }, 4000)
  }

  const WaveformVisualization = ({ isPlaying, color = 'neon-cyan' }) => (
    <div className="flex items-center justify-center h-16 bg-gray-800/50 rounded-lg">
      <div className="flex items-end gap-1">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className={`bg-${color} transition-all duration-150`}
            style={{
              width: '3px',
              height: `${Math.random() * 40 + 10}px`,
              opacity: isPlaying ? Math.random() * 0.8 + 0.2 : 0.3,
              animation: isPlaying ? `pulse ${Math.random() * 0.5 + 0.5}s infinite` : 'none'
            }}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaMicrophone className="text-6xl text-neon-purple mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
              Voice Similarity Detector
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Compare voice samples to detect similarity and authenticity. Advanced AI analysis for speaker verification and deepfake detection.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dual Audio Upload Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Voice A Upload */}
            <div className="cyber-card">
              <h2 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                <FaMicrophone />
                Voice Sample A
              </h2>
              
              {!voiceA ? (
                <div className="border-2 border-dashed border-neon-cyan/50 rounded-lg p-8 text-center hover:border-neon-cyan transition-colors">
                  <FaUpload className="text-4xl text-neon-cyan/70 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">Upload first voice sample</p>
                  <p className="text-gray-500 text-sm mb-4">Supports: MP3, WAV, M4A (Max 10MB)</p>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleVoiceUpload(e.target.files[0], 'A')}
                    className="hidden"
                    id="voice-a-upload"
                  />
                  <label htmlFor="voice-a-upload" className="neon-button cursor-pointer">
                    Choose Audio File
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{voiceA.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{voiceA.duration}s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-white">{voiceA.size} MB</span>
                      </div>
                    </div>
                    <WaveformVisualization isPlaying={playingA} color="neon-cyan" />
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => setPlayingA(!playingA)}
                        className="bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        {playingA ? <FaPause /> : <FaPlay />}
                        {playingA ? 'Pause' : 'Play'}
                      </button>
                      <button
                        onClick={() => setVoiceA(null)}
                        className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Voice B Upload */}
            <div className="cyber-card">
              <h2 className="font-orbitron text-xl font-bold mb-6 text-neon-green flex items-center gap-3">
                <FaMicrophone />
                Voice Sample B
              </h2>
              
              {!voiceB ? (
                <div className="border-2 border-dashed border-neon-green/50 rounded-lg p-8 text-center hover:border-neon-green transition-colors">
                  <FaUpload className="text-4xl text-neon-green/70 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">Upload second voice sample</p>
                  <p className="text-gray-500 text-sm mb-4">Supports: MP3, WAV, M4A (Max 10MB)</p>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleVoiceUpload(e.target.files[0], 'B')}
                    className="hidden"
                    id="voice-b-upload"
                  />
                  <label htmlFor="voice-b-upload" className="neon-button cursor-pointer">
                    Choose Audio File
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{voiceB.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{voiceB.duration}s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-white">{voiceB.size} MB</span>
                      </div>
                    </div>
                    <WaveformVisualization isPlaying={playingB} color="neon-green" />
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => setPlayingB(!playingB)}
                        className="bg-neon-green/20 hover:bg-neon-green/30 text-neon-green px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        {playingB ? <FaPause /> : <FaPlay />}
                        {playingB ? 'Pause' : 'Play'}
                      </button>
                      <button
                        onClick={() => setVoiceB(null)}
                        className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Analyze Button */}
          {voiceA && voiceB && (
            <div className="text-center mb-8">
              <button
                onClick={analyzeVoices}
                disabled={isAnalyzing}
                className={`neon-button text-lg px-8 py-4 ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-neon-purple inline-block mr-3"></div>
                    Analyzing Voices...
                  </>
                ) : (
                  <>
                    <FaWaveSquare className="inline mr-3" />
                    Compare Voice Samples
                  </>
                )}
              </button>
            </div>
          )}

          {/* Results Section */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Similarity Results */}
              <div className="cyber-card">
                <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                  <FaShieldAlt />
                  Voice Similarity Results
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Similarity Percentage */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-600" />
                        <circle 
                          cx="48" 
                          cy="48" 
                          r="40" 
                          stroke="currentColor" 
                          strokeWidth="6" 
                          fill="transparent" 
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - results.similarity / 100)}`}
                          className="text-neon-purple transition-all duration-2000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-neon-purple">{results.similarity}%</span>
                      </div>
                    </div>
                    <p className="text-gray-300">Voice Similarity</p>
                  </div>

                  {/* Confidence Level */}
                  <div className={`p-6 rounded-lg border text-center ${
                    results.confidence === 'High' ? 'bg-green-500/20 border-green-500/50' :
                    results.confidence === 'Medium' ? 'bg-yellow-500/20 border-yellow-500/50' :
                    'bg-red-500/20 border-red-500/50'
                  }`}>
                    <h3 className={`font-bold text-xl mb-2 ${
                      results.confidence === 'High' ? 'text-green-400' :
                      results.confidence === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {results.confidence}
                    </h3>
                    <p className="text-gray-300 text-sm">Confidence Level</p>
                  </div>

                  {/* Verdict */}
                  <div className={`p-6 rounded-lg border text-center ${
                    results.verdict === 'Same Speaker' ? 'bg-neon-green/20 border-neon-green/50' : 'bg-orange-500/20 border-orange-500/50'
                  }`}>
                    <h3 className={`font-bold text-xl mb-2 ${
                      results.verdict === 'Same Speaker' ? 'text-neon-green' : 'text-orange-400'
                    }`}>
                      {results.verdict}
                    </h3>
                    <p className="text-gray-300 text-sm">Final Verdict</p>
                  </div>
                </div>
              </div>

              {/* Voice Feature Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                    <FaWaveSquare />
                    Voice Feature Analysis
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Pitch Similarity</span>
                        <span className="text-neon-cyan font-bold">{results.pitchSimilarity}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-neon-cyan h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${results.pitchSimilarity}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Speech Rhythm</span>
                        <span className="text-neon-green font-bold">{results.rhythmSimilarity}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-neon-green h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${results.rhythmSimilarity}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Energy & Tone</span>
                        <span className="text-neon-purple font-bold">{results.energySimilarity}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-neon-purple h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${results.energySimilarity}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-red-500 flex items-center gap-3">
                    <FaExclamationTriangle />
                    Deepfake Warning System
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-red-400" />
                        <span className="text-red-400 font-semibold">AI Generation Risk</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Deepfake Probability</span>
                        <span className="text-red-400 font-bold">{results.deepfakeRisk}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${results.deepfakeRisk}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Voice Clone Risk</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Risk Level:</span>
                        <span className={`font-bold ${
                          results.cloneRisk === 'Low' ? 'text-green-400' :
                          results.cloneRisk === 'Medium' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {results.cloneRisk}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explainable AI Section */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-green flex items-center gap-3">
                  <FaEye />
                  Explainable AI Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Feature Comparison</h4>
                    <div className="space-y-3">
                      {results.features.map((feature, index) => (
                        <div key={index} className={`p-3 rounded-lg border ${
                          feature.match ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
                        }`}>
                          <div className="flex justify-between items-center">
                            <span className="text-white font-semibold">{feature.name}</span>
                            <span className={`text-sm ${feature.match ? 'text-green-400' : 'text-red-400'}`}>
                              {feature.match ? 'Match' : 'Different'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-gray-400 text-sm">Confidence:</span>
                            <span className="text-gray-300 text-sm">{feature.confidence}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-4">Analysis Explanation</h4>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {results.verdict === 'Same Speaker' 
                          ? 'The voice samples show strong similarities in fundamental frequency patterns, formant structures, and speech rhythm characteristics. The high similarity score indicates these voices likely belong to the same speaker.'
                          : 'Significant differences detected in vocal tract characteristics, pitch patterns, and speech rhythm. The analysis suggests these voices belong to different speakers with distinct vocal signatures.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Authenticity Report */}
              <div className="cyber-card text-center">
                <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center justify-center gap-3">
                  <FaDownload />
                  Voice Authenticity Report
                </h3>
                <p className="text-gray-300 mb-6">Generate comprehensive voice comparison report with detailed analysis</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Report ID:</p>
                    <p className="text-white font-mono">VS-{Date.now().toString().slice(-6)}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Analysis Date:</p>
                    <p className="text-white">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Similarity Score:</p>
                    <p className="text-white">{results.similarity}%</p>
                  </div>
                </div>
                
                <button className="neon-button text-lg px-8 py-3">
                  <FaDownload className="inline mr-3" />
                  Download Voice Report
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default VoiceSimilarityPage