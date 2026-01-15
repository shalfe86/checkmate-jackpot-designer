import { UserPlus, Swords, Trophy, Banknote } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds and verify your identity for secure gameplay.",
    step: "01",
    gradient: "from-sapphire/20 to-sapphire/5",
  },
  {
    icon: Swords,
    title: "Choose Your Game",
    description: "Select your tier and find an opponent matched to your skill level.",
    step: "02",
    gradient: "from-emerald/20 to-emerald/5",
  },
  {
    icon: Trophy,
    title: "Play & Win",
    description: "Compete in real-time chess matches. Best strategy wins the prize.",
    step: "03",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Banknote,
    title: "Cash Out",
    description: "Withdraw your winnings instantly to your bank or crypto wallet.",
    step: "04",
    gradient: "from-ruby/20 to-ruby/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sapphire/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            How It Works
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Winning in
            <br />
            <span className="text-gradient-gold">Four Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Our platform ensures fair play and instant payouts. Join thousands of players already winning.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[calc(100%-20%)] h-px">
                  <div className="h-full bg-gradient-to-r from-border via-primary/30 to-border" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              )}

              {/* Card */}
              <motion.div 
                className="glass-card rounded-2xl p-8 h-full relative overflow-hidden hover-lift"
                whileHover={{ 
                  borderColor: "hsl(var(--primary) / 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Step Number */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center font-display font-bold text-primary-foreground text-lg shadow-gold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="relative w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
