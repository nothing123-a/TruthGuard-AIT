import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaGlobe, FaChartLine, FaShieldAlt, FaEye, FaBell, FaUsers, FaDownload } from 'react-icons/fa'

const ThreatIntelPage = () => {
  const threatStats = [
    { icon: FaExclamationTriangle, value: '1,247', label: 'Active Threats', color: 'red-500', change: '+23 today' },
    { icon: FaGlobe, value: '89', label: 'Countries Affected', color: 'orange-500', change: '+3 this week' },
    { icon: FaUsers, value: '15.2K', label: 'Targets Identified', color: 'yellow-500', change: '+156 today' },
    { icon: FaShieldAlt, value: '98.7%', label: 'Detection Rate', color: 'neon-green', change: '+0.2% improvement' }
  ]

  const threatTypes = [
    { name: 'Political Deepfakes', count: 423, severity: 'Critical', color: 'red-500' },
    { name: 'Celebrity Impersonation', count: 312, severity: 'High', color: 'orange-500' },
    { name: 'Financial Fraud', count: 189, severity: 'Critical', color: 'red-500' },
    { name: 'Social Engineering', count: 156, severity: 'Medium', color: 'yellow-500' },
    { name: 'Misinformation Campaigns', count: 167, severity: 'High', color: 'orange-500' }
  ]

  const globalHotspots = [
    { region: 'North America', threats: 456, trend: 'increasing' },
    { region: 'Europe', threats: 389, trend: 'stable' },
    { region: 'Asia Pacific', threats: 234, trend: 'decreasing' },
    { region: 'Latin America', threats: 168, trend: 'increasing' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Threat Intelligence
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real-time monitoring and analysis of global deepfake threats. Stay ahead of emerging risks with comprehensive intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {threatStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <stat.icon className={`text-4xl text-${stat.color} mx-auto mb-3`} />
                <h3 className={`font-orbitron text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</h3>
                <p className="text-gray-300 mb-1">{stat.label}</p>
                <span className="text-neon-cyan text-xs">{stat.change}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-red-500 flex items-center gap-3">
                <FaChartLine />
                Threat Categories
              </h3>
              <div className="space-y-4">
                {threatTypes.map((threat, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{threat.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        threat.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        threat.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {threat.severity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Active Cases:</span>
                      <span className={`font-bold text-${threat.color}`}>{threat.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
                <FaGlobe />
                Global Hotspots
              </h3>
              <div className="space-y-4">
                {globalHotspots.map((hotspot, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{hotspot.region}</h4>
                      <div className={`flex items-center gap-2 ${
                        hotspot.trend === 'increasing' ? 'text-red-400' :
                        hotspot.trend === 'decreasing' ? 'text-green-400' :
                        'text-yellow-400'
                      }`}>
                        <span className="text-xs">{hotspot.trend}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          hotspot.trend === 'increasing' ? 'bg-red-400' :
                          hotspot.trend === 'decreasing' ? 'bg-green-400' :
                          'bg-yellow-400'
                        }`} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Active Threats:</span>
                      <span className="font-bold text-orange-400">{hotspot.threats}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                <FaBell />
                Real-time Alerts
              </h3>
              <div className="space-y-3">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 font-semibold text-sm">Critical Alert</p>
                  <p className="text-gray-300 text-xs">New political deepfake campaign detected</p>
                  <span className="text-gray-500 text-xs">2 minutes ago</span>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-orange-400 font-semibold text-sm">High Priority</p>
                  <p className="text-gray-300 text-xs">Celebrity impersonation surge in social media</p>
                  <span className="text-gray-500 text-xs">15 minutes ago</span>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <p className="text-yellow-400 font-semibold text-sm">Medium Alert</p>
                  <p className="text-gray-300 text-xs">Financial fraud attempt blocked</p>
                  <span className="text-gray-500 text-xs">1 hour ago</span>
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-green flex items-center gap-3">
                <FaEye />
                Monitoring Dashboard
              </h3>
              <div className="space-y-4">
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                  <h4 className="font-semibold text-neon-green mb-2">Active Monitoring</h4>
                  <p className="text-sm text-gray-300 mb-3">24/7 surveillance of threat landscapes</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Sources:</span>
                    <span className="text-neon-green">1,247 active</span>
                  </div>
                </div>
                <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                  <h4 className="font-semibold text-neon-cyan mb-2">AI Analysis</h4>
                  <p className="text-sm text-gray-300 mb-3">Machine learning threat pattern recognition</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="text-neon-cyan">98.7%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                <FaDownload />
                Intelligence Reports
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  Daily Threat Summary
                </button>
                <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  Weekly Analysis Report
                </button>
                <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  Monthly Intelligence Brief
                </button>
                <button className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  Custom Report Builder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThreatIntelPage