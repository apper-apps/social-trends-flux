import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
  
  const variants = {
    default: "bg-neon-cyan text-dark-bg",
    lime: "bg-neon-lime text-dark-bg",
    secondary: "bg-dark-card text-text-secondary border border-text-secondary"
  };
  
  return (
    <span
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;