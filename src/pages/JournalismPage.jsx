import { motion } from 'framer-motion'
import { FaNewspaper, FaUpload, FaCheckCircle, FaClock, FaUsers, FaShieldAlt, FaDownload, FaEye } from 'react-icons/fa'

const JournalismPage = () => {
  const features = [
    {
      icon: FaUpload,
      title: 'Batch Verification',
      description: 'Upload multiple media files for simultaneous verification',
      color: 'neon-cyan'
    },
    {
      icon: FaClock,
      title: 'Real-time Alerts',
      description: 'Instant notifications for suspicious content detection',
      color: 'orange-500'
    },
    {
      icon: FaUsers,
      title: 'Newsroom Integration',
      description: 'Seamless workflow integration with editorial systems',
      color: 'neon-green'
    },
    {
      icon: FaShieldAlt,
      title: 'Source Credibility',
      description: 'Advanced scoring system for content authenticity',
      color: 'neon-purple'
    }
  ]

  const newsrooms = [
    { name: 'Global News Network', verified: '15K+', saved: '2.3M' },
    { name: 'Digital Times', verified: '8K+', saved: '1.8M' },
    { name: 'Truth Media', verified: '12K+', saved: '2.1M' },
    { name: 'Fact Check Daily', verified: '6K+', saved: '1.2M' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaNewspaper className="text-6xl text-orange-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Media Verification
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional tools for journalists and newsrooms. Verify content authenticity, maintain editorial integrity, and fight misinformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <feature.icon className={`text-4xl text-${feature.color} mx-auto mb-4`} />
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-orange-500">Verification Dashboard</h3>
              <div className="space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Quick Verify</h4>
                  <p className="text-sm text-gray-300 mb-3">Drag and drop media files for instant verification</p>
                  <button className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-semibold py-2 px-4 rounded-lg transition-colors">
                    Upload Media
                  </button>
                </div>
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                  <h4 className="font-semibold text-neon-green mb-2">Editorial Workflow</h4>
                  <p className="text-sm text-gray-300 mb-3">Integrate with your existing editorial systems</p>
                  <button className="bg-neon-green/20 hover:bg-neon-green/30 text-neon-green font-semibold py-2 px-4 rounded-lg transition-colors">
                    Setup Integration
                  </button>
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple">Trusted Newsrooms</h3>
              <div className="space-y-3">
                {newsrooms.map((newsroom, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{newsroom.name}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Verified: <span className="text-neon-cyan">{newsroom.verified}</span></span>
                      <span className="text-gray-400">Time Saved: <span className="text-neon-green">{newsroom.saved}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cyber-card text-center">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan">Professional Reports</h3>
            <p className="text-gray-300 mb-8">Generate comprehensive verification reports for editorial review and legal compliance</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
                <FaDownload className="text-3xl text-neon-cyan mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Verification Report</h4>
                <p className="text-sm text-gray-300">Detailed analysis with confidence scores</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                <FaEye className="text-3xl text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Editorial Summary</h4>
                <p className="text-sm text-gray-300">Quick overview for editorial decisions</p>
              </div>
              <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
                <FaShieldAlt className="text-3xl text-neon-purple mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Legal Documentation</h4>
                <p className="text-sm text-gray-300">Court-admissible verification evidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JournalismPage