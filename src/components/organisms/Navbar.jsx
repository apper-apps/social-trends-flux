import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-lime">
              <ApperIcon name="TrendingUp" size={18} className="text-dark-bg" />
            </div>
            <span className="text-xl font-bold text-white font-display">
              Social Trends
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-neon-cyan transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="text-text-secondary hover:text-neon-cyan transition-colors duration-200 font-medium"
            >
              Login
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-200"
            >
              Book A Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-neon-cyan transition-colors duration-200"
            >
              <ApperIcon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-bg border-t border-gray-800"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-text-secondary hover:text-neon-cyan transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="block text-text-secondary hover:text-neon-cyan transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book A Call
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;