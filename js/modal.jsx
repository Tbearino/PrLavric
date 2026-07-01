// Pr Lavrič UI kit — accommodation full-page detail view
const mdsk = window.PrLavriDesignSystem_166249;

function AccommodationModal({ acc, onClose, onBook }) {
  // Scroll to top on open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "var(--background)", overflowY: "auto" }}>
      {/* Top bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(245,239,226,0.96)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border)", padding: "0 3rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          <Icon name="ChevronLeft" size={16} color="var(--muted-foreground)" /> Back to accommodation
        </button>
        <mdsk.Button variant="primary" size="sm" onClick={onBook}>Send enquiry</mdsk.Button>
      </div>

      {/* Hero image */}
      <div style={{ position: "relative", height: "60vh", minHeight: 400, overflow: "hidden", background: "var(--secondary)" }}>
        <img src={acc.image} alt={acc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(35,30,20,0.5) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: "3rem", left: "3rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "0.75rem" }}>{acc.label}</span>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)", margin: 0, lineHeight: 1.1 }}>{acc.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "4rem 3rem 6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "4rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--muted-foreground)", margin: "0 0 2rem" }}>
              {acc.tagline}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(35,30,20,0.65)", margin: "0 0 2.5rem" }}>
              {acc.description}
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>What's included</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {acc.features.map((f) => <mdsk.FeatureChip key={f}>{f}</mdsk.FeatureChip>)}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[acc.image, window.img("photo-1575403071235-5dcd06cbf169", 600, 400)].map((src, i) => (
                <div key={i} style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--secondary)" }}>
                  <img src={src} alt={acc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ position: "sticky", top: 96, background: "var(--card)", border: "1px solid var(--border)", padding: "2rem" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>{acc.price}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--muted-foreground)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                Includes breakfast from Vera's wood-fired kitchen. Minimum 2 nights.
              </p>
              <mdsk.Button variant="primary" size="lg" onClick={onBook} style={{ width: "100%" }}>Send enquiry</mdsk.Button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--muted-foreground)", textAlign: "center", marginTop: "0.75rem" }}>
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.AccommodationModal = AccommodationModal;
