import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import featureService from "@/services/api/featureService";

const FeaturesShowcaseSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        setLoading(true);
        const data = await featureService.getAll();
        setFeatures(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFeatures();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse text-text-muted">Loading features...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-red-400">Error loading features: {error}</div>
          </div>
        </div>
      </section>
    );
  }

return (
    <>
      <section className="py-24 px-6 bg-dark-bg relative">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-glow">
              Everything You Need to{" "}
              <span className="gradient-text-cyan">Dominate</span>{" "}
              Content Marketing
            </h2>
          </motion.div>

          {/* Feature Matrix Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className={`
                    bg-dark-card p-8 h-full
                    glow-border-${feature.glowColor}
                    hover:glow-intensify-${feature.glowColor}
                    transition-all duration-300 cursor-pointer
                    group relative
                  `}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col items-start space-y-6">
                    {/* Icon */}
                    <div className={`
                      p-4 rounded-xl bg-gradient-to-br 
                      ${feature.glowColor === 'cyan' 
                        ? 'from-neon-cyan/20 to-neon-cyan/10 border border-neon-cyan/30' 
                        : 'from-neon-lime/20 to-neon-lime/10 border border-neon-lime/30'
                      }
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <ApperIcon
                        name={feature.icon}
                        size={32}
                        className={`
                          ${feature.glowColor === 'cyan' 
                            ? 'text-neon-cyan' 
                            : 'text-neon-lime'
                          }
                          drop-shadow-lg
                        `}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-opacity-90 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-lg leading-relaxed group-hover:text-text-primary transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Glowing Tooltip */}
                  {feature.tooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full
                        bg-dark-card border-2 ${feature.glowColor === 'cyan' ? 'border-neon-cyan/50' : 'border-neon-lime/50'}
                        rounded-lg p-4 w-80 z-10 pointer-events-none
                        ${feature.glowColor === 'cyan' ? 'glow-border-cyan' : 'glow-border-lime'}
                        opacity-0 group-hover:opacity-100
                      `}
                    >
                      <div className="text-sm text-text-primary leading-relaxed">
                        {feature.tooltip}
                      </div>
                      <div className={`
                        absolute top-full left-1/2 transform -translate-x-1/2
                        w-3 h-3 ${feature.glowColor === 'cyan' ? 'border-neon-cyan/50' : 'border-neon-lime/50'}
                        border-r-2 border-b-2 bg-dark-card rotate-45 -mt-2
                      `} />
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-6 bg-dark-bg/50 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Trust Signal 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-3 rounded-full bg-neon-lime/10 border border-neon-lime/30 group-hover:border-neon-lime/50 transition-colors duration-300">
                  <ApperIcon name="CheckCircle" size={24} className="text-neon-lime" />
                </div>
                <span className="text-lg font-semibold text-white group-hover:text-neon-lime transition-colors duration-300">
                  14-day free trial
                </span>
              </motion.div>

              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-neon-cyan/50 to-neon-lime/50"></div>

              {/* Trust Signal 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 group-hover:border-neon-cyan/50 transition-colors duration-300">
                  <ApperIcon name="CreditCard" size={24} className="text-neon-cyan" />
                </div>
                <span className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                  No credit card required
                </span>
              </motion.div>

              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-neon-lime/50 to-neon-cyan/50"></div>

              {/* Trust Signal 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-3 rounded-full bg-neon-lime/10 border border-neon-lime/30 group-hover:border-neon-lime/50 transition-colors duration-300">
                  <ApperIcon name="X" size={24} className="text-neon-lime" />
                </div>
                <span className="text-lg font-semibold text-white group-hover:text-neon-lime transition-colors duration-300">
                  Cancel anytime
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesShowcaseSection;