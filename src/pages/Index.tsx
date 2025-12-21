import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import GameTiers from "@/components/GameTiers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Checkmate Jackpot | Play Chess, Win Big</title>
        <meta 
          name="description" 
          content="Compete against players worldwide in skill-based chess tournaments. Win real money based on your chess mastery. Join the world's premier chess gaming platform." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <GameTiers />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
