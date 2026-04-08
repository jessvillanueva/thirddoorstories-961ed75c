import { useState } from "react";
import { Button } from "@/components/ui/button";
import beehiivLogo from "@/assets/beehiiv-logo.png";

const PUBLICATION_ID = "bec1e30d-1ef3-4808-93cd-ffde841b69d5";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const EmailCaptureBar = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://embeds.beehiiv.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          publication_id: PUBLICATION_ID,
          email,
        }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-surface p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-1">Unlatched — The Newsletter</h3>
      <p className="body-base text-foreground/[0.65] mb-4">
        Field notes from the docuseries. Longform profiles. Behind-the-scenes on community and experimentation. No spam.
      </p>

      {/* Substack primary CTA */}
      <a
        href="https://thirddoorstories.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-xl bg-[#FF6719] text-white font-medium hover:bg-[#FF6719]/90 transition-colors"
      >
        <SubstackIcon />
        Subscribe on Substack
      </a>

      <p className="body-small text-foreground/[0.35] mb-3">Or subscribe via email (Beehiiv):</p>

      {submitted ? (
        <p className="text-primary body-base font-medium">You're in. We'll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-11 px-4 bg-background border border-border/[0.12] rounded-xl text-foreground placeholder:text-foreground/[0.35] focus:outline-none focus:border-primary/50 transition-colors"
            required
          />
          <Button type="submit" variant="gold" size="lg" disabled={loading}>
            {loading ? "Subscribing…" : "Subscribe"}
          </Button>
          {error && <p className="text-destructive text-sm">{error}</p>}
        </form>
      )}
      <div className="flex items-center justify-between mt-4">
        <a
          href="https://thirddoorstories.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="body-small text-foreground/[0.45] hover:text-primary transition-colors"
        >
          Read past issues on Substack →
        </a>
        <a
          href="https://www.beehiiv.com/?via=third-door-stories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-foreground/[0.35] hover:text-foreground/[0.55] transition-colors"
        >
          <span className="text-xs">Powered by</span>
          <img src={beehiivLogo} alt="beehiiv" className="h-4 object-contain invert opacity-60 hover:opacity-90 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default EmailCaptureBar;
