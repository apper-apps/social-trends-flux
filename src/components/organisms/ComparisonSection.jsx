import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import comparisonService from "@/services/api/comparisonService";

const ComparisonSection = () => {
  const [comparisons, setComparisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadComparisons = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await comparisonService.getAll();
        setComparisons(data);
      } catch (err) {
        setError("Failed to load comparison data");
        console.error("Error loading comparisons:", err);
      } finally {
        setLoading(false);
      }
    };

    loadComparisons();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
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
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Why <span className="gradient-text-cyan">Social Trends</span> Beats Every <span className="gradient-text-lime">Alternative</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card variant={comparison.accentColor} className="h-full">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${
                  comparison.accentColor === "red" ? "bg-red-500/20" :
                  comparison.accentColor === "orange" ? "bg-orange-500/20" :
                  "bg-yellow-500/20"
                }`}>
                  <ApperIcon 
                    name={comparison.accentColor === "red" ? "XCircle" : 
                         comparison.accentColor === "orange" ? "AlertCircle" : "Clock"}
                    className={`w-8 h-8 ${
                      comparison.accentColor === "red" ? "text-red-400" :
                      comparison.accentColor === "orange" ? "text-orange-400" :
                      "text-yellow-400"
                    }`} 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
                  {comparison.category}
                </h3>
                
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold mb-2 gradient-text-cyan">
                    {comparison.socialTrendsAdvantage}
                  </p>
                  <p className="text-text-muted">
                    {comparison.limitation}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Center Highlight */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Card variant="lime" className="inline-block px-12 py-8">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(57, 255, 20, 0.4)",
                  "0 0 60px rgba(57, 255, 20, 0.8)",
                  "0 0 30px rgba(57, 255, 20, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-4"
            >
              <ApperIcon name="CheckCircle" className="w-8 h-8 text-neon-lime" />
              <p className="text-xl font-bold text-text-primary">
                Social Trends is the only platform that combines all three: 
                <span className="gradient-text-lime"> Listen, Create, and Distribute.</span>
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;