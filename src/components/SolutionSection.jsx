import { motion } from 'framer-motion'
import { FaUpload, FaBrain, FaChartLine, FaEye, FaFilePdf } from 'react-icons/fa'

const SolutionSection = () => {
  const steps = [
    {
      icon: FaUpload,
      title: 'Upload Media',
      description: 'Upload image or video files for deepfake analysis'
    },
    {
      icon: FaBrain,
      title: 'CNN Detection',
      description: 'Advanced neural networks analyze facial inconsistencies'
    },
    {
      icon: FaChartLine,
      title: 'Authenticity Score',
      description: 'Get a confidence score from 0-100% for media authenticity'
    },
    {
      icon: FaEye,
      title: 'Heatmap Visualization',
      description: 'Visual heatmap highlights suspicious regions in the media'
    },
    {
      icon: FaFilePdf,
      title: 'PDF Report',
      description: 'Download detailed analysis report for documentation'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-cyan">
            Our Solution
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            TruthGuard uses cutting-edge AI to detect deepfakes with high accuracy and provide explainable results.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-green rounded-full opacity-50" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="cyber-card">
                  <step.icon className="text-4xl text-neon-green mb-4" />
                  <h3 className="font-orbitron text-2xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection