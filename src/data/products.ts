export const CATEGORIES = ['Prestations', 'Instruments', 'Tendance mode', 'Utile au quotidien'] as const;

export type Category = (typeof CATEGORIES)[number];

export type Variant = {
  label: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number | null;
  priceLabel?: string;
  image: string | null;
  variants?: Variant[];
  tagline: string;
  category?: Category;
  featured?: boolean;
};

export const products: readonly Product[] = [
  {
    slug: 'magazine-clozurb-1',
    name: 'Le magazine Clozurb n°20',
    price: 12,
    image: 'magazine-clozurb-1.png',
    featured: true,
    tagline: '48 pages sur un groupe qui aurait pu tenir en deux.',
  },
  {
    slug: 'guimbarde-lettone',
    name: 'La guimbarde lettone',
    price: 13.5,
    image: 'guimbarde-lettone.png',
    category: 'Instruments',
    tagline: 'Venue de Riga, jouée contre les dents.',
  },
  {
    slug: 'kazoo',
    name: 'Kazoo',
    price: 4.5,
    image: 'kazoo.png',
    category: 'Instruments',
    tagline: 'Instrument indispensable dans une batucada bolero.',
  },
  {
    slug: 'oeufs-choukai',
    name: 'Œufs choukaï (boîte de 6)',
    price: 29,
    image: 'oeufs-choukai.png',
    category: 'Instruments',
    tagline: 'Élevés en plein air.',
  },
  {
    slug: 'repete-chez-vous',
    name: 'Une répète chez vous',
    price: 1200,
    image: 'repete-chez-vous.png',
    category: 'Prestations',
    tagline: '70 personnes. Chez vous. Samedi.',
  },
  {
    slug: 'break-de-fin',
    name: 'Le break de fin (MP3)',
    price: 8,
    image: 'break-de-fin.png',
    category: 'Prestations',
    tagline: 'Huit secondes. En boucle. Chez vous.',
  },
  {
    slug: 'trois-minutes-silence',
    name: '3 minutes de silence',
    price: 9999,
    image: 'trois-minutes-silence.png',
    category: 'Prestations',
    tagline: 'Notre produit le plus rare. Stock : néant.',
  },
  {
    slug: 'chorale-anniversaire',
    name: "Chorale d'anniversaire",
    price: null,
    priceLabel: 'Obtenir un devis',
    image: 'chorale-anniversaire.png',
    category: 'Prestations',
    tagline: 'Votre anniversaire. Notre calendrier.',
  },
  {
    slug: 'harnais-cuir',
    name: 'Harnais en cuir',
    price: 495,
    image: 'harnais-cuir.png',
    category: 'Tendance mode',
    tagline: 'Un surdo ne se porte pas. Il se soumet. Collier vendu séparément.',
  },
  {
    slug: 'cravate',
    name: 'Cravate',
    price: 33.99,
    image: 'cravate.png',
    category: 'Tendance mode',
    tagline: "Pour donner l'impression que la presta avait un budget.",
  },
  {
    slug: 'lunettes',
    name: 'Lunettes',
    price: 5.5,
    image: 'lunettes-rouge.png',
    variants: [
      { label: 'Rouge', image: 'lunettes-rouge.png' },
      { label: 'Noir', image: 'lunettes-noir.png' },
    ],
    category: 'Tendance mode',
    tagline: 'Une monture sérieuse pour des décisions qui le sont moins. Noir ou rouge.',
  },
  {
    slug: 'chemise',
    name: 'Chemise',
    price: 61.25,
    image: 'chemise.png',
    category: 'Tendance mode',
    tagline: 'Se froisse rien qu’en la regardant.',
  },
  {
    slug: 'banane',
    name: 'Banane',
    price: 13.9,
    image: 'banane.png',
    category: 'Tendance mode',
    tagline: 'Range vos baguettes et le peu de dignité qui reste.',
  },
  {
    slug: 'chaussettes',
    name: 'Chaussettes',
    price: 19.9,
    image: 'chaussettes.png',
    category: 'Tendance mode',
    tagline: "Rouges, hautes, visibles du trottoir d'en face.",
  },
  {
    slug: 'bonnet',
    name: 'Bonnet',
    price: 15.9,
    image: 'bonnet-rouge.png',
    variants: [
      { label: 'Rouge', image: 'bonnet-rouge.png' },
      { label: 'Noir', image: 'bonnet-noir.png' },
    ],
    category: 'Tendance mode',
    tagline: 'Protège du froid. Pas du ridicule. Noir ou rouge.',
  },
  {
    slug: 'doudou-dom',
    name: 'Doudou Dom',
    price: null,
    priceLabel: 'Prix sur demande',
    image: 'doudou-dom.png',
    category: 'Utile au quotidien',
    tagline: 'Modèle unique. Prix à la tête du client.',
  },
  {
    slug: 'decapsuleur-bois',
    name: 'Décapsuleur en bois',
    price: 5.5,
    image: 'decapsuleur-bois.png',
    category: 'Utile au quotidien',
    tagline: "Ouvre la bière. N'en attendez rien de plus.",
  },
  {
    slug: 'decapsuleur-metal',
    name: 'Décapsuleur en métal',
    price: 2.5,
    image: 'decapsuleur-metal.png',
    category: 'Utile au quotidien',
    tagline: 'Le même, en plus froid et moins cher.',
  },
  {
    slug: 'metre-mesureur',
    name: 'Mètre mesureur',
    price: 10.9,
    image: 'metre-mesureur.png',
    category: 'Utile au quotidien',
    tagline: "Pour mesurer précisément ce qui n'allait déjà pas.",
  },
  {
    slug: 'bugatti',
    name: 'Bugatti',
    price: null,
    priceLabel: 'Prix sur demande',
    image: 'bugatti.png',
    category: 'Utile au quotidien',
    tagline: 'Quatre roues. Toujours aucune place pour les surdos.',
  },
  {
    slug: 'bracelet-eponge',
    name: 'Bracelet éponge',
    price: 21.9,
    image: 'bracelet-eponge-rouge.png',
    variants: [
      { label: 'Rouge', image: 'bracelet-eponge-rouge.png' },
      { label: 'Blanc', image: 'bracelet-eponge-blanc.png' },
    ],
    category: 'Utile au quotidien',
    tagline: 'Absorbe la sueur du break final. Et vos larmes. Rouge ou blanc.',
  },
  {
    slug: 'porte-cles-camion',
    name: 'Porte-clés camion',
    price: 4.5,
    image: 'porte-cles-camion.png',
    category: 'Utile au quotidien',
    tagline: 'Le camion, en miniature. Tombe en panne aussi.',
  },
  {
    slug: 'niveau-poche-pliant',
    name: 'Niveau de poche pliant',
    price: 5.6,
    image: 'niveau-poche-pliant.png',
    category: 'Utile au quotidien',
    tagline: "Prouve scientifiquement que ce n'est pas vous qui penchez.",
  },
  {
    slug: 'brise-glace',
    name: 'Brise-glace coupe-ceinture',
    price: 7.1,
    image: 'brise-glace.png',
    category: 'Utile au quotidien',
    tagline: 'Au cas où le camion finirait dans le Rhône.',
  },
  {
    slug: 'manique',
    name: 'Manique',
    price: 9.5,
    image: 'manique.png',
    category: 'Utile au quotidien',
    tagline: 'Ne met pas les surdos au four. Mais on ne sait jamais.',
  },
  {
    slug: 'cle-usb',
    name: 'Clé USB',
    price: 12.5,
    image: 'cle-usb.png',
    category: 'Utile au quotidien',
    tagline: 'Contient le répertoire. Et 400 photos de la buvette.',
  },
  {
    slug: 'verre-paddys',
    name: "Un verre du Paddy's",
    price: 0,
    image: 'verre-paddys.png',
    category: 'Utile au quotidien',
    tagline: "Peut contenir de l'eau.",
  },
  {
    slug: 'pichet-apres-presta',
    name: "Le pichet d'après-presta",
    price: 19,
    image: 'pichet-apres-presta.png',
    category: 'Utile au quotidien',
    tagline: 'La seule partie du répertoire maîtrisée par tous. Cinq minimum.',
  },
];

export const findProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const featuredProduct = (): Product | undefined =>
  products.find((product) => product.featured);

export const catalogProducts = (): Product[] => products.filter((product) => !product.featured);

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);

export const displayPrice = (product: Product): string => {
  if (product.price === null) return product.priceLabel ?? 'Sur devis';
  if (product.price === 0) return 'Gratuit';
  return formatPrice(product.price);
};
