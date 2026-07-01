// Pr Lavrič UI kit — Accommodations, Food, Surroundings, Testimonials, Gallery, Contact, Footer
const dsk = window.PrLavriDesignSystem_166249;

function Accommodations({ onOpen }) {
  return (
    <section id="accommodations" style={{ padding: "5rem 0 7rem", background: "rgba(232,222,202,0.4)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
        <div style={{ marginBottom: "4rem" }}>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>Accommodation</dsk.Eyebrow>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <dsk.SectionHeading emphasis="to rest">Your place</dsk.SectionHeading>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "24rem", textAlign: "right" }}>
              Three distinct ways to stay — from century-old stone rooms to forest cabins. Each with Vera's warmth within reach.
            </p>
          </div>
        </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {window.accommodations.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.1}>
              <dsk.AccommodationCard {...a} eyebrow={a.label} onClick={() => onOpen(a)} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Food() {
  const items = [["Bread", "Baked in the wood-fired oven"], ["Honey", "From our own hives"], ["Vegetables", "From the garden by the house"]];
  return (
    <section id="food" style={{ padding: "5rem 3rem 7rem", background: "var(--primary)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <PatternBg variant="forest" id="pat-food" />
      <StampWatermark color="var(--cream)" opacity={0.025} size={380} position="left" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 480px", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div>
          <FadeIn>
          <dsk.Eyebrow tone="light" style={{ display: "block", marginBottom: "1.5rem" }}>Farm table</dsk.Eyebrow>
          <dsk.SectionHeading tone="light" emphasis="tells a story" style={{ marginBottom: "2rem" }}>Food that</dsk.SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,239,226,0.65)" }}>
            <p>Breakfast at Pr Lavrič is not a service — it is an event. The bread has been baking since before you woke up, in the old wood-fired oven that Vera has kept alive for thirty years. The honey is from the farm's own hives.</p>
            <p>Vera cooks as she has always cooked: from what the garden offers, what the season allows, and what simply feels right. Nothing is imported when local is better.</p>
          </div>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(245,239,226,0.15)" }}>
            {items.map(([t, s]) => (
              <div key={t}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", marginBottom: "0.375rem", color: "var(--cream)" }}>{t}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", lineHeight: 1.4, color: "rgba(245,239,226,0.4)" }}>{s}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        </div>
        <FadeIn delay={0.15} direction="left">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "rgba(59,84,64,0.4)" }}>
            <img src={window.img("photo-1762186541239-5eee85c08c57", 600, 800)} alt="Antique farmhouse kitchen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "rgba(59,84,64,0.4)", marginTop: "2.5rem" }}>
            <img src={window.img("photo-1780246033915-a1ee941742e4", 600, 800)} alt="Rustic dining room with wooden beams" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Surroundings() {
  const cards = [
    { icon: "MapPin", label: "GEOSS", title: "Geographic centre", desc: "Pr Lavrič stands minutes from GEOSS — the surveyed geographic centre of Slovenia. A quiet stone marker in the forest. A rare thing to walk to before breakfast.", photo: "photo-1689253790918-107ef1fa9137" },
    { icon: "Mountain", label: "Hiking", title: "Trails from the doorstep", desc: "Marked trails begin at the farm gate. From gentle valley walks to ridge-line hikes with views across half of Slovenia — something for every pace.", photo: "photo-1765888830290-6bd73498d6d4" },
    { icon: "Leaf", label: "Farm life", title: "Sheep, hens and the garden", desc: "The farm is a working farm. Sheep in the lower field, hens around the yard, a kitchen garden that changes week to week. Guests are welcome to walk among it all.", photo: "photo-1601919297600-8ffbfd160d2d" },
  ];
  return (
    <section id="surroundings" style={{ padding: "5rem 3rem 7rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>Surroundings</dsk.Eyebrow>
          <dsk.SectionHeading align="center" emphasis="of Slovenia">In the very heart</dsk.SectionHeading>
        </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3.5rem" }}>
          {cards.map((c, ci) => (
            <FadeIn key={c.label} delay={ci * 0.12}>
            <div>
              <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--secondary)", marginBottom: "1.5rem" }}>
                <img src={window.img(c.photo, 700, 520)} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                <Icon name={c.icon} size={13} color="var(--accent)" />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)" }}>{c.label}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.25rem", color: "var(--foreground)", margin: "0 0 0.75rem" }}>{c.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(35,30,20,0.55)", margin: 0 }}>{c.desc}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ padding: "5rem 3rem 7rem", background: "rgba(232,222,202,0.4)", position: "relative" }}>
      <PatternBg variant="sand" id="pat-test" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>Guests say</dsk.Eyebrow>
          <dsk.SectionHeading align="center"><em>Words</em> from our guests</dsk.SectionHeading>
        </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
          {window.testimonials.map((t, ti) => <FadeIn key={t.name} delay={ti * 0.1}><dsk.TestimonialCard {...t} /></FadeIn>)}
        </div>
      </div>
    </section>
  );
}

function Gallery({ onLightbox }) {
  return (
    <section id="gallery" style={{ padding: "5rem 3rem 7rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1rem" }}>
          <div>
            <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>Gallery</dsk.Eyebrow>
            <dsk.SectionHeading size="sub">Pr Lavrič <em>in pictures</em></dsk.SectionHeading>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "20rem" }}>Moments from the farm, the table, and the valley beyond.</p>
        </div>
        </FadeIn>
        <FadeIn delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
          <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3", aspectRatio: "1.05", overflow: "hidden", background: "var(--secondary)", cursor: "pointer" }} onClick={() => onLightbox(0)}>
            <img src={window.img(window.galleryPhotos[0], 1200, 800)} alt="Panoramic Slovenian meadows" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
          </div>
          {window.galleryPhotos.slice(1).map((id, i) => (
            <div key={id} style={{ aspectRatio: "1", overflow: "hidden", background: "var(--secondary)", cursor: "pointer" }} onClick={() => onLightbox(i + 1)}>
              <img src={window.img(id, 600, 600)} alt="Pr Lavrič" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const photo = window.galleryPhotos[index];
  const total = window.galleryPhotos.length;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(35,30,20,0.92)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <button onClick={(e) => { e.stopPropagation(); onClose(); }} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", cursor: "pointer", zIndex: 5 }}>
        <Icon name="X" size={24} color="var(--cream)" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", opacity: index > 0 ? 1 : 0.3 }}>
        <Icon name="ChevronLeft" size={32} color="var(--cream)" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", opacity: index < total - 1 ? 1 : 0.3 }}>
        <Icon name="ChevronRight" size={32} color="var(--cream)" />
      </button>
      <img onClick={(e) => e.stopPropagation()} src={window.img(photo, 1600, 1100)} alt="Pr Lavrič gallery" style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
      <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.5)" }}>
        {index + 1} / {total}
      </div>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" style={{ padding: "5rem 3rem 7rem", background: "rgba(232,222,202,0.4)", position: "relative" }}>
      <PatternBg variant="sand" id="pat-contact" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: "6rem", position: "relative", zIndex: 1 }}>
        <FadeIn>
        <div>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>Reservations &amp; Enquiries</dsk.Eyebrow>
          <dsk.SectionHeading emphasis="we look forward to you" style={{ marginBottom: "2.5rem" }}>Write to us,</dsk.SectionHeading>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "3rem 0" }}>
              <div style={{ width: 48, height: 48, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="Check" size={20} color="var(--cream)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", color: "var(--foreground)", margin: 0 }}>Thank you for your enquiry</h3>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", lineHeight: 1.7, margin: 0 }}>Vera will respond within 24 hours. We look forward to welcoming you at Pr Lavrič.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <dsk.Field label="Full name" placeholder="Jane Smith" required />
                <dsk.Field label="Email" type="email" placeholder="jane@email.com" required />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <dsk.Field as="select" label="Accommodation" placeholder="Which accommodation?" options={["Rooms in the old farmhouse", "Glamping cabin", "Campervan pitch", "Not sure yet"]} />
                <dsk.Field label="Stay dates" placeholder="e.g. 12–17 July 2025" />
              </div>
              <dsk.Field as="textarea" label="Message" rows={5} placeholder="Tell us a little about yourself or your group…" />
              <dsk.Button variant="primary" size="lg" type="submit" style={{ alignSelf: "flex-start" }}>Send enquiry</dsk.Button>
            </form>
          )}
        </div>
        </FadeIn>
        <FadeIn delay={0.15} direction="left">
        <div style={{ paddingTop: "7rem" }}>
          <div style={{ background: "var(--primary)", padding: "2rem", marginBottom: "1.5rem" }}>
            <div style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div>
                <Icon name="MapPin" size={36} color="var(--accent)" style={{ marginBottom: "0.75rem" }} />
                <p style={{ fontFamily: "var(--font-serif)", color: "rgba(245,239,226,0.8)", margin: "0 0 0.25rem" }}>Pr Lavrič</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.45)", margin: "0 0 0.125rem" }}>46°6′12″N 14°48′36″E</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.45)", margin: 0 }}>700 m n.m. · Osrednja Slovenija</p>
              </div>
            </div>
          </div>
          {[["Phone", "+386 41 000 000"], ["Mail", "info@prlavric.si"], ["MapPin", "Osrednja Slovenija, 700 m n.m."]].map(([ic, txt]) => (
            <div key={txt} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Icon name={ic} size={14} color="var(--accent)" />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(35,30,20,0.65)" }}>{txt}</span>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", marginTop: "1.5rem" }}>
            Vera is usually the one who answers the phone. She would love to hear about your plans and tell you what is growing in the garden this week.
          </p>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: "var(--foreground)", color: "var(--cream)", padding: "4rem 3rem", position: "relative", overflow: "hidden" }}>
      <PatternBg variant="espresso" id="pat-footer" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2.5rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1rem" }}>
              <StampLogo size={56} color="var(--cream)" />
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 0.25rem" }}>Turistična kmetija</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", color: "var(--cream)", margin: 0 }}>Pr Lavrič</h3>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(245,239,226,0.45)", margin: 0 }}>A second home in the heart of Slovenia.<br />Eco farm since 1860.</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 1.25rem" }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {window.navLinks.map(([l, id]) => (
                <button key={id} onClick={() => onNav(id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(245,239,226,0.5)" }}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 1.25rem" }}>Follow us</p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {["Instagram", "Facebook"].map((s) => <a key={s} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(245,239,226,0.5)", textDecoration: "none" }}>{s}</a>)}
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem", borderTop: "1px solid rgba(245,239,226,0.1)", display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.25)", margin: 0 }}>© 2025 Eco Farm Pr Lavrič. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.15)", margin: 0 }}>Made with love in Slovenia</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Accommodations, Food, Surroundings, Testimonials, Gallery, Lightbox, Contact, Footer });
