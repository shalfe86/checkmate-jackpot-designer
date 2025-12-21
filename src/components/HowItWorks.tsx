import { UserPlus, Swords, Trophy, Banknote } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds and verify your identity for secure gameplay.",
    step: "01",
  },
  {
    icon: Swords,
    title: "Choose Your Game",
    description: "Select your tier and find an opponent matched to your skill level.",
    step: "02",
  },
  {
    icon: Trophy,
    title: "Play & Win",
    description: "Compete in real-time chess matches. Best strategy wins the prize.",
    step: "03",
  },
  {
    icon: Banknote,
    title: "Cash Out",
    description: "Withdraw your winnings instantly to your bank or crypto wallet.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start winning in four simple steps. Our platform ensures fair play and instant payouts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="bg-gradient-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-card">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
