import { motion } from 'framer-motion'
import { FaShieldAlt, FaUpload, FaNetworkWired } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
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
          className="font-poppins text-xl md:text-3xl text-gray-300 mb-12"
        >
          AI-Powered Deepfake Detection System
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="neon-button flex items-center gap-3 text-lg">
            <FaUpload /> Upload Media
          </button>
          <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-neon-cyan hover:text-black hover:shadow-lg hover:shadow-neon-cyan/50 flex items-center gap-3 text-lg">
            <FaNetworkWired /> View Architecture
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection