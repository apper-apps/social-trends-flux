import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import TrendChart from "@/components/molecules/TrendChart";
import ApperIcon from "@/components/ApperIcon";

const IntelligenceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 animate-pulse">
              Monitor 6 major platforms in real-time
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              <span className="gradient-text-cyan">AI Discovery Engine</span> That Never Sleeps
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Get a real-time feed of emerging trends, relevant conversations, and content opportunities tailored specifically to your industry and audience. Our AI continuously monitors TikTok, YouTube, Instagram, X, LinkedIn, and Reddit to identify trending topics, analyze audience sentiment, and track competitor strategies.
            </p>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Never miss a trending topic or viral moment again.
            </p>
            
            <motion.div 
              className="flex items-center space-x-4 bg-dark-bg rounded-lg p-4 glow-border-lime"
              animate={{ boxShadow: [
                "0 0 20px rgba(57, 255, 20, 0.2)",
                "0 0 30px rgba(57, 255, 20, 0.4)",
                "0 0 20px rgba(57, 255, 20, 0.2)"
              ]}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ApperIcon name="Activity" className="w-8 h-8 text-neon-lime" />
              <div>
                <div className="text-2xl font-bold gradient-text-lime">+25M</div>
                <div className="text-text-muted">conversations analyzed daily</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <TrendChart />
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card variant="lime" className="text-center">
                <ApperIcon name="TrendingUp" className="w-8 h-8 text-neon-lime mb-2 mx-auto" />
                <div className="text-2xl font-bold text-text-primary">847</div>
                <div className="text-text-muted text-sm">Active Trends</div>
              </Card>
              
              <Card className="text-center">
                <ApperIcon name="Users" className="w-8 h-8 text-neon-cyan mb-2 mx-auto" />
                <div className="text-2xl font-bold text-text-primary">1.2M</div>
                <div className="text-text-muted text-sm">Audience Insights</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;