import { Check, Crown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free Play",
    tier: "FREE",
    price: "$0",
    description: "Practice and improve your skills",
    icon: Zap,
    features: [
      "Unlimited practice games",
      "Play against AI opponents",
      "Basic game analytics",
      "Community tournaments",
    ],
    cta: "Play Free",
    featured: false,
  },
  {
    name: "Starter",
    tier: "STARTER",
    price: "$5",
    priceNote: "per entry",
    description: "Compete for real prizes",
    icon: Sparkles,
    features: [
      "Entry to cash tournaments",
      "Win up to $500 per game",
      "Advanced game analytics",
      "Priority matchmaking",
      "24/7 support",
    ],
    cta: "Enter Tournament",
    featured: true,
  },
  {
    name: "World",
    tier: "WORLD",
    price: "$100",
    priceNote: "per entry",
    description: "High-stakes championship play",
    icon: Crown,
    features: [
      "Access to jackpot games",
      "Win up to $1M+ prizes",
      "VIP matchmaking",
      "Personal game coach",
      "Exclusive events access",
      "Monthly bonuses",
    ],
    cta: "Join Elite",
    featured: false,
  },
];

const GameTiers = () => {
  return (
    <section id="tiers" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient-gold">Arena</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From free practice to world-class tournaments, find the perfect level to match your skills and ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-105",
                tier.featured
                  ? "bg-gradient-card border-2 border-primary shadow-gold"
                  : "bg-gradient-card border border-border hover:border-primary/50"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-gold text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    tier.featured ? "bg-primary/20" : "bg-secondary"
                  )}
                >
                  <tier.icon
                    className={cn(
                      "w-6 h-6",
                      tier.featured ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {tier.tier}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-display text-4xl font-bold text-gradient-gold">
                  {tier.price}
                </span>
                {tier.priceNote && (
                  <span className="text-muted-foreground text-sm ml-2">
                    {tier.priceNote}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      className={cn(
                        "w-4 h-4 flex-shrink-0",
                        tier.featured ? "text-primary" : "text-emerald"
                      )}
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "gold" : "outline"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTiers;
