import { Crown, Github, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { name: "Play Now", href: "/play/free", isRoute: true },
    { name: "Rules", href: "/rules", isRoute: true },
    { name: "Terms of Service", href: "/terms", isRoute: true },
    { name: "Privacy Policy", href: "#privacy", isRoute: false },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Crown className="w-8 h-8 text-primary glow-gold" />
                </motion.div>
                <span className="font-display text-2xl font-bold text-gradient-gold">
                  Checkmate Jackpot
                </span>
              </Link>
              <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
                The world's premier skill-based chess gaming platform. Compete against players worldwide and win real money based on your chess mastery.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {links.slice(0, 2).map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </nav>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display font-bold text-foreground mb-6">Legal</h4>
              <nav className="flex flex-col gap-3">
                {links.slice(2).map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </nav>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Checkmate Jackpot. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Play responsibly. 18+ only.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
