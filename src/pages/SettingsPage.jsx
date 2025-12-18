import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCog, FaShieldAlt, FaBell, FaUser, FaEye, FaDownload, FaTrash, FaLock } from 'react-icons/fa'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('privacy')

  const tabs = [
    { id: 'privacy', label: 'Privacy & Security', icon: FaShieldAlt },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'account', label: 'Account Settings', icon: FaUser },
    { id: 'data', label: 'Data Management', icon: FaDownload }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <FaCog className="text-6xl text-gray-500 mx-auto mb-6 animate-spin-slow" />
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Customize your TruthGuard experience. Manage privacy, notifications, and data preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tab Navigation */}
            <div className="lg:col-span-1">
              <div className="cyber-card">
                <h3 className="font-orbitron text-lg font-bold mb-4 text-white">Settings Menu</h3>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <tab.icon />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-3">
              {activeTab === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="cyber-card">
                    <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-cyan flex items-center gap-3">
                      <FaShieldAlt />
                      Privacy & Security
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Data Collection</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Allow usage analytics</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Share detection improvements</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Anonymous error reporting</span>
                            <input type="checkbox" className="toggle" />
                          </label>
                        </div>
                      </div>

                      <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Account Security</h4>
                        <div className="space-y-3">
                          <button className="w-full bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                            <FaLock />
                            Enable Two-Factor Authentication
                          </button>
                          <button className="w-full bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 font-semibold py-2 px-4 rounded-lg transition-colors">
                            Change Password
                          </button>
                          <button className="w-full bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 font-semibold py-2 px-4 rounded-lg transition-colors">
                            Review Login Sessions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="cyber-card">
                    <h3 className="font-orbitron text-xl font-bold mb-6 text-orange-500 flex items-center gap-3">
                      <FaBell />
                      Notification Preferences
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Detection Alerts</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Deepfake detection results</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">High-risk content alerts</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Analysis completion</span>
                            <input type="checkbox" className="toggle" />
                          </label>
                        </div>
                      </div>

                      <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Community Updates</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">New threat intelligence</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Community reports</span>
                            <input type="checkbox" className="toggle" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-gray-300">Weekly summaries</span>
                            <input type="checkbox" className="toggle" defaultChecked />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="cyber-card">
                    <h3 className="font-orbitron text-xl font-bold mb-6 text-neon-green flex items-center gap-3">
                      <FaUser />
                      Account Settings
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Profile Information</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">Display Name</label>
                            <input 
                              type="text" 
                              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white" 
                              placeholder="Enter display name"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">Email Address</label>
                            <input 
                              type="email" 
                              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white" 
                              placeholder="Enter email address"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm mb-1">Organization (Optional)</label>
                            <input 
                              type="text" 
                              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white" 
                              placeholder="Enter organization name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Subscription & Usage</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Current Plan:</span>
                            <span className="text-yellow-400 font-semibold">Professional</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Monthly Usage:</span>
                            <span className="text-white">247 / 1000 scans</span>
                          </div>
                          <button className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-semibold py-2 px-4 rounded-lg transition-colors">
                            Upgrade Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'data' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="cyber-card">
                    <h3 className="font-orbitron text-xl font-bold mb-6 text-red-500 flex items-center gap-3">
                      <FaDownload />
                      Data Management
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Export Data</h4>
                        <p className="text-gray-300 text-sm mb-4">Download your analysis history and reports</p>
                        <div className="space-y-2">
                          <button className="w-full bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan font-semibold py-2 px-4 rounded-lg transition-colors">
                            Download Analysis History
                          </button>
                          <button className="w-full bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan font-semibold py-2 px-4 rounded-lg transition-colors">
                            Export Detection Reports
                          </button>
                        </div>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Data Deletion</h4>
                        <p className="text-gray-300 text-sm mb-4">Permanently remove your data from our systems</p>
                        <div className="space-y-2">
                          <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <FaTrash />
                            Clear Analysis History
                          </button>
                          <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <FaTrash />
                            Delete Account
                          </button>
                        </div>
                      </div>

                      <div className="bg-gray-600/10 border border-gray-600/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Storage Usage</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Uploaded Files:</span>
                            <span className="text-white">2.4 GB / 10 GB</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-neon-green h-2 rounded-full" style={{ width: '24%' }} />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Analysis Reports:</span>
                            <span className="text-white">156 MB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage