import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaFlask, FaChartBar, FaShieldAlt, FaMicrophone, FaGraduationCap, FaNewspaper, FaExclamationTriangle, FaUsers, FaCog, FaBars, FaTimes, FaGlobe, FaPhone } from 'react-icons/fa'

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'home', icon: FaHome, label: 'Home', color: 'neon-purple' },
    { id: 'dashboard', icon: FaChartBar, label: 'Dashboard', color: 'neon-green' },
    { id: 'demo', icon: FaFlask, label: 'Media Detector', color: 'neon-cyan' },
    { id: 'text-detector', icon: FaShieldAlt, label: 'Text Detector', color: 'blue-500' },
    { id: 'voice-similarity', icon: FaMicrophone, label: 'Voice Similarity', color: 'purple-500' },
    { id: 'awareness', icon: FaGraduationCap, label: 'Education Hub', color: 'yellow-500' },
    { id: 'journalism', icon: FaNewspaper, label: 'Media Verification', color: 'orange-500' },
    { id: 'threat-intel', icon: FaExclamationTriangle, label: 'Threat Intel', color: 'red-500' },
    { id: 'team', icon: FaUsers, label: 'Our Team', color: 'orange-500' },
    { id: 'security-help', icon: FaPhone, label: 'Security Help', color: 'red-500' },
    { id: 'settings', icon: FaCog, label: 'Settings', color: 'gray-500' }
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-900/80 backdrop-blur-sm border border-neon-purple/50 rounded-lg p-3 text-neon-purple hover:text-white transition-colors"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-lg border-r border-neon-purple/20 z-40 overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo */}
        <div className="p-6 border-b border-neon-purple/20">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-3xl text-neon-purple animate-glow" />
            <div>
              <h1 className="font-orbitron text-xl font-bold text-white">TruthGuard</h1>
              <p className="text-xs text-gray-400">AI Deepfake Detection</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setCurrentPage(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                    currentPage === item.id
                      ? `bg-${item.color}/20 border border-${item.color}/50 text-${item.color} shadow-lg shadow-${item.color}/20`
                      : 'text-gray-300 hover:bg-white/5 hover:text-white hover:border hover:border-white/10'
                  }`}
                >
                  <item.icon className={`text-xl ${currentPage === item.id ? `text-${item.color}` : 'group-hover:text-neon-purple'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Live Stats */}
        <div className="p-4 border-t border-neon-purple/20">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <FaGlobe className="text-red-400 animate-pulse" />
              <span className="text-red-400 font-semibold text-sm">Live Threats</span>
            </div>
            <div className="text-2xl font-bold text-white">1,247</div>
            <div className="text-xs text-gray-400">Deepfakes detected today</div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar