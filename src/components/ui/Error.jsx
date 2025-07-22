import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-card glow-border-red flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-400" />
        </motion.div>
        
        <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-text-muted mb-8 leading-relaxed">
          {message}
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-8 py-3 bg-neon-cyan text-dark-bg font-semibold rounded-lg 
                     hover:bg-opacity-90 transition-all duration-200 
                     hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
          >
            Try Again
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Error;