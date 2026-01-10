import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Play Now", href: "/play/free", isRoute: true },
    { name: "Rules", href: "#rules", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
    { name: "Terms of Service", href: "#terms", isRoute: false },
    { name: "Privacy Policy", href: "#privacy", isRoute: false },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-gradient-gold">
              Checkmate Jackpot
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) =>
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
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Checkmate Jackpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
