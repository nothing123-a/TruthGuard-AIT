import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaGraduationCap, FaNewspaper, FaExclamationTriangle, FaHeart, FaBalanceScale, FaBriefcase, FaUserShield, FaEye, FaHandsHelping } from 'react-icons/fa'

const SocialImpactPage = () => {
  const impactModes = [
    {
      id: 'women-safety',
      icon: FaShieldAlt,
      title: 'Women Safety Mode',
      description: 'Fast detection and reporting of non-consensual deepfake content targeting women',
      features: [
        'Priority processing for reported content',
        'Anonymous reporting system',
        'Direct integration with law enforcement',
        'Victim support resources',
        'Educational awareness materials'
      ],
      stats: { protected: '50K+', reports: '2.3K', accuracy: '98.5%' },
      color: 'neon-purple'
    },
    {
      id: 'exam-verification',
      icon: FaGraduationCap,
      title: 'Online Exam & Interview Verification',
      description: 'Ensure candidate authenticity in remote examinations and interviews',
      features: [
        'Real-time identity verification',
        'Continuous monitoring during sessions',
        'Fraud prevention algorithms',
        'Compliance reporting',
        'Integration with exam platforms'
      ],
      stats: { verified: '100K+', prevented: '1.2K', institutions: '500+' },
      color: 'neon-cyan'
    },
    {
      id: 'journalism',
      icon: FaNewspaper,
      title: 'Media & Journalism Mode',
      description: 'Help journalists and news organizations verify content authenticity',
      features: [
        'Newsroom integration dashboard',
        'Batch verification tools',
        'Source credibility scoring',
        'Real-time fact-checking alerts',
        'Editorial workflow integration'
      ],
      stats: { newsrooms: '200+', verified: '500K+', prevented: '5K+' },
      color: 'neon-green'
    },
    {
      id: 'cybercrime',
      icon: FaBalanceScale,
      title: 'Cybercrime Support Mode',
      description: 'Assist law enforcement with digital evidence verification',
      features: [
        'Forensic-grade analysis reports',
        'Chain of custody documentation',
        'Court-admissible evidence',
        'Expert witness support',
        'Training for investigators'
      ],
      stats: { cases: '1K+', agencies: '50+', conviction: '95%' },
      color: 'red-500'
    }
  ]

  const impactStats = [
    { icon: FaUsers, value: '2.3M', label: 'People Protected', color: 'text-neon-purple' },
    { icon: FaExclamationTriangle, value: '15K+', label: 'Threats Prevented', color: 'text-red-500' },
    { icon: FaHeart, value: '98%', label: 'Victim Satisfaction', color: 'text-pink-500' },
    { icon: FaHandsHelping, value: '750+', label: 'Organizations Helped', color: 'text-neon-green' }
  ]

  const successStories = [
    {
      title: 'Protecting Women from Deepfake Abuse',
      description: 'Helped remove 5,000+ non-consensual deepfake images and videos, supporting victims with legal resources.',
      impact: '89% reduction in repeat offenses',
      category: 'Women Safety'
    },
    {
      title: 'Securing Online Education',
      description: 'Prevented 1,200+ cases of identity fraud in remote examinations across 500+ educational institutions.',
      impact: '99.2% authentication accuracy',
      category: 'Education'
    },
    {
      title: 'Fighting Misinformation',
      description: 'Verified 500K+ media files for news organizations, preventing spread of fake news during critical events.',
      impact: '67% faster fact-checking',
      category: 'Journalism'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaHeart className="text-6xl text-pink-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Social Impact
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              TruthGuard is more than technology—it's a force for social good. We're committed to protecting 
              vulnerable communities, supporting justice, and building a safer digital world for everyone.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <stat.icon className={`text-4xl ${stat.color} mx-auto mb-3`} />
                <h3 className={`font-orbitron text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Modes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl font-bold mb-6 text-neon-cyan">
              Specialized Protection Modes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for different communities and use cases, each designed with specific needs in mind.
            </p>
          </motion.div>

          <div className="space-y-16">
            {impactModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="cyber-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-${mode.color}/20 p-4 rounded-full`}>
                        <mode.icon className={`text-3xl text-${mode.color}`} />
                      </div>
                      <div>
                        <h3 className="font-orbitron text-2xl font-bold text-white mb-1">
                          {mode.title}
                        </h3>
                        <p className={`text-${mode.color} text-sm font-semibold`}>
                          Specialized Protection
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {mode.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {mode.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 bg-${mode.color} rounded-full`}></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(mode.stats).map(([key, value], idx) => (
                        <div key={idx} className={`bg-${mode.color}/10 border border-${mode.color}/30 rounded-lg p-3 text-center`}>
                          <div className={`text-lg font-bold text-${mode.color}`}>{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br from-${mode.color}/20 to-${mode.color}/5 rounded-lg h-80 flex items-center justify-center border border-${mode.color}/30`}>
                    <mode.icon className={`text-8xl text-${mode.color}/50`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl font-bold mb-6 text-neon-green">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact stories from communities we've helped protect against deepfake threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card"
              >
                <div className="mb-4">
                  <span className="bg-neon-green/20 text-neon-green text-xs px-3 py-1 rounded-full font-semibold">
                    {story.category}
                  </span>
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                  {story.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {story.description}
                </p>
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-3">
                  <p className="text-neon-green font-semibold text-sm">Impact: {story.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialImpactPage