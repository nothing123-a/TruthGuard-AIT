import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const TeamSection = () => {
  const teamName = "TruthGuard Innovators"
  
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "AI/ML Engineer",
      college: "MIT",
      city: "Boston",
      state: "MA",
      avatar: "👨‍💻",
      skills: ["TensorFlow", "Computer Vision", "Deep Learning"]
    },
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      college: "Stanford University",
      city: "Palo Alto",
      state: "CA",
      avatar: "👩‍💻",
      skills: ["React", "Python", "Cloud Architecture"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Cybersecurity Specialist",
      college: "Carnegie Mellon",
      city: "Pittsburgh",
      state: "PA",
      avatar: "👨‍🔬",
      skills: ["Digital Forensics", "Security Analysis", "Threat Detection"]
    },
    {
      name: "Emily Zhang",
      role: "UX/UI Designer",
      college: "UC Berkeley",
      city: "Berkeley",
      state: "CA",
      avatar: "👩‍🎨",
      skills: ["UI/UX Design", "Prototyping", "User Research"]
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
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-neon-cyan">
            Meet the Team
          </h2>
          <h3 className="font-poppins text-2xl text-neon-purple mb-4">
            {teamName}
          </h3>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse group of innovators passionate about fighting deepfakes and protecting digital truth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card text-center group"
            >
              {/* Avatar */}
              <div className="text-6xl mb-4">
                {member.avatar}
              </div>

              {/* Member Info */}
              <h3 className="font-orbitron text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-neon-cyan font-medium mb-3">
                {member.role}
              </p>
              
              {/* Education & Location */}
              <div className="text-sm text-gray-300 mb-4">
                <p className="font-semibold">{member.college}</p>
                <p>{member.city}, {member.state}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-950/50 text-neon-green text-xs px-2 py-1 rounded-full border border-neon-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <button className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                  <FaLinkedin className="text-xl" />
                </button>
                <button className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  <FaGithub className="text-xl" />
                </button>
                <button className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                  <FaEnvelope className="text-xl" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="cyber-card text-center">
            <h4 className="font-orbitron text-3xl font-bold text-neon-purple mb-2">4</h4>
            <p className="text-gray-300">Team Members</p>
          </div>
          <div className="cyber-card text-center">
            <h4 className="font-orbitron text-3xl font-bold text-neon-cyan mb-2">4</h4>
            <p className="text-gray-300">Universities</p>
          </div>
          <div className="cyber-card text-center">
            <h4 className="font-orbitron text-3xl font-bold text-neon-green mb-2">3</h4>
            <p className="text-gray-300">States</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection