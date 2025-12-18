import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaUserSecret, FaIdCard, FaGavel, FaShareAlt } from 'react-icons/fa'

const ProblemSection = () => {
  const problems = [
    {
      icon: FaExclamationTriangle,
      title: 'Misinformation',
      description: 'Fake content spreads faster than truth, undermining public trust and democratic processes.'
    },
    {
      icon: FaUserSecret,
      title: 'Cyber Harassment',
      description: 'Deepfakes used to create non-consensual intimate content, causing psychological harm.'
    },
    {
      icon: FaIdCard,
      title: 'Identity Fraud',
      description: 'Criminals use deepfakes to impersonate individuals for financial and social engineering attacks.'
    },
    {
      icon: FaGavel,
      title: 'Fake Evidence',
      description: 'Manipulated media threatens the integrity of legal proceedings and justice systems.'
    },
    {
      icon: FaShareAlt,
      title: 'Social Media Scams',
      description: 'Deepfake videos of celebrities and public figures used in fraudulent advertisements.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-purple">
            The Deepfake Crisis
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Deepfake technology poses unprecedented threats to society, democracy, and individual privacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card group"
            >
              <div className="text-center">
                <problem.icon className="text-5xl text-neon-cyan mb-4 mx-auto group-hover:text-neon-purple transition-colors duration-300" />
                <h3 className="font-orbitron text-xl font-semibold mb-3 text-white">
                  {problem.title}
                </h3>
                <p className="font-inter text-gray-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection