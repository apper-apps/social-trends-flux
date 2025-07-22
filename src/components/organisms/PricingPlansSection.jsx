import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const PricingPlansSection = () => {
const plans = [
    {
      id: 1,
      name: "STARTER PLAN",
      price: "FREE",
      period: "",
      popular: false,
      glowColor: "white",
      features: [
        "5 trend reports per month",
        "Basic content generation",
        "1 brand voice profile",
        "Manual publishing",
        "Community support"
      ],
      cta: {
        text: "Start Free Trial",
        variant: "secondary"
      }
    },
    {
      id: 2,
      name: "SOLOPRENEUR",
      price: "$29.99",
      period: "/MONTH",
      popular: false,
      glowColor: "orange",
      features: [
        "10 trend monitoring per month",
        "Advanced content generation",
        "2 brand voice profiles",
        "Auto-publishing to 3 channels",
        "Performance analytics",
        "Email support"
      ],
      cta: {
        text: "Start Free Trial",
        variant: "secondary"
      }
    },
    {
id: 3,
      name: "CREATOR PLAN",
      price: "$49",
      period: "/MONTH",
      popular: true,
      glowColor: "lime",
      features: [
        "Unlimited trend monitoring",
        "Advanced content generation",
        "3 brand voice profiles",
        "Auto-publishing to 5 channels",
        "Performance analytics",
        "Email support"
      ],
      cta: {
        text: "Start Free Trial",
        variant: "primary"
      }
    },
    {
      id: 4,
      name: "BUSINESS PLAN",
      price: "$149",
      period: "/MONTH",
      popular: false,
      glowColor: "cyan",
      features: [
        "Everything in Creator",
        "Team collaboration features",
        "Unlimited brand profiles",
        "Publishing to all channels",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations"
      ],
      cta: {
        text: "Book a Demo",
        variant: "secondary"
      }
    }
  ];

  return (
    <section className="py-24 px-6 bg-dark-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-glow">
            Pricing &{" "}
            <span className="gradient-text-lime">Plans</span>
          </h2>
</motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-neon-lime text-dark-bg px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <Card
                className={`
                  bg-dark-card p-8 h-full relative
${plan.glowColor === 'lime' 
                    ? 'glow-border-lime hover:glow-intensify-lime' 
                    : plan.glowColor === 'cyan'
                    ? 'glow-border-cyan hover:glow-intensify-cyan'
                    : plan.glowColor === 'orange'
                    ? 'glow-border-orange hover:glow-intensify-orange'
                    : 'border border-white/20 hover:border-white/40'
                  }
                  transition-all duration-300 cursor-pointer
                  group
                  ${plan.popular ? 'scale-105' : ''}
                `}
                whileHover={{ 
                  scale: plan.popular ? 1.08 : 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-bold text-text-muted mb-2 tracking-wider">
                      {plan.name}
                    </h3>
                    <div className="flex items-end justify-center mb-4">
                      <span className="text-4xl md:text-5xl font-display font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-text-muted ml-2 text-lg">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className={`
                            mt-1 flex-shrink-0
${plan.glowColor === 'lime' 
                              ? 'text-neon-lime' 
                              : plan.glowColor === 'cyan'
                              ? 'text-neon-cyan'
                              : plan.glowColor === 'orange'
                              ? 'text-orange-400'
                              : 'text-text-muted'
                            }
                          `}>
                            <ApperIcon name="Check" size={16} />
                          </div>
                          <span className={`
                            text-sm leading-relaxed
                            ${plan.popular ? 'text-white' : 'text-text-secondary'}
                          `}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button
                      variant={plan.cta.variant}
                      size="lg"
                      className={`
                        w-full
                        ${plan.popular 
                          ? 'bg-neon-lime text-dark-bg hover:bg-opacity-90 animate-pulse-glow' 
                          : ''
                        }
${plan.glowColor === 'cyan' && !plan.popular
                          ? 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg glow-border-cyan hover:glow-intensify-cyan'
                          : plan.glowColor === 'orange' && !plan.popular
                          ? 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-dark-bg glow-border-orange hover:glow-intensify-orange'
                          : ''
                        }
                      `}
                    >
                      {plan.cta.text}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-muted text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlansSection;