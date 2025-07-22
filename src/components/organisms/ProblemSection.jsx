import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <ApperIcon name="AlertTriangle" className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-8">
              The Content Marketing <span className="gradient-text-cyan">Disconnect</span> That's Costing You <span className="gradient-text-lime">Growth</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                You know content marketing drives results, but you're stuck in a cycle of guesswork. You create content hoping it will resonate, but without real-time audience insights, you're shooting in the dark. Meanwhile, your competitors are capturing attention with content that seems to hit every time.
              </p>
              
              <p>
                The problem isn't your creativity—it's the disconnect between understanding your audience and creating content they actually want. Traditional social listening tools give you data but no action plan. AI content generators create content but lack strategic direction. Social schedulers distribute content but provide no intelligence.
              </p>
              
              <motion.p 
                className="text-xl font-semibold gradient-text-lime"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                What if you could eliminate the guesswork entirely?
              </motion.p>
            </div>
            
            {/* Visual Infographic */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "Search", title: "Social Listening", desc: "Data without direction" },
                { icon: "Zap", title: "AI Content Tools", desc: "Content without context" },
                { icon: "Calendar", title: "Social Schedulers", desc: "Distribution without intelligence" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-bg rounded-lg p-6 border border-red-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ApperIcon name={item.icon} className="w-8 h-8 text-red-400 mb-4 mx-auto" />
                  <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;