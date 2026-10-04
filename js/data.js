// Pr Lavrič — shared data, translations (SL / EN) + helpers for the UI kit
const img = (id, w, h) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`;

(function () {
  const galleryPhotos = [
    "photo-1781077205398-541b542d4d84",
    "photo-1764612526987-d198b6be0e2e",
    "photo-1575403071235-5dcd06cbf169",
    "photo-1762186541239-5eee85c08c57",
    "photo-1780246033915-a1ee941742e4",
    "photo-1765888830290-6bd73498d6d4",
    "photo-1601919297600-8ffbfd160d2d",
    "photo-1659279839707-44339462f937",
  ];

  // Things that are the same in both languages (photos, ids)
  const accImages = {
    rooms: img("photo-1659279839707-44339462f937", 900, 1100),
    glamping: img("photo-1575403071235-5dcd06cbf169", 900, 1100),
    campervan: img("photo-1617578324381-6155fbe640d9", 900, 1100),
  };
  const blogPhotos = {
    "diplomat-to-farm": "photo-1764612526987-d198b6be0e2e",
    friendships: "photo-1601919297600-8ffbfd160d2d",
    seasons: "photo-1781077205398-541b542d4d84",
  };

  // ───────────────────────────── ENGLISH ─────────────────────────────
  const en = {
    navLinks: [
      ["Story", "story"],
      ["Accommodation", "accommodations"],
      ["Farm table", "food"],
      ["Surroundings", "surroundings"],
      ["Gallery", "gallery"],
      ["Journal", "blog"],
      ["Contact", "contact"],
    ],
    accommodations: [
      {
        id: "rooms",
        label: "Rooms",
        title: "The old farmhouse",
        tagline: "Sleep where history lives.",
        description:
          "Three guest rooms inside the original 1860 farmhouse — stone walls, hand-hewn timber beams, and linen hand-sewn by the family. Mornings begin with the smell of bread already baking downstairs.",
        features: ["3 guest rooms", "Shared terrace", "Valley views", "Homemade breakfast", "Wood-fired heating"],
        price: "From €65 / night",
      },
      {
        id: "glamping",
        label: "Glamping",
        title: "Forest cabins",
        tagline: "Nature's embrace with homely comfort.",
        description:
          "Two intimate wooden cabins perched among the trees — furnished simply but thoughtfully. You wake to birdsong and morning mist, then walk down to Vera's table where breakfast is already waiting.",
        features: ["2 private cabins", "Private deck", "Forest setting", "Outdoor fire pit"],
        price: "From €90 / night",
      },
      {
        id: "campervan",
        label: "Campervan",
        title: "Campervan pitch",
        tagline: "Freedom of the road, peace of the valley.",
        description:
          "A quiet pitch for one campervan tucked within the farm, with electrical hookup, fresh water, and access to the outdoor kitchen. Open valley views from the awning door, fresh eggs at first light.",
        features: ["Electrical hookup", "Fresh water", "WC & shower", "Outdoor kitchen"],
        price: "From €35 / night",
      },
    ],
    testimonials: [
      {
        name: "Maria K.", origin: "Vienna, Austria", stars: 5,
        quote: "Vera's cooking alone is worth the journey. But it's her warmth — the way she remembers how you like your coffee — that makes you feel like you've come home. We've been back three times.",
      },
      {
        name: "Thomas & Anna B.", origin: "Munich, Germany", stars: 5,
        quote: "We came for a weekend and stayed for a week. The silence, the views, the bread straight from the wood oven — there is nowhere else like Pr Lavrič. It is our second home in Slovenia.",
      },
      {
        name: "James L.", origin: "Edinburgh, Scotland", stars: 5,
        quote: "I have stayed in boutique hotels all over Europe and nothing has matched this. 'Authentic' is a word that gets overused, but here it is simply true. Vera is extraordinary.",
      },
    ],
    blogPosts: [
      {
        id: "diplomat-to-farm",
        date: "May 2025",
        title: "From diplomatic halls to the farm table",
        excerpt: "Thirty years ago I traded crystal chandeliers for oil lamps, state banquets for a wood-fired oven. People thought I was mad. But every morning when I open the kitchen door and the valley is still wrapped in mist, I know — this was always the right table.",
      },
      {
        id: "friendships",
        date: "April 2025",
        title: "Friendships the farm has made",
        excerpt: "A family from Munich has been coming every August for twelve years. Their children learned to milk goats here. Last summer the eldest brought his own daughter — three generations at our table. These are the moments that make a farmhouse a home.",
      },
      {
        id: "seasons",
        date: "March 2025",
        title: "Four seasons, one farm",
        excerpt: "In spring the meadows explode with wildflowers and the bees return to the hives. Summer brings long evenings on the terrace, autumn the smell of fermenting apples and wood being stacked. Winter is the quietest — just snow, smoke, and the sound of bread crust cracking in the oven.",
      },
    ],
    ui: {
      "meta.title": "Pr Lavrič — Eco Farm",
      "brand.kicker": "Turistična kmetija",
      "nav.book": "Book now",
      "nav.langLabel": "Language",

      "hero.alt": "Slovenian mountain meadow with traditional huts",
      "hero.eyebrow": "700m · Central Slovenia · Since 1860",
      "hero.h1": "A second home",
      "hero.h2": "in the heart",
      "hero.h3": "of Slovenia",
      "hero.text": "An 1860 family farm. Wood-fired cooking. The most genuine hostess in Slovenia. This is Pr Lavrič.",
      "hero.cta1": "View accommodation",
      "hero.cta2": "Our story",

      "intro.eyebrow": "Eco Farm Pr Lavrič",
      "intro.h": "Not a hotel. Not a resort.",
      "intro.hEm": "A home.",
      "intro.text": "High in the hills above central Slovenia — where meadows meet the forest edge and the air carries pine and woodsmoke — a family farm has been quietly welcoming the world for over three decades.",

      "story.alt": "The old Pr Lavrič farmhouse",
      "story.badge": "years of hospitality",
      "story.since": "Since 1860",
      "story.eyebrow": "Our story",
      "story.h": "Vera and the",
      "story.hEm": "heart of the house",
      "story.p1": "For thirty-five years, Vera has been the beating heart of this farm. Before she chose the mountain life, she stood in the great halls of state — serving world leaders at diplomatic dinners. She knew exactly how to do things well.",
      "story.p2": "But she chose this instead. An empty 1860 farmhouse. A garden that needed hands. A community that needed warmth. Slowly the old stone walls filled with laughter, with the smell of bread from the wood oven.",
      "story.quote": "\"I had the world's finest dining rooms. But I wanted a table where people felt truly at home.\"",
      "story.cite": "— Vera Lavrič, hostess",
      "story.cta": "Get to know us",

      "acc.eyebrow": "Accommodation",
      "acc.h": "Your place",
      "acc.hEm": "to rest",
      "acc.text": "Three distinct ways to stay — from century-old stone rooms to forest cabins. Each with Vera's warmth within reach.",
      "acc.cardCta": "Gallery & details",

      "food.eyebrow": "Farm table",
      "food.h": "Food that",
      "food.hEm": "tells a story",
      "food.p1": "Breakfast at Pr Lavrič is not a service — it is an event. The bread has been baking since before you woke up, in the old wood-fired oven that Vera has kept alive for thirty years. The honey is from the farm's own hives.",
      "food.p2": "Vera cooks as she has always cooked: from what the garden offers, what the season allows, and what simply feels right. Nothing is imported when local is better.",
      "food.i1": "Bread", "food.i1s": "Baked in the wood-fired oven",
      "food.i2": "Honey", "food.i2s": "From our own hives",
      "food.i3": "Vegetables", "food.i3s": "From the garden by the house",
      "food.alt1": "Antique farmhouse kitchen",
      "food.alt2": "Rustic dining room with wooden beams",

      "sur.eyebrow": "Surroundings",
      "sur.h": "In the very heart",
      "sur.hEm": "of Slovenia",
      "sur.c1.label": "GEOSS", "sur.c1.title": "Geographic centre",
      "sur.c1.desc": "Pr Lavrič stands minutes from GEOSS — the surveyed geographic centre of Slovenia. A quiet stone marker in the forest. A rare thing to walk to before breakfast.",
      "sur.c2.label": "Hiking", "sur.c2.title": "Trails from the doorstep",
      "sur.c2.desc": "Marked trails begin at the farm gate. From gentle valley walks to ridge-line hikes with views across half of Slovenia — something for every pace.",
      "sur.c3.label": "Farm life", "sur.c3.title": "Sheep, hens and the garden",
      "sur.c3.desc": "The farm is a working farm. Sheep in the lower field, hens around the yard, a kitchen garden that changes week to week. Guests are welcome to walk among it all.",

      "test.eyebrow": "Guests say",
      "test.hEm": "Words",
      "test.h": "from our guests",

      "gal.eyebrow": "Gallery",
      "gal.h": "Pr Lavrič",
      "gal.hEm": "in pictures",
      "gal.text": "Moments from the farm, the table, and the valley beyond.",
      "gal.alt": "Panoramic Slovenian meadows",
      "gal.lightboxAlt": "Pr Lavrič gallery",

      "con.eyebrow": "Reservations & Enquiries",
      "con.h": "Write to us,",
      "con.hEm": "we look forward to you",
      "con.thanks": "Thank you for your enquiry",
      "con.thanksText": "Vera will respond within 24 hours. We look forward to welcoming you at Pr Lavrič.",
      "con.name": "Full name", "con.namePh": "Jane Smith",
      "con.email": "Email", "con.emailPh": "jane@email.com",
      "con.acc": "Accommodation", "con.accPh": "Which accommodation?",
      "con.accOptions": ["Rooms in the old farmhouse", "Glamping cabin", "Campervan pitch", "Not sure yet"],
      "con.dates": "Stay dates", "con.datesPh": "e.g. 12–17 July",
      "con.msg": "Message", "con.msgPh": "Tell us a little about yourself or your group…",
      "con.send": "Send enquiry",
      "con.altitude": "700 m a.s.l. · Central Slovenia",
      "con.address": "Central Slovenia, 700 m a.s.l.",
      "con.note": "Vera is usually the one who answers the phone. She would love to hear about your plans and tell you what is growing in the garden this week.",

      "foot.tag1": "A second home in the heart of Slovenia.",
      "foot.tag2": "Eco farm since 1860.",
      "foot.nav": "Navigation",
      "foot.follow": "Follow us",
      "foot.rights": "© 2025 Eco Farm Pr Lavrič. All rights reserved.",
      "foot.made": "Made with love in Slovenia",

      "blog.eyebrow": "From the farm journal",
      "blog.h": "Vera's",
      "blog.hEm": "stories",
      "blog.more": "Read more",

      "cta.eyebrow": "Reservations open",
      "cta.h": "Join us",
      "cta.hEm": "at the table",
      "cta.text": "Vera answers every inquiry personally, usually within a few hours. Tell us about your plans — she'd love to hear from you.",
      "cta.btn": "Send an enquiry",
      "cta.note": "We respond within 24 hours · We speak Slovenian, English and German",

      "modal.back": "Back to accommodation",
      "modal.send": "Send enquiry",
      "modal.included": "What's included",
      "modal.priceNote": "Includes breakfast from Vera's wood-fired kitchen. Minimum 2 nights.",
      "modal.respond": "We respond within 24 hours",
    },
  };

  // ──────────────────────────── SLOVENŠČINA ────────────────────────────
  const sl = {
    navLinks: [
      ["Zgodba", "story"],
      ["Nastanitev", "accommodations"],
      ["Kmečka miza", "food"],
      ["Okolica", "surroundings"],
      ["Galerija", "gallery"],
      ["Utrinki", "blog"],
      ["Kontakt", "contact"],
    ],
    accommodations: [
      {
        id: "rooms",
        label: "Sobe",
        title: "Stara domačija",
        tagline: "Spite tam, kjer živi zgodovina.",
        description:
          "Tri sobe za goste v izvirni domačiji iz leta 1860 – kamniti zidovi, ročno tesani leseni tramovi in posteljnina, ki jo je ročno sešila družina. Jutra se začnejo z vonjem po kruhu, ki se spodaj že peče.",
        features: ["3 sobe za goste", "Skupna terasa", "Razgled na dolino", "Domač zajtrk", "Ogrevanje na drva"],
        price: "Od 65 € / noč",
      },
      {
        id: "glamping",
        label: "Glamping",
        title: "Gozdne hiške",
        tagline: "Objem narave z domačim udobjem.",
        description:
          "Dve intimni leseni hiški med drevesi – opremljeni preprosto, a premišljeno. Zbudita vas ptičje petje in jutranja meglica, nato se sprehodite do Verine mize, kjer zajtrk že čaka.",
        features: ["2 zasebni hiški", "Zasebna terasa", "Sredi gozda", "Zunanje ognjišče"],
        price: "Od 90 € / noč",
      },
      {
        id: "campervan",
        label: "Avtodom",
        title: "Prostor za avtodom",
        tagline: "Svoboda ceste, mir doline.",
        description:
          "Miren prostor za en avtodom v zavetju kmetije, s priključkom za elektriko, svežo vodo in dostopom do zunanje kuhinje. Skozi vrata se odpira pogled na dolino, ob prvem svitu pa vas čakajo sveža jajca.",
        features: ["Priključek za elektriko", "Pitna voda", "WC in tuš", "Zunanja kuhinja"],
        price: "Od 35 € / noč",
      },
    ],
    testimonials: [
      {
        name: "Maria K.", origin: "Dunaj, Avstrija", stars: 5,
        quote: "Že zaradi Verine kuhinje se splača priti. A prav njena toplina – to, da si zapomni, kakšno kavo imate radi – vam da občutek, da ste prišli domov. Vrnili smo se že trikrat.",
      },
      {
        name: "Thomas in Anna B.", origin: "München, Nemčija", stars: 5,
        quote: "Prišla sva za konec tedna in ostala ves teden. Tišina, razgledi, kruh naravnost iz krušne peči – nikjer ni tako kot Pr Lavriču. To je najin drugi dom v Sloveniji.",
      },
      {
        name: "James L.", origin: "Edinburg, Škotska", stars: 5,
        quote: "Bival sem v butičnih hotelih po vsej Evropi in nič se ni moglo primerjati s tem. »Pristno« je beseda, ki se prepogosto uporablja, a tukaj je preprosto resnična. Vera je izjemna.",
      },
    ],
    blogPosts: [
      {
        id: "diplomat-to-farm",
        date: "Maj 2025",
        title: "Iz diplomatskih dvoran za kmečko mizo",
        excerpt: "Pred tridesetimi leti sem kristalne lestence zamenjala za petrolejke, državniške bankete pa za krušno peč. Ljudje so mislili, da sem znorela. A vsako jutro, ko odprem kuhinjska vrata in je dolina še zavita v meglico, vem – to je bila vedno prava miza.",
      },
      {
        id: "friendships",
        date: "April 2025",
        title: "Prijateljstva, ki jih je stkala kmetija",
        excerpt: "Družina iz Münchna prihaja vsak avgust že dvanajst let. Njihovi otroci so se tukaj naučili molsti koze. Lani poleti je najstarejši pripeljal svojo hčer – tri generacije za našo mizo. To so trenutki, ki iz domačije naredijo dom.",
      },
      {
        id: "seasons",
        date: "Marec 2025",
        title: "Štirje letni časi, ena kmetija",
        excerpt: "Spomladi travniki zacvetijo v divjem cvetju in čebele se vrnejo v panje. Poletje prinese dolge večere na terasi, jesen vonj po jabolkih, ki vrejo, in drvih, ki se zlagajo. Zima je najtišja – le sneg, dim in pokanje skorje kruha v peči.",
      },
    ],
    ui: {
      "meta.title": "Pr Lavrič — Turistična kmetija",
      "brand.kicker": "Turistična kmetija",
      "nav.book": "Rezerviraj",
      "nav.langLabel": "Jezik",

      "hero.alt": "Slovenski gorski travnik s tradicionalnimi kočami",
      "hero.eyebrow": "700 m · Osrednja Slovenija · Od leta 1860",
      "hero.h1": "Drugi dom",
      "hero.h2": "v srcu",
      "hero.h3": "Slovenije",
      "hero.text": "Družinska kmetija iz leta 1860. Jedi iz krušne peči. Najbolj pristna gostiteljica v Sloveniji. To je Pr Lavrič.",
      "hero.cta1": "Oglejte si nastanitve",
      "hero.cta2": "Naša zgodba",

      "intro.eyebrow": "Ekološka kmetija Pr Lavrič",
      "intro.h": "Ne hotel. Ne letovišče.",
      "intro.hEm": "Dom.",
      "intro.text": "Visoko v hribih nad osrednjo Slovenijo – kjer se travniki stikajo z gozdnim robom in zrak diši po borovcih in dimu iz peči – družinska kmetija že več kot tri desetletja tiho sprejema svet.",

      "story.alt": "Stara domačija Pr Lavrič",
      "story.badge": "let gostoljubja",
      "story.since": "Od leta 1860",
      "story.eyebrow": "Naša zgodba",
      "story.h": "Vera –",
      "story.hEm": "srce hiše",
      "story.p1": "Vera je že petintrideset let utripajoče srce te kmetije. Preden je izbrala življenje v hribih, je stala v velikih državniških dvoranah – na diplomatskih večerjah je stregla svetovnim voditeljem. Natančno je vedela, kako se stvari naredijo dobro.",
      "story.p2": "A izbrala je to. Prazno domačijo iz leta 1860. Vrt, ki je potreboval roke. Skupnost, ki je potrebovala toplino. Stari kamniti zidovi so se počasi napolnili s smehom in vonjem po kruhu iz krušne peči.",
      "story.quote": "»Imela sem najlepše jedilnice na svetu. A želela sem si mizo, za katero se ljudje počutijo zares doma.«",
      "story.cite": "— Vera Lavrič, gostiteljica",
      "story.cta": "Spoznajte nas",

      "acc.eyebrow": "Nastanitev",
      "acc.h": "Vaš kotiček",
      "acc.hEm": "za počitek",
      "acc.text": "Trije različni načini bivanja – od stoletnih kamnitih sob do gozdnih hišk. Verina toplina je vedno na dosegu roke.",
      "acc.cardCta": "Galerija & podrobnosti",

      "food.eyebrow": "Kmečka miza",
      "food.h": "Hrana, ki",
      "food.hEm": "pripoveduje zgodbo",
      "food.p1": "Zajtrk Pr Lavriču ni storitev – je dogodek. Kruh se peče že, preden se zbudite, v stari krušni peči, ki jo Vera ohranja pri življenju že trideset let. Med je iz domačih panjev.",
      "food.p2": "Vera kuha, kot je kuhala od nekdaj: iz tistega, kar ponudi vrt, kar dovoli letni čas in kar se preprosto zdi prav. Nič ni uvoženo, kadar je domače boljše.",
      "food.i1": "Kruh", "food.i1s": "Pečen v krušni peči",
      "food.i2": "Med", "food.i2s": "Iz domačih panjev",
      "food.i3": "Zelenjava", "food.i3s": "Z vrta ob hiši",
      "food.alt1": "Starinska kmečka kuhinja",
      "food.alt2": "Rustikalna jedilnica z lesenimi tramovi",

      "sur.eyebrow": "Okolica",
      "sur.h": "V samem srcu",
      "sur.hEm": "Slovenije",
      "sur.c1.label": "GEOSS", "sur.c1.title": "Geometrično središče",
      "sur.c1.desc": "Pr Lavrič stoji le nekaj minut od GEOSS-a – izmerjenega geometričnega središča Slovenije. Tih kamnit pomnik sredi gozda. Redkost, do katere se lahko sprehodite še pred zajtrkom.",
      "sur.c2.label": "Pohodništvo", "sur.c2.title": "Poti od domačega praga",
      "sur.c2.desc": "Označene poti se začnejo pri vratih kmetije. Od lahkotnih sprehodov po dolini do grebenskih tur z razgledi čez pol Slovenije – nekaj za vsak korak.",
      "sur.c3.label": "Življenje na kmetiji", "sur.c3.title": "Ovce, kokoši in vrt",
      "sur.c3.desc": "Kmetija je živa, delovna kmetija. Ovce na spodnjem travniku, kokoši po dvorišču in zelenjavni vrt, ki se spreminja iz tedna v teden. Gostje so vabljeni, da se sprehodijo med vsem tem.",

      "test.eyebrow": "Gostje pravijo",
      "test.hEm": "Besede",
      "test.h": "naših gostov",

      "gal.eyebrow": "Galerija",
      "gal.h": "Pr Lavrič",
      "gal.hEm": "v slikah",
      "gal.text": "Utrinki s kmetije, z mize in iz doline.",
      "gal.alt": "Panoramski pogled na slovenske travnike",
      "gal.lightboxAlt": "Galerija Pr Lavrič",

      "con.eyebrow": "Rezervacije in povpraševanja",
      "con.h": "Pišite nam,",
      "con.hEm": "veselimo se vas",
      "con.thanks": "Hvala za vaše povpraševanje",
      "con.thanksText": "Vera vam bo odgovorila v 24 urah. Veselimo se, da vas bomo lahko pozdravili Pr Lavriču.",
      "con.name": "Ime in priimek", "con.namePh": "Janez Novak",
      "con.email": "E-pošta", "con.emailPh": "janez@email.si",
      "con.acc": "Nastanitev", "con.accPh": "Katera nastanitev?",
      "con.accOptions": ["Sobe v stari domačiji", "Glamping hiška", "Prostor za avtodom", "Še ne vem"],
      "con.dates": "Termin bivanja", "con.datesPh": "npr. 12.–17. julij",
      "con.msg": "Sporočilo", "con.msgPh": "Povejte nam nekaj o sebi ali svoji skupini …",
      "con.send": "Pošlji povpraševanje",
      "con.altitude": "700 m n. m. · Osrednja Slovenija",
      "con.address": "Osrednja Slovenija, 700 m n. m.",
      "con.note": "Na telefon se običajno oglasi Vera. Z veseljem bo prisluhnila vašim načrtom in vam povedala, kaj ta teden raste na vrtu.",

      "foot.tag1": "Drugi dom v srcu Slovenije.",
      "foot.tag2": "Ekološka kmetija od leta 1860.",
      "foot.nav": "Navigacija",
      "foot.follow": "Sledite nam",
      "foot.rights": "© 2025 Ekološka kmetija Pr Lavrič. Vse pravice pridržane.",
      "foot.made": "Narejeno z ljubeznijo v Sloveniji",

      "blog.eyebrow": "Iz kmečkega dnevnika",
      "blog.h": "Verine",
      "blog.hEm": "zgodbe",
      "blog.more": "Preberi več",

      "cta.eyebrow": "Rezervacije so odprte",
      "cta.h": "Pridružite se nam",
      "cta.hEm": "za mizo",
      "cta.text": "Vera na vsako povpraševanje odgovori osebno, običajno v nekaj urah. Povejte nam o svojih načrtih – z veseljem vam bo prisluhnila.",
      "cta.btn": "Pošlji povpraševanje",
      "cta.note": "Odgovorimo v 24 urah · Govorimo slovensko, angleško in nemško",

      "modal.back": "Nazaj na nastanitve",
      "modal.send": "Pošlji povpraševanje",
      "modal.included": "Kaj je vključeno",
      "modal.priceNote": "Vključuje zajtrk iz Verine kuhinje s krušno pečjo. Najmanj 2 nočitvi.",
      "modal.respond": "Odgovorimo v 24 urah",
    },
  };

  // Attach the shared photos to both languages
  const content = { sl, en };
  Object.values(content).forEach((c) => {
    c.accommodations.forEach((a) => { a.image = accImages[a.id]; });
    c.blogPosts.forEach((p) => { p.photo = blogPhotos[p.id]; });
  });

  // ───────────────────────── Language switching ─────────────────────────
  const DEFAULT_LANG = "sl";          // language a first-time visitor sees
  const STORAGE_KEY = "prlavric-lang";

  function initialLang() {
    // 1) link like  prlavric.si/?lang=en   2) the visitor's last choice   3) default
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (content[fromUrl]) return fromUrl;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (content[saved]) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  let lang = initialLang();

  function applyToDocument() {
    document.documentElement.lang = lang;
    document.title = content[lang].ui["meta.title"];
  }
  applyToDocument();

  window.getLang = () => lang;
  window.setLang = (next) => {
    if (!content[next]) return;
    lang = next;
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    applyToDocument();
  };

  // tr("hero.cta1") → the text in the current language (falls back to English)
  window.tr = (key) => {
    const v = content[lang].ui[key];
    return v !== undefined ? v : (en.ui[key] !== undefined ? en.ui[key] : key);
  };

  // window.navLinks, window.accommodations… always return the current language
  ["navLinks", "accommodations", "testimonials", "blogPosts"].forEach((name) => {
    Object.defineProperty(window, name, { get: () => content[lang][name], configurable: true });
  });

  window.galleryPhotos = galleryPhotos;
  window.LANGS = ["sl", "en"];
})();

window.img = img;
