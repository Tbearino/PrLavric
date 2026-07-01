// Pr Lavrič UI kit — Nav, Hero, Intro, Story
const { Eyebrow, SectionHeading, Button, StatBadge } = window.PrLavriDesignSystem_166249;

function Nav({ scrolled, onNav }) {
  const link = (label, id) => (
    <button key={id} onClick={() => onNav(id)}
      style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem",
        color: scrolled ? "rgba(35,30,20,0.65)" : "rgba(245,239,226,0.8)", transition: "color 200ms" }}>
      {label}
    </button>
  );
  return (
    <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
      background: scrolled ? "rgba(245,239,226,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 400ms" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 3rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => onNav("hero")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, lineHeight: 1, textAlign: "left" }}>
          <StampLogo size={36} color={scrolled ? "var(--espresso)" : "var(--cream)"} style={{ transition: "color 400ms" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: scrolled ? "var(--muted-foreground)" : "rgba(245,239,226,0.6)", transition: "color 400ms" }}>Turistična kmetija</span>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1.25rem", color: scrolled ? "var(--foreground)" : "var(--cream)", transition: "color 400ms" }}>Pr Lavrič</span>
          </div>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          {window.navLinks.map(([l, id]) => link(l, id))}
          <Button variant="outline" size="sm" tone={scrolled ? "light" : "dark"} onClick={() => onNav("contact")}>Book now</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onNav }) {
  return (
    <section id="hero" style={{ position: "relative", minHeight: 640, height: "92vh", display: "flex", alignItems: "flex-end", paddingBottom: "5rem", overflow: "hidden" }}>
      <img src={window.img("photo-1781077205398-541b542d4d84", 1920, 1080)} alt="Slovenian mountain meadow with traditional huts"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--hero-veil-vertical)" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--hero-veil-horizontal)" }} />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 3rem", width: "100%" }}>
        <div style={{ maxWidth: "48rem" }}>
          <Eyebrow tone="light" style={{ display: "block", marginBottom: "1.75rem", letterSpacing: "0.4em" }}>700m · Central Slovenia · Since 1860</Eyebrow>
          <SectionHeading size="hero" tone="light" style={{ marginBottom: "1.75rem" }}>A second home<br /><em>in the heart</em><br />of Slovenia</SectionHeading>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.7, color: "rgba(245,239,226,0.75)", maxWidth: "32rem", marginBottom: "2.5rem" }}>
            An 1860 family farm. Wood-fired cooking. The most genuine hostess in Slovenia. This is Pr&nbsp;Lavrič.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="primary" size="lg" onClick={() => onNav("accommodations")}>View accommodation</Button>
            <Button variant="outline" size="lg" tone="dark" onClick={() => onNav("story")}>Our story</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" style={{ padding: "5rem 3rem" }}>
      <FadeIn>
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <Eyebrow rules align="center" tone="muted" style={{ marginBottom: "2.5rem" }}>Eco Farm Pr Lavrič</Eyebrow>
          <SectionHeading align="center" emphasis="A home." style={{ marginBottom: "2rem" }}>Not a hotel. Not a resort.</SectionHeading>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "42rem", margin: "0 auto" }}>
            High in the hills above central Slovenia — where meadows meet the forest edge and the air carries pine and woodsmoke — a family farm has been quietly welcoming the world for over three decades.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

function Story({ onNav }) {
  return (
    <section id="story" style={{ padding: "5rem 3rem 7rem", position: "relative", overflow: "hidden" }}>
      <StampWatermark color="var(--espresso)" opacity={0.025} size={450} position="right" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        <FadeIn direction="right">
        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "var(--secondary)" }}>
            <img src={window.img("photo-1764612526987-d198b6be0e2e", 900, 1200)} alt="The old Pr Lavrič farmhouse" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", bottom: -24, right: -32 }}>
            <StatBadge value="35" label="years of hospitality" tone="gold" floating />
          </div>
          <div style={{ position: "absolute", top: 24, left: -24, background: "var(--primary)", color: "var(--cream)", padding: "0.5rem 1rem" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Since 1860</span>
          </div>
        </div>
        </FadeIn>
        <FadeIn delay={0.15}>
        <div style={{ paddingTop: "2rem" }}>
          <Eyebrow style={{ display: "block", marginBottom: "1.5rem" }}>Our story</Eyebrow>
          <SectionHeading size="display" emphasis="heart of the house" style={{ marginBottom: "2rem" }}>Vera and the</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "rgba(35,30,20,0.65)" }}>
            <p>For thirty-five years, Vera has been the beating heart of this farm. Before she chose the mountain life, she stood in the great halls of state — serving world leaders at diplomatic dinners. She knew exactly how to do things well.</p>
            <p>But she chose this instead. An empty 1860 farmhouse. A garden that needed hands. A community that needed warmth. Slowly the old stone walls filled with laughter, with the smell of bread from the wood oven.</p>
          </div>
          <blockquote style={{ marginTop: "2.5rem", paddingLeft: "1.75rem", borderLeft: "2px solid var(--accent)" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--foreground)", margin: 0 }}>
              "I had the world's finest dining rooms. But I wanted a table where people felt truly at home."
            </p>
            <cite style={{ marginTop: "1rem", display: "block", fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-foreground)", fontStyle: "normal" }}>— Vera Lavrič, hostess</cite>
          </blockquote>
          <div style={{ marginTop: "2.5rem" }}>
            <Button variant="ghost" onClick={() => onNav("contact")}>Get to know us <Icon name="ArrowRight" size={14} /></Button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Intro, Story });
