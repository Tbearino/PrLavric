// Pr Lavrič UI kit — scroll animations + decorative elements

// FadeIn — wraps content, fades in when scrolled into view
function FadeIn({ children, delay = 0, direction = "up", style = {}, className }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Check if already in view (for above-fold content)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offsets = { up: "translateY(28px)", down: "translateY(-28px)", left: "translateX(28px)", right: "translateX(-28px)", none: "none" };

  return React.createElement("div", {
    ref,
    className,
    style: {
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) translateX(0)" : (offsets[direction] || offsets.up),
      transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) " + delay + "s, transform 0.9s cubic-bezier(0.16,1,0.3,1) " + delay + "s",
      willChange: "opacity, transform",
    }
  }, children);
}

// StampDivider — a small centered stamp mark used between sections
function StampDivider({ color = "var(--border-strong)", size = 48 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 3rem", gap: "1.5rem" }}>
      <div style={{ flex: 1, maxWidth: 120, height: 1, background: color, opacity: 0.3 }} />
      <StampLogo size={size} color={color} style={{ opacity: 0.15 }} />
      <div style={{ flex: 1, maxWidth: 120, height: 1, background: color, opacity: 0.3 }} />
    </div>
  );
}

// StampWatermark — a large faded stamp as section background
function StampWatermark({ color = "var(--espresso)", opacity = 0.03, size = 400, position = "right" }) {
  const posStyle = position === "right"
    ? { right: -size * 0.15, top: "50%", transform: "translateY(-50%)" }
    : { left: -size * 0.15, top: "50%", transform: "translateY(-50%)" };
  return (
    <div style={{ position: "absolute", ...posStyle, pointerEvents: "none", opacity, zIndex: 0 }}>
      <StampLogo size={size} color={color} />
    </div>
  );
}

Object.assign(window, { FadeIn, StampDivider, StampWatermark });
