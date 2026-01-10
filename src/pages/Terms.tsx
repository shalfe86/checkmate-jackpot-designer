import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Checkmate Jackpot</title>
        <meta name="description" content="Terms of Service for Checkmate Jackpot - Read our terms and conditions for using the platform." />
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
              Terms of Service
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              These Terms of Service ("Terms") constitute a binding legal agreement between you ("User," "Player," "You") and Checkmate Jackpot LLC ("Company," "We," "Us," "Our"). By accessing or using the Checkmate Jackpot platform ("Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Eligibility</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">1.1 Age Requirement</h3>
              <p className="text-muted-foreground mb-4">
                Users must be at least 18 years old, or the age of legal majority in their jurisdiction, whichever is greater.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.2 Legal Participation</h3>
              <p className="text-muted-foreground mb-4">
                Participation is permitted only in jurisdictions where skill-based competitions with monetary prizes are lawful.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.3 Permitted Countries (Class A Launch Regions)</h3>
              <p className="text-muted-foreground mb-4">
                At launch, participation and payouts are permitted only for users physically located in, and legally resident of, the following regions (the "Permitted Countries"):
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>United States (US)</li>
                <li>Canada (CA)</li>
                <li>United Kingdom (GB)</li>
                <li>Ireland (IE)</li>
                <li>Australia (AU)</li>
                <li>New Zealand (NZ)</li>
                <li>Western & Northern Europe, including but not limited to: AT, BE, CH, DE, DK, ES, FI, FR, IT, LU, NL, NO, PT, SE, IS, LI</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                The Company reserves the right to modify the list of Permitted Countries at any time.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.4 Restricted Regions</h3>
              <p className="text-muted-foreground mb-4">
                Access is prohibited from jurisdictions subject to sanctions, prize competition prohibitions, or payment restrictions, including but not limited to: Cuba, Iran, North Korea, Syria, Russia, Belarus, Crimea, Donetsk, Luhansk, Myanmar, Sudan, South Sudan, Nigeria, Ghana, Pakistan, Bangladesh, Kenya, Uganda, and any other region where participation or payouts are unlawful or impractical.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Account Registration</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Accuracy:</strong> Users must provide accurate and truthful information.</li>
                <li><strong className="text-foreground">Single Account:</strong> One account per individual.</li>
                <li><strong className="text-foreground">Security:</strong> Users are responsible for safeguarding credentials and activity on their account.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Gameplay & Tiers</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Free Tier</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>No sign-up required</li>
                  <li>No monetary payouts</li>
                  <li>Ad-supported</li>
                  <li>40s start, +2s increment, 50s max</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Starter Tier</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Entry fee: $1 (or equivalent credits)</li>
                  <li>Jackpot cap applies</li>
                  <li>Limited win frequency</li>
                  <li>30s start, +2s increment, 35s max</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">World Tier</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Entry fee: $2 (or equivalent credits)</li>
                  <li>Uncapped jackpot</li>
                  <li>Unlimited wins</li>
                  <li>25s start, +1s increment, 25s max</li>
                </ul>
              </div>

              <p className="text-muted-foreground italic">
                Note: Draws are treated as non-winning outcomes for jackpot purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Jackpot Awarding</h2>
              <p className="text-muted-foreground">
                When multiple games conclude within close proximity, the jackpot is awarded to the earliest-started eligible winning game. Subsequent games may display "Pending Jackpot Verification." Jackpot structures and reset rules may change without notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Identity Verification (KYC)</h2>
              <p className="text-muted-foreground mb-4">
                To withdraw or claim any prize, users must complete identity verification through the Company's third-party payout provider.
              </p>
              <p className="text-muted-foreground mb-2">Verification may include:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Legal name</li>
                <li>Address</li>
                <li>Date of birth</li>
                <li>Government-issued identification</li>
                <li>Banking or payout details</li>
              </ul>
              <p className="text-muted-foreground">
                The Company does not store government ID numbers or tax identification numbers. Failure to complete verification will prevent payout access.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Tax Responsibility</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Users are solely responsible for determining and fulfilling any tax obligations arising from winnings.</li>
                <li>Where legally required, the Company's payout provider may collect information and report winnings to relevant tax authorities.</li>
                <li>The Company does not provide tax advice.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Payout Structure</h2>
              <p className="text-muted-foreground">
                Payouts are processed through a third-party provider and may be subject to review, verification, and processing delays. Large prize payouts may be distributed over time or offered as discounted lump-sum options at the Company's discretion. Exact schedules may vary based on jurisdiction, verification status, and provider limitations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Fraud & Anti-Cheat Policy</h2>
              <p className="text-muted-foreground mb-4">
                The use of chess engines, scripts, external assistance, collusion, or manipulation is strictly prohibited.
              </p>
              <p className="text-muted-foreground mb-2">Indicators of violation include but are not limited to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Engine-like accuracy patterns</li>
                <li>Abnormal timing behavior</li>
                <li>Unexplained performance spikes</li>
              </ul>
              <p className="text-muted-foreground mb-2">Violations may result in:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Forfeiture of winnings</li>
                <li>Account suspension or termination</li>
                <li>Permanent bans</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Credits & Payments</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Minimum credit purchase: $10</li>
                <li>Credits are non-refundable</li>
                <li>Chargebacks or disputed transactions may result in account termination</li>
                <li>Credit values, pricing, and availability may change</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. International Restrictions</h2>
              <p className="text-muted-foreground">
                Users are responsible for ensuring participation is lawful in their jurisdiction. The Company may restrict access or payouts where legal, regulatory, or payment limitations exist.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All Platform software, content, branding, and systems are the exclusive property of the Company. Unauthorized reproduction, reverse engineering, or exploitation is prohibited.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Account Termination</h2>
              <p className="text-muted-foreground">
                The Company may suspend or terminate accounts for violations including fraud, abuse, chargebacks, cheating, or breach of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Disclaimers</h2>
              <p className="text-muted-foreground">
                The Platform is provided "AS IS." The Company makes no guarantees regarding uptime, outcomes, AI behavior, jackpot size, or uninterrupted service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                The Company's maximum liability shall not exceed the entry fee paid for the game in question. The Company is not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">15. Governing Law & Arbitration</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the State of Delaware. All disputes shall be resolved through binding arbitration in Delaware. Users waive the right to participate in class actions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">16. Changes to Terms</h2>
              <p className="text-muted-foreground">
                The Company may update these Terms at any time. Continued use of the Platform constitutes acceptance of the revised Terms.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Terms;
