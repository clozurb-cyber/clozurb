export const CATEGORIES = ['Instruments', 'Accessoires', 'Prestations', 'Divers'] as const;

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string | null;
  tagline: string;
  category: Category;
};

export const products: readonly Product[] = [
  {
    slug: 'surdo-22',
    name: 'Surdo 22"',
    price: 890,
    image: null,
    category: 'Instruments',
    tagline: 'Livré sans les bras pour le porter.',
  },
  {
    slug: 'caisse-claire',
    name: 'Caisse claire',
    price: 340,
    image: null,
    category: 'Instruments',
    tagline: 'Le pupitre qui a toujours raison.',
  },
  {
    slug: 'repique',
    name: 'Repique',
    price: 290,
    image: null,
    category: 'Instruments',
    tagline: 'Pour ceux qui trouvent que ça ne va pas assez vite.',
  },
  {
    slug: 'tamborim',
    name: 'Tamborim',
    price: 45,
    image: null,
    category: 'Instruments',
    tagline: 'Petit. Méchant.',
  },
  {
    slug: 'chocalho',
    name: 'Chocalho',
    price: 120,
    image: null,
    category: 'Instruments',
    tagline: '2 000 battements par morceau. Bon courage.',
  },
  {
    slug: 'agogo',
    name: 'Agogô',
    price: 75,
    image: null,
    category: 'Instruments',
    tagline: 'Deux notes. Elles suffisent.',
  },
  {
    slug: 'timbal',
    name: 'Timbal',
    price: 410,
    image: null,
    category: 'Instruments',
    tagline: 'Grave devant, aigu au bord, ampoules partout.',
  },
  {
    slug: 'baguettes',
    name: 'Baguettes (la paire)',
    price: 18,
    image: null,
    category: 'Accessoires',
    tagline: 'Durée de vie estimée : un carnaval.',
  },
  {
    slug: 'peau-de-rechange',
    name: 'Peau de rechange',
    price: 60,
    image: null,
    category: 'Accessoires',
    tagline: 'Vous allez en avoir besoin. Prenez-en trois.',
  },
  {
    slug: 'harnais-surdo',
    name: 'Harnais de surdo',
    price: 95,
    image: null,
    category: 'Accessoires',
    tagline: "Le confort d'un sac à dos, le poids d'un surdo.",
  },
  {
    slug: 'bouchons-oreilles',
    name: "Bouchons d'oreilles",
    price: 3,
    image: null,
    category: 'Accessoires',
    tagline: "Le seul produit dont on garantit l'efficacité.",
  },
  {
    slug: 'le-costume',
    name: 'Le costume',
    price: 180,
    image: null,
    category: 'Accessoires',
    tagline: 'Rouge. Noir. Non négociable.',
  },
  {
    slug: 't-shirt',
    name: 'Le t-shirt',
    price: 25,
    image: null,
    category: 'Accessoires',
    tagline: 'Coton bio. Bandes diagonales. Évidemment.',
  },
  {
    slug: 'repet-chez-vous',
    name: "Une répét' chez vous",
    price: 1200,
    image: null,
    category: 'Prestations',
    tagline: '70 personnes. Chez vous. Samedi.',
  },
  {
    slug: 'defile-complet',
    name: 'Un défilé complet',
    price: 2500,
    image: null,
    category: 'Prestations',
    tagline: 'Deux heures. Une rue. Aucun regret.',
  },
  {
    slug: 'cours-particulier',
    name: 'Cours particulier',
    price: 60,
    image: null,
    category: 'Prestations',
    tagline: 'Une heure pour comprendre. Un an pour y arriver.',
  },
  {
    slug: 'place-camion',
    name: 'Une place dans le camion',
    price: 40,
    image: null,
    category: 'Prestations',
    tagline: "Sans le surdo. Avec, c'est 40 € aussi, mais debout.",
  },
  {
    slug: 'break-de-fin',
    name: 'Le break de fin (MP3)',
    price: 2,
    image: null,
    category: 'Divers',
    tagline: 'Huit secondes. En boucle. Chez vous.',
  },
  {
    slug: 'biere-apres-concert',
    name: "La bière d'après-concert",
    price: 6,
    image: null,
    category: 'Divers',
    tagline: 'La seule partie du répertoire maîtrisée par tous.',
  },
  {
    slug: 'voisin-comprehensif',
    name: 'Un voisin compréhensif',
    price: 5000,
    image: null,
    category: 'Divers',
    tagline: 'Denrée rare à Lyon.',
  },
  {
    slug: 'trois-minutes-silence',
    name: '3 minutes de silence',
    price: 9999,
    image: null,
    category: 'Divers',
    tagline: 'Notre produit le plus rare. Stock : néant.',
  },
];

export const findProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(price);
