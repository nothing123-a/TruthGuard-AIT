import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const ArchitectureSection = () => {
  const techStack = [
    { name: 'TensorFlow', color: 'bg-orange-500' },
    { name: 'OpenCV', color: 'bg-green-500' },
    { name: 'XceptionNet', color: 'bg-blue-500' },
    { name: 'Flask', color: 'bg-gray-500' },
    { name: 'Grad-CAM', color: 'bg-purple-500' },
    { name: 'Vercel', color: 'bg-black' }
  ]

  const flowSteps = [
    'Input Layer',
    'Preprocessing',
    'Feature Extraction',
    'CNN Analysis',
    'Classification',
    'Output'
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-green">
            System Architecture
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge AI technologies for maximum accuracy and performance.
          </p>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`${tech.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          {flowSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center min-h-[120px] flex flex-col justify-center"
              >
                <h3 className="font-orbitron text-sm font-semibold text-neon-cyan">
                  {step}
                </h3>
              </motion.div>
              {index < flowSteps.length - 1 && (
                <FaArrowRight className="text-neon-purple text-2xl mx-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArchitectureSection