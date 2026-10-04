// Pr Lavrič UI kit — Accommodations, Food, Surroundings, Testimonials, Gallery, Contact, Footer
const dsk = window.PrLavriDesignSystem_166249;

function Accommodations({ onOpen }) {
  return (
    <section id="accommodations" style={{ padding: "5rem 0 7rem", background: "rgba(232,222,202,0.4)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
        <div style={{ marginBottom: "4rem" }}>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>{tr("acc.eyebrow")}</dsk.Eyebrow>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <dsk.SectionHeading emphasis={tr("acc.hEm")}>{tr("acc.h")}</dsk.SectionHeading>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "24rem", textAlign: "right" }}>
              {tr("acc.text")}
            </p>
          </div>
        </div>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {window.accommodations.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.1}>
              <dsk.AccommodationCard {...a} eyebrow={a.label} cta={tr("acc.cardCta")} onClick={() => onOpen(a)} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Food() {
  const items = [1, 2, 3].map((n) => [tr("food.i" + n), tr("food.i" + n + "s")]);
  return (
    <section id="food" style={{ padding: "5rem 3rem 7rem", background: "var(--primary)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <PatternBg variant="forest" id="pat-food" />
      <StampWatermark color="var(--cream)" opacity={0.025} size={380} position="left" />
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 480px", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div>
          <FadeIn>
          <dsk.Eyebrow tone="light" style={{ display: "block", marginBottom: "1.5rem" }}>{tr("food.eyebrow")}</dsk.Eyebrow>
          <dsk.SectionHeading tone="light" emphasis={tr("food.hEm")} style={{ marginBottom: "2rem" }}>{tr("food.h")}</dsk.SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,239,226,0.65)" }}>
            <p>{tr("food.p1")}</p>
            <p>{tr("food.p2")}</p>
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
            <img src={window.img("photo-1762186541239-5eee85c08c57", 600, 800)} alt={tr("food.alt1")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "rgba(59,84,64,0.4)", marginTop: "2.5rem" }}>
            <img src={window.img("photo-1780246033915-a1ee941742e4", 600, 800)} alt={tr("food.alt2")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Surroundings() {
  const cards = [
    { icon: "MapPin", label: tr("sur.c1.label"), title: tr("sur.c1.title"), desc: tr("sur.c1.desc"), photo: "photo-1689253790918-107ef1fa9137" },
    { icon: "Mountain", label: tr("sur.c2.label"), title: tr("sur.c2.title"), desc: tr("sur.c2.desc"), photo: "photo-1765888830290-6bd73498d6d4" },
    { icon: "Leaf", label: tr("sur.c3.label"), title: tr("sur.c3.title"), desc: tr("sur.c3.desc"), photo: "photo-1601919297600-8ffbfd160d2d" },
  ];
  return (
    <section id="surroundings" style={{ padding: "5rem 3rem 7rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>{tr("sur.eyebrow")}</dsk.Eyebrow>
          <dsk.SectionHeading align="center" emphasis={tr("sur.hEm")}>{tr("sur.h")}</dsk.SectionHeading>
        </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3.5rem" }}>
          {cards.map((c, ci) => (
            <FadeIn key={c.photo} delay={ci * 0.12}>
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
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>{tr("test.eyebrow")}</dsk.Eyebrow>
          <dsk.SectionHeading align="center"><em>{tr("test.hEm")}</em> {tr("test.h")}</dsk.SectionHeading>
        </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
          {window.testimonials.map((t, ti) => <FadeIn key={ti} delay={ti * 0.1}><dsk.TestimonialCard {...t} /></FadeIn>)}
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
            <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>{tr("gal.eyebrow")}</dsk.Eyebrow>
            <dsk.SectionHeading size="sub">{tr("gal.h")} <em>{tr("gal.hEm")}</em></dsk.SectionHeading>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", maxWidth: "20rem" }}>{tr("gal.text")}</p>
        </div>
        </FadeIn>
        <FadeIn delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
          <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3", aspectRatio: "1.05", overflow: "hidden", background: "var(--secondary)", cursor: "pointer" }} onClick={() => onLightbox(0)}>
            <img src={window.img(window.galleryPhotos[0], 1200, 800)} alt={tr("gal.alt")} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }}
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
      <img onClick={(e) => e.stopPropagation()} src={window.img(photo, 1600, 1100)} alt={tr("gal.lightboxAlt")} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
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
          <dsk.Eyebrow style={{ display: "block", marginBottom: "1rem" }}>{tr("con.eyebrow")}</dsk.Eyebrow>
          <dsk.SectionHeading emphasis={tr("con.hEm")} style={{ marginBottom: "2.5rem" }}>{tr("con.h")}</dsk.SectionHeading>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "3rem 0" }}>
              <div style={{ width: 48, height: 48, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="Check" size={20} color="var(--cream)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", color: "var(--foreground)", margin: 0 }}>{tr("con.thanks")}</h3>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", lineHeight: 1.7, margin: 0 }}>{tr("con.thanksText")}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <dsk.Field label={tr("con.name")} placeholder={tr("con.namePh")} required />
                <dsk.Field label={tr("con.email")} type="email" placeholder={tr("con.emailPh")} required />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <dsk.Field as="select" label={tr("con.acc")} placeholder={tr("con.accPh")} options={tr("con.accOptions")} />
                <dsk.Field label={tr("con.dates")} placeholder={tr("con.datesPh")} />
              </div>
              <dsk.Field as="textarea" label={tr("con.msg")} rows={5} placeholder={tr("con.msgPh")} />
              <dsk.Button variant="primary" size="lg" type="submit" style={{ alignSelf: "flex-start" }}>{tr("con.send")}</dsk.Button>
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
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.45)", margin: 0 }}>{tr("con.altitude")}</p>
              </div>
            </div>
          </div>
          {[["Phone", "+386 41 000 000"], ["Mail", "info@prlavric.si"], ["MapPin", tr("con.address")]].map(([ic, txt]) => (
            <div key={ic} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Icon name={ic} size={14} color="var(--accent)" />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(35,30,20,0.65)" }}>{txt}</span>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted-foreground)", marginTop: "1.5rem" }}>
            {tr("con.note")}
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
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 0.25rem" }}>{tr("brand.kicker")}</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", color: "var(--cream)", margin: 0 }}>Pr Lavrič</h3>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(245,239,226,0.45)", margin: 0 }}>{tr("foot.tag1")}<br />{tr("foot.tag2")}</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 1.25rem" }}>{tr("foot.nav")}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {window.navLinks.map(([l, id]) => (
                <button key={id} onClick={() => onNav(id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(245,239,226,0.5)" }}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,239,226,0.35)", margin: "0 0 1.25rem" }}>{tr("foot.follow")}</p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {["Instagram", "Facebook"].map((s) => <a key={s} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(245,239,226,0.5)", textDecoration: "none" }}>{s}</a>)}
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem", borderTop: "1px solid rgba(245,239,226,0.1)", display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.25)", margin: 0 }}>{tr("foot.rights")}</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(245,239,226,0.15)", margin: 0 }}>{tr("foot.made")}</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Accommodations, Food, Surroundings, Testimonials, Gallery, Lightbox, Contact, Footer });
