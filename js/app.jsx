// Pr Lavrič — Main App component
// Assembles all sections into the full single-page website

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [lbIdx, setLbIdx] = React.useState(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 40);
    const target = el || window;
    target.addEventListener("scroll", onScroll);
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id) => {
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={ref} style={{ position: "relative", height: "100vh", overflowY: "auto" }}>
      <Nav scrolled={scrolled} onNav={nav} />
      <Hero onNav={nav} />
      <Intro />
      <Story onNav={nav} />
      <Accommodations onOpen={setActive} />
      <Food />
      <Surroundings />
      <CtaBand onNav={nav} />
      <Testimonials />
      <Blog />
      <Contact />
      <Gallery onLightbox={(i) => setLbIdx(i)} />
      <Footer onNav={nav} />
      {active && (
        <AccommodationModal
          acc={active}
          onClose={() => setActive(null)}
          onBook={() => { setActive(null); nav("contact"); }}
        />
      )}
      {lbIdx !== null && (
        <Lightbox
          index={lbIdx}
          onClose={() => setLbIdx(null)}
          onPrev={() => setLbIdx(Math.max(0, lbIdx - 1))}
          onNext={() => setLbIdx(Math.min(window.galleryPhotos.length - 1, lbIdx + 1))}
        />
      )}
    </div>
  );
}

// Boot — wait for all Babel src files to evaluate before mounting
function boot() {
  if (
    window.Nav && window.Accommodations && window.AccommodationModal &&
    window.Icon && window.PatternBg && window.StampLogo &&
    window.FadeIn && window.Blog && window.CtaBand && window.Lightbox
  ) {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  } else {
    setTimeout(boot, 40);
  }
}
boot();
