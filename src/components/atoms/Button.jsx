import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2";
  
const variants = {
    primary: "bg-neon-lime text-dark-bg hover:bg-opacity-90 animate-pulse-glow",
    secondary: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg glow-border-cyan hover:glow-intensify-cyan",
    demo: "bg-neon-lime text-dark-bg hover:bg-opacity-90 animate-pulse-glow glow-border-lime",
    outline: "border border-text-secondary text-text-secondary hover:border-neon-cyan hover:text-neon-cyan"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;