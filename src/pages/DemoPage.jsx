import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaPlay, FaDownload, FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaEye, FaBrain, FaFileAlt, FaChartLine, FaFilePdf, FaImage, FaVideo, FaTimes } from 'react-icons/fa'

const DemoPage = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [filePreview, setFilePreview] = useState(null)
  const [analysisMode, setAnalysisMode] = useState('standard')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const analysisModes = [
    { id: 'standard', name: 'Standard Detection', icon: FaShieldAlt, color: 'neon-cyan' },
    { id: 'women-safety', name: 'Women Safety Mode', icon: FaExclamationTriangle, color: 'neon-purple' },
    { id: 'social-media', name: 'Social Media Scan', icon: FaEye, color: 'neon-green' },
    { id: 'journalism', name: 'Journalism Verify', icon: FaFileAlt, color: 'yellow-500' }
  ]

  const handleFileUpload = (file) => {
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setSelectedFile(file)
      setResults(null)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setFilePreview({
          url: e.target.result,
          type: file.type,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2),
          lastModified: new Date(file.lastModified).toLocaleString()
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    handleFileUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const runAnalysis = () => {
    if (!selectedFile) return
    
    setIsAnalyzing(true)
    setResults(null)
    
    // Simulate analysis
    setTimeout(() => {
      const isAuthentic = Math.random() > 0.3
      const confidence = Math.floor(Math.random() * 30) + 70
      const mockResults = {
        isAuthentic,
        confidence,
        authenticityScore: isAuthentic ? confidence : 100 - confidence,
        riskScore: Math.floor(Math.random() * 40) + 10,
        processingTime: (Math.random() * 2 + 1).toFixed(1),
        trustLevel: confidence > 85 ? 'High' : confidence > 70 ? 'Medium' : 'Low',
        detectionDetails: {
          faceSwap: Math.random() > 0.7,
          lipSync: Math.random() > 0.8,
          eyeMovement: Math.random() > 0.6,
          skinTexture: Math.random() > 0.5
        },
        heatmapRegions: [
          { x: 25, y: 30, intensity: 0.8, label: 'Face Region' },
          { x: 60, y: 45, intensity: 0.6, label: 'Eye Area' },
          { x: 45, y: 65, intensity: 0.9, label: 'Mouth Region' }
        ]
      }
      setResults(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  const generatePDFReport = () => {
    // Simulate PDF generation
    const reportData = {
      timestamp: new Date().toISOString(),
      filename: selectedFile?.name,
      results: results
    }
    
    // Create mock PDF download
    const element = document.createElement('a')
    const file = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' })
    element.href = URL.createObjectURL(file)
    element.download = `TruthGuard_Report_${Date.now()}.pdf`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
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
            <FaBrain className="text-6xl text-neon-cyan mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
              Detection Lab
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Upload your media files and let our advanced AI analyze them for deepfake manipulation. 
              Get detailed results with explainable AI insights and downloadable reports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="cyber-card">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                <FaUpload className="text-neon-cyan" />
                Upload Media
              </h2>
              
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  isDragOver 
                    ? 'border-neon-cyan bg-neon-cyan/10' 
                    : 'border-neon-cyan/50 hover:border-neon-cyan'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <FaUpload className={`text-4xl mx-auto mb-4 transition-colors ${
                  isDragOver ? 'text-neon-cyan' : 'text-neon-cyan/70'
                }`} />
                <p className="text-gray-300 mb-4">
                  {isDragOver ? 'Drop your file here' : 'Drag & drop your image or video file here'}
                </p>
                <p className="text-gray-500 text-sm mb-4">Supports: JPG, PNG, MP4, AVI, MOV (Max 100MB)</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="neon-button"
                >
                  Choose File
                </button>
              </div>
            </div>

            {/* File Preview */}
            {filePreview && (
              <div className="cyber-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron text-xl font-bold text-white flex items-center gap-2">
                    {filePreview.type.startsWith('image/') ? <FaImage className="text-neon-green" /> : <FaVideo className="text-neon-purple" />}
                    File Preview
                  </h3>
                  <button
                    onClick={() => { setSelectedFile(null); setFilePreview(null); setResults(null) }}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <div className="mb-4">
                  {filePreview.type.startsWith('image/') ? (
                    <img 
                      src={filePreview.url} 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded-lg border border-neon-cyan/30"
                    />
                  ) : (
                    <video 
                      src={filePreview.url} 
                      controls 
                      className="w-full h-48 object-cover rounded-lg border border-neon-cyan/30"
                    />
                  )}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white">{filePreview.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{filePreview.size} MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Modified:</span>
                    <span className="text-white">{filePreview.lastModified}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Modes */}
          {selectedFile && (
            <div className="cyber-card mb-8">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple">Analysis Mode</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {analysisModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setAnalysisMode(mode.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      analysisMode === mode.id
                        ? `bg-${mode.color}/20 border-${mode.color} text-${mode.color}`
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <mode.icon className={`text-2xl mx-auto mb-2 ${
                      analysisMode === mode.id ? `text-${mode.color}` : 'text-gray-400'
                    }`} />
                    <p className="font-semibold text-sm">{mode.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Run Analysis */}
          {selectedFile && (
            <div className="text-center mb-8">
              <button
                onClick={runAnalysis}
                disabled={!selectedFile || isAnalyzing}
                className={`neon-button text-lg px-8 py-4 ${
                  !selectedFile || isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-neon-cyan inline-block mr-3"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FaPlay className="inline mr-3" />
                    Run Analysis
                  </>
                )}
              </button>
            </div>
          )}

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Main Results Card */}
              <div className="cyber-card">
                <h2 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                  <FaShieldAlt className="text-neon-green" />
                  Detection Results
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* Classification */}
                  <div className={`p-6 rounded-lg border text-center ${
                    results.isAuthentic 
                      ? 'bg-green-500/20 border-green-500/50' 
                      : 'bg-red-500/20 border-red-500/50'
                  }`}>
                    {results.isAuthentic ? (
                      <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                    ) : (
                      <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-3" />
                    )}
                    <h3 className={`font-bold text-lg ${
                      results.isAuthentic ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {results.isAuthentic ? 'AUTHENTIC' : 'DEEPFAKE'}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">Classification</p>
                  </div>

                  {/* Confidence Percentage */}
                  <div className="p-6 rounded-lg border border-neon-cyan/50 bg-neon-cyan/10 text-center">
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
                          strokeDashoffset={`${2 * Math.PI * 28 * (1 - results.confidence / 100)}`}
                          className="text-neon-cyan transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-neon-cyan">{results.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Confidence</p>
                  </div>

                  {/* Authenticity Score */}
                  <div className="p-6 rounded-lg border border-neon-purple/50 bg-neon-purple/10 text-center">
                    <FaChartLine className="text-4xl text-neon-purple mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-neon-purple">{results.authenticityScore}/100</h3>
                    <p className="text-gray-300 text-sm">Authenticity Score</p>
                  </div>

                  {/* Trust Level */}
                  <div className={`p-6 rounded-lg border text-center ${
                    results.trustLevel === 'High' ? 'border-green-500/50 bg-green-500/10' :
                    results.trustLevel === 'Medium' ? 'border-yellow-500/50 bg-yellow-500/10' :
                    'border-red-500/50 bg-red-500/10'
                  }`}>
                    <FaShieldAlt className={`text-4xl mx-auto mb-3 ${
                      results.trustLevel === 'High' ? 'text-green-500' :
                      results.trustLevel === 'Medium' ? 'text-yellow-500' :
                      'text-red-500'
                    }`} />
                    <h3 className={`font-bold text-lg ${
                      results.trustLevel === 'High' ? 'text-green-400' :
                      results.trustLevel === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>{results.trustLevel}</h3>
                    <p className="text-gray-300 text-sm">Trust Level</p>
                  </div>
                </div>

                {/* Detection Details */}
                <div className="mb-6">
                  <h3 className="font-orbitron text-xl font-bold mb-4 text-white">Detection Analysis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(results.detectionDetails).map(([key, detected]) => (
                      <div key={key} className={`p-3 rounded-lg border ${
                        detected 
                          ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                          : 'bg-green-500/20 border-green-500/50 text-green-400'
                      }`}>
                        <p className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-sm">{detected ? 'Anomaly Detected' : 'Normal'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explainable AI Heatmap */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-cyan flex items-center gap-3">
                  <FaEye className="text-neon-cyan" />
                  Explainable AI Heatmap
                </h3>
                <p className="text-gray-300 mb-4">Visual analysis showing regions of manipulation detected by our AI</p>
                
                <div className="relative bg-gray-800 rounded-lg p-4 mb-4">
                  {filePreview && (
                    <div className="relative inline-block">
                      <img 
                        src={filePreview.url} 
                        alt="Analysis" 
                        className="max-w-full h-64 object-contain rounded border border-gray-600"
                      />
                      {/* Heatmap Overlays */}
                      {results.heatmapRegions.map((region, idx) => (
                        <div
                          key={idx}
                          className="absolute border-2 border-red-500 bg-red-500/20 rounded"
                          style={{
                            left: `${region.x}%`,
                            top: `${region.y}%`,
                            width: '60px',
                            height: '40px',
                            opacity: region.intensity
                          }}
                          title={`${region.label} - ${(region.intensity * 100).toFixed(0)}% confidence`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {results.heatmapRegions.map((region, idx) => (
                    <div key={idx} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <h4 className="font-semibold text-red-400">{region.label}</h4>
                      <p className="text-sm text-gray-300">Confidence: {(region.intensity * 100).toFixed(0)}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Report Generation */}
              <div className="cyber-card text-center">
                <h3 className="font-orbitron text-xl font-bold mb-4 text-yellow-500 flex items-center justify-center gap-3">
                  <FaFilePdf className="text-yellow-500" />
                  Authenticity Report
                </h3>
                <p className="text-gray-300 mb-6">Generate a comprehensive PDF report with timestamped results and detailed analysis</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Report ID:</p>
                    <p className="text-white font-mono">TG-{Date.now().toString().slice(-6)}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Timestamp:</p>
                    <p className="text-white">{new Date().toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-400">Processing Time:</p>
                    <p className="text-white">{results.processingTime}s</p>
                  </div>
                </div>
                
                <button 
                  onClick={generatePDFReport}
                  className="neon-button text-lg px-8 py-3"
                >
                  <FaDownload className="inline mr-3" />
                  Download PDF Report
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default DemoPage