/* @ds-bundle: {"format":3,"namespace":"PrLavriDesignSystem_166249","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"AccommodationCard","sourcePath":"components/content/AccommodationCard.jsx"},{"name":"RatingStars","sourcePath":"components/data/RatingStars.jsx"},{"name":"StatBadge","sourcePath":"components/data/StatBadge.jsx"},{"name":"FeatureChip","sourcePath":"components/feedback/FeatureChip.jsx"},{"name":"TestimonialCard","sourcePath":"components/feedback/TestimonialCard.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"33024a46b4a8","components/content/AccommodationCard.jsx":"82dab131b951","components/data/RatingStars.jsx":"193801611cd3","components/data/StatBadge.jsx":"21ab3d3d2692","components/feedback/FeatureChip.jsx":"63092d557480","components/feedback/TestimonialCard.jsx":"a9751878653a","components/forms/Field.jsx":"19d1432919b8","components/typography/Eyebrow.jsx":"4f063b584489","components/typography/SectionHeading.jsx":"8c807b5c421d","ui_kits/website/Animations.jsx":"c87b79e8c0da","ui_kits/website/Blog.jsx":"8388f44cd252","ui_kits/website/Icon.jsx":"57448b73bf9c","ui_kits/website/Modal.jsx":"b0627c637035","ui_kits/website/Pattern.jsx":"d45f59d30839","ui_kits/website/SectionsBottom.jsx":"f75c25d1024f","ui_kits/website/SectionsTop.jsx":"0688cae0d6cd","ui_kits/website/data.js":"86c57e82ad94"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrLavriDesignSystem_166249 = window.PrLavriDesignSystem_166249 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Pr Lavrič — Button
 * Sharp-cornered, Jost, letter-spaced. The brand's primary button is
 * forest green and darkens to espresso on hover (not a tint).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "light",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      padding: "0.5rem 1.25rem",
      fontSize: "0.8125rem"
    },
    md: {
      padding: "0.75rem 1.75rem",
      fontSize: "0.875rem"
    },
    lg: {
      padding: "1rem 2.5rem",
      fontSize: "0.875rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    width: fullWidth ? "100%" : "auto",
    border: "1px solid transparent",
    borderRadius: 0,
    fontFamily: "var(--font-sans, 'Jost', sans-serif)",
    fontWeight: 500,
    letterSpacing: "0.03em",
    lineHeight: 1.2,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color 300ms ease, color 300ms ease, border-color 300ms ease, gap 200ms ease",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? "var(--foreground, #231E14)" : "var(--primary, #3B5440)",
      color: "var(--primary-foreground, #F5EFE2)"
    },
    secondary: {
      background: hover ? "var(--clay, #CFC7B4)" : "var(--secondary, #E8DECA)",
      color: "var(--secondary-foreground, #231E14)"
    },
    outline: {
      background: "transparent",
      color: tone === "dark" ? "var(--primary-foreground, #F5EFE2)" : "var(--primary, #3B5440)",
      borderColor: tone === "dark" ? hover ? "var(--primary-foreground, #F5EFE2)" : "rgba(245,239,226,0.45)" : hover ? "var(--foreground, #231E14)" : "var(--primary, #3B5440)"
    },
    ghost: {
      background: "transparent",
      color: "var(--accent, #C08B3A)",
      gap: hover ? "0.75rem" : "0.5rem",
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/RatingStars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — RatingStars
 * Row of small filled stars in accent gold. Matches the testimonial cards.
 */
function RatingStars({
  value = 5,
  max = 5,
  size = 11,
  style,
  ...rest
}) {
  const Star = ({
    filled
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": `${value} of ${max} stars`,
    style: {
      display: "inline-flex",
      gap: "0.25rem",
      color: "var(--accent, #C08B3A)",
      ...style
    }
  }, rest), Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    filled: i < value
  })));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — StatBadge
 * The floating accent block that overlaps imagery (e.g. "35 let gostoljubja").
 * A solid color slab — gold or forest — with a serif number and a tracked caption.
 */
