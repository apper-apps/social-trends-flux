import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const stats = [
    { value: "25M+", label: "Conversations Analyzed Daily" },
    { value: "3x", label: "Better Engagement Rates" },
    { value: "90%", label: "Time Saved on Content Creation" }
  ];

  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for individuals getting started",
      price: "FREE",
      period: "",
      yearlyPrice: "FREE",
      popular: false,
      features: [
        "5 trend reports per month",
        "Basic AI content generation",
        "1 brand voice profile",
        "Manual publishing",
        "Community support",
        "Basic analytics dashboard",
        "Limited to 5 posts per month",
        "No automation features",
        "Basic analytics only"
      ],
      cta: {
        text: "Get Started Free",
        subtitle: "No credit card required"
      }
    },
    {
      id: 2,
      name: "Solopreneur",
      description: "Perfect for individual entrepreneurs",
      price: "$29.99",
      period: "/month",
      yearlyPrice: "$23.99",
      popular: false,
      badge: "Great Value",
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
        subtitle: "14-day free trial included"
      }
    },
    {
      id: 3,
      name: "Creator",
      description: "For serious content creators and small teams",
      price: "$49",
      period: "/month",
      yearlyPrice: "$39",
      popular: true,
      badge: "Most Popular",
      features: [
        "Unlimited trend monitoring",
        "Advanced AI content generation",
        "3 brand voice profiles",
        "Auto-publishing to 5 platforms",
        "Advanced performance analytics",
        "Email support",
        "Content calendar & scheduling",
        "Competitor analysis"
      ],
      cta: {
        text: "Start Free Trial",
        subtitle: "14-day free trial included"
      }
    },
    {
      id: 4,
      name: "Business",
      description: "For growing teams and agencies",
      price: "$149",
      period: "/month",
      yearlyPrice: "$119",
      popular: false,
      badge: "Best Value",
      features: [
        "Everything in Creator",
        "Unlimited brand voice profiles",
        "Team collaboration tools",
        "Publishing to all platforms",
        "Enterprise analytics & reporting",
        "Priority support & onboarding",
        "Custom integrations",
        "White-label options",
        "Advanced workflow automation"
      ],
      cta: {
        text: "Book a Demo",
        subtitle: "14-day free trial included"
      }
    }
  ];

  const features = [
    { name: "Trend Monitoring", starter: "5 reports/month", solopreneur: "10 reports/month", creator: "Unlimited", business: "Unlimited" },
    { name: "AI Content Generation", starter: "Basic AI", solopreneur: "Advanced AI", creator: "Advanced AI", business: "Multi-AI Models" },
    { name: "Brand Voice Profiles", starter: "1", solopreneur: "2", creator: "3", business: "Unlimited" },
    { name: "Content Calendar", starter: false, solopreneur: false, creator: true, business: true },
    { name: "Manual Publishing", starter: true, solopreneur: false, creator: false, business: false },
    { name: "Auto-Publishing", starter: false, solopreneur: "3 channels", creator: "5 platforms", business: "All platforms" },
    { name: "Bulk Scheduling", starter: false, solopreneur: false, creator: false, business: true },
    { name: "Cross-Platform Optimization", starter: false, solopreneur: false, creator: true, business: true },
    { name: "Basic Analytics", starter: true, solopreneur: false, creator: false, business: false },
    { name: "Performance Analytics", starter: false, solopreneur: true, creator: true, business: false },
    { name: "Advanced Analytics", starter: false, solopreneur: false, creator: true, business: true },
    { name: "Custom Reports", starter: false, solopreneur: false, creator: false, business: true },
    { name: "ROI Tracking", starter: false, solopreneur: false, creator: false, business: true },
    { name: "User Seats", starter: "1", solopreneur: "1", creator: "3", business: "Unlimited" },
    { name: "Role-Based Permissions", starter: false, solopreneur: false, creator: false, business: true },
    { name: "Approval Workflows", starter: false, solopreneur: false, creator: false, business: true },
    { name: "Team Analytics", starter: false, solopreneur: false, creator: false, business: true },
    { name: "Community Support", starter: true, solopreneur: false, creator: false, business: false },
    { name: "Email Support", starter: false, solopreneur: true, creator: true, business: false },
    { name: "Priority Support", starter: false, solopreneur: false, creator: false, business: true },
    { name: "Custom Integrations", starter: false, solopreneur: false, creator: false, business: true }
  ];

  const faqs = [
    {
      category: "Billing & Payments",
      questions: [
        { q: "How does the free trial work?", a: "Get full access to all features for 14 days. No credit card required to start, and you can cancel anytime during the trial period." },
        { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans." },
        { q: "Can I change my plan at any time?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly." },
        { q: "Do you offer refunds?", a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact our support team for a full refund." }
      ]
    },
    {
      category: "Pricing & Usage",
      questions: [
        { q: "What happens if I exceed my plan limits?", a: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits to continue using the service." },
        { q: "Can I use Social Trends for multiple brands?", a: "Yes, all plans support multiple brand voice profiles. The number of profiles varies by plan, with Business offering unlimited profiles." },
        { q: "Is there a setup fee or long-term contract?", a: "No setup fees and no long-term contracts required. All plans are month-to-month, and you can cancel anytime. Annual plans offer a discount but are still cancelable." },
        { q: "Do you offer custom enterprise solutions?", a: "Yes, we offer custom enterprise solutions with advanced features, dedicated support, and flexible pricing. Contact our sales team to discuss your needs." }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        { q: "How quickly can I get started?", a: "You can get started in under 5 minutes. Simply sign up, connect your social accounts, and start analyzing trends immediately." },
        { q: "What kind of support do you provide?", a: "We offer community support for free users, email support for paid plans, and priority support with dedicated account managers for Business plans." },
        { q: "Can I export my data if I cancel?", a: "Yes, you can export all your data, including reports, analytics, and content, at any time. Your data remains accessible for 30 days after cancellation." },
        { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data." }
      ]
    }
  ];

  const getCurrentPrice = (plan) => {
    if (billingCycle === 'yearly' && plan.yearlyPrice) {
      return plan.yearlyPrice;
    }
    return plan.price;
  };

  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-text-muted mb-4 text-lg">
              Trusted by 10,000+ Content Creators
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Simple Pricing for{" "}
              <span className="gradient-text-lime">Powerful Results</span>
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan to transform your content marketing. Start free and scale as you grow with our AI-powered content intelligence platform.
            </p>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <ApperIcon name="Shield" className="text-neon-lime mb-2" size={24} />
                <p className="text-sm text-text-secondary">14-day free trial on all plans</p>
              </div>
              <div className="flex flex-col items-center">
                <ApperIcon name="DollarSign" className="text-neon-lime mb-2" size={24} />
                <p className="text-sm text-text-secondary">No setup fees or hidden costs</p>
              </div>
              <div className="flex flex-col items-center">
                <ApperIcon name="X" className="text-neon-lime mb-2" size={24} />
                <p className="text-sm text-text-secondary">Cancel anytime, no contracts</p>
              </div>
              <div className="flex flex-col items-center">
                <ApperIcon name="Check" className="text-neon-lime mb-2" size={24} />
                <p className="text-sm text-text-secondary">All features included in trial</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold gradient-text-lime mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-16">
              <Button size="lg" className="bg-neon-lime text-dark-bg hover:bg-opacity-90 mb-2">
                Start Your Free Trial
              </Button>
              <p className="text-sm text-text-muted">No credit card required • Cancel anytime</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Choose Your Perfect Plan
            </h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-4 ${billingCycle === 'monthly' ? 'text-white' : 'text-text-muted'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  billingCycle === 'yearly' ? 'bg-neon-lime' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 ${billingCycle === 'yearly' ? 'text-white' : 'text-text-muted'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <Badge className="ml-2 bg-neon-lime text-dark-bg">Save 20%</Badge>
              )}
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className={`${plan.popular ? 'bg-neon-lime text-dark-bg' : 'bg-neon-cyan text-dark-bg'} px-4 py-1`}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <Card className={`
                  bg-dark-card p-8 h-full relative transition-all duration-300
                  ${plan.popular 
                    ? 'glow-border-lime hover:glow-intensify-lime scale-105' 
                    : 'border border-gray-700 hover:border-gray-600'
                  }
                `}>
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-text-muted mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-display font-bold text-white">
                          {getCurrentPrice(plan)}
                        </span>
                        {plan.period && (
                          <span className="text-text-muted ml-1">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <ApperIcon 
                              name="Check" 
                              size={16} 
                              className={plan.popular ? 'text-neon-lime' : 'text-neon-cyan'} 
                            />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        className={`w-full mb-2 ${
                          plan.popular 
                            ? 'bg-neon-lime text-dark-bg hover:bg-opacity-90' 
                            : 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg'
                        }`}
                      >
                        {plan.cta.text}
                      </Button>
                      <p className="text-xs text-text-muted">{plan.cta.subtitle}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 bg-dark-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
              Why Choose Social Trends?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <ApperIcon name="X" className="text-neon-lime mx-auto mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">No Lock-in Contracts</h4>
                <p className="text-text-muted text-sm">Cancel anytime, no questions asked</p>
              </div>
              <div className="text-center">
                <ApperIcon name="Zap" className="text-neon-lime mx-auto mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">Instant Setup</h4>
                <p className="text-text-muted text-sm">Get started in under 5 minutes</p>
              </div>
              <div className="text-center">
                <ApperIcon name="Clock" className="text-neon-lime mx-auto mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">24/7 Support</h4>
                <p className="text-text-muted text-sm">Expert help whenever you need it</p>
              </div>
              <div className="text-center">
                <ApperIcon name="TrendingUp" className="text-neon-lime mx-auto mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">Proven Results</h4>
                <p className="text-text-muted text-sm">3x better engagement rates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Compare All Features
            </h2>
            <p className="text-text-secondary">
              See exactly what's included in each plan and choose the perfect fit for your content marketing needs.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Starter<br />
                    <span className="text-sm font-normal text-text-muted">FREE</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Solopreneur<br />
                    <span className="text-sm font-normal text-text-muted">$29.99/month</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Creator<br />
                    <span className="text-sm font-normal text-text-muted">$49/month</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Business<br />
                    <span className="text-sm font-normal text-text-muted">$149/month</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-dark-card/30">
                    <td className="py-4 px-4 text-text-secondary">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <ApperIcon name="Check" className="text-neon-lime mx-auto" size={16} />
                        ) : (
                          <ApperIcon name="X" className="text-gray-600 mx-auto" size={16} />
                        )
                      ) : (
                        <span className="text-text-secondary text-sm">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.solopreneur === 'boolean' ? (
                        feature.solopreneur ? (
                          <ApperIcon name="Check" className="text-neon-lime mx-auto" size={16} />
                        ) : (
                          <ApperIcon name="X" className="text-gray-600 mx-auto" size={16} />
                        )
                      ) : (
                        <span className="text-text-secondary text-sm">{feature.solopreneur}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.creator === 'boolean' ? (
                        feature.creator ? (
                          <ApperIcon name="Check" className="text-neon-lime mx-auto" size={16} />
                        ) : (
                          <ApperIcon name="X" className="text-gray-600 mx-auto" size={16} />
                        )
                      ) : (
                        <span className="text-text-secondary text-sm">{feature.creator}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.business === 'boolean' ? (
                        feature.business ? (
                          <ApperIcon name="Check" className="text-neon-lime mx-auto" size={16} />
                        ) : (
                          <ApperIcon name="X" className="text-gray-600 mx-auto" size={16} />
                        )
                      ) : (
                        <span className="text-text-secondary text-sm">{feature.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTAs */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Ready to get started?</h3>
            <p className="text-text-secondary mb-8">Choose your plan and start your free trial today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-gray-600 text-text-secondary hover:bg-gray-600">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                Start Free Trial
              </Button>
              <Button className="bg-neon-lime text-dark-bg hover:bg-opacity-90">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-dark-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pricing Questions?
            </h2>
            <p className="text-text-secondary">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex}>
                      <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                      <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-dark-bg rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help you choose the perfect plan for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                Schedule a Call
              </Button>
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text-lime">Content Strategy</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
              Join thousands of creators and marketers who've eliminated content guesswork. 
              Start your free trial today and see results in your first week.
            </p>

            {/* Final Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-display font-bold gradient-text-cyan mb-2">10,000+</div>
                <p className="text-text-muted">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold gradient-text-cyan mb-2">25M+</div>
                <p className="text-text-muted">Conversations Analyzed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold gradient-text-cyan mb-2">3x</div>
                <p className="text-text-muted">Better Engagement</p>
              </div>
            </div>

            {/* Final CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-neon-lime text-dark-bg hover:bg-opacity-90">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-text-muted">
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="Calendar" size={16} />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="Check" size={16} />
                <span>All features included</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="DollarSign" size={16} />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="Zap" size={16} />
                <span>Start immediately</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="X" size={16} />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="FileText" size={16} />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="Clock" size={16} />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="Users" size={16} />
                <span>Expert help always available</span>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-dark-card to-dark-bg rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Choose Your Starting Point</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-white mb-2">Starter</h4>
                  <p className="text-2xl font-bold gradient-text-cyan mb-2">FREE</p>
                  <p className="text-text-muted text-sm mb-4">Perfect for trying out Social Trends</p>
                  <Button variant="outline" className="border-gray-600 text-text-secondary hover:bg-gray-600">
                    Get Started Free
                  </Button>
                </div>
                <div className="text-center relative">
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-neon-lime text-dark-bg text-xs">
                    Most Popular
                  </Badge>
                  <h4 className="font-semibold text-white mb-2">Creator</h4>
                  <p className="text-2xl font-bold gradient-text-lime mb-2">$49/month</p>
                  <p className="text-text-muted text-sm mb-4">For serious content creators</p>
                  <Button className="bg-neon-lime text-dark-bg hover:bg-opacity-90">
                    Start Free Trial
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-white mb-2">Business</h4>
                  <p className="text-2xl font-bold gradient-text-cyan mb-2">$149/month</p>
                  <p className="text-text-muted text-sm mb-4">For teams and agencies</p>
                  <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <p className="text-center text-text-muted mt-8">
                Transform your content marketing today. No credit card required.<br />
                Join 10,000+ creators who've already made the switch to data-driven content.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;