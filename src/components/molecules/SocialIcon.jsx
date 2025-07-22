import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const SocialIcon = ({ icon, delay = 0, position }) => {
  const iconMap = {
    Twitter: "Twitter",
    Instagram: "Instagram",
    TikTok: "Smartphone",
    LinkedIn: "Linkedin",
    YouTube: "Youtube",
    Reddit: "MessageCircle"
  };

  return (
    <motion.div
      className="absolute w-12 h-12 bg-dark-card rounded-full flex items-center justify-center glow-border-cyan"
      style={position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4], 
        scale: [0.8, 1.1, 0.8],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ApperIcon 
        name={iconMap[icon]} 
        className="w-6 h-6 text-neon-cyan"
      />
    </motion.div>
  );
};

export default SocialIcon;