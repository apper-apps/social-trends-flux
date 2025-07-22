import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import testimonialService from "@/services/api/testimonialService";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await testimonialService.getAll();
        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials");
        console.error("Error loading testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (loading) {
    return (
      <section className="py-20 bg-dark-bg">
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
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted">{error}</p>
        </div>
      </section>
    );
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="lime" className="mb-6">
            Trusted by 10,000+ Content Creators and Marketing Teams
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-8">
            What Our <span className="gradient-text-cyan">Customers</span> Are Saying
          </h2>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="flex justify-center items-center space-x-12 mb-16 opacity-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {["TechFlow", "GrowthLabs", "InnovateCorp", "ScaleUp", "FutureForward"].map((logo, index) => (
            <motion.div
              key={logo}
              className="text-text-muted font-bold text-xl hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, color: "#00F5FF" }}
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.Id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-dark-card rounded-full glow-border-cyan hover:glow-intensify-cyan flex items-center justify-center transition-all duration-300"
          >
            <ApperIcon name="ChevronLeft" className="w-6 h-6 text-neon-cyan" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-dark-card rounded-full glow-border-cyan hover:glow-intensify-cyan flex items-center justify-center transition-all duration-300"
          >
            <ApperIcon name="ChevronRight" className="w-6 h-6 text-neon-cyan" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                    : "bg-dark-card hover:bg-neon-cyan/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;