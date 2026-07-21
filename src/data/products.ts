export const CATEGORIES = ['Instruments', 'Prestations', 'Tendance mode', 'Utile au quotidien'] as const;

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  slug: string;
  name: string;
  price: number | null;
  priceLabel?: string;
  image: string | null;
  tagline: string;
  category: Category;
};

export const products: readonly Product[] = [
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
    tagline: 'Zéro talent requis. Zéro talent développé.',
  },
  {
    slug: 'oeufs-choukai',
    name: 'Œufs choukaï (boîte de 6)',
    price: 29,
    image: 'oeufs-choukai.png',
    category: 'Instruments',
    tagline: 'Six œufs. Vous en perdrez cinq.',
  },
  {
    slug: 'repete-chez-vous',
    name: 'Une répète chez vous',
    price: 1200,
    image: null,
    category: 'Prestations',
    tagline: '70 personnes. Chez vous. Samedi.',
  },
  {
    slug: 'break-de-fin',
    name: 'Le break de fin (MP3)',
    price: 8,
    image: null,
    category: 'Prestations',
    tagline: 'Huit secondes. En boucle. Chez vous.',
  },
  {
    slug: 'concerto-maracas',
    name: 'Concerto pour maracas (CD-ROM gravé)',
    price: 20,
    image: null,
    category: 'Prestations',
    tagline: 'Sur CD-ROM. Prévoyez un ordinateur de 2003.',
  },
  {
    slug: 'trois-minutes-silence',
    name: '3 minutes de silence',
    price: 9999,
    image: null,
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
    tagline: 'On débarque en chantant. Bon anniversaire quand même.',
  },
  {
    slug: 'harnais-cuir',
    name: 'Harnais en cuir',
    price: 55,
    image: 'harnais-cuir.png',
    category: 'Tendance mode',
    tagline: 'Un surdo ne se porte pas. Il se soumet.',
  },
  {
    slug: 'cravate',
    name: 'Cravate',
    price: 33.99,
    image: 'cravate.png',
    category: 'Tendance mode',
    tagline: 'Se desserre dès le troisième morceau.',
  },
  {
    slug: 'lunettes',
    name: 'Lunettes',
    price: 5.5,
    image: 'lunettes.png',
    category: 'Tendance mode',
    tagline: 'Ne corrigent rien. Assument tout.',
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
    image: 'bonnet.png',
    category: 'Tendance mode',
    tagline: 'Pour répéter dehors en janvier. Comme des gens raisonnables.',
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
    tagline: "Mesure des choses. C'était tout le cahier des charges.",
  },
  {
    slug: 'bugatti',
    name: 'Bugatti',
    price: null,
    priceLabel: 'Prix sur demande',
    image: 'bugatti.png',
    category: 'Utile au quotidien',
    tagline: "Le camion était complet. On a pris ça.",
  },
  {
    slug: 'bracelet-eponge',
    name: 'Bracelet éponge',
    price: 21.9,
    image: 'bracelet-eponge.png',
    category: 'Utile au quotidien',
    tagline: 'Absorbe la sueur du break final. Et vos larmes.',
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
    tagline: 'Confirme ce que vous saviez : la scène penche.',
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
    image: null,
    category: 'Utile au quotidien',
    tagline: 'La seule partie du répertoire maîtrisée par tous.',
  },
];

export const findProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

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