function StatBadge({
  value,
  label,
  tone = "gold",
  floating = false,
  style,
  ...rest
}) {
  const tones = {
    gold: {
      background: "var(--accent, #C08B3A)",
      num: "var(--foreground, #231E14)",
      cap: "rgba(35,30,20,0.6)"
    },
    forest: {
      background: "var(--primary, #3B5440)",
      num: "var(--primary-foreground, #F5EFE2)",
      cap: "rgba(245,239,226,0.6)"
    },
    ink: {
      background: "var(--foreground, #231E14)",
      num: "var(--primary-foreground, #F5EFE2)",
      cap: "rgba(245,239,226,0.5)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-block",
      background: t.background,
      padding: "1.75rem 2rem",
      boxShadow: floating ? "var(--shadow-float, 0 14px 36px rgba(35,30,20,0.18))" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1,
      color: t.num,
      marginBottom: "0.35rem"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "10px",
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: t.cap
    }
  }, label));
}
Object.assign(__ds_scope, { StatBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FeatureChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — FeatureChip
 * Small sharp-cornered chip on a sand fill with a hairline border and a tiny
 * gold check — used for amenity lists ("3 guest rooms", "Valley views").
 */
function FeatureChip({
  children,
  check = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.25rem 0.75rem",
      background: "var(--secondary, #E8DECA)",
      border: "1px solid var(--border, rgba(35,30,20,0.12))",
      borderRadius: 0,
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "0.75rem",
      color: "var(--foreground, #231E14)",
      opacity: 0.85,
      ...style
    }
  }, rest), check ? /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent, #C08B3A)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null, children);
}
Object.assign(__ds_scope, { FeatureChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FeatureChip.jsx", error: String((e && e.message) || e) }); }

// components/content/AccommodationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — AccommodationCard
 * The signature listing card: a horizontal split of a zooming photo and a
 * cream body with eyebrow, serif title, italic tagline, description, feature
 * chips, and a price/CTA footer rule. Border warms to gold on hover and the
 * image scales up gently.
 */
function AccommodationCard({
  image,
  imageAlt = "",
  eyebrow,
  title,
  tagline,
  description,
  features = [],
  price,
  cta = "Galerija & podrobnosti",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 440px) 1fr",
      background: "var(--card, #FAF6EC)",
      border: `1px solid ${hover ? "rgba(192,139,58,0.5)" : "var(--border, rgba(35,30,20,0.12))"}`,
      boxShadow: hover ? "var(--shadow-card, 0 8px 24px rgba(35,30,20,0.08))" : "none",
      cursor: onClick ? "pointer" : "default",
      transition: "border-color 300ms ease, box-shadow 300ms ease",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--secondary, #E8DECA)",
      minHeight: 240
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform 700ms var(--ease-out, cubic-bezier(0.16,1,0.3,1))"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "10px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--accent, #C08B3A)",
      marginBottom: "1.25rem"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      fontWeight: 400,
      fontSize: "1.875rem",
      color: "var(--foreground, #231E14)",
      margin: "0 0 0.5rem"
    }
  }, title), tagline ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      fontStyle: "italic",
      fontSize: "0.875rem",
      color: "var(--muted-foreground, #6B6044)",
      margin: "0 0 1.25rem"
    }
  }, tagline) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "rgba(35,30,20,0.6)",
      margin: "0 0 1.75rem",
      maxWidth: "30rem"
    }
  }, description) : null, features.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.75rem"
    }
  }, features.map(f => /*#__PURE__*/React.createElement(__ds_scope.FeatureChip, {
    key: f
  }, f))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "1.25rem",
      borderTop: "1px solid var(--border, rgba(35,30,20,0.12))"
    }
  }, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      color: "var(--foreground, #231E14)"
    }
  }, price) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: hover ? "0.75rem" : "0.5rem",
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "0.875rem",
      color: "var(--accent, #C08B3A)",
      transition: "gap 200ms ease"
    }
  }, cta, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))))));
}
Object.assign(__ds_scope, { AccommodationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AccommodationCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — TestimonialCard
 * Cream card, hairline border, oversized serif quotation mark, gold stars,
 * italic Playfair quote, and an attribution rule. Hovers to a gold border.
 */
function TestimonialCard({
  quote,
  name,
  origin,
  stars = 5,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--card, #FAF6EC)",
      border: `1px solid ${hover ? "rgba(192,139,58,0.4)" : "var(--border, rgba(35,30,20,0.12))"}`,
      padding: "2.5rem",
      transition: "border-color 300ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      fontSize: "72px",
      lineHeight: 0.75,
      color: "rgba(192,139,58,0.25)",
      marginBottom: "1.25rem",
      userSelect: "none"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement(__ds_scope.RatingStars, {
    value: stars,
    style: {
      marginBottom: "1.5rem"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif, 'Playfair Display', serif)",
      fontStyle: "italic",
      fontSize: "0.95rem",
      lineHeight: 1.85,
      color: "rgba(35,30,20,0.65)",
      flex: 1,
      margin: "0 0 2rem"
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "1.5rem",
      borderTop: "1px solid var(--border, rgba(35,30,20,0.12))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontWeight: 500,
      fontSize: "0.875rem",
      color: "var(--foreground, #231E14)"
    }
  }, name), origin ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "0.75rem",
      letterSpacing: "0.05em",
      color: "var(--muted-foreground, #6B6044)",
      marginTop: "0.25rem"
    }
  }, origin) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — Field
 * A labelled form control. The label is a tracked uppercase Jost micro-label;
 * the control is a sand-filled, sharp-cornered input whose border turns gold
 * on focus. Renders <input>, <textarea>, or <select> via `as`.
 */
function Field({
  label,
  as = "input",
  options = [],
  placeholder,
  rows = 5,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const controlStyle = {
    width: "100%",
    background: "var(--input-background, #EDE5D4)",
    border: `1px solid ${focus ? "var(--accent, #C08B3A)" : "var(--border, rgba(35,30,20,0.12))"}`,
    borderRadius: 0,
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-sans, 'Jost', sans-serif)",
    fontSize: "0.875rem",
    color: "var(--foreground, #231E14)",
    outline: "none",
    transition: "border-color 200ms ease",
    boxSizing: "border-box",
    ...inputStyle
  };
  const labelEl = label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "0.75rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--muted-foreground, #6B6044)",
      marginBottom: "0.5rem"
    }
  }, label) : null;
  const shared = {
    placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: controlStyle,
    ...rest
  };
  let control;
  if (as === "textarea") {
    control = /*#__PURE__*/React.createElement("textarea", _extends({
      rows: rows
    }, shared, {
      style: {
        ...controlStyle,
        resize: "none"
      }
    }));
  } else if (as === "select") {
    control = /*#__PURE__*/React.createElement("select", shared, placeholder ? /*#__PURE__*/React.createElement("option", {
      value: ""
    }, placeholder) : null, options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
      key: o
    }, o) : /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label)));
  } else {
    control = /*#__PURE__*/React.createElement("input", shared);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, labelEl, control);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — Eyebrow
 * The all-caps, wide-tracked micro-label in Jost that sits above nearly
 * every section heading. Optionally flanked by hairline rules (centered intros).
 */
function Eyebrow({
  children,
  tone = "accent",
  rules = false,
  align = "left",
  style,
  ...rest
}) {
  const colors = {
    accent: "var(--accent, #C08B3A)",
    muted: "var(--muted-foreground, #6B6044)",
    light: "rgba(245,239,226,0.55)"
  };
  const label = /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-sans, 'Jost', sans-serif)",
      fontSize: "10px",
      fontWeight: 400,
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: colors[tone],
      whiteSpace: "nowrap",
      ...(!rules ? style : null)
    }
  }, !rules ? rest : {}), children);
  if (!rules) return label;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      justifyContent: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: "1 1 0",
      maxWidth: 100,
      background: "var(--border, rgba(35,30,20,0.12))"
    }
  }), label, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: "1 1 0",
      maxWidth: 100,
      background: "var(--border, rgba(35,30,20,0.12))"
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pr Lavrič — SectionHeading
 * Hero/display sizes use Kalam (handwritten); section/sub sizes use
 * Playfair Display (serif). Emphasis fragments are set in italic via
 * the <em> tag — the signature editorial move.
 */
