import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaImage, FaVideo, FaDownload, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const DetectionDemo = () => {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const mockResults = {
    isReal: Math.random() > 0.5,
    confidence: Math.floor(Math.random() * 30) + 70
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFile(file)
      setResults(null)
    }
  }

  const analyzeFile = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setResults(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <section id="detection-demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-purple">
            Detection Demo
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Try our deepfake detection system with your own media files.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card"
          >
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-cyan text-center">
              Upload Media
            </h3>
            
            {!uploadedFile ? (
              <div className="border-2 border-dashed border-neon-purple/50 rounded-lg p-8 text-center hover:border-neon-purple transition-colors duration-300">
                <FaUpload className="text-4xl text-neon-purple mb-4 mx-auto" />
                <p className="text-gray-300 mb-4">Drag & drop or click to upload</p>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="neon-button cursor-pointer inline-flex items-center gap-2"
                >
                  <FaImage /> Choose File
                </label>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-blue-950/50 rounded-lg p-4 mb-4">
                  {uploadedFile.type.startsWith('image/') ? (
                    <FaImage className="text-4xl text-neon-green mx-auto mb-2" />
                  ) : (
                    <FaVideo className="text-4xl text-neon-green mx-auto mb-2" />
                  )}
                  <p className="text-sm text-gray-300 truncate">{uploadedFile.name}</p>
                </div>
                <button onClick={analyzeFile} className="neon-button w-full" disabled={isAnalyzing}>
                  {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </button>
              </div>
            )}
          </motion.div>

          {/* Results Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card"
          >
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-cyan text-center">
              Analysis Results
            </h3>
            
            {isAnalyzing ? (
              <div className="text-center">
                <div className="animate-spin w-16 h-16 border-4 border-neon-purple border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-gray-300">Analyzing media...</p>
              </div>
            ) : results ? (
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  {results.isReal ? (
                    <FaCheckCircle className="text-6xl text-neon-green" />
                  ) : (
                    <FaTimesCircle className="text-6xl text-red-500" />
                  )}
                </div>
                <h4 className={`font-orbitron text-2xl font-bold mb-4 ${
                  results.isReal ? 'text-neon-green' : 'text-red-500'
                }`}>
                  {results.isReal ? 'AUTHENTIC' : 'DEEPFAKE DETECTED'}
                </h4>
                <div className="text-6xl font-bold text-neon-cyan mb-2">{results.confidence}%</div>
                <p className="text-gray-300">Confidence Score</p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <FaImage className="text-4xl mx-auto mb-4 opacity-50" />
                <p>Upload a file to see results</p>
              </div>
            )}
          </motion.div>

          {/* Report Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card"
          >
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-cyan text-center">
              Analysis Report
            </h3>
            
            {results ? (
              <div>
                <div className="bg-blue-950/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-white mb-2">Heatmap Visualization</h4>
                  <div className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 h-32 rounded border-2 border-dashed border-gray-500 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Heatmap Preview</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-neon-green to-neon-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/50 flex items-center justify-center gap-2">
                  <FaDownload /> Download PDF Report
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <FaDownload className="text-4xl mx-auto mb-4 opacity-50" />
                <p>Complete analysis to generate report</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DetectionDemo