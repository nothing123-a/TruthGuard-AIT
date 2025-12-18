import { motion } from 'framer-motion'
import { FaGraduationCap, FaBook, FaVideo, FaUsers, FaShieldAlt, FaEye, FaBrain, FaExclamationTriangle } from 'react-icons/fa'

const EducationPage = () => {
  const courses = [
    {
      title: 'Deepfake Detection Basics',
      description: 'Learn to identify common deepfake techniques and red flags',
      duration: '2 hours',
      level: 'Beginner',
      modules: 8,
      color: 'neon-cyan'
    },
    {
      title: 'Advanced AI Analysis',
      description: 'Understanding neural networks and detection algorithms',
      duration: '4 hours',
      level: 'Advanced',
      modules: 12,
      color: 'neon-purple'
    },
    {
      title: 'Media Literacy for Journalists',
      description: 'Professional verification techniques for newsrooms',
      duration: '3 hours',
      level: 'Professional',
      modules: 10,
      color: 'neon-green'
    }
  ]

  const resources = [
    { icon: FaVideo, title: 'Video Tutorials', count: '25+', desc: 'Step-by-step detection guides' },
    { icon: FaBook, title: 'Research Papers', count: '50+', desc: 'Latest academic findings' },
    { icon: FaUsers, title: 'Community Forum', count: '5K+', desc: 'Expert discussions' },
    { icon: FaShieldAlt, title: 'Case Studies', count: '100+', desc: 'Real-world examples' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaGraduationCap className="text-6xl text-yellow-500 mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Education Hub
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empower yourself with knowledge. Learn to identify deepfakes, understand AI detection, and protect your digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <resource.icon className="text-4xl text-yellow-500 mx-auto mb-3" />
                <h3 className="font-orbitron text-2xl font-bold text-yellow-500 mb-2">{resource.count}</h3>
                <h4 className="font-semibold text-white mb-2">{resource.title}</h4>
                <p className="text-gray-300 text-sm">{resource.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card"
              >
                <div className={`bg-${course.color}/20 p-4 rounded-lg mb-6`}>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-sm">{course.description}</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className={`text-${course.color}`}>{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Modules:</span>
                    <span className="text-white">{course.modules}</span>
                  </div>
                </div>
                <button className={`w-full bg-${course.color}/20 hover:bg-${course.color}/30 text-${course.color} font-semibold py-3 px-6 rounded-lg transition-colors`}>
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducationPage