import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const CampaignSection = () => {
  const campaignFeatures = [
    {
      id: 1,
      title: "Strategic Campaign Generator",
      description: "Generate comprehensive 30-day, multi-channel content plans with one click",
      icon: "Target",
      variant: "default"
    },
    {
      id: 2,
      title: "Content Studio with Multi-AI Assistant",
      description: "Review, refine, and approve AI-generated content with suggestions from multiple AI models",
      icon: "Sparkles",
      variant: "lime"
    },
    {
      id: 3,
      title: "Create Once, Publish Everywhere",
      description: "Transform a single content idea into platform-optimized posts automatically",
      icon: "Share2",
      variant: "default"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            <span className="gradient-text-cyan">Strategic Campaign</span> Generation
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you're launching a product, building brand awareness, or driving conversions, get a complete strategy based on real audience data. Our Strategic Campaign Generator transforms social insights into comprehensive content plans that align with your business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {campaignFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card 
                variant={feature.variant}
                className="h-full hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${
                  feature.variant === "lime" 
                    ? "bg-neon-lime/20 glow-border-lime" 
                    : "bg-neon-cyan/20 glow-border-cyan"
                }`}>
                  <ApperIcon 
                    name={feature.icon} 
                    className={`w-8 h-8 ${
                      feature.variant === "lime" ? "text-neon-lime" : "text-neon-cyan"
                    }`} 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Visualization */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-dark-card to-dark-bg">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              From Insights to Published Content in Minutes
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              {[
                { icon: "Ear", label: "Listen", color: "cyan" },
                { icon: "Brain", label: "Strategize", color: "lime" },
                { icon: "PenTool", label: "Create", color: "cyan" },
                { icon: "Send", label: "Publish", color: "lime" },
                { icon: "BarChart", label: "Optimize", color: "cyan" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.color === "cyan" 
                        ? "bg-neon-cyan/20 glow-border-cyan" 
                        : "bg-neon-lime/20 glow-border-lime"
                    }`}
                    animate={{ 
                      boxShadow: step.color === "cyan" 
                        ? [
                            "0 0 20px rgba(0, 245, 255, 0.2)",
                            "0 0 30px rgba(0, 245, 255, 0.6)",
                            "0 0 20px rgba(0, 245, 255, 0.2)"
                          ]
                        : [
                            "0 0 20px rgba(57, 255, 20, 0.2)",
                            "0 0 30px rgba(57, 255, 20, 0.6)",
                            "0 0 20px rgba(57, 255, 20, 0.2)"
                          ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.4 
                    }}
                  >
                    <ApperIcon 
                      name={step.icon} 
                      className={`w-8 h-8 ${
                        step.color === "cyan" ? "text-neon-cyan" : "text-neon-lime"
                      }`} 
                    />
                  </motion.div>
                  
                  <span className="mt-4 font-semibold text-text-primary">
                    {step.label}
                  </span>
                  
                  {index < 4 && (
                    <motion.div
                      className="hidden md:block absolute top-8 left-20 w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-lime"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.2, duration: 0.8 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignSection;