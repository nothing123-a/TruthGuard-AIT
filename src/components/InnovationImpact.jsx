import { motion } from 'framer-motion'
import { FaBrain, FaEye, FaClock, FaPlug, FaShieldAlt, FaNewspaper, FaUsers, FaBuilding, FaGraduationCap } from 'react-icons/fa'

const InnovationImpact = () => {
  const innovations = [
    {
      icon: FaBrain,
      title: 'Explainable AI',
      description: 'Visual heatmaps show exactly which regions triggered deepfake detection'
    },
    {
      icon: FaEye,
      title: 'Frame-level Detection',
      description: 'Analyze individual frames in videos for precise temporal localization'
    },
    {
      icon: FaClock,
      title: 'Real-time Verification',
      description: 'Fast processing enables live stream and real-time content verification'
    },
    {
      icon: FaPlug,
      title: 'Browser Plugin & Bot',
      description: 'Easy integration with social media platforms and web browsers'
    },
    {
      icon: FaShieldAlt,
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment beyond binary classification'
    }
  ]

  const impacts = [
    {
      icon: FaNewspaper,
      title: 'Reduces Fake News',
      description: 'Helps journalists and fact-checkers verify media authenticity'
    },
    {
      icon: FaUsers,
      title: 'Protects Women',
      description: 'Combats non-consensual deepfake content and image-based abuse'
    },
    {
      icon: FaBuilding,
      title: 'Supports Cybercrime Units',
      description: 'Assists law enforcement in digital forensics and evidence verification'
    },
    {
      icon: FaGraduationCap,
      title: 'Helps HR & EdTech',
      description: 'Verifies candidate authenticity in remote interviews and assessments'
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
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Innovation & Impact
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology with real-world applications that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Innovation Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-3xl font-bold mb-8 text-neon-purple text-center lg:text-left">
              Innovation
            </h3>
            <div className="space-y-6">
              {innovations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card flex items-start gap-4"
                >
                  <item.icon className="text-3xl text-neon-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-orbitron text-lg font-semibold mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-3xl font-bold mb-8 text-neon-cyan text-center lg:text-left">
              Impact
            </h3>
            <div className="space-y-6">
              {impacts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card flex items-start gap-4"
                >
                  <item.icon className="text-3xl text-neon-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-orbitron text-lg font-semibold mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InnovationImpact