function SectionHeading({
  children,
  emphasis,
  as = "h2",
  size = "section",
  tone = "ink",
  align = "left",
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    hero: "clamp(3rem, 8vw, 6rem)",
    display: "clamp(2rem, 4vw, 3.2rem)",
    section: "clamp(2rem, 4vw, 3rem)",
    sub: "clamp(1.8rem, 3.5vw, 2.8rem)"
  };
  const colors = {
    ink: "var(--foreground, #231E14)",
    light: "var(--primary-foreground, #F5EFE2)"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: size === "hero" || size === "display" ? "var(--font-display, 'Kalam', cursive)" : "var(--font-serif, 'Playfair Display', serif)",
      fontWeight: size === "hero" || size === "display" ? 700 : 400,
      fontSize: sizes[size],
      lineHeight: 1.08,
      color: colors[tone],
      margin: 0,
      textAlign: align,
      ...style
    }
  }, rest), children, emphasis ? /*#__PURE__*/React.createElement(React.Fragment, null, children ? /*#__PURE__*/React.createElement("br", null) : null, /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, emphasis)) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Animations.jsx
try { (() => {
// Pr Lavrič UI kit — scroll animations + decorative elements

// FadeIn — wraps content, fades in when scrolled into view
function FadeIn({
  children,
  delay = 0,
  direction = "up",
  style = {},
  className
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Check if already in view (for above-fold content)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -60px 0px"
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const offsets = {
    up: "translateY(28px)",
    down: "translateY(-28px)",
    left: "translateX(28px)",
    right: "translateX(-28px)",
    none: "none"
  };
  return React.createElement("div", {
    ref,
    className,
    style: {
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) translateX(0)" : offsets[direction] || offsets.up,
      transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) " + delay + "s, transform 0.9s cubic-bezier(0.16,1,0.3,1) " + delay + "s",
      willChange: "opacity, transform"
    }
  }, children);
}

// StampDivider — a small centered stamp mark used between sections
function StampDivider({
  color = "var(--border-strong)",
  size = 48
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem 3rem",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 120,
      height: 1,
      background: color,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement(StampLogo, {
    size: size,
    color: color,
    style: {
      opacity: 0.15
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 120,
      height: 1,
      background: color,
      opacity: 0.3
    }
  }));
}

// StampWatermark — a large faded stamp as section background
function StampWatermark({
  color = "var(--espresso)",
  opacity = 0.03,
  size = 400,
  position = "right"
}) {
  const posStyle = position === "right" ? {
    right: -size * 0.15,
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    left: -size * 0.15,
    top: "50%",
    transform: "translateY(-50%)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      ...posStyle,
      pointerEvents: "none",
      opacity,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement(StampLogo, {
    size: size,
    color: color
  }));
}
Object.assign(window, {
  FadeIn,
  StampDivider,
  StampWatermark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Animations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
// Pr Lavrič UI kit — Blog (Utrinki) section + CTA band
const bdsk = window.PrLavriDesignSystem_166249;
function Blog() {
  return /*#__PURE__*/React.createElement("section", {
    id: "blog",
    style: {
      padding: "5rem 3rem 7rem",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "cream",
    id: "pat-blog"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "4rem"
    }
  }, /*#__PURE__*/React.createElement(bdsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "From the farm journal"), /*#__PURE__*/React.createElement(bdsk.SectionHeading, {
    align: "center",
    emphasis: "stories"
  }, "Vera's"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "2.5rem"
    }
  }, window.blogPosts.map((post, i) => /*#__PURE__*/React.createElement(FadeIn, {
    key: post.id,
    delay: i * 0.12
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      overflow: "hidden",
      background: "var(--secondary)",
      marginBottom: "1.25rem",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img(post.photo, 700, 520),
    alt: post.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(1.04)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "0.625rem"
    }
  }, post.date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.3,
      color: "var(--foreground)",
      margin: "0 0 0.75rem"
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "rgba(35,30,20,0.55)",
      margin: 0
    }
  }, post.excerpt.length > 160 ? post.excerpt.substring(0, 160) + "…" : post.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "Read more ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 12,
    color: "var(--accent)"
  })))))))));
}
function CtaBand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "4rem 3rem",
      background: "var(--primary)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "forest",
    id: "pat-cta"
  }), /*#__PURE__*/React.createElement(StampWatermark, {
    color: "var(--cream)",
    opacity: 0.04,
    size: 320,
    position: "right"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "56rem",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement(bdsk.Eyebrow, {
    tone: "light",
    style: {
      display: "block",
      marginBottom: "1.25rem"
    }
  }, "Reservations open"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      color: "var(--cream)",
      lineHeight: 1.15,
      margin: "0 0 1rem"
    }
  }, "Join us ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "at the table")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "rgba(245,239,226,0.65)",
      maxWidth: "32rem",
      margin: "0 auto 2rem"
    }
  }, "Vera answers every inquiry personally, usually within a few hours. Tell us about your plans \u2014 she'd love to hear from you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(bdsk.Button, {
    variant: "outline",
    size: "lg",
    tone: "dark",
    onClick: () => onNav("contact")
  }, "Send an enquiry")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.35)",
      marginTop: "1.25rem"
    }
  }, "We respond within 24 hours \xB7 We speak Slovenian, English and German"))));
}
Object.assign(window, {
  Blog,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Lucide icon → React, via the lucide UMD global (window.lucide).
// The original site uses lucide-react; window.lucide.icons[name] is the same
// icon node data: an array of [tag, attrs] child tuples.
function Icon({
  name,
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  style
}) {
  const def = window.lucide && window.lucide.icons && window.lucide.icons[name];
  const children = def && def[2] || [];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style,
    "aria-hidden": "true"
  }, children.map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Modal.jsx
try { (() => {
// Pr Lavrič UI kit — accommodation full-page detail view
const mdsk = window.PrLavriDesignSystem_166249;
function AccommodationModal({
  acc,
  onClose,
  onBook
}) {
  // Scroll to top on open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: "var(--background)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(245,239,226,0.96)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border)",
      padding: "0 3rem",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 16,
    color: "var(--muted-foreground)"
  }), " Back to accommodation"), /*#__PURE__*/React.createElement(mdsk.Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Send enquiry")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "60vh",
      minHeight: 400,
      overflow: "hidden",
      background: "var(--secondary)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: acc.image,
    alt: acc.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(35,30,20,0.5) 0%, transparent 50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "3rem",
      left: "3rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--gold)",
      display: "block",
      marginBottom: "0.75rem"
    }
  }, acc.label), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2rem, 4vw, 3rem)",
      color: "var(--cream)",
      margin: 0,
      lineHeight: 1.1
    }
  }, acc.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "56rem",
      margin: "0 auto",
      padding: "4rem 3rem 6rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: "4rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "1.25rem",
      lineHeight: 1.6,
      color: "var(--muted-foreground)",
      margin: "0 0 2rem"
    }
  }, acc.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      lineHeight: 1.85,
      color: "rgba(35,30,20,0.65)",
      margin: "0 0 2.5rem"
    }
  }, acc.description), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "1rem"
    }
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "2.5rem"
    }
  }, acc.features.map(f => /*#__PURE__*/React.createElement(mdsk.FeatureChip, {
    key: f
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.75rem"
    }
  }, [acc.image, window.img("photo-1575403071235-5dcd06cbf169", 600, 400)].map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: "4/3",
      overflow: "hidden",
      background: "var(--secondary)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: acc.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96,
      background: "var(--card)",
      border: "1px solid var(--border)",
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.5rem",
      color: "var(--foreground)",
      marginBottom: "0.5rem"
    }
  }, acc.price), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      color: "var(--muted-foreground)",
      lineHeight: 1.6,
      margin: "0 0 1.5rem"
    }
  }, "Includes breakfast from Vera's wood-fired kitchen. Minimum 2 nights."), /*#__PURE__*/React.createElement(mdsk.Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook,
    style: {
      width: "100%"
    }
  }, "Send enquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "var(--muted-foreground)",
      textAlign: "center",
      marginTop: "0.75rem"
    }
  }, "We respond within 24 hours"))))));
}
window.AccommodationModal = AccommodationModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pattern.jsx
try { (() => {
// Heritage mix pattern overlay — renders an absolute-positioned SVG pattern
// Usage: <PatternBg variant="cream" /> inside a position:relative container

function patternColors(variant) {
  const v = {
    cream: {
      leaf: "rgba(59,84,64,0.18)",
      leafSm: "rgba(59,84,64,0.14)",
      herb: "rgba(107,96,68,0.15)",
      fl: "rgba(192,139,58,0.14)",
      flD: "rgba(192,139,58,0.22)",
      flSt: "rgba(107,96,68,0.12)",
      dot: "rgba(35,30,20,0.07)",
      tL: "rgba(59,84,64,0.12)",
      h: "rgba(35,30,20,0.06)"
    },
    sand: {
      leaf: "rgba(59,84,64,0.16)",
      leafSm: "rgba(59,84,64,0.12)",
      herb: "rgba(107,96,68,0.14)",
      fl: "rgba(192,139,58,0.13)",
      flD: "rgba(192,139,58,0.20)",
      flSt: "rgba(107,96,68,0.11)",
      dot: "rgba(35,30,20,0.06)",
      tL: "rgba(59,84,64,0.10)",
      h: "rgba(35,30,20,0.05)"
    },
    espresso: {
      leaf: "rgba(245,239,226,0.16)",
      leafSm: "rgba(245,239,226,0.12)",
      herb: "rgba(245,239,226,0.14)",
      fl: "rgba(192,139,58,0.16)",
      flD: "rgba(192,139,58,0.24)",
      flSt: "rgba(245,239,226,0.10)",
      dot: "rgba(245,239,226,0.06)",
      tL: "rgba(245,239,226,0.10)",
      h: "rgba(245,239,226,0.05)"
    },
    forest: {
      leaf: "rgba(245,239,226,0.15)",
      leafSm: "rgba(245,239,226,0.11)",
      herb: "rgba(245,239,226,0.13)",
      fl: "rgba(192,139,58,0.15)",
      flD: "rgba(192,139,58,0.22)",
      flSt: "rgba(245,239,226,0.10)",
      dot: "rgba(245,239,226,0.06)",
      tL: "rgba(245,239,226,0.09)",
      h: "rgba(245,239,226,0.05)"
    },
    gold: {
      leaf: "rgba(35,30,20,0.16)",
      leafSm: "rgba(35,30,20,0.12)",
      herb: "rgba(35,30,20,0.14)",
      fl: "rgba(245,239,226,0.18)",
      flD: "rgba(245,239,226,0.28)",
      flSt: "rgba(35,30,20,0.10)",
      dot: "rgba(35,30,20,0.07)",
      tL: "rgba(35,30,20,0.10)",
      h: "rgba(35,30,20,0.06)"
    }
  };
  return v[variant] || v.cream;
}
function PatternBg({
  variant = "cream",
  id
}) {
  const c = patternColors(variant);
  const patId = id || "hpat-" + variant;
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: patId,
    x: "0",
    y: "0",
    width: "200",
    height: "160",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(25,30) rotate(-25)",
    fill: "none",
    stroke: c.leaf,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 C3,-6 6,-14 0,-28 C-6,-14 -3,-6 0,0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "-28",
    strokeWidth: "0.7"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(35,28) rotate(10)",
    fill: "none",
    stroke: c.leafSm,
    strokeWidth: "1",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 C2,-4 4,-8 0,-18 C-4,-8 -2,-4 0,0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "-18",
    strokeWidth: "0.6"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(120,130)",
    fill: "none",
    stroke: c.herb,
    strokeWidth: "1",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 C1,-10 -1,-22 2,-38"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1,-8 C4,-11 4,-15 2,-13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1,-8 C-2,-11 -2,-15 0,-13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,-16 C3,-19 3,-23 1,-21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,-16 C-3,-19 -3,-23 -1,-21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1,-25 C3,-27 3,-30 2,-29"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1,-25 C-1,-27 -1,-30 0,-29"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "170",
    cy: "40",
    r: "2.5",
    fill: c.fl
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "170",
    cy: "40",
    r: "0.8",
    fill: c.flD
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(170,40)",
    fill: "none",
    stroke: c.flSt,
    strokeWidth: "0.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,3 C0,10 -1,18 1,28"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "70",
    r: "1.2",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "85",
    cy: "75",
    r: "0.7",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "100",
    r: "0.9",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "55",
    cy: "120",
    r: "1.3",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(95,20) rotate(40)",
    fill: "none",
    stroke: c.tL,
    strokeWidth: "0.9",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 C1.5,-3 3,-7 0,-14 C-3,-7 -1.5,-3 0,0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "-14",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(55,95) rotate(-15)",
    stroke: c.h,
    strokeWidth: "0.6"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "6",
    y2: "0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "3",
    x2: "6",
    y2: "3"
  })))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#" + patId + ")"
  }));
}

