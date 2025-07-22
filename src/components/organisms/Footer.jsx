import React, { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  const navigationLinks = [
    { name: 'Privacy', url: '#' },
    { name: 'Terms', url: '#' },
    { name: 'Support', url: '#' },
    { name: 'About', url: '#' }
  ];

  return (
    <footer className="relative bg-dark-bg border-t border-gray-800">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info & Tagline */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Social Trends
              </h3>
              <p className="text-xl text-neon-cyan animate-glow font-medium">
                Where Intelligence Meets Content
              </p>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              Transform your social media strategy with AI-powered insights and trend analysis. 
              Stay ahead of the curve and create content that resonates.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-lg bg-dark-card border border-gray-700 flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:glow-intensify-cyan transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <ApperIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-display font-semibold text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-text-secondary mb-6">
              Stay on top of trends—subscribe to our weekly insights!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-dark-card text-white rounded-lg glow-border-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
                  disabled={isSubmitting}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/10 to-neon-lime/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-lime text-dark-bg font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <ApperIcon name="Loader2" size={16} className="animate-spin" />
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <ApperIcon name="ArrowRight" size={16} />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Secondary Navigation */}
            <nav className="flex space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Copyright */}
            <div className="text-text-muted text-sm">
              © 2024 Social Trends. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;