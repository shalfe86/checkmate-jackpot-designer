import { useState, useEffect } from "react";
import { Crown, Play, Shield, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [jackpot, setJackpot] = useState(1247892);

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 50) + 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatJackpot = (num: number) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  };

  const stats = [
    { icon: Trophy, label: "Winners", value: "12,847" },
    { icon: Zap, label: "Games Today", value: "3,421" },
    { icon: Shield, label: "Fair Play", value: "100%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
      
      {/* Floating Chess Pieces Decoration */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float" style={{ animationDelay: "0s" }}>
        <Crown className="w-16 h-16" />
      </div>
      <div className="absolute bottom-40 right-10 text-primary/10 animate-float" style={{ animationDelay: "2s" }}>
        <Crown className="w-24 h-24" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Live Games Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Play Chess.
            <br />
            <span className="text-gradient-gold">Win Big.</span>
          </h1>

          {/* Jackpot Counter */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground text-lg mb-2">Current Jackpot</p>
            <div className="inline-block bg-gradient-card border-2 border-primary/50 rounded-2xl px-8 py-4 shadow-gold animate-jackpot-pulse">
              <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold">
                {formatJackpot(jackpot)}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Compete against players worldwide in skill-based chess tournaments. 
            Win real money based on your chess mastery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Start Playing
            </Button>
            <Button variant="outline" size="xl">
              Learn How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
