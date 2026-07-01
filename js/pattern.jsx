// Heritage mix pattern overlay — renders an absolute-positioned SVG pattern
// Usage: <PatternBg variant="cream" /> inside a position:relative container

function patternColors(variant) {
  const v = {
    cream: { leaf:"rgba(59,84,64,0.18)", leafSm:"rgba(59,84,64,0.14)", herb:"rgba(107,96,68,0.15)", fl:"rgba(192,139,58,0.14)", flD:"rgba(192,139,58,0.22)", flSt:"rgba(107,96,68,0.12)", dot:"rgba(35,30,20,0.07)", tL:"rgba(59,84,64,0.12)", h:"rgba(35,30,20,0.06)" },
    sand: { leaf:"rgba(59,84,64,0.16)", leafSm:"rgba(59,84,64,0.12)", herb:"rgba(107,96,68,0.14)", fl:"rgba(192,139,58,0.13)", flD:"rgba(192,139,58,0.20)", flSt:"rgba(107,96,68,0.11)", dot:"rgba(35,30,20,0.06)", tL:"rgba(59,84,64,0.10)", h:"rgba(35,30,20,0.05)" },
    espresso: { leaf:"rgba(245,239,226,0.16)", leafSm:"rgba(245,239,226,0.12)", herb:"rgba(245,239,226,0.14)", fl:"rgba(192,139,58,0.16)", flD:"rgba(192,139,58,0.24)", flSt:"rgba(245,239,226,0.10)", dot:"rgba(245,239,226,0.06)", tL:"rgba(245,239,226,0.10)", h:"rgba(245,239,226,0.05)" },
    forest: { leaf:"rgba(245,239,226,0.15)", leafSm:"rgba(245,239,226,0.11)", herb:"rgba(245,239,226,0.13)", fl:"rgba(192,139,58,0.15)", flD:"rgba(192,139,58,0.22)", flSt:"rgba(245,239,226,0.10)", dot:"rgba(245,239,226,0.06)", tL:"rgba(245,239,226,0.09)", h:"rgba(245,239,226,0.05)" },
    gold: { leaf:"rgba(35,30,20,0.16)", leafSm:"rgba(35,30,20,0.12)", herb:"rgba(35,30,20,0.14)", fl:"rgba(245,239,226,0.18)", flD:"rgba(245,239,226,0.28)", flSt:"rgba(35,30,20,0.10)", dot:"rgba(35,30,20,0.07)", tL:"rgba(35,30,20,0.10)", h:"rgba(35,30,20,0.06)" },
  };
  return v[variant] || v.cream;
}

function PatternBg({ variant = "cream", id }) {
  const c = patternColors(variant);
  const patId = id || ("hpat-" + variant);
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={patId} x="0" y="0" width="200" height="160" patternUnits="userSpaceOnUse">
          <g transform="translate(25,30) rotate(-25)" fill="none" stroke={c.leaf} strokeWidth="1.2" strokeLinecap="round">
            <path d="M0,0 C3,-6 6,-14 0,-28 C-6,-14 -3,-6 0,0" /><line x1="0" y1="0" x2="0" y2="-28" strokeWidth="0.7" />
          </g>
          <g transform="translate(35,28) rotate(10)" fill="none" stroke={c.leafSm} strokeWidth="1" strokeLinecap="round">
            <path d="M0,0 C2,-4 4,-8 0,-18 C-4,-8 -2,-4 0,0" /><line x1="0" y1="0" x2="0" y2="-18" strokeWidth="0.6" />
          </g>
          <g transform="translate(120,130)" fill="none" stroke={c.herb} strokeWidth="1" strokeLinecap="round">
            <path d="M0,0 C1,-10 -1,-22 2,-38" />
            <path d="M1,-8 C4,-11 4,-15 2,-13" /><path d="M1,-8 C-2,-11 -2,-15 0,-13" />
            <path d="M0,-16 C3,-19 3,-23 1,-21" /><path d="M0,-16 C-3,-19 -3,-23 -1,-21" />
            <path d="M1,-25 C3,-27 3,-30 2,-29" /><path d="M1,-25 C-1,-27 -1,-30 0,-29" />
          </g>
          <circle cx="170" cy="40" r="2.5" fill={c.fl} />
          <circle cx="170" cy="40" r="0.8" fill={c.flD} />
          <g transform="translate(170,40)" fill="none" stroke={c.flSt} strokeWidth="0.7" strokeLinecap="round">
            <path d="M0,3 C0,10 -1,18 1,28" />
          </g>
          <circle cx="80" cy="70" r="1.2" fill={c.dot} />
          <circle cx="85" cy="75" r="0.7" fill={c.dot} />
          <circle cx="150" cy="100" r="0.9" fill={c.dot} />
          <circle cx="55" cy="120" r="1.3" fill={c.dot} />
          <g transform="translate(95,20) rotate(40)" fill="none" stroke={c.tL} strokeWidth="0.9" strokeLinecap="round">
            <path d="M0,0 C1.5,-3 3,-7 0,-14 C-3,-7 -1.5,-3 0,0" /><line x1="0" y1="0" x2="0" y2="-14" strokeWidth="0.5" />
          </g>
          <g transform="translate(55,95) rotate(-15)" stroke={c.h} strokeWidth="0.6">
            <line x1="0" y1="0" x2="6" y2="0" /><line x1="0" y1="3" x2="6" y2="3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={"url(#" + patId + ")"} />
    </svg>
  );
}

// Stamp logo — loads SVG via fetch, renders inline with controllable fill
function StampLogo({ size = 36, color = "var(--espresso)", style = {} }) {
  const [svgMarkup, setSvgMarkup] = React.useState(null);
  React.useEffect(() => {
    const stampUrl = (window.__resources && window.__resources.stampSvg) || "assets/stamp.svg";
    fetch(stampUrl).then(r => r.text()).then(t => {
      const clean = t.replace(/<\?xml[^?]*\?>/, "").replace(/<svg/, '<svg style="fill:currentColor;width:100%;height:100%"');
      setSvgMarkup(clean);
    });
  }, []);
  if (!svgMarkup) return <div style={{ width: size, height: size, ...style }} />;
  return (
    <div
      style={{ width: size, height: size, color: color, flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

Object.assign(window, { PatternBg, StampLogo });
