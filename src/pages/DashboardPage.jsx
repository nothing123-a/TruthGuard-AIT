import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChartBar, FaUpload, FaShieldAlt, FaEye, FaBrain, FaExclamationTriangle, FaCheckCircle, FaInstagram, FaWhatsapp, FaTwitter, FaUserShield, FaBalanceScale, FaPlay, FaDownload, FaGlobe, FaClock, FaUsers } from 'react-icons/fa'

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState('overview')

  const overviewStats = [
    { icon: FaShieldAlt, value: '12,847', label: 'Total Verifications', color: 'neon-cyan', change: '+12%' },
    { icon: FaExclamationTriangle, value: '3,241', label: 'Deepfakes Detected', color: 'red-500', change: '+8%' },
    { icon: FaCheckCircle, value: '9,606', label: 'Authentic Content', color: 'neon-green', change: '+15%' },
    { icon: FaUsers, value: '98.7%', label: 'Accuracy Rate', color: 'neon-purple', change: '+0.3%' }
  ]

  const recentScans = [
    { id: 1, filename: 'video_sample.mp4', result: 'Deepfake', confidence: 94, time: '2 min ago', risk: 'High' },
    { id: 2, filename: 'profile_image.jpg', result: 'Authentic', confidence: 87, time: '5 min ago', risk: 'Low' },
    { id: 3, filename: 'news_clip.mp4', result: 'Deepfake', confidence: 76, time: '12 min ago', risk: 'Medium' },
    { id: 4, filename: 'interview.mp4', result: 'Authentic', confidence: 92, time: '18 min ago', risk: 'Low' }
  ]

  const riskBreakdown = [
    { level: 'Low Risk', count: 8420, percentage: 65, color: 'neon-green' },
    { level: 'Medium Risk', count: 3241, percentage: 25, color: 'yellow-500' },
    { level: 'High Risk', count: 1186, percentage: 10, color: 'red-500' }
  ]

  const socialPlatforms = [
    { name: 'Instagram', icon: FaInstagram, color: 'pink-500', scans: '2.4K', threats: '127' },
    { name: 'WhatsApp', icon: FaWhatsapp, color: 'green-500', scans: '1.8K', threats: '89' },
    { name: 'X (Twitter)', icon: FaTwitter, color: 'blue-500', scans: '3.1K', threats: '203' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-xl text-gray-300">Real-time deepfake detection analytics and insights</p>
            </div>
            <button className="neon-button text-lg px-6 py-3 flex items-center gap-3">
              <FaUpload />
              Analyze Media
            </button>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 bg-gray-800/50 rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview', icon: FaChartBar },
              { id: 'ai-analysis', label: 'AI Analysis', icon: FaBrain },
              { id: 'social-safety', label: 'Social & Safety', icon: FaUserShield }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  selectedTab === tab.id
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <tab.icon />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {selectedTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overviewStats.map((stat, index) => (
                  <div key={index} className="cyber-card text-center">
                    <stat.icon className={`text-4xl text-${stat.color} mx-auto mb-3`} />
                    <h3 className={`font-orbitron text-3xl font-bold text-${stat.color} mb-2`}>
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 mb-1">{stat.label}</p>
                    <span className="text-neon-green text-sm">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Recent Scans & Detection Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Scans */}
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                    <FaClock />
                    Recent Scans
                  </h3>
                  <div className="space-y-4">
                    {recentScans.map((scan) => (
                      <div key={scan.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-semibold text-white">{scan.filename}</p>
                          <p className="text-sm text-gray-400">{scan.time}</p>
                        </div>
                        <div className="text-center mx-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            scan.result === 'Authentic' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {scan.result}
                          </span>
                          <p className="text-xs text-gray-400 mt-1">{scan.confidence}% confidence</p>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-semibold ${
                          scan.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                          scan.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {scan.risk}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Score Breakdown */}
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                    <FaExclamationTriangle />
                    Anti-Misinformation Index™
                  </h3>
                  <div className="space-y-4">
                    {riskBreakdown.map((risk, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">{risk.level}</span>
                          <span className={`text-${risk.color} font-bold`}>{risk.count}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className={`bg-${risk.color} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: `${risk.percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-400">{risk.percentage}% of total scans</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'ai-analysis' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Explainable AI */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                  <FaEye />
                  Explainable AI
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Heatmap Analysis</h4>
                    <div className="bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-green-500/20 h-64 rounded-lg border border-gray-600 flex items-center justify-center relative">
                      <span className="text-gray-300">AI Attention Heatmap Visualization</span>
                      <div className="absolute top-4 left-4 bg-red-500/80 w-16 h-12 rounded border-2 border-red-400" />
                      <div className="absolute bottom-8 right-8 bg-yellow-500/60 w-20 h-16 rounded border-2 border-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">"Why this is fake?" Insights</h4>
                    <div className="space-y-3">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h5 className="font-semibold text-red-400 mb-2">Face Swap Detection</h5>
                        <p className="text-sm text-gray-300">Inconsistent lighting patterns detected around facial boundaries</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h5 className="font-semibold text-yellow-400 mb-2">Temporal Inconsistency</h5>
                        <p className="text-sm text-gray-300">Frame-to-frame variations in facial features detected</p>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h5 className="font-semibold text-orange-400 mb-2">Compression Artifacts</h5>
                        <p className="text-sm text-gray-300">Unusual compression patterns suggest digital manipulation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frame Analyzer */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                  <FaPlay />
                  Frame Analyzer
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-4">Suspicious Frame Timeline</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-8 rounded ${
                            [3, 7, 12, 16].includes(i) 
                              ? 'bg-red-500' 
                              : [5, 9, 14].includes(i)
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          title={`Frame ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>00:00</span>
                      <span>00:30</span>
                      <span>01:00</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                    <h5 className="font-semibold text-red-400 mb-2">High Risk Frames</h5>
                    <p className="text-2xl font-bold text-red-400">4</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center">
                    <h5 className="font-semibold text-yellow-400 mb-2">Medium Risk Frames</h5>
                    <p className="text-2xl font-bold text-yellow-400">3</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                    <h5 className="font-semibold text-green-400 mb-2">Clean Frames</h5>
                    <p className="text-2xl font-bold text-green-400">13</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'social-safety' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Social Media Check */}
              <div className="cyber-card">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                  <FaGlobe />
                  Social Media Check
                </h3>
                <p className="text-gray-300 mb-6">Verify content before sharing across social platforms</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {socialPlatforms.map((platform, index) => (
                    <div key={index} className={`bg-${platform.color}/10 border border-${platform.color}/30 rounded-lg p-6`}>
                      <div className="flex items-center gap-3 mb-4">
                        <platform.icon className={`text-3xl text-${platform.color}`} />
                        <h4 className="font-semibold text-white">{platform.name}</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Scans Today:</span>
                          <span className="text-white font-semibold">{platform.scans}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Threats Blocked:</span>
                          <span className="text-red-400 font-semibold">{platform.threats}</span>
                        </div>
                      </div>
                      <button className={`w-full mt-4 bg-${platform.color}/20 hover:bg-${platform.color}/30 text-${platform.color} font-semibold py-2 px-4 rounded-lg transition-colors`}>
                        Verify Before Sharing
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Women Safety & Cybercrime Support */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Women Safety Mode */}
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                    <FaUserShield />
                    Women Safety Mode
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-4">
                      <h4 className="font-semibold text-neon-purple mb-2">Fast Reporting</h4>
                      <p className="text-sm text-gray-300 mb-3">Report non-consensual deepfake content immediately</p>
                      <button className="bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple font-semibold py-2 px-4 rounded-lg transition-colors">
                        Report Content
                      </button>
                    </div>
                    <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-400 mb-2">Awareness & Help</h4>
                      <p className="text-sm text-gray-300 mb-3">Access support resources and educational materials</p>
                      <div className="flex gap-2">
                        <button className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 text-sm py-1 px-3 rounded transition-colors">
                          Help Center
                        </button>
                        <button className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 text-sm py-1 px-3 rounded transition-colors">
                          Legal Support
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cybercrime Support */}
                <div className="cyber-card">
                  <h3 className="font-orbitron text-xl font-bold mb-6 text-red-500 flex items-center gap-3">
                    <FaBalanceScale />
                    Cybercrime Support
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-400 mb-2">Evidence Verification</h4>
                      <p className="text-sm text-gray-300 mb-3">Generate forensic-grade analysis reports</p>
                      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-2 px-4 rounded-lg transition-colors">
                        Generate Report
                      </button>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Law Enforcement Reports</h4>
                      <p className="text-sm text-gray-300 mb-3">Court-admissible documentation and expert support</p>
                      <div className="flex gap-2">
                        <button className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 text-sm py-1 px-3 rounded transition-colors flex items-center gap-1">
                          <FaDownload />
                          Download
                        </button>
                        <button className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 text-sm py-1 px-3 rounded transition-colors">
                          Expert Support
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default DashboardPage