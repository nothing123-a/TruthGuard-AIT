import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import DemoPage from './pages/DemoPage'
import DashboardPage from './pages/DashboardPage'
import TextDetectorPage from './pages/TextDetectorPage'
import EducationPage from './pages/EducationPage'
import JournalismPage from './pages/JournalismPage'
import ThreatIntelPage from './pages/ThreatIntelPage'
import VoiceSimilarityPage from './pages/VoiceSimilarityPage'
import TeamPage from './pages/TeamPage'
import SecurityHelpPage from './pages/SecurityHelpPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />
      case 'demo': return <DemoPage />
      case 'dashboard': return <DashboardPage />
      case 'text-detector': return <TextDetectorPage />
      case 'voice-similarity': return <VoiceSimilarityPage />
      case 'awareness': return <EducationPage />
      case 'journalism': return <JournalismPage />
      case 'threat-intel': return <ThreatIntelPage />
      case 'team': return <TeamPage />
      case 'security-help': return <SecurityHelpPage />
      case 'settings': return <SettingsPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:ml-72 transition-all duration-300"
      >
        {renderPage()}
      </motion.main>
    </div>
  )
}

export default App