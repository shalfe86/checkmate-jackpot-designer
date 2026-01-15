import { useState, useEffect, useRef } from "react";
import { Crown, Play, Shield, Trophy, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [jackpot, setJackpot] = useState(1247892);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);
  const parallax1 = useTransform(x, [-0.5, 0.5], [-30, 30]);
  const parallax2 = useTransform(y, [-0.5, 0.5], [-20, 20]);
  const parallax3 = useTransform(x, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 100) + 25);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial glow */}
      <motion.div 
        style={{ x: parallax1, y: parallax2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
      >
        <div className="w-full h-full bg-gradient-radial opacity-60" />
      </motion.div>

      {/* Secondary glow */}
      <motion.div 
        style={{ x: parallax3, y: parallax1 }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-sapphire/5 blur-3xl"
      />

      {/* Floating decorative elements */}
      <motion.div 
        style={{ x: parallax1, y: parallax2 }}
        className="absolute top-32 left-[10%] text-primary/30"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown className="w-20 h-20 glow-gold" />
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ x: parallax3, y: parallax1 }}
        className="absolute bottom-40 right-[10%] text-primary/20"
      >
        <motion.div
          animate={{ y: [10, -15, 10], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ x: parallax2, y: parallax3 }}
        className="absolute top-1/2 left-[5%] text-emerald/20"
      >
        <motion.div
          animate={{ y: [-8, 12, -8], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Trophy className="w-12 h-12" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center perspective-2000"
          style={{ rotateX, rotateY }}
        >
          {/* Live Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">Live Games Available</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]"
          >
            Play Chess.
            <br />
            <span className="text-shimmer">Win Big.</span>
          </motion.h1>

          {/* Jackpot Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-10"
          >
            <p className="text-muted-foreground text-lg mb-4 font-medium">Current Jackpot</p>
            <motion.div 
              className="inline-block glass-card rounded-2xl px-10 py-6 shadow-gold animate-pulse-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span 
                key={jackpot}
                initial={{ scale: 1.1, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gold"
              >
                {formatJackpot(jackpot)}
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Compete against players worldwide in skill-based chess tournaments. 
            Win real money based on your chess mastery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/play/free">
                <Play className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                Start Playing
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5">
              Learn How It Works
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center glass-card rounded-xl p-5 hover-lift"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
