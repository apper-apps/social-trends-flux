import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "bg-dark-card rounded-xl p-6 transition-all duration-300";
  
  const variants = {
    default: "glow-border-cyan hover:glow-intensify-cyan",
    lime: "glow-border-lime hover:glow-intensify-lime",
    red: "glow-border-red",
    orange: "glow-border-orange",
    yellow: "glow-border-yellow"
  };
  
  return (
    <motion.div
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;