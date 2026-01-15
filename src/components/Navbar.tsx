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
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, signOut } = useAuth();
  const { profile } = useProfile(user?.id);
  const { wallet } = useWallet(user?.id);

  const navLinks = [
    { name: "Play Now", href: "/play/free" },
    { name: "Rules", href: "/rules" },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <div className="glass-strong rounded-2xl border border-border/50 shadow-3d">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Crown className="w-8 h-8 text-primary glow-gold" />
                </motion.div>
                <span className="font-display text-xl lg:text-2xl font-bold text-gradient-gold">
                  Checkmate Jackpot
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div 
                      className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="navHover"
                    />
                  </Link>
                ))}
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden lg:flex items-center gap-3">
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
                    <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10" asChild>
                      <Link to="/auth">
                        <User className="w-4 h-4" />
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="gold" size="sm" className="gap-2 shadow-gold" asChild>
                      <Link to="/play/free">
                        <Trophy className="w-4 h-4" />
                        Play Now
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="flex flex-col gap-2 pb-6 pt-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.href}
                          className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div 
                      className="flex flex-col gap-3 pt-4 mt-2 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
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
                          <div className="flex items-center gap-3 px-4 py-2">
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
                          <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive" onClick={handleSignOut}>
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
                          <Button variant="gold" className="w-full gap-2 shadow-gold" asChild>
                            <Link to="/play/free" onClick={() => setIsOpen(false)}>
                              <Trophy className="w-4 h-4" />
                              Play Now
                            </Link>
                          </Button>
                        </>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
