import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import featureService from "@/services/api/featureService";

const BrandVoiceSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await featureService.getAll();
        setFeatures(data);
      } catch (err) {
        setError("Failed to load features");
        console.error("Error loading features:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFeatures();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Dashboard Mockup */}
            <Card className="relative overflow-hidden">
              <div className="bg-dark-bg rounded-lg p-6">
                <h3 className="text-text-primary font-semibold mb-4 flex items-center">
                  <ApperIcon name="Brain" className="w-5 h-5 text-neon-cyan mr-2" />
                  Brand Voice Analysis
                </h3>
                
                {/* Sentiment Pie Chart */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#1A1A1D"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#00F5FF"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * 0.25 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        style={{ filter: "drop-shadow(0 0 6px rgba(0, 245, 255, 0.6))" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold gradient-text-cyan">75%</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 ml-6">
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
                </div>
                
                {/* Emotion Mapping */}
                <div className="grid grid-cols-3 gap-2">
                  {["Confident", "Innovative", "Trustworthy"].map((emotion, index) => (
                    <div key={emotion} className="bg-dark-card rounded-lg p-2 text-center">
                      <div className="text-xs text-text-muted">{emotion}</div>
                      <div className="text-sm font-semibold text-neon-cyan">
                        {[92, 88, 95][index]}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Glowing overlay animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              Content That Sounds <span className="gradient-text-lime">Authentically You</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Our proprietary Brand Voice AI scans your website and social media to create a unique Brand Voice Profile, ensuring all generated content maintains your authentic voice and brand consistency across all channels. Every piece of content feels like it came from your team, not a robot.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.Id}
                  className="flex items-center space-x-4 p-4 bg-dark-bg rounded-lg glow-border-cyan hover:glow-intensify-cyan transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    feature.glowColor === "cyan" 
                      ? "bg-neon-cyan/20 glow-border-cyan" 
                      : "bg-neon-lime/20 glow-border-lime"
                  }`}>
                    <ApperIcon 
                      name={feature.icon} 
                      className={`w-5 h-5 ${
                        feature.glowColor === "cyan" ? "text-neon-cyan" : "text-neon-lime"
                      }`} 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{feature.title}</h4>
                    <p className="text-text-muted text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoiceSection;