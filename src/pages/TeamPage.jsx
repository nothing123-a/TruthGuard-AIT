import { motion } from 'framer-motion'
import { FaUsers, FaGraduationCap, FaEnvelope, FaCode, FaBrain, FaSearch, FaShieldAlt, FaPhone, FaExternalLinkAlt, FaExclamationTriangle, FaLock, FaUserShield, FaBook, FaGavel } from 'react-icons/fa'

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Riya Lad',
      department: 'Software Engineering',
      year: 'Second Year',
      email: '202401100008@mitaoe.ac.in',
      role: 'Frontend Developer',
      color: 'neon-purple'
    },
    {
      name: 'Sakshi Barahate',
      department: 'Software Engineering',
      year: 'Second Year',
      email: '202401100110@mitaoe.ac.in',
      role: 'AI Researcher',
      color: 'neon-cyan'
    },
    {
      name: 'Prajwal Kate',
      department: 'Software Engineering',
      year: 'Second Year',
      email: 'kateprajwal0806@gmail.com',
      role: 'Backend Developer',
      color: 'neon-green'
    },
    {
      name: 'Dipak Patil',
      department: 'Software Engineering',
      year: 'Second Year',
      email: 'Dipakraj020207@gmail.com',
      role: 'Security Analyst',
      color: 'orange-500'
    }
  ]

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Frontend Developer': return FaCode
      case 'AI Researcher': return FaBrain
      case 'Backend Developer': return FaShieldAlt
      case 'Security Analyst': return FaSearch
      default: return FaCode
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaUsers className="text-6xl text-neon-cyan mx-auto mb-6 animate-pulse" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
              Meet the passionate developers behind TruthGuard - dedicated to fighting deepfakes and protecting digital truth.
            </p>
            <div className="bg-neon-purple/20 border border-neon-purple/50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-neon-purple font-semibold">
                Second Year Software Engineering Students
              </p>
              <p className="text-gray-300 text-sm mt-1">
                MIT Academy of Engineering, Pune
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const RoleIcon = getRoleIcon(member.role)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className={`cyber-card h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${member.color}/20 group-hover:border-${member.color}/50`}>
                    {/* Profile Avatar */}
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-${member.color}/20 to-${member.color}/5 rounded-full flex items-center justify-center border-2 border-${member.color}/30 group-hover:border-${member.color}/60 transition-all duration-300`}>
                        <FaUsers className={`text-3xl text-${member.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Role Badge */}
                      <div className={`inline-flex items-center gap-2 bg-${member.color}/20 border border-${member.color}/40 rounded-full px-3 py-1 mb-3`}>
                        <RoleIcon className={`text-sm text-${member.color}`} />
                        <span className={`text-${member.color} text-xs font-semibold`}>
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {/* Department */}
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                          <FaCode className="text-neon-cyan flex-shrink-0" />
                          <div>
                            <p className="text-gray-400 text-xs">Department</p>
                            <p className="text-white text-sm font-medium">{member.department}</p>
                          </div>
                        </div>

                        {/* Year */}
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                          <FaGraduationCap className="text-neon-green flex-shrink-0" />
                          <div>
                            <p className="text-gray-400 text-xs">Academic Year</p>
                            <p className="text-white text-sm font-medium">{member.year}</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                          <FaEnvelope className="text-neon-purple flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-gray-400 text-xs">Email</p>
                            <p className="text-white text-sm font-medium truncate" title={member.email}>
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Button */}
                      <div className="pt-4">
                        <button className={`w-full bg-${member.color}/20 hover:bg-${member.color}/30 text-${member.color} font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md group-hover:shadow-${member.color}/20`}>
                          <FaEnvelope />
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl font-bold mb-6 text-neon-green">
              Team Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our collective expertise and dedication drive TruthGuard's mission to combat deepfakes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: FaCode, value: '4', label: 'Developers', color: 'neon-cyan' },
              { icon: FaBrain, value: '100%', label: 'AI Focused', color: 'neon-purple' },
              { icon: FaShieldAlt, value: '24/7', label: 'Security First', color: 'neon-green' },
              { icon: FaGraduationCap, value: '2nd Year', label: 'Students', color: 'yellow-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card text-center"
              >
                <stat.icon className={`text-4xl text-${stat.color} mx-auto mb-3`} />
                <h3 className={`font-orbitron text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card text-center"
          >
            <FaShieldAlt className="text-5xl text-neon-purple mx-auto mb-6" />
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As second-year Software Engineering students, we're passionate about leveraging cutting-edge AI technology 
              to combat the growing threat of deepfakes. TruthGuard represents our commitment to protecting digital truth 
              and building a safer online world for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                <h4 className="font-semibold text-neon-cyan mb-2">Innovation</h4>
                <p className="text-gray-300 text-sm">Pushing boundaries in AI detection technology</p>
              </div>
              <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-4">
                <h4 className="font-semibold text-neon-purple mb-2">Security</h4>
                <p className="text-gray-300 text-sm">Protecting digital integrity and authenticity</p>
              </div>
              <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                <h4 className="font-semibold text-neon-green mb-2">Impact</h4>
                <p className="text-gray-300 text-sm">Creating solutions that matter for society</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Cybercrime Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Safety Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-6 mb-12 text-center"
          >
            <FaExclamationTriangle className="text-4xl text-red-400 mx-auto mb-4 animate-pulse" />
            <h3 className="font-orbitron text-xl font-bold text-red-400 mb-4">Important Safety Alert</h3>
            <p className="text-gray-300 leading-relaxed">
              If you believe you are a victim of cybercrime, immediately call <strong className="text-red-400">1930</strong> or report the incident at{' '}
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-white underline">
                https://cybercrime.gov.in
              </a>
              . Early reporting increases the chances of recovery and legal action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl font-bold mb-6 text-neon-cyan">
              Security, Privacy & Cybercrime Help
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Your safety and privacy are our top priorities. Access official government resources and learn how to protect yourself online.
            </p>
          </motion.div>

          {/* Emergency Helpline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="cyber-card bg-red-500/10 border-red-500/50 max-w-2xl mx-auto text-center">
              <FaPhone className="text-5xl text-red-400 mx-auto mb-6 animate-pulse" />
              <h3 className="font-orbitron text-2xl font-bold text-red-400 mb-4">
                National Cybercrime Helpline (India)
              </h3>
              <div className="text-6xl font-bold text-red-400 mb-4">1930</div>
              <p className="text-neon-green font-semibold mb-4">Available 24x7</p>
              <div className="bg-red-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Report These Crimes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-300">• Online financial fraud</div>
                  <div className="text-gray-300">• Deepfake harassment</div>
                  <div className="text-gray-300">• Voice cloning scams</div>
                  <div className="text-gray-300">• Identity theft</div>
                  <div className="text-gray-300">• Social media impersonation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Government Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'National Cyber Crime Reporting Portal',
                url: 'https://cybercrime.gov.in',
                icon: FaGavel,
                color: 'neon-cyan',
                purposes: ['Report cyber harassment', 'Report deepfake misuse', 'Report online fraud', 'Report social media crimes']
              },
              {
                title: 'Women & Child Safety Cybercrime Portal',
                url: 'https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx',
                icon: FaUserShield,
                color: 'neon-purple',
                purposes: ['Deepfake abuse', 'Online harassment', 'Threats and stalking']
              },
              {
                title: 'CERT-In (Indian Computer Emergency Response Team)',
                url: 'https://www.cert-in.org.in',
                icon: FaShieldAlt,
                color: 'neon-green',
                purposes: ['Cybersecurity advisories', 'Threat alerts', 'Vulnerability information']
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card"
              >
                <resource.icon className={`text-4xl text-${resource.color} mb-4`} />
                <h3 className="font-orbitron text-lg font-bold text-white mb-4">
                  {resource.title}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Purpose:</h4>
                  <ul className="space-y-1">
                    {resource.purposes.map((purpose, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {purpose}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-${resource.color}/20 hover:bg-${resource.color}/30 text-${resource.color} font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}
                >
                  Visit Portal
                  <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Security & Privacy Measures */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-green flex items-center gap-3">
                <FaLock />
                Security & Privacy Measures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Privacy-First Design',
                    description: 'Uploaded images, videos, audio, or text are not permanently stored.',
                    icon: FaUserShield
                  },
                  {
                    title: 'Temporary Processing Only',
                    description: 'Media is analyzed temporarily and auto-deleted after processing.',
                    icon: FaLock
                  },
                  {
                    title: 'No User Tracking',
                    description: 'No login required and no personal profiling.',
                    icon: FaShieldAlt
                  },
                  {
                    title: 'Ethical AI Disclaimer',
                    description: 'Detection results are advisory and should not be used as sole legal evidence.',
                    icon: FaGavel
                  }
                ].map((measure, index) => (
                  <div key={index} className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <measure.icon className="text-neon-green" />
                      <h4 className="font-semibold text-white">{measure.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{measure.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awareness Articles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                <FaBook />
                Cybersecurity Awareness
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'What Are Deepfakes and Why They Are Dangerous',
                    summary: 'Explanation of AI-generated fake images, videos, and voices.'
                  },
                  {
                    title: 'How to Identify Fake Images, Videos, and Voice Clones',
                    summary: 'Practical tips for spotting manipulated content.'
                  },
                  {
                    title: 'Deepfake Harassment and Women Safety in India',
                    summary: 'Impact of AI misuse and legal protections available.'
                  },
                  {
                    title: 'AI-Generated Scams: Voice and Video Fraud Explained',
                    summary: 'How scammers use AI for impersonation.'
                  },
                  {
                    title: 'What To Do If You Are a Victim of Cybercrime',
                    summary: 'Step-by-step guidance for victims.'
                  },
                  {
                    title: 'Legal Actions Against Cybercrime in India',
                    summary: 'Overview of IT Act and cyber laws.'
                  },
                  {
                    title: 'Best Practices for Online Identity Protection',
                    summary: 'Tips to stay safe online.'
                  }
                ].map((article, index) => (
                  <div key={index} className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-4 hover:bg-neon-purple/20 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white mb-2 text-sm">{article.title}</h4>
                    <p className="text-gray-400 text-xs">{article.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage