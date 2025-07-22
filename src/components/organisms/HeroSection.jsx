import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import HeroParticles from "@/components/molecules/HeroParticles";
import SocialIcon from "@/components/molecules/SocialIcon";

const HeroSection = () => {
  const socialIcons = [
    { icon: "Twitter", position: { top: "20%", left: "10%" } },
    { icon: "Instagram", position: { top: "15%", right: "15%" } },
    { icon: "TikTok", position: { top: "60%", left: "5%" } },
    { icon: "LinkedIn", position: { top: "40%", right: "8%" } },
    { icon: "YouTube", position: { top: "70%", right: "20%" } },
    { icon: "Reddit", position: { top: "80%", left: "15%" } }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg overflow-hidden">
      <HeroParticles />
      
      {/* Floating Social Icons */}
      {socialIcons.map((social, index) => (
        <SocialIcon
          key={social.icon}
          icon={social.icon}
          position={social.position}
          delay={index * 0.2}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-display font-bold text-text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Turn Social <span className="gradient-text-cyan animate-glow">Conversations</span> Into Content That <span className="gradient-text-lime">Converts</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-text-secondary mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The AI-powered content intelligence platform that transforms real-time social trends into strategic, brand-aligned content campaigns that drive growth, engagement, and revenue.
            </motion.p>
            
            <motion.p 
              className="text-lg text-text-muted mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Stop guessing what your audience wants. Social Trends bridges the gap between social listening and content creation, automatically generating data-driven content strategies that resonate with your audience and deliver measurable results.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="text-lg px-8 py-4">
                Start Your Free Strategy Session
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Watch 2-Minute Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-dark-card rounded-2xl p-6 glow-border-cyan">
              <div className="bg-dark-bg rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-text-primary font-semibold">Social Trends Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neon-lime rounded-full animate-pulse" />
                    <span className="text-text-muted text-sm">Live</span>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-dark-bg to-dark-card rounded-lg flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-lime/10"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="text-center z-10">
                    <div className="text-3xl font-bold gradient-text-cyan mb-2">847K</div>
                    <div className="text-text-muted text-sm">Trending Conversations</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-bg rounded-lg p-3">
                  <div className="text-text-muted text-sm mb-1">Engagement Rate</div>
                  <div className="text-xl font-bold text-neon-lime">+156%</div>
                </div>
                <div className="bg-dark-bg rounded-lg p-3">
                  <div className="text-text-muted text-sm mb-1">Content Score</div>
                  <div className="text-xl font-bold text-neon-cyan">9.4/10</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;