import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-dark-card border-t-neon-cyan rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-text-secondary font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Social Trends...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;