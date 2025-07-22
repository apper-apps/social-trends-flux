import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ testimonial }) => {
  const { author, role, company, content, accentColor } = testimonial;
  
  return (
    <Card variant={accentColor} className="min-h-[200px] flex flex-col justify-between">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <ApperIcon name="Quote" className="w-6 h-6 text-neon-cyan mb-2" />
        </div>
        <p className="text-text-secondary leading-relaxed">
          &ldquo;{content}&rdquo;
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${
          accentColor === "cyan" 
            ? "from-neon-cyan to-blue-400" 
            : "from-neon-lime to-green-400"
        } flex items-center justify-center`}>
          <ApperIcon name="User" className="w-6 h-6 text-dark-bg" />
        </div>
        <div>
          <div className="font-semibold text-text-primary">{author}</div>
          <div className="text-sm text-text-muted">
            {role}{company !== "Independent" && ` at ${company}`}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;