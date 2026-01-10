import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Rules = () => {
  return (
    <>
      <Helmet>
        <title>Rules of Play | Checkmate Jackpot</title>
        <meta name="description" content="Rules of Play for Checkmate Jackpot - Learn how to play and win jackpots on our platform." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Rules of Play
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to Checkmate Jackpot. These Rules of Play are designed to ensure fair, transparent, and consistent gameplay across all tiers. By playing on the Platform, you agree to these Rules and the Terms of Service.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Game Overview</h2>
              <p className="text-muted-foreground mb-4">
                All games are played against an AI opponent using standard chess rules.
              </p>
              <p className="text-muted-foreground mb-2">A jackpot win occurs when a player:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Checkmates the AI, or</li>
                <li>Causes the AI to lose on time.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                A draw is considered a non-winning outcome for jackpot purposes.
              </p>
              <p className="text-muted-foreground">
                The Platform offers multiple gameplay tiers, each with distinct time controls, entry requirements, and jackpot mechanics.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Free Tier (Practice Mode)</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Time Controls</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Start: 40 seconds</li>
                  <li>Increment: +2 seconds</li>
                  <li>Maximum Time: 50 seconds</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>No account required</li>
                  <li>No monetary payouts</li>
                  <li>Unlimited play</li>
                  <li>Moderate AI strength for training and practice</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Starter Tier (Tier 2)</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Entry</h3>
                <p className="text-muted-foreground">Entry fee: $1.00 (or equivalent credits)</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Time Controls</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Start: 30 seconds</li>
                  <li>Increment: +1 seconds</li>
                  <li>Maximum Time: 35 seconds</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Jackpot Mechanics</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Jackpot starts at $5</li>
                  <li>Increases by $0.75 per completed game</li>
                  <li>Jackpot is capped at $1,000</li>
                  <li>Maximum of one jackpot win per calendar month, subject to verification</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. World Tier (Tier 3)</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Entry</h3>
                <p className="text-muted-foreground">Entry fee: $2.00 (or equivalent credits)</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Time Controls</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Start: 25 seconds</li>
                  <li>Increment: +1 second</li>
                  <li>Maximum Time: 25 seconds</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Jackpot Mechanics</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Jackpot starts at $5</li>
                  <li>Increases by $1.00 per completed game</li>
                  <li>No jackpot cap</li>
                  <li>Unlimited wins, subject to review and verification</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Jackpot Awarding & Priority</h2>
              <p className="text-muted-foreground mb-2">If multiple games conclude in close proximity:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>The jackpot is awarded to the earliest-started eligible winning game.</li>
                <li>Subsequent games may display "Pending Jackpot Verification."</li>
              </ul>
              <p className="text-muted-foreground mb-2">After a jackpot is awarded:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Tier 2 jackpots reset to $5</li>
                <li>Tier 3 jackpots reset to $5 or may continue growing if applicable</li>
              </ul>
              <p className="text-muted-foreground">
                The Company reserves the right to review all wins prior to payout.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Player Eligibility & Limits</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Tier 2 players are limited to one jackpot win per calendar month.</li>
                <li>Tier 3 players may win multiple jackpots, subject to review.</li>
                <li>All jackpot claims require successful identity verification through the Platform's payout provider.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Identity Verification & Taxes</h2>
              <p className="text-muted-foreground mb-4">To withdraw or claim any jackpot:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Users must complete identity verification through the Platform's third-party payout provider.</li>
                <li>Verification may require legal name, address, date of birth, government-issued identification, and payout details.</li>
                <li>The Platform does not store government ID numbers or tax identification numbers.</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Tax Responsibility</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Players are solely responsible for determining and complying with any tax obligations related to winnings.</li>
                <li>Where legally required, the payout provider may report winnings to relevant tax authorities.</li>
                <li>The Platform does not provide tax advice.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Jurisdiction & Country Availability</h2>
              <p className="text-muted-foreground mb-4">
                Participation and payouts are available only in approved jurisdictions.
              </p>
              <p className="text-muted-foreground mb-2">At launch, gameplay and payouts are restricted to select Class A countries, including:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>United States, Canada, United Kingdom, Ireland</li>
                <li>Australia, New Zealand</li>
                <li>Western & Northern Europe (supported regions)</li>
              </ul>
              <p className="text-muted-foreground">
                Access or payouts may be restricted where participation is unlawful, payment processing is unavailable, or regulatory requirements cannot be met.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Anti-Cheat Policy</h2>
              <p className="text-muted-foreground mb-4">
                The use of chess engines, scripts, automation, collusion, or any external assistance is strictly prohibited.
              </p>
              <p className="text-muted-foreground mb-2">Indicators of prohibited behavior include, but are not limited to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Engine-like accuracy patterns</li>
                <li>Unnatural timing behavior</li>
                <li>Sudden performance spikes</li>
                <li>Repeated alignment with top engine lines</li>
              </ul>
              <p className="text-muted-foreground mb-2">If cheating is suspected:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Payouts may be paused</li>
                <li>Games may be reviewed</li>
                <li>Accounts may be restricted or permanently banned</li>
              </ul>
              <p className="text-muted-foreground font-semibold">
                All enforcement decisions are final.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Game Recording & AI Behavior</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All games, moves, timestamps, and outcomes are recorded.</li>
                <li>Verified game outcomes may be used to improve AI behavior and difficulty calibration.</li>
                <li>Only games deemed fair and non-cheating may influence AI learning or tuning.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Credits & Payments</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Minimum credit purchase: $10</li>
                <li>Tier 2 entry: 1 credit</li>
                <li>Tier 3 entry: 2 credits</li>
                <li>Credits are non-refundable</li>
                <li>Processing fees apply at credit purchase, not per game</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. General Conditions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The Platform may adjust AI difficulty, time controls, jackpot mechanics, or other parameters to maintain fairness and system integrity.</li>
                <li>Rule changes apply only to future games.</li>
                <li>Participation constitutes acceptance of these Rules and the Terms of Service.</li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Rules;