// Stamp logo — loads SVG via fetch, renders inline with controllable fill
function StampLogo({
  size = 36,
  color = "var(--espresso)",
  style = {}
}) {
  const [svgMarkup, setSvgMarkup] = React.useState(null);
  React.useEffect(() => {
    const stampUrl = window.__resources && window.__resources.stampSvg || "stamp.svg";
    fetch(stampUrl).then(r => r.text()).then(t => {
      // Strip XML declaration and add fill
      const clean = t.replace(/<\?xml[^?]*\?>/, "").replace(/<svg/, '<svg style="fill:currentColor;width:100%;height:100%"');
      setSvgMarkup(clean);
    });
  }, []);
  if (!svgMarkup) return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      color: color,
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svgMarkup
    }
  });
}
Object.assign(window, {
  PatternBg,
  StampLogo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pattern.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsBottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Pr Lavrič UI kit — Accommodations, Food, Surroundings, Testimonials, Gallery, Contact, Footer
const dsk = window.PrLavriDesignSystem_166249;
function Accommodations({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "accommodations",
    style: {
      padding: "5rem 0 7rem",
      background: "rgba(232,222,202,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3rem"
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "4rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "Accommodation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    emphasis: "to rest"
  }, "Your place"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "var(--muted-foreground)",
      maxWidth: "24rem",
      textAlign: "right"
    }
  }, "Three distinct ways to stay \u2014 from century-old stone rooms to forest cabins. Each with Vera's warmth within reach.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, window.accommodations.map((a, i) => /*#__PURE__*/React.createElement(FadeIn, {
    key: a.id,
    delay: i * 0.1
  }, /*#__PURE__*/React.createElement(dsk.AccommodationCard, _extends({}, a, {
    eyebrow: a.label,
    onClick: () => onOpen(a)
  })))))));
}
function Food() {
  const items = [["Bread", "Baked in the wood-fired oven"], ["Honey", "From our own hives"], ["Vegetables", "From the garden by the house"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "food",
    style: {
      padding: "5rem 3rem 7rem",
      background: "var(--primary)",
      color: "var(--cream)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "forest",
    id: "pat-food"
  }), /*#__PURE__*/React.createElement(StampWatermark, {
    color: "var(--cream)",
    opacity: 0.025,
    size: 380,
    position: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 480px",
      gap: "5rem",
      alignItems: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    tone: "light",
    style: {
      display: "block",
      marginBottom: "1.5rem"
    }
  }, "Farm table"), /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    tone: "light",
    emphasis: "tells a story",
    style: {
      marginBottom: "2rem"
    }
  }, "Food that"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "rgba(245,239,226,0.65)"
    }
  }, /*#__PURE__*/React.createElement("p", null, "Breakfast at Pr Lavri\u010D is not a service \u2014 it is an event. The bread has been baking since before you woke up, in the old wood-fired oven that Vera has kept alive for thirty years. The honey is from the farm's own hives."), /*#__PURE__*/React.createElement("p", null, "Vera cooks as she has always cooked: from what the garden offers, what the season allows, and what simply feels right. Nothing is imported when local is better.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1.5rem",
      paddingTop: "2.5rem",
      borderTop: "1px solid rgba(245,239,226,0.15)"
    }
  }, items.map(([t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.25rem",
      marginBottom: "0.375rem",
      color: "var(--cream)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      lineHeight: 1.4,
      color: "rgba(245,239,226,0.4)"
    }
  }, s)))))), /*#__PURE__*/React.createElement(FadeIn, {
    delay: 0.15,
    direction: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3/4",
      overflow: "hidden",
      background: "rgba(59,84,64,0.4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img("photo-1762186541239-5eee85c08c57", 600, 800),
    alt: "Antique farmhouse kitchen",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3/4",
      overflow: "hidden",
      background: "rgba(59,84,64,0.4)",
      marginTop: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img("photo-1780246033915-a1ee941742e4", 600, 800),
    alt: "Rustic dining room with wooden beams",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))));
}
function Surroundings() {
  const cards = [{
    icon: "MapPin",
    label: "GEOSS",
    title: "Geographic centre",
    desc: "Pr Lavrič stands minutes from GEOSS — the surveyed geographic centre of Slovenia. A quiet stone marker in the forest. A rare thing to walk to before breakfast.",
    photo: "photo-1689253790918-107ef1fa9137"
  }, {
    icon: "Mountain",
    label: "Hiking",
    title: "Trails from the doorstep",
    desc: "Marked trails begin at the farm gate. From gentle valley walks to ridge-line hikes with views across half of Slovenia — something for every pace.",
    photo: "photo-1765888830290-6bd73498d6d4"
  }, {
    icon: "Leaf",
    label: "Farm life",
    title: "Sheep, hens and the garden",
    desc: "The farm is a working farm. Sheep in the lower field, hens around the yard, a kitchen garden that changes week to week. Guests are welcome to walk among it all.",
    photo: "photo-1601919297600-8ffbfd160d2d"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "surroundings",
    style: {
      padding: "5rem 3rem 7rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "4rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "Surroundings"), /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    align: "center",
    emphasis: "of Slovenia"
  }, "In the very heart"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "3.5rem"
    }
  }, cards.map((c, ci) => /*#__PURE__*/React.createElement(FadeIn, {
    key: c.label,
    delay: ci * 0.12
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      overflow: "hidden",
      background: "var(--secondary)",
      marginBottom: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img(c.photo, 700, 520),
    alt: c.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 13,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, c.label)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "var(--foreground)",
      margin: "0 0 0.75rem"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "rgba(35,30,20,0.55)",
      margin: 0
    }
  }, c.desc)))))));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 3rem 7rem",
      background: "rgba(232,222,202,0.4)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "sand",
    id: "pat-test"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "4rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "Guests say"), /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    align: "center"
  }, /*#__PURE__*/React.createElement("em", null, "Words"), " from our guests"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "2rem"
    }
  }, window.testimonials.map((t, ti) => /*#__PURE__*/React.createElement(FadeIn, {
    key: t.name,
    delay: ti * 0.1
  }, /*#__PURE__*/React.createElement(dsk.TestimonialCard, t))))));
}
function Gallery({
  onLightbox
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      padding: "5rem 3rem 7rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "3rem",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "Gallery"), /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    size: "sub"
  }, "Pr Lavri\u010D ", /*#__PURE__*/React.createElement("em", null, "in pictures"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "var(--muted-foreground)",
      maxWidth: "20rem"
    }
  }, "Moments from the farm, the table, and the valley beyond."))), /*#__PURE__*/React.createElement(FadeIn, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / 3",
      gridRow: "1 / 3",
      aspectRatio: "1.05",
      overflow: "hidden",
      background: "var(--secondary)",
      cursor: "pointer"
    },
    onClick: () => onLightbox(0)
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img(window.galleryPhotos[0], 1200, 800),
    alt: "Panoramic Slovenian meadows",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(1.03)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  })), window.galleryPhotos.slice(1).map((id, i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      aspectRatio: "1",
      overflow: "hidden",
      background: "var(--secondary)",
      cursor: "pointer"
    },
    onClick: () => onLightbox(i + 1)
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img(id, 600, 600),
    alt: "Pr Lavri\u010D",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(1.03)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  })))))));
}
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const photo = window.galleryPhotos[index];
  const total = window.galleryPhotos.length;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "rgba(35,30,20,0.92)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClose();
    },
    style: {
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "X",
    size: 24,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onPrev();
    },
    style: {
      position: "absolute",
      left: "1.5rem",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      opacity: index > 0 ? 1 : 0.3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 32,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onNext();
    },
    style: {
      position: "absolute",
      right: "1.5rem",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      opacity: index < total - 1 ? 1 : 0.3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 32,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("img", {
    onClick: e => e.stopPropagation(),
    src: window.img(photo, 1600, 1100),
    alt: "Pr Lavri\u010D gallery",
    style: {
      maxWidth: "90vw",
      maxHeight: "85vh",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "1.5rem",
      left: "50%",
      transform: "translateX(-50%)",
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.5)"
    }
  }, index + 1, " / ", total));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "5rem 3rem 7rem",
      background: "rgba(232,222,202,0.4)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "sand",
    id: "pat-contact"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: "6rem",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(dsk.Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1rem"
    }
  }, "Reservations & Enquiries"), /*#__PURE__*/React.createElement(dsk.SectionHeading, {
    emphasis: "we look forward to you",
    style: {
      marginBottom: "2.5rem"
    }
  }, "Write to us,"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "3rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      background: "var(--primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 20,
    color: "var(--cream)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "var(--foreground)",
      margin: 0
    }
  }, "Thank you for your enquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--muted-foreground)",
      lineHeight: 1.7,
      margin: 0
    }
  }, "Vera will respond within 24 hours. We look forward to welcoming you at Pr Lavri\u010D.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.Field, {
    label: "Full name",
    placeholder: "Jane Smith",
    required: true
  }), /*#__PURE__*/React.createElement(dsk.Field, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement(dsk.Field, {
    as: "select",
    label: "Accommodation",
    placeholder: "Which accommodation?",
    options: ["Rooms in the old farmhouse", "Glamping cabin", "Campervan pitch", "Not sure yet"]
  }), /*#__PURE__*/React.createElement(dsk.Field, {
    label: "Stay dates",
    placeholder: "e.g. 12\u201317 July 2025"
  })), /*#__PURE__*/React.createElement(dsk.Field, {
    as: "textarea",
    label: "Message",
    rows: 5,
    placeholder: "Tell us a little about yourself or your group\u2026"
  }), /*#__PURE__*/React.createElement(dsk.Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      alignSelf: "flex-start"
    }
  }, "Send enquiry")))), /*#__PURE__*/React.createElement(FadeIn, {
    delay: 0.15,
    direction: "left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "7rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--primary)",
      padding: "2rem",
      marginBottom: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 36,
    color: "var(--accent)",
    style: {
      marginBottom: "0.75rem"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      color: "rgba(245,239,226,0.8)",
      margin: "0 0 0.25rem"
    }
  }, "Pr Lavri\u010D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.45)",
      margin: "0 0 0.125rem"
    }
  }, "46\xB06\u203212\u2033N 14\xB048\u203236\u2033E"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.45)",
      margin: 0
    }
  }, "700 m n.m. \xB7 Osrednja Slovenija")))), [["Phone", "+386 41 000 000"], ["Mail", "info@prlavric.si"], ["MapPin", "Osrednja Slovenija, 700 m n.m."]].map(([ic, txt]) => /*#__PURE__*/React.createElement("div", {
    key: txt,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 14,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "rgba(35,30,20,0.65)"
    }
  }, txt))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "var(--muted-foreground)",
      marginTop: "1.5rem"
    }
  }, "Vera is usually the one who answers the phone. She would love to hear about your plans and tell you what is growing in the garden this week.")))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--foreground)",
      color: "var(--cream)",
      padding: "4rem 3rem",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(PatternBg, {
    variant: "espresso",
    id: "pat-footer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "2.5rem",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement(StampLogo, {
    size: 56,
    color: "var(--cream)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "rgba(245,239,226,0.35)",
      margin: "0 0 0.25rem"
    }
  }, "Turisti\u010Dna kmetija"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "var(--cream)",
      margin: 0
    }
  }, "Pr Lavri\u010D"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      color: "rgba(245,239,226,0.45)",
      margin: 0
    }
  }, "A second home in the heart of Slovenia.", /*#__PURE__*/React.createElement("br", null), "Eco farm since 1860.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "rgba(245,239,226,0.35)",
      margin: "0 0 1.25rem"
    }
  }, "Navigation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.625rem"
    }
  }, window.navLinks.map(([l, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "rgba(245,239,226,0.5)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "rgba(245,239,226,0.35)",
      margin: "0 0 1.25rem"
    }
  }, "Follow us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.25rem"
    }
  }, ["Instagram", "Facebook"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: "rgba(245,239,226,0.5)",
      textDecoration: "none"
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "2rem",
      borderTop: "1px solid rgba(245,239,226,0.1)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.25)",
      margin: 0
    }
  }, "\xA9 2025 Eco Farm Pr Lavri\u010D. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      color: "rgba(245,239,226,0.15)",
      margin: 0
    }
  }, "Made with love in Slovenia"))));
}
Object.assign(window, {
  Accommodations,
  Food,
  Surroundings,
  Testimonials,
  Gallery,
  Lightbox,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsBottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsTop.jsx
try { (() => {
// Pr Lavrič UI kit — Nav, Hero, Intro, Story
const {
  Eyebrow,
  SectionHeading,
  Button,
  StatBadge
} = window.PrLavriDesignSystem_166249;
function Nav({
  scrolled,
  onNav
}) {
  const link = (label, id) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      color: scrolled ? "rgba(35,30,20,0.65)" : "rgba(245,239,226,0.8)",
      transition: "color 200ms"
    }
  }, label);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      background: scrolled ? "rgba(245,239,226,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 400ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3rem",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("hero"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      lineHeight: 1,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(StampLogo, {
    size: 36,
    color: scrolled ? "var(--espresso)" : "var(--cream)",
    style: {
      transition: "color 400ms"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: scrolled ? "var(--muted-foreground)" : "rgba(245,239,226,0.6)",
      transition: "color 400ms"
    }
  }, "Turisti\u010Dna kmetija"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: scrolled ? "var(--foreground)" : "var(--cream)",
      transition: "color 400ms"
    }
  }, "Pr Lavri\u010D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1.75rem"
    }
  }, window.navLinks.map(([l, id]) => link(l, id)), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    tone: scrolled ? "light" : "dark",
    onClick: () => onNav("contact")
  }, "Book now"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      position: "relative",
      minHeight: 640,
      height: "92vh",
      display: "flex",
      alignItems: "flex-end",
      paddingBottom: "5rem",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img("photo-1781077205398-541b542d4d84", 1920, 1080),
    alt: "Slovenian mountain meadow with traditional huts",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--hero-veil-vertical)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--hero-veil-horizontal)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3rem",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "48rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light",
    style: {
      display: "block",
      marginBottom: "1.75rem",
      letterSpacing: "0.4em"
    }
  }, "700m \xB7 Central Slovenia \xB7 Since 1860"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "hero",
    tone: "light",
    style: {
      marginBottom: "1.75rem"
    }
  }, "A second home", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "in the heart"), /*#__PURE__*/React.createElement("br", null), "of Slovenia"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "1.25rem",
      lineHeight: 1.7,
      color: "rgba(245,239,226,0.75)",
      maxWidth: "32rem",
      marginBottom: "2.5rem"
    }
  }, "An 1860 family farm. Wood-fired cooking. The most genuine hostess in Slovenia. This is Pr\xA0Lavri\u010D."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("accommodations")
  }, "View accommodation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    tone: "dark",
    onClick: () => onNav("story")
  }, "Our story")))));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "intro",
    style: {
      padding: "5rem 3rem"
    }
  }, /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "56rem",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rules: true,
    align: "center",
    tone: "muted",
    style: {
      marginBottom: "2.5rem"
    }
  }, "Eco Farm Pr Lavri\u010D"), /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    emphasis: "A home.",
    style: {
      marginBottom: "2rem"
    }
  }, "Not a hotel. Not a resort."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.125rem",
      lineHeight: 1.7,
      color: "var(--muted-foreground)",
      maxWidth: "42rem",
      margin: "0 auto"
    }
  }, "High in the hills above central Slovenia \u2014 where meadows meet the forest edge and the air carries pine and woodsmoke \u2014 a family farm has been quietly welcoming the world for over three decades."))));
}
function Story({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      padding: "5rem 3rem 7rem",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StampWatermark, {
    color: "var(--espresso)",
    opacity: 0.025,
    size: 450,
    position: "right"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "7rem",
      alignItems: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(FadeIn, {
    direction: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3/4",
      overflow: "hidden",
      background: "var(--secondary)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.img("photo-1764612526987-d198b6be0e2e", 900, 1200),
    alt: "The old Pr Lavri\u010D farmhouse",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -24,
      right: -32
    }
  }, /*#__PURE__*/React.createElement(StatBadge, {
    value: "35",
    label: "years of hospitality",
    tone: "gold",
    floating: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: -24,
      background: "var(--primary)",
      color: "var(--cream)",
      padding: "0.5rem 1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase"
    }
  }, "Since 1860")))), /*#__PURE__*/React.createElement(FadeIn, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "2rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: "block",
      marginBottom: "1.5rem"
    }
  }, "Our story"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display",
    emphasis: "heart of the house",
    style: {
      marginBottom: "2rem"
    }
  }, "Vera and the"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "rgba(35,30,20,0.65)"
    }
  }, /*#__PURE__*/React.createElement("p", null, "For thirty-five years, Vera has been the beating heart of this farm. Before she chose the mountain life, she stood in the great halls of state \u2014 serving world leaders at diplomatic dinners. She knew exactly how to do things well."), /*#__PURE__*/React.createElement("p", null, "But she chose this instead. An empty 1860 farmhouse. A garden that needed hands. A community that needed warmth. Slowly the old stone walls filled with laughter, with the smell of bread from the wood oven.")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      marginTop: "2.5rem",
      paddingLeft: "1.75rem",
      borderLeft: "2px solid var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "1.25rem",
      lineHeight: 1.6,
      color: "var(--foreground)",
      margin: 0
    }
  }, "\"I had the world's finest dining rooms. But I wanted a table where people felt truly at home.\""), /*#__PURE__*/React.createElement("cite", {
    style: {
      marginTop: "1rem",
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: "var(--muted-foreground)",
      fontStyle: "normal"
    }
  }, "\u2014 Vera Lavri\u010D, hostess")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("contact")
  }, "Get to know us ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 14
  })))))));
}
Object.assign(window, {
  Nav,
  Hero,
  Intro,
  Story
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsTop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Pr Lavrič — shared data + helpers for the UI kit
const img = (id, w, h) => `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`;
const navLinks = [["Story", "story"], ["Accommodation", "accommodations"], ["Farm table", "food"], ["Surroundings", "surroundings"], ["Gallery", "gallery"], ["Journal", "blog"], ["Contact", "contact"]];
const accommodations = [{
  id: "rooms",
  label: "Rooms",
  title: "The old farmhouse",
  tagline: "Sleep where history lives.",
  description: "Three guest rooms inside the original 1860 farmhouse — stone walls, hand-hewn timber beams, and linen hand-sewn by the family. Mornings begin with the smell of bread already baking downstairs.",
  features: ["3 guest rooms", "Shared terrace", "Valley views", "Homemade breakfast", "Wood-fired heating"],
  image: img("photo-1659279839707-44339462f937", 900, 1100),
  price: "From €65 / night"
}, {
  id: "glamping",
  label: "Glamping",
  title: "Forest cabins",
  tagline: "Nature's embrace with homely comfort.",
  description: "Two intimate wooden cabins perched among the trees — furnished simply but thoughtfully. You wake to birdsong and morning mist, then walk down to Vera's table where breakfast is already waiting.",
  features: ["2 private cabins", "Private deck", "Forest setting", "Outdoor fire pit"],
  image: img("photo-1575403071235-5dcd06cbf169", 900, 1100),
  price: "From €90 / night"
}, {
  id: "campervan",
  label: "Campervan",
  title: "Campervan pitch",
  tagline: "Freedom of the road, peace of the valley.",
  description: "A quiet pitch for one campervan tucked within the farm, with electrical hookup, fresh water, and access to the outdoor kitchen. Open valley views from the awning door, fresh eggs at first light.",
  features: ["Electrical hookup", "Fresh water", "WC & shower", "Outdoor kitchen"],
  image: img("photo-1617578324381-6155fbe640d9", 900, 1100),
  price: "From €35 / night"
}];
const testimonials = [{
  name: "Maria K.",
  origin: "Vienna, Austria",
  stars: 5,
  quote: "Vera's cooking alone is worth the journey. But it's her warmth — the way she remembers how you like your coffee — that makes you feel like you've come home. We've been back three times."
}, {
  name: "Thomas & Anna B.",
  origin: "Munich, Germany",
  stars: 5,
  quote: "We came for a weekend and stayed for a week. The silence, the views, the bread straight from the wood oven — there is nowhere else like Pr Lavrič. It is our second home in Slovenia."
}, {
  name: "James L.",
  origin: "Edinburgh, Scotland",
  stars: 5,
  quote: "I have stayed in boutique hotels all over Europe and nothing has matched this. 'Authentic' is a word that gets overused, but here it is simply true. Vera is extraordinary."
}];
const galleryPhotos = ["photo-1781077205398-541b542d4d84", "photo-1764612526987-d198b6be0e2e", "photo-1575403071235-5dcd06cbf169", "photo-1762186541239-5eee85c08c57", "photo-1780246033915-a1ee941742e4", "photo-1765888830290-6bd73498d6d4", "photo-1601919297600-8ffbfd160d2d", "photo-1659279839707-44339462f937"];
const blogPosts = [{
  id: "diplomat-to-farm",
  date: "May 2025",
  title: "From diplomatic halls to the farm table",
  excerpt: "Thirty years ago I traded crystal chandeliers for oil lamps, state banquets for a wood-fired oven. People thought I was mad. But every morning when I open the kitchen door and the valley is still wrapped in mist, I know — this was always the right table.",
  photo: "photo-1764612526987-d198b6be0e2e"
}, {
  id: "friendships",
  date: "April 2025",
  title: "Friendships the farm has made",
  excerpt: "A family from Munich has been coming every August for twelve years. Their children learned to milk goats here. Last summer the eldest brought his own daughter — three generations at our table. These are the moments that make a farmhouse a home.",
  photo: "photo-1601919297600-8ffbfd160d2d"
}, {
  id: "seasons",
  date: "March 2025",
  title: "Four seasons, one farm",
  excerpt: "In spring the meadows explode with wildflowers and the bees return to the hives. Summer brings long evenings on the terrace, autumn the smell of fermenting apples and wood being stacked. Winter is the quietest — just snow, smoke, and the sound of bread crust cracking in the oven.",
  photo: "photo-1781077205398-541b542d4d84"
}];
Object.assign(window, {
  img,
  navLinks,
  accommodations,
  testimonials,
  galleryPhotos,
  blogPosts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.AccommodationCard = __ds_scope.AccommodationCard;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.StatBadge = __ds_scope.StatBadge;

__ds_ns.FeatureChip = __ds_scope.FeatureChip;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
