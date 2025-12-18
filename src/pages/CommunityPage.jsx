import { motion } from 'framer-motion'
import { FaUsers, FaComments, FaThumbsUp, FaFlag, FaStar, FaShieldAlt, FaEye, FaBell } from 'react-icons/fa'

const CommunityPage = () => {
  const communityStats = [
    { icon: FaUsers, value: '25.4K', label: 'Active Members', color: 'neon-purple' },
    { icon: FaComments, value: '8.7K', label: 'Reports Submitted', color: 'neon-cyan' },
    { icon: FaThumbsUp, value: '94%', label: 'Accuracy Rate', color: 'neon-green' },
    { icon: FaShieldAlt, value: '12.3K', label: 'Threats Prevented', color: 'red-500' }
  ]

  const recentReports = [
    {
      id: 1,
      type: 'Deepfake Video',
      platform: 'Instagram',
      status: 'Verified',
      reporter: 'User_2847',
      time: '5 min ago',
      severity: 'High'
    },
    {
      id: 2,
      type: 'Manipulated Image',
      platform: 'Twitter',
      status: 'Under Review',
      reporter: 'SafetyFirst_99',
      time: '12 min ago',
      severity: 'Medium'
    },
    {
      id: 3,
      type: 'Audio Deepfake',
      platform: 'WhatsApp',
      status: 'Confirmed Fake',
      reporter: 'TruthSeeker_42',
      time: '23 min ago',
      severity: 'Critical'
    }
  ]

  const topContributors = [
    { name: 'DigitalGuardian', reports: 247, accuracy: 98, badge: 'Expert' },
    { name: 'TruthHunter', reports: 189, accuracy: 96, badge: 'Veteran' },
    { name: 'SafetyAdvocate', reports: 156, accuracy: 94, badge: 'Trusted' },
    { name: 'CyberWatch', reports: 134, accuracy: 97, badge: 'Expert' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaUsers className="text-6xl text-purple-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-neon-purple bg-clip-text text-transparent">
              Community
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our global community of digital truth defenders. Report suspicious content, share insights, and help protect the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <stat.icon className={`text-4xl text-${stat.color} mx-auto mb-3`} />
                <h3 className={`font-orbitron text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                <FaFlag />
                Report Suspicious Content
              </h3>
              <div className="space-y-4">
                <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                  <h4 className="font-semibold text-neon-cyan mb-3">Quick Report</h4>
                  <div className="space-y-3">
                    <select className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white">
                      <option>Select Content Type</option>
                      <option>Deepfake Video</option>
                      <option>Manipulated Image</option>
                      <option>Audio Deepfake</option>
                      <option>Synthetic Text</option>
                    </select>
                    <select className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white">
                      <option>Select Platform</option>
                      <option>Instagram</option>
                      <option>Twitter/X</option>
                      <option>Facebook</option>
                      <option>TikTok</option>
                      <option>WhatsApp</option>
                      <option>Other</option>
                    </select>
                    <textarea 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white h-24" 
                      placeholder="Describe the suspicious content..."
                    />
                    <button className="w-full bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan font-semibold py-3 px-6 rounded-lg transition-colors">
                      Submit Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                <FaComments />
                Recent Community Reports
              </h3>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-white text-sm">{report.type}</h4>
                        <p className="text-gray-400 text-xs">Platform: {report.platform}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        report.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        report.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {report.severity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">By: {report.reporter}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          report.status === 'Verified' ? 'bg-green-500/20 text-green-400' :
                          report.status === 'Confirmed Fake' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {report.status}
                        </span>
                        <span className="text-gray-500 text-xs">{report.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                <FaStar />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center">
                          <FaUsers className="text-neon-purple" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{contributor.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            contributor.badge === 'Expert' ? 'bg-neon-purple/20 text-neon-purple' :
                            contributor.badge === 'Veteran' ? 'bg-neon-cyan/20 text-neon-cyan' :
                            'bg-neon-green/20 text-neon-green'
                          }`}>
                            {contributor.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Reports:</span>
                        <span className="text-white font-semibold">{contributor.reports}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-neon-green font-semibold">{contributor.accuracy}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
                <FaBell />
                Community Guidelines
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Reporting Standards</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Provide clear evidence and context</li>
                    <li>• Respect privacy and anonymity</li>
                    <li>• Avoid false or malicious reports</li>
                    <li>• Follow platform-specific guidelines</li>
                  </ul>
                </div>
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                  <h4 className="font-semibold text-neon-green mb-2">Reward System</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Earn points for accurate reports</li>
                    <li>• Unlock expert badges and privileges</li>
                    <li>• Access to advanced detection tools</li>
                    <li>• Recognition in community leaderboards</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Safety First</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Report harmful content immediately</li>
                    <li>• Protect victim privacy and dignity</li>
                    <li>• Support community safety initiatives</li>
                    <li>• Collaborate with law enforcement when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage