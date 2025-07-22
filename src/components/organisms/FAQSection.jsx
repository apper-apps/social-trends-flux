import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      Id: 1,
      question: "How is Social Trends different from other content tools?",
      answer: "Social Trends is the only platform that combines real-time social listening with AI content generation and strategic distribution. Instead of using multiple tools that don't talk to each other, you get everything in one intelligent ecosystem."
    },
    {
      Id: 2,
      question: "Will the AI-generated content sound like my brand?",
      answer: "Yes. Our Brand Voice AI analyzes your existing content to learn your unique voice, tone, and style. Every piece of generated content maintains your brand's authenticity and consistency."
    },
    {
      Id: 3,
      question: "How quickly can I see results?",
      answer: "Most users see improved engagement within the first week. Our AI identifies trending topics and audience preferences immediately, so your content starts performing better from day one."
    },
    {
      Id: 4,
      question: "Do I need any technical skills to use Social Trends?",
      answer: "Not at all. Social Trends is designed for marketers, creators, and business owners—not developers. If you can use social media, you can use Social Trends."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-glow">
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about Social Trends and how it transforms your content marketing
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                <Card
                  className={`
                    bg-dark-card border border-text-muted/20
                    hover:border-neon-cyan/50 transition-all duration-300
                    cursor-pointer overflow-hidden
                    ${openIndex === index ? 'glow-border-cyan' : ''}
                  `}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white flex-1 text-left">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          p-2 rounded-full transition-colors duration-300
                          ${openIndex === index 
                            ? 'bg-neon-cyan/20 text-neon-cyan' 
                            : 'bg-text-muted/10 text-text-muted hover:text-neon-cyan'
                          }
                        `}
                      >
                        <ApperIcon name="ChevronDown" size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-neon-cyan/20 mt-6">
                            <p className="text-text-secondary leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Book a Demo CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-80 flex-shrink-0"
          >
            <Card className="bg-dark-card glow-border-lime p-8 text-center">
              <div className="space-y-6">
                <div className="p-4 rounded-full bg-neon-lime/10 border border-neon-lime/30 w-fit mx-auto">
                  <ApperIcon name="Calendar" size={32} className="text-neon-lime" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    Ready to See Social Trends in Action?
                  </h3>
                  <p className="text-text-secondary">
                    Get a personalized demo and see how Social Trends can transform your content marketing strategy.
                  </p>
                </div>

                <Button variant="demo" size="lg" className="w-full">
                  <ApperIcon name="Video" size={20} />
                  Book a Demo
                </Button>

                <div className="text-sm text-text-muted">
                  <ApperIcon name="Clock" size={16} className="inline mr-2" />
                  15-minute demo • No sales pressure
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;