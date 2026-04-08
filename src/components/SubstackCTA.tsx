const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SubstackCTA = () => {
  return (
    <div className="card-surface p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-foreground">Subscribe to Unlatched</h3>
        <p className="body-small text-foreground/[0.65]">
          Field notes from the docuseries. Longform profiles. Behind-the-scenes on community and experimentation. No spam.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
        <a
          href="https://thirddoorstories.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[#FF6719] text-white font-medium hover:bg-[#FF6719]/90 transition-colors"
        >
          <SubstackIcon />
          Subscribe on Substack
        </a>
        <a
          href="https://thirddoorstories.beehiiv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl border border-border/[0.12] text-foreground/[0.65] hover:text-foreground hover:border-border/[0.25] transition-colors body-small"
        >
          Or via Beehiiv →
        </a>
      </div>
    </div>
  );
};

export default SubstackCTA;
