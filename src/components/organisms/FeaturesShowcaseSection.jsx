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

        {/* Feature Cards Grid */}
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
            >
              <Card
                className={`
                  bg-dark-card p-8 h-full
                  glow-border-${feature.glowColor}
                  hover:glow-intensify-${feature.glowColor}
                  transition-all duration-300 cursor-pointer
                  group
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcaseSection;