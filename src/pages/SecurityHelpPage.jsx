import { motion } from 'framer-motion'
import { FaShieldAlt, FaPhone, FaExternalLinkAlt, FaExclamationTriangle, FaLock, FaUserShield, FaBook, FaGavel } from 'react-icons/fa'

const SecurityHelpPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaShieldAlt className="text-6xl text-red-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Security & Cybercrime Help
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your safety and privacy are our top priorities. Access official government resources and learn how to protect yourself online.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Safety Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-6 mb-12 text-center"
          >
            <FaExclamationTriangle className="text-4xl text-red-400 mx-auto mb-4 animate-pulse" />
            <h3 className="font-orbitron text-xl font-bold text-red-400 mb-4">Important Safety Alert</h3>
            <p className="text-gray-300 leading-relaxed">
              If you believe you are a victim of cybercrime, immediately call <strong className="text-red-400">1930</strong> or report the incident at{' '}
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-white underline">
                https://cybercrime.gov.in
              </a>
              . Early reporting increases the chances of recovery and legal action.
            </p>
          </motion.div>

          {/* Emergency Helpline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16"
          >
            <div className="cyber-card bg-red-500/10 border-red-500/50 max-w-2xl mx-auto text-center">
              <FaPhone className="text-5xl text-red-400 mx-auto mb-6 animate-pulse" />
              <h3 className="font-orbitron text-2xl font-bold text-red-400 mb-4">
                National Cybercrime Helpline (India)
              </h3>
              <div className="text-6xl font-bold text-red-400 mb-4">1930</div>
              <p className="text-neon-green font-semibold mb-4">Available 24x7</p>
              <div className="bg-red-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Report These Crimes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-300">• Online financial fraud</div>
                  <div className="text-gray-300">• Deepfake harassment</div>
                  <div className="text-gray-300">• Voice cloning scams</div>
                  <div className="text-gray-300">• Identity theft</div>
                  <div className="text-gray-300">• Social media impersonation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Government Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'National Cyber Crime Reporting Portal',
                url: 'https://cybercrime.gov.in',
                icon: FaGavel,
                color: 'neon-cyan',
                purposes: ['Report cyber harassment', 'Report deepfake misuse', 'Report online fraud', 'Report social media crimes']
              },
              {
                title: 'Women & Child Safety Cybercrime Portal',
                url: 'https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx',
                icon: FaUserShield,
                color: 'neon-purple',
                purposes: ['Deepfake abuse', 'Online harassment', 'Threats and stalking']
              },
              {
                title: 'CERT-In (Indian Computer Emergency Response Team)',
                url: 'https://www.cert-in.org.in',
                icon: FaShieldAlt,
                color: 'neon-green',
                purposes: ['Cybersecurity advisories', 'Threat alerts', 'Vulnerability information']
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card"
              >
                <resource.icon className={`text-4xl text-${resource.color} mb-4`} />
                <h3 className="font-orbitron text-lg font-bold text-white mb-4">
                  {resource.title}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Purpose:</h4>
                  <ul className="space-y-1">
                    {resource.purposes.map((purpose, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {purpose}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-${resource.color}/20 hover:bg-${resource.color}/30 text-${resource.color} font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}
                >
                  Visit Portal
                  <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Security & Privacy Measures */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                <FaLock />
                Security & Privacy Measures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Privacy-First Design',
                    description: 'Uploaded images, videos, audio, or text are not permanently stored.',
                    icon: FaUserShield
                  },
                  {
                    title: 'Temporary Processing Only',
                    description: 'Media is analyzed temporarily and auto-deleted after processing.',
                    icon: FaLock
                  },
                  {
                    title: 'No User Tracking',
                    description: 'No login required and no personal profiling.',
                    icon: FaShieldAlt
                  },
                  {
                    title: 'Ethical AI Disclaimer',
                    description: 'Detection results are advisory and should not be used as sole legal evidence.',
                    icon: FaGavel
                  }
                ].map((measure, index) => (
                  <div key={index} className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <measure.icon className="text-neon-green" />
                      <h4 className="font-semibold text-white">{measure.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{measure.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awareness Articles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                <FaBook />
                Cybersecurity Awareness
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'What Are Deepfakes and Why They Are Dangerous',
                    summary: 'Explanation of AI-generated fake images, videos, and voices.'
                  },
                  {
                    title: 'How to Identify Fake Images, Videos, and Voice Clones',
                    summary: 'Practical tips for spotting manipulated content.'
                  },
                  {
                    title: 'Deepfake Harassment and Women Safety in India',
                    summary: 'Impact of AI misuse and legal protections available.'
                  },
                  {
                    title: 'AI-Generated Scams: Voice and Video Fraud Explained',
                    summary: 'How scammers use AI for impersonation.'
                  },
                  {
                    title: 'What To Do If You Are a Victim of Cybercrime',
                    summary: 'Step-by-step guidance for victims.'
                  },
                  {
                    title: 'Legal Actions Against Cybercrime in India',
                    summary: 'Overview of IT Act and cyber laws.'
                  },
                  {
                    title: 'Best Practices for Online Identity Protection',
                    summary: 'Tips to stay safe online.'
                  }
                ].map((article, index) => (
                  <div key={index} className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-4 hover:bg-neon-purple/20 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white mb-2 text-sm">{article.title}</h4>
                    <p className="text-gray-400 text-xs">{article.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SecurityHelpPage