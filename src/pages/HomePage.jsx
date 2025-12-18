import { motion } from 'framer-motion'
import { FaShieldAlt, FaPlay, FaArrowRight, FaCheckCircle, FaGlobe, FaUsers, FaRocket, FaEye, FaBrain, FaClock } from 'react-icons/fa'

const HomePage = () => {
  const features = [
    { icon: FaCheckCircle, title: '95% Accuracy', desc: 'Industry-leading detection rates', stat: '10M+ files analyzed' },
    { icon: FaGlobe, title: 'Real-time Analysis', desc: 'Instant deepfake verification', stat: '<100ms response time' },
    { icon: FaUsers, title: 'Multi-platform', desc: 'Works across all media types', stat: '500+ organizations' },
    { icon: FaRocket, title: 'Easy Integration', desc: 'Simple API and browser plugins', stat: '99.9% uptime' }
  ]

  const capabilities = [
    {
      icon: FaEye,
      title: 'Advanced Detection',
      description: 'Our AI models can detect even the most sophisticated deepfakes using cutting-edge computer vision and machine learning techniques.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      features: ['Face-swap detection', 'Expression manipulation', 'Voice synthesis detection', 'Real-time processing']
    },
    {
      icon: FaBrain,
      title: 'Explainable AI',
      description: 'Get detailed explanations of why content was flagged, with visual heatmaps showing suspicious regions.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      features: ['Visual heatmaps', 'Confidence scoring', 'Frame-by-frame analysis', 'Detailed reports']
    },
    {
      icon: FaClock,
      title: 'Enterprise Ready',
      description: 'Built for scale with enterprise-grade security, compliance, and integration capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      features: ['SOC 2 compliance', 'API integration', 'Batch processing', '24/7 support']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            style={{ bottom: '10%', right: '10%' }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <FaShieldAlt className="text-8xl text-neon-purple animate-float mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent"
          >
            TruthGuard
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-poppins text-xl md:text-3xl text-gray-300 mb-4"
          >
            AI-Powered Deepfake Detection System
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Protect yourself and your organization from the growing threat of deepfake technology. 
            Our advanced AI system detects manipulated media with unprecedented accuracy, 
            providing real-time verification and detailed analysis reports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="neon-button flex items-center gap-3 text-lg">
              <FaPlay /> Try Live Demo
            </button>
            <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-neon-cyan hover:text-black hover:shadow-lg hover:shadow-neon-cyan/50 flex items-center gap-3 text-lg">
              Learn More <FaArrowRight />
            </button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="cyber-card text-center">
                <feature.icon className="text-3xl text-neon-purple mb-3 mx-auto" />
                <h3 className="font-orbitron font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{feature.desc}</p>
                <p className="text-xs text-neon-cyan font-semibold">{feature.stat}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-cyan">
              Advanced Capabilities
            </h2>
            <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
              Powered by state-of-the-art AI technology to provide comprehensive deepfake detection.
            </p>
          </motion.div>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
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
                      <capability.icon className="text-4xl text-neon-purple" />
                      <h3 className="font-orbitron text-2xl font-bold text-white">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-xl border border-neon-purple/30">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/500x300/0a0f1c/a855f7?text=${encodeURIComponent(capability.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-orbitron text-4xl font-bold mb-12 text-neon-green">
            Trusted by Organizations Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="font-orbitron text-4xl font-bold text-neon-purple mb-2">10M+</h3>
              <p className="text-gray-300">Media Files Analyzed</p>
            </div>
            <div className="cyber-card">
              <h3 className="font-orbitron text-4xl font-bold text-neon-cyan mb-2">500+</h3>
              <p className="text-gray-300">Organizations Protected</p>
            </div>
            <div className="cyber-card">
              <h3 className="font-orbitron text-4xl font-bold text-neon-green mb-2">99.2%</h3>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage