import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "Nothing here yet", 
  description = "Check back soon for updates!",
  actionLabel = "Get Started",
  onAction 
}) => {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-dark-card glow-border-cyan flex items-center justify-center"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ApperIcon name="Search" className="w-10 h-10 text-neon-cyan" />
        </motion.div>
        
        <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
          {title}
        </h3>
        
        <p className="text-text-muted mb-8 leading-relaxed">
          {description}
        </p>
        
        {onAction && (
          <button
            onClick={onAction}
            className="px-8 py-4 bg-gradient-to-r from-neon-lime to-neon-cyan 
                     text-dark-bg font-bold rounded-lg transition-all duration-200
                     hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105"
          >
            {actionLabel}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Empty;