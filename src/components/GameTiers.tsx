import { Check, Crown, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const tiers = [
  {
    name: "Street Hustle",
    tier: "FREE",
    price: "$0",
    description: "Learn the ropes against our easiest AI",
    icon: Zap,
    color: "emerald",
    features: [
      "Unlimited free games",
      "Beginner-friendly AI opponent",
      "40 sec start • 50 sec max",
      "+2 sec per move",
      "No risk, all fun",
    ],
    cta: "Play Free",
    featured: false,
  },
  {
    name: "Club Challenger",
    tier: "CHALLENGER",
    price: "$1",
    priceNote: "per game",
    description: "Medium difficulty AI with real prize pools",
    icon: Sparkles,
    color: "primary",
    features: [
      "$0.75 to pot • $0.25 house fee",
      "Pot: $5 start → $1,000 cap",
      "First to win takes the pot!",
      "30 sec start • 35 sec max",
      "+1 sec per move (if moved within 4s)",
      "Medium-strength AI opponent",
    ],
    cta: "Challenge Now",
    featured: true,
  },
  {
    name: "Grandmaster's Vault",
    tier: "GRANDMASTER",
    price: "$2",
    priceNote: "per game",
    description: "Ultimate challenge with massive jackpots",
    icon: Crown,
    color: "ruby",
    features: [
      "$1 to pot • $1 house fee",
      "Vault: $5 start → $100,000+ cap",
      "First to win takes the vault!",
      "25 sec start • 25 sec max",
      "+1 sec per move (if moved within 4s)",
      "Elite AI (wins 99% of games)",
    ],
    cta: "Enter the Vault",
    featured: false,
  },
];

interface TierCardProps {
  tier: typeof tiers[0];
  index: number;
}

const TierCard = ({ tier, index }: TierCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: isHovered ? rotateX : 0, 
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl p-8 transition-all duration-500 perspective-1000",
        tier.featured
          ? "glass-card border-2 border-primary/50 shadow-gold-intense scale-[1.02] z-10"
          : "glass-card hover:border-primary/30"
      )}
    >
      {/* Featured badge */}
      {tier.featured && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-gold text-primary-foreground text-sm font-bold px-5 py-1.5 rounded-full shadow-gold">
            Most Popular
          </span>
        </motion.div>
      )}

      {/* Glow effect for featured */}
      {tier.featured && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-radial opacity-30 pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-6" style={{ transform: "translateZ(20px)" }}>
        <motion.div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center",
            tier.featured ? "bg-primary/20 shadow-gold" : "bg-secondary/50"
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <tier.icon
            className={cn(
              "w-7 h-7",
              tier.featured ? "text-primary glow-gold" : "text-muted-foreground"
            )}
          />
        </motion.div>
        <div>
          <h3 className="font-display text-xl font-bold">{tier.name}</h3>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            {tier.tier}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6" style={{ transform: "translateZ(30px)" }}>
        <span className={cn(
          "font-display text-5xl font-bold",
          tier.featured ? "text-shimmer" : "text-gradient-gold"
        )}>
          {tier.price}
        </span>
        {tier.priceNote && (
          <span className="text-muted-foreground text-sm ml-2">
            {tier.priceNote}
          </span>
        )}
      </div>

      <p className="text-muted-foreground text-sm mb-8" style={{ transform: "translateZ(15px)" }}>
        {tier.description}
      </p>

      {/* Features */}
      <ul className="space-y-4 mb-8" style={{ transform: "translateZ(10px)" }}>
        {tier.features.map((feature, i) => (
          <motion.li 
            key={feature} 
            className="flex items-start gap-3 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.05 }}
          >
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
              tier.featured ? "bg-primary/20" : "bg-emerald/20"
            )}>
              <Check
                className={cn(
                  "w-3 h-3",
                  tier.featured ? "text-primary" : "text-emerald"
                )}
              />
            </div>
            <span className="text-foreground/80">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      {tier.tier === "FREE" ? (
        <Link to="/play/free" className="w-full block" style={{ transform: "translateZ(25px)" }}>
          <Button
            variant={tier.featured ? "gold" : "outline"}
            className={cn(
              "w-full group",
              tier.featured && "shadow-gold"
            )}
            size="lg"
          >
            {tier.cta}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      ) : (
        <Button
          variant={tier.featured ? "gold" : "outline"}
          className={cn(
            "w-full group",
            tier.featured && "shadow-gold"
          )}
          size="lg"
          style={{ transform: "translateZ(25px)" }}
        >
          {tier.cta}
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      )}
    </motion.div>
  );
};

const GameTiers = () => {
  return (
    <section id="tiers" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sapphire/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald/5 rounded-full blur-3xl" />

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
            Choose Your Level
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pick Your
            <br />
            <span className="text-gradient-gold">Arena</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From free practice to world-class tournaments. Find the perfect level for your skills.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto perspective-2000">
          {tiers.map((tier, index) => (
            <TierCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTiers;
