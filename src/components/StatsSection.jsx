import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp, FaUsers, FaExclamationTriangle } from 'react-icons/fa'

const StatsSection = () => {
  const [counts, setCounts] = useState({ deepfakes: 0, users: 0, misinformation: 0 })

  const stats = [
    {
      icon: FaArrowUp,
      value: 900,
      suffix: '%',
      label: 'Deepfake Rise',
      description: 'Increase in deepfake content over the past year',
      color: 'neon-purple'
    },
    {
      icon: FaUsers,
      value: 33,
      suffix: '%',
      label: 'Users Affected',
      description: '1 in 3 internet users have encountered deepfake content',
      color: 'neon-cyan'
    },
    {
      icon: FaExclamationTriangle,
      value: 250,
      suffix: '%',
      label: 'Misinformation Growth',
      description: 'Rise in AI-generated misinformation campaigns',
      color: 'neon-green'
    }
  ]

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'deepfakes' : index === 1 ? 'users' : 'misinformation']: Math.floor(start)
          }))
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-green">
            The Numbers Don't Lie
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            The deepfake crisis is growing exponentially. Here's what the data shows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const currentValue = index === 0 ? counts.deepfakes : index === 1 ? counts.users : counts.misinformation
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/20 mb-6 group-hover:bg-${stat.color}/30 transition-colors duration-300`}>
                  <stat.icon className={`text-3xl text-${stat.color}`} />
                </div>
                
                <div className="mb-4">
                  <span className={`font-orbitron text-5xl md:text-6xl font-bold text-${stat.color}`}>
                    {currentValue}
                  </span>
                  <span className={`font-orbitron text-3xl font-bold text-${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="font-orbitron text-xl font-semibold mb-3 text-white">
                  {stat.label}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection