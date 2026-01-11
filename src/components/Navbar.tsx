import { useState } from "react";
import { Link } from "react-router-dom";
import { Crown, Menu, X, User, Trophy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { useWallet } from "@/hooks/useWallet";
import WalletDisplay from "@/components/WalletDisplay";
import ProfileMenu from "@/components/ProfileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, signOut } = useAuth();
  const { profile } = useProfile(user?.id);
  const { wallet } = useWallet(user?.id);

  const navLinks = [
    { name: "Play Now", href: "/play/free" },
    { name: "Rules", href: "#rules" },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Crown className="w-8 h-8 text-primary glow-gold transition-transform group-hover:scale-110" />
            </div>
            <span className="font-display text-xl lg:text-2xl font-bold text-gradient-gold">
              Checkmate Jackpot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
            ) : user ? (
              <>
                {wallet && (
                  <WalletDisplay
                    balance={wallet.balance}
                    currency={wallet.currency}
                  />
                )}
                <ProfileMenu
                  profile={profile}
                  email={user.email || ''}
                  onSignOut={handleSignOut}
                />
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link to="/auth">
                    <User className="w-4 h-4" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="gold" size="sm" className="gap-2" asChild>
                  <Link to="/play/free">
                    <Trophy className="w-4 h-4" />
                    Play Now
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              {loading ? (
                <div className="flex justify-center py-2">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              ) : user ? (
                <>
                  {wallet && (
                    <WalletDisplay
                      balance={wallet.balance}
                      currency={wallet.currency}
                      className="w-fit"
                    />
                  )}
                  <div className="flex items-center gap-3 py-2">
                    <span className="text-sm text-muted-foreground">
                      {profile?.username || user.email}
                    </span>
                  </div>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link to="/profile" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-destructive" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4" />
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="gold" className="w-full gap-2" asChild>
                    <Link to="/play/free" onClick={() => setIsOpen(false)}>
                      <Trophy className="w-4 h-4" />
                      Play Now
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
