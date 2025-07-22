import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import dashboardService from '@/services/api/dashboardService';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dashboardStats, setDashboardStats] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigationItems = [
    {
      id: 'overview',
      name: 'Dashboard Overview',
      icon: 'Home',
      description: 'Quick stats and recent activity'
    },
    {
      id: 'brand-voice',
      name: 'Brand Voice',
      icon: 'Mic',
      description: 'Brand profile and voice analysis'
    },
    {
      id: 'social-trends',
      name: 'Social Trends',
      icon: 'TrendingUp',
      description: 'Real-time trend monitoring'
    }
  ];

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [stats, notifs, profile] = await Promise.all([
          dashboardService.getStats(),
          dashboardService.getNotifications(),
          dashboardService.getUserProfile()
        ]);
        
        setDashboardStats(stats);
        setNotifications(notifs);
        setUserProfile(profile);
        toast.success('Dashboard loaded successfully');
      } catch (error) {
        console.error('Error loading dashboard:', error);
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const handleNavigationClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    toast.info(`Switched to ${navigationItems.find(item => item.id === sectionId)?.name}`);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleNotificationClick = () => {
    setNotificationOpen(!notificationOpen);
    setUserMenuOpen(false);
  };

  const handleUserMenuClick = () => {
    setUserMenuOpen(!userMenuOpen);
    setNotificationOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan mb-4 mx-auto"></div>
          <p className="text-text-secondary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const renderOverviewContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 text-center glow-border-cyan">
          <ApperIcon name="TrendingUp" className="w-8 h-8 text-neon-cyan mb-2 mx-auto" />
          <div className="text-2xl font-bold text-text-primary">{dashboardStats?.activeTrends || 0}</div>
          <div className="text-text-muted text-sm">Active Trends</div>
        </Card>
        
        <Card className="p-6 text-center glow-border-lime">
          <ApperIcon name="Users" className="w-8 h-8 text-neon-lime mb-2 mx-auto" />
          <div className="text-2xl font-bold text-text-primary">{dashboardStats?.audienceInsights || 0}</div>
          <div className="text-text-muted text-sm">Audience Insights</div>
        </Card>
        
        <Card className="p-6 text-center glow-border-cyan">
          <ApperIcon name="FileText" className="w-8 h-8 text-neon-cyan mb-2 mx-auto" />
          <div className="text-2xl font-bold text-text-primary">{dashboardStats?.contentCreated || 0}</div>
          <div className="text-text-muted text-sm">Content Created</div>
        </Card>
        
        <Card className="p-6 text-center glow-border-lime">
          <ApperIcon name="Calendar" className="w-8 h-8 text-neon-lime mb-2 mx-auto" />
          <div className="text-2xl font-bold text-text-primary">{dashboardStats?.scheduledPosts || 0}</div>
          <div className="text-text-muted text-sm">Scheduled Posts</div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <ApperIcon name="Activity" className="w-5 h-5 text-neon-cyan mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {dashboardStats?.recentActivity?.map((activity) => (
              <div key={activity.Id} className="flex items-center space-x-3 p-3 bg-dark-bg rounded-lg">
                <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                <div className="flex-1">
                  <p className="text-text-primary text-sm">{activity.description}</p>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              </div>
            )) || []}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <ApperIcon name="BarChart3" className="w-5 h-5 text-neon-lime mr-2" />
            Performance Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Engagement Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-dark-bg rounded-full">
                  <div className="w-4/5 h-2 bg-neon-lime rounded-full"></div>
                </div>
                <span className="text-neon-lime font-semibold">80%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Brand Voice Consistency</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-dark-bg rounded-full">
                  <div className="w-full h-2 bg-neon-cyan rounded-full"></div>
                </div>
                <span className="text-neon-cyan font-semibold">95%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Trend Accuracy</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-dark-bg rounded-full">
                  <div className="w-3/4 h-2 bg-neon-lime rounded-full"></div>
                </div>
                <span className="text-neon-lime font-semibold">75%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderBrandVoiceContent = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <ApperIcon name="Mic" className="w-5 h-5 text-neon-cyan mr-2" />
          Brand Voice Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-text-secondary mb-3">Voice Characteristics</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Professional</span>
                <span className="text-neon-cyan font-semibold">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Friendly</span>
                <span className="text-neon-lime font-semibold">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Casual</span>
                <span className="text-text-muted">5%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-text-secondary mb-3">Emotion Mapping</h4>
            <div className="grid grid-cols-3 gap-2">
              {["Confident", "Innovative", "Trustworthy"].map((emotion, index) => (
                <div key={emotion} className="bg-dark-bg rounded-lg p-2 text-center">
                  <div className="text-xs text-text-muted">{emotion}</div>
                  <div className="text-sm font-semibold text-neon-cyan">
                    {[92, 88, 95][index]}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderSocialTrendsContent = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <ApperIcon name="TrendingUp" className="w-5 h-5 text-neon-lime mr-2" />
          Trending Topics
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { topic: "#AI Marketing", engagement: "2.3M", growth: "+45%" },
            { topic: "#SocialCommerce", engagement: "1.8M", growth: "+32%" },
            { topic: "#ContentStrategy", engagement: "950K", growth: "+28%" },
            { topic: "#InfluencerTech", engagement: "720K", growth: "+56%" },
            { topic: "#BrandVoice", engagement: "615K", growth: "+41%" },
            { topic: "#TrendAnalysis", engagement: "480K", growth: "+38%" }
          ].map((trend, index) => (
            <div key={index} className="bg-dark-bg rounded-lg p-4 glow-border-lime hover:glow-intensify-lime transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-primary font-semibold">{trend.topic}</span>
                <span className="text-neon-lime text-sm font-bold">{trend.growth}</span>
              </div>
              <div className="text-text-muted text-sm">{trend.engagement} engagements</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderMainContent = () => {
    switch (activeSection) {
      case 'brand-voice':
        return renderBrandVoiceContent();
      case 'social-trends':
        return renderSocialTrendsContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Desktop Sidebar */}
      <motion.div
        className={`hidden lg:flex flex-col bg-dark-card border-r border-gray-800 transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-80'
        }`}
        initial={{ width: 320 }}
        animate={{ width: sidebarCollapsed ? 64 : 320 }}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-lime">
              <ApperIcon name="TrendingUp" size={18} className="text-dark-bg" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-xl font-bold text-white font-display">
                Social Trends
              </span>
            )}
          </div>
          {!sidebarCollapsed && userProfile && (
            <div className="mt-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime flex items-center justify-center">
                <span className="text-dark-bg font-bold">{userProfile.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary font-medium truncate">{userProfile.name}</p>
                <p className="text-text-muted text-sm truncate">{userProfile.email}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigationClick(item.id)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-neon-cyan/20 glow-border-cyan text-neon-cyan'
                  : 'text-text-secondary hover:text-neon-cyan hover:bg-dark-bg/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <ApperIcon name={item.icon} size={20} />
                {!sidebarCollapsed && (
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-text-muted">{item.description}</p>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Sidebar Toggle */}
        <div className="p-4 border-t border-gray-800">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSidebar}
            className="w-full justify-center border-gray-700 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan"
          >
            <ApperIcon name={sidebarCollapsed ? "ChevronRight" : "ChevronLeft"} size={16} />
          </Button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-dark-card border-b border-gray-800 flex items-center justify-between px-6">
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden border-gray-700 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan"
          >
            <ApperIcon name="Menu" size={16} />
          </Button>

          {/* Page Title */}
          <h1 className="text-xl font-bold text-text-primary">
            {navigationItems.find(item => item.id === activeSection)?.name || 'Dashboard'}
          </h1>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={handleNotificationClick}
                className="border-gray-700 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan relative"
              >
                <ApperIcon name="Bell" size={16} />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-cyan rounded-full text-xs flex items-center justify-center text-dark-bg font-bold">
                    {notifications.length}
                  </span>
                )}
              </Button>

              <AnimatePresence>
                {notificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-12 w-80 bg-dark-card border border-gray-800 rounded-lg shadow-lg z-50"
                  >
                    <div className="p-4 border-b border-gray-800">
                      <h3 className="text-text-primary font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.Id} className="p-4 border-b border-gray-800 last:border-b-0">
                          <p className="text-text-primary text-sm">{notification.message}</p>
                          <p className="text-text-muted text-xs mt-1">{notification.timestamp}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile */}
            {userProfile && (
              <div className="relative">
                <button
                  onClick={handleUserMenuClick}
                  className="flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime flex items-center justify-center">
                    <span className="text-dark-bg font-bold text-sm">{userProfile.initials}</span>
                  </div>
                  <ApperIcon name="ChevronDown" size={16} />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 w-48 bg-dark-card border border-gray-800 rounded-lg shadow-lg z-50"
                    >
                      <div className="p-2">
                        <button className="w-full text-left p-2 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg rounded transition-colors">
                          Profile Settings
                        </button>
                        <button className="w-full text-left p-2 text-text-secondary hover:text-neon-cyan hover:bg-dark-bg rounded transition-colors">
                          Account Settings
                        </button>
                        <hr className="border-gray-800 my-2" />
                        <button className="w-full text-left p-2 text-text-secondary hover:text-red-400 hover:bg-dark-bg rounded transition-colors">
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderMainContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-dark-card border-r border-gray-800 z-50 flex flex-col"
            >
              {/* Mobile Sidebar Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-lime">
                      <ApperIcon name="TrendingUp" size={18} className="text-dark-bg" />
                    </div>
                    <span className="text-xl font-bold text-white font-display">
                      Social Trends
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-gray-700 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan"
                  >
                    <ApperIcon name="X" size={16} />
                  </Button>
                </div>
                {userProfile && (
                  <div className="mt-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime flex items-center justify-center">
                      <span className="text-dark-bg font-bold">{userProfile.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-primary font-medium truncate">{userProfile.name}</p>
                      <p className="text-text-muted text-sm truncate">{userProfile.email}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 p-4 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigationClick(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-neon-cyan/20 glow-border-cyan text-neon-cyan'
                        : 'text-text-secondary hover:text-neon-cyan hover:bg-dark-bg/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <ApperIcon name={item.icon} size={20} />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;