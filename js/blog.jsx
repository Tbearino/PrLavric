// Pr Lavrič UI kit — Blog (Utrinki) section + CTA band
const bdsk = window.PrLavriDesignSystem_166249;

function Blog() {
  return (
    <section id="blog" style={{ padding: "5rem 3rem 7rem", position: "relative" }}>
      <PatternBg variant="cream" id="pat-blog" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <bdsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>From the farm journal</bdsk.Eyebrow>
            <bdsk.SectionHeading align="center" emphasis="stories">Vera's</bdsk.SectionHeading>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2.5rem" }}>
          {window.blogPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.12}>
              <article style={{ cursor: "pointer" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--secondary)", marginBottom: "1.25rem", position: "relative" }}>
                  <img
                    src={window.img(post.photo, 700, 520)}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.625rem" }}>
                  {post.date}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.25rem", lineHeight: 1.3, color: "var(--foreground)", margin: "0 0 0.75rem" }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(35,30,20,0.55)", margin: 0 }}>
                  {post.excerpt.length > 160 ? post.excerpt.substring(0, 160) + "…" : post.excerpt}
                </p>
                <div style={{ marginTop: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Read more <Icon name="ArrowRight" size={12} color="var(--accent)" />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ onNav }) {
  return (
    <section style={{ padding: "4rem 3rem", background: "var(--primary)", position: "relative", overflow: "hidden" }}>
      <PatternBg variant="forest" id="pat-cta" />
      <StampWatermark color="var(--cream)" opacity={0.04} size={320} position="right" />
      <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <bdsk.Eyebrow tone="light" style={{ display: "block", marginBottom: "1.25rem" }}>Reservations open</bdsk.Eyebrow>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--cream)", lineHeight: 1.15, margin: "0 0 1rem" }}>
            Join us <em style={{ fontStyle: "italic" }}>at the table</em>
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,239,226,0.65)", maxWidth: "32rem", margin: "0 auto 2rem" }}>
            Vera answers every inquiry personally, usually within a few hours. Tell us about your plans — she'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <bdsk.Button variant="outline" size="lg" tone="dark" onClick={() => onNav("contact")}>
              Send an enquiry
            </bdsk.Button>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.35)", marginTop: "1.25rem" }}>
            We respond within 24 hours · We speak Slovenian, English and German
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { Blog, CtaBand });
