import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neon-cyan rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-neon-lime rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="text-center relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-lime/5 to-neon-cyan/5"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-neon-cyan to-neon-lime rounded-full flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <ApperIcon name="Zap" className="w-10 h-10 text-dark-bg" />
              </motion.div>
              
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-primary mb-6">
                Ready to Transform Your <span className="gradient-text-cyan">Content Strategy?</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
                Join thousands of content creators and marketing teams who've already discovered the power of AI-driven content intelligence.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: "Clock", title: "Save 90% of Time", desc: "From 15 hours to 2 hours per week" },
                  { icon: "TrendingUp", title: "Increase Engagement", desc: "Average 156% boost in performance" },
                  { icon: "Target", title: "Better ROI", desc: "Data-driven content that converts" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark-bg rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ApperIcon 
                      name={benefit.icon} 
                      className={`w-8 h-8 mb-4 mx-auto ${
                        index === 1 ? "text-neon-lime" : "text-neon-cyan"
                      }`} 
                    />
                    <h4 className="font-semibold text-text-primary mb-2">{benefit.title}</h4>
                    <p className="text-text-muted text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-xl px-12 py-6">
                  <ApperIcon name="Calendar" className="w-6 h-6 mr-2" />
                  Start Your Free Strategy Session
                </Button>
                <Button variant="secondary" size="lg" className="text-xl px-12 py-6">
                  <ApperIcon name="Play" className="w-6 h-6 mr-2" />
                  Watch 2-Minute Demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-6 text-text-muted text-sm">
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 text-neon-lime mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 text-neon-lime mr-2" />
                  30-day money-back guarantee
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 text-neon-lime mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;