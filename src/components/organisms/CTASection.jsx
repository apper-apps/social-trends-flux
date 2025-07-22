import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-bg via-gray-900 to-black relative overflow-hidden">
      {/* Subtle particle effects */}
      <div className="absolute inset-0">
        <div className="particles">
          <div className="particle" style={{ top: '20%', left: '10%', width: '3px', height: '3px', animationDelay: '0s' }} />
          <div className="particle" style={{ top: '60%', left: '20%', width: '2px', height: '2px', animationDelay: '1s' }} />
          <div className="particle" style={{ top: '40%', left: '80%', width: '4px', height: '4px', animationDelay: '2s' }} />
          <div className="particle" style={{ top: '80%', left: '70%', width: '2px', height: '2px', animationDelay: '3s' }} />
          <div className="particle" style={{ top: '30%', left: '50%', width: '3px', height: '3px', animationDelay: '1.5s' }} />
          <div className="particle" style={{ top: '70%', left: '90%', width: '2px', height: '2px', animationDelay: '2.5s' }} />
        </div>
      </div>
      
      {/* Dramatic background lighting */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-neon-cyan rounded-full blur-3xl transform -translate-x-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-lime rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Title with glow effect */}
          <motion.h1 
            className="text-5xl lg:text-7xl font-display font-bold text-white mb-8"
            style={{ 
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)' 
            }}
            animate={{ 
              textShadow: [
                '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)',
                '0 0 40px rgba(255, 255, 255, 0.7), 0 0 80px rgba(255, 255, 255, 0.4)',
                '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready to Transform Your Content Marketing?
          </motion.h1>
          
          {/* Copy text */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join thousands of creators and marketers who've eliminated content guesswork and started driving real results. 
            Get your first data-driven content strategy in minutes, not months.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-neon-lime text-dark-bg font-bold shadow-2xl"
                style={{
                  boxShadow: '0 0 30px rgba(57, 255, 20, 0.6), 0 0 60px rgba(57, 255, 20, 0.3)'
}}
              >
                Get Started Now
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="demo" 
                size="lg" 
                className="text-xl px-12 py-6"
              >
                <ApperIcon name="Play" className="w-6 h-6 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
          
          {/* Trust signals with neon highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { text: "14-day free trial", color: "neon-cyan" },
              { text: "No setup fees", color: "neon-lime" },
              { text: "Cancel anytime", color: "neon-cyan" },
              { text: "24/7 support", color: "neon-lime" },
              { text: "99.9% uptime guarantee", color: "neon-cyan" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center md:justify-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <ApperIcon 
                  name="CheckCircle" 
                  className={`w-5 h-5 text-${item.color} drop-shadow-lg`}
                  style={{
                    filter: `drop-shadow(0 0 8px ${item.color === 'neon-cyan' ? 'rgba(0, 245, 255, 0.6)' : 'rgba(57, 255, 20, 0.6)'})`
                  }}
                />
                <span className="text-gray-300 font-medium text-lg">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;