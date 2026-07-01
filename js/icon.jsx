// Lucide icon → React, via the lucide UMD global (window.lucide).
// The original site uses lucide-react; window.lucide.icons[name] is the same
// icon node data: an array of [tag, attrs] child tuples.
function Icon({ name, size = 16, color = "currentColor", strokeWidth = 1.75, style }) {
  const def = window.lucide && window.lucide.icons && window.lucide.icons[name];
  const children = (def && def[2]) || [];
  return React.createElement(
    "svg",
    {
      width: size, height: size, viewBox: "0 0 24 24",
      fill: "none", stroke: color, strokeWidth,
      strokeLinecap: "round", strokeLinejoin: "round",
      style, "aria-hidden": "true",
    },
    children.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }))
  );
}

window.Icon = Icon;
