// Pr Lavrič — shared data + helpers for the UI kit
const img = (id, w, h) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`;

const navLinks = [
  ["Story", "story"],
  ["Accommodation", "accommodations"],
  ["Farm table", "food"],
  ["Surroundings", "surroundings"],
  ["Gallery", "gallery"],
  ["Journal", "blog"],
  ["Contact", "contact"],
];

const accommodations = [
  {
    id: "rooms",
    label: "Rooms",
    title: "The old farmhouse",
    tagline: "Sleep where history lives.",
    description:
      "Three guest rooms inside the original 1860 farmhouse — stone walls, hand-hewn timber beams, and linen hand-sewn by the family. Mornings begin with the smell of bread already baking downstairs.",
    features: ["3 guest rooms", "Shared terrace", "Valley views", "Homemade breakfast", "Wood-fired heating"],
    image: img("photo-1659279839707-44339462f937", 900, 1100),
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
    image: img("photo-1575403071235-5dcd06cbf169", 900, 1100),
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
    image: img("photo-1617578324381-6155fbe640d9", 900, 1100),
    price: "From €35 / night",
  },
];

const testimonials = [
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
];

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

const blogPosts = [
  {
    id: "diplomat-to-farm",
    date: "May 2025",
    title: "From diplomatic halls to the farm table",
    excerpt: "Thirty years ago I traded crystal chandeliers for oil lamps, state banquets for a wood-fired oven. People thought I was mad. But every morning when I open the kitchen door and the valley is still wrapped in mist, I know — this was always the right table.",
    photo: "photo-1764612526987-d198b6be0e2e",
  },
  {
    id: "friendships",
    date: "April 2025",
    title: "Friendships the farm has made",
    excerpt: "A family from Munich has been coming every August for twelve years. Their children learned to milk goats here. Last summer the eldest brought his own daughter — three generations at our table. These are the moments that make a farmhouse a home.",
    photo: "photo-1601919297600-8ffbfd160d2d",
  },
  {
    id: "seasons",
    date: "March 2025",
    title: "Four seasons, one farm",
    excerpt: "In spring the meadows explode with wildflowers and the bees return to the hives. Summer brings long evenings on the terrace, autumn the smell of fermenting apples and wood being stacked. Winter is the quietest — just snow, smoke, and the sound of bread crust cracking in the oven.",
    photo: "photo-1781077205398-541b542d4d84",
  },
];

Object.assign(window, { img, navLinks, accommodations, testimonials, galleryPhotos, blogPosts });
