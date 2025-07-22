import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
const AuthModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (activeTab === 'login') {
        toast.success('Welcome back! Login successful.');
        onClose();
        setFormData({ name: '', email: '', password: '' });
        navigate('/dashboard');
      } else {
        toast.success('Account created successfully! Welcome aboard.');
        onClose();
        setFormData({ name: '', email: '', password: '' });
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Google authentication successful!');
      onClose();
      navigate('/dashboard');
    } catch (error) {
      toast.error('Google authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setFormData({ name: '', email: '', password: '' });
  };

  if (!isOpen) return null;

return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 modal-backdrop"
          aria-hidden="true"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[700px] bg-[#121212] rounded-lg modal-shadow overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
{/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded-lg"
            aria-label="Close modal"
          >
            <ApperIcon name="X" size={20} />
          </button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row min-h-[500px] relative">
            {/* Panel Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-px"></div>
            
            {/* Left Panel - Visual Content */}
            <div className="hidden lg:block w-1/2 bg-gradient-to-br from-dark-card to-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <ApperIcon name="Zap" size={48} className="text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Welcome to the Future
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Join thousands of users who trust our platform for their daily needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel - Auth Form */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
              {/* Tabs */}
<div className="mb-8">
                <h2 id="auth-modal-title" className="sr-only">
                  {activeTab === 'login' ? 'Log in to your account' : 'Create new account'}
                </h2>
                
                {/* Desktop Tabs */}
                <div className="hidden sm:flex space-x-8 border-b border-gray-700" role="tablist">
                  <button
                    role="tab"
                    aria-selected={activeTab === 'login'}
                    aria-controls="login-panel"
                    onClick={() => switchTab('login')}
                    className={`pb-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 relative ${
                      activeTab === 'login'
                        ? 'text-white'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    Log in
                    {activeTab === 'login' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"></div>
                    )}
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 'signup'}
                    aria-controls="signup-panel"
                    onClick={() => switchTab('signup')}
                    className={`pb-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 relative ${
                      activeTab === 'signup'
                        ? 'text-white'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    Create account
                    {activeTab === 'signup' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"></div>
                    )}
                  </button>
                </div>

                {/* Mobile Dropdown */}
                <div className="sm:hidden">
                  <select 
                    value={activeTab}
                    onChange={(e) => switchTab(e.target.value)}
                    className="w-full bg-[#2A2A2A] text-white border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50"
                  >
                    <option value="login">Log in</option>
                    <option value="signup">Create account</option>
                  </select>
                </div>
              </div>

{/* Google Button */}
              <Button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="w-full mb-6 bg-[#2A2A2A] hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500 transition-all duration-200 focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50"
                aria-label="Continue with Google"
              >
                <ApperIcon name="Chrome" size={20} className="mr-3" />
                Continue with Google
              </Button>

{/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#121212] text-text-muted">OR</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  role="tabpanel"
                  id={activeTab === 'login' ? 'login-panel' : 'signup-panel'}
                  aria-labelledby={activeTab === 'login' ? 'login-tab' : 'signup-tab'}
>
                  {activeTab === 'signup' && (
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={activeTab === 'signup'}
                        className="w-full bg-[#1F1F1F] border border-gray-600 rounded-md px-4 py-3 text-[#E5E7EB] text-sm placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-opacity-30"
                        placeholder="Enter your full name"
                        aria-describedby="name-error"
                      />
                    </div>
                  )}
<div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1F1F1F] border border-gray-600 rounded-md px-4 py-3 text-[#E5E7EB] text-sm placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-opacity-30"
                      placeholder="Enter your email"
                      aria-describedby="email-error"
                    />
                  </div>

<div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1F1F1F] border border-gray-600 rounded-md px-4 py-3 pr-12 text-[#E5E7EB] text-sm placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-opacity-30"
                        placeholder="Enter your password"
                        aria-describedby="password-error"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded p-1"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        <ApperIcon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
                      </button>
                    </div>
                  </div>
                </div>

<Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 bg-neon-blue hover:bg-blue-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-neon-blue/25 hover:scale-[1.02] focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Please wait...
                    </div>
                  ) : (
                    activeTab === 'login' ? 'Continue' : 'Sign up'
                  )}
                </Button>
              </form>

{/* Legal Disclaimer */}
              <p className="mt-6 text-xs text-gray-400 leading-relaxed">
                By continuing, you agree to our{' '}
                <a href="#" className="text-neon-blue hover:text-blue-400 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-neon-blue hover:text-blue-400 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded">
                  Privacy & Cookie Policy
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;