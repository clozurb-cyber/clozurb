export const CATEGORIES = ['Instruments', 'Accessoires', 'Prestations', 'Divers'] as const;

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  slug: string;
  name: string;
  price: number;
  emoji: string;
  tagline: string;
  description: string;
  category: Category;
};

export const products: readonly Product[] = [
  {
    slug: 'surdo-22',
    name: 'Surdo 22"',
    price: 890,
    emoji: '🥁',
    category: 'Instruments',
    tagline: 'Livré sans les bras pour le porter.',
    description:
      "Le cœur de la batucada. C'est lui qui fait le battement que vous sentez dans le thorax trois rues plus loin. Fût de 22 pouces, peau nylon, cerclage acier. Poids : suffisant pour que vous vous en souveniez le lendemain. Les bras ne sont pas inclus et ne sont pas disponibles séparément.",
  },
  {
    slug: 'caisse-claire',
    name: 'Caisse claire',
    price: 340,
    emoji: '🪘',
    category: 'Instruments',
    tagline: 'Le pupitre qui a toujours raison.',
    description:
      "Timbre en spirale, frappe sèche, présence garantie dans un rayon de 400 mètres. La caisse claire ne demande pas la permission. Elle arrive, elle joue, elle a raison. Livrée avec l'assurance tranquille qui va avec.",
  },
  {
    slug: 'repique',
    name: 'Repique',
    price: 290,
    emoji: '🛢️',
    category: 'Instruments',
    tagline: 'Pour ceux qui trouvent que ça ne va pas assez vite.',
    description:
      "Deux baguettes, une main nue, et un tempo qui part devant tout le monde. Le repique appelle, le reste suit — c'est la théorie. En pratique le repique appelle et part en courant. Idéal si votre poignet vous a fait du tort et que vous cherchez à vous venger.",
  },
  {
    slug: 'tamborim',
    name: 'Tamborim',
    price: 45,
    emoji: '🔴',
    category: 'Instruments',
    tagline: 'Petit. Méchant.',
    description:
      "Six pouces de diamètre et un mépris total pour votre confort articulaire. Le tamborim ne pèse rien, ne prend pas de place, et vous détruira le poignet en une saison. Le meilleur rapport dégâts/volume du catalogue.",
  },
  {
    slug: 'chocalho',
    name: 'Chocalho',
    price: 120,
    emoji: '🎶',
    category: 'Instruments',
    tagline: '2 000 battements par morceau. Bon courage.',
    description:
      "Un cadre, des cymbalettes, et vos épaules. Le chocalho a l'air facile vu de loin. Il a l'air facile vu de près aussi. Il n'est facile à aucune distance. Prévoir un deuxième chocalho pour la deuxième moitié du défilé, et un deuxième joueur avec.",
  },
  {
    slug: 'agogo',
    name: 'Agogô',
    price: 75,
    emoji: '🔔',
    category: 'Instruments',
    tagline: 'Deux notes. Elles suffisent.',
    description:
      "Deux cloches, deux hauteurs, zéro besoin d'une troisième. L'agogô a compris quelque chose que le reste de l'orchestre cherche encore : on peut tout dire avec deux notes si on les place bien. Acier, patine garantie par l'usage.",
  },
  {
    slug: 'timbal',
    name: 'Timbal',
    price: 410,
    emoji: '🪕',
    category: 'Instruments',
    tagline: 'Grave devant, aigu au bord, ampoules partout.',
    description:
      "Fût aluminium, peau nylon, joué à mains nues. Le timbal offre une palette sonore remarquable et une collection d'ampoules tout aussi remarquable. Les deux se développent en parallèle. Les ampoules durent plus longtemps.",
  },
  {
    slug: 'baguettes',
    name: 'Baguettes (la paire)',
    price: 18,
    emoji: '🥢',
    category: 'Accessoires',
    tagline: 'Durée de vie estimée : un carnaval.',
    description:
      "Bois dur, tourné, équilibré, et condamné. Vous allez en casser une au troisième morceau et perdre l'autre dans le camion. C'est le cycle de la vie. Vendues par paire pour maintenir l'illusion d'une certaine stabilité.",
  },
  {
    slug: 'peau-de-rechange',
    name: 'Peau de rechange',
    price: 60,
    emoji: '⭕',
    category: 'Accessoires',
    tagline: 'Vous allez en avoir besoin. Prenez-en trois.',
    description:
      "La peau ne casse jamais à la répétition. Elle casse pendant le défilé, sur le morceau que vous aviez enfin réussi à apprendre, devant les gens. Prenez-en trois. Ce n'est pas de la vente incitative, c'est de l'expérience.",
  },
  {
    slug: 'harnais-surdo',
    name: 'Harnais de surdo',
    price: 95,
    emoji: '🎽',
    category: 'Accessoires',
    tagline: "Le confort d'un sac à dos, le poids d'un surdo.",
    description:
      "Sangles larges, rembourrage épais, réglages multiples. Le harnais fait un travail honnête : il répartit sur vos deux épaules un poids qui n'aurait dû reposer sur aucune. Le progrès a ses limites et le surdo les connaît toutes.",
  },
  {
    slug: 'bouchons-oreilles',
    name: "Bouchons d'oreilles",
    price: 3,
    emoji: '🦻',
    category: 'Accessoires',
    tagline: "Le seul produit dont on garantit l'efficacité.",
    description:
      "Mousse hypoallergénique, atténuation 33 dB. C'est le seul article du catalogue dont nous garantissons formellement l'efficacité. C'est aussi le seul que nous vendons contre nous-mêmes. Nous n'avons pas fini d'en discuter en réunion.",
  },
  {
    slug: 'le-costume',
    name: 'Le costume',
    price: 180,
    emoji: '👗',
    category: 'Accessoires',
    tagline: 'Rouge. Noir. Non négociable.',
    description:
      "Rouge et noir, comme le logo, comme tout le reste. Le costume ne se discute pas, ne se personnalise pas, et ne passe pas en machine à plus de 30°. Trois personnes ont essayé. Nous avons trois costumes roses et trois personnes qui ne le referont pas.",
  },
  {
    slug: 't-shirt',
    name: 'Le t-shirt',
    price: 25,
    emoji: '👕',
    category: 'Accessoires',
    tagline: 'Coton bio. Bandes diagonales. Évidemment.',
    description:
      "Coton bio, sérigraphie deux couleurs, bandes diagonales sur le devant. Le vêtement idéal pour signaler discrètement à votre entourage que vous faites de la batucada, au cas où le surdo dans l'entrée n'aurait pas suffi.",
  },
  {
    slug: 'repet-chez-vous',
    name: "Une répét' chez vous",
    price: 1200,
    emoji: '🏠',
    category: 'Prestations',
    tagline: '70 personnes. Chez vous. Samedi.',
    description:
      "Soixante-dix amateurs, leurs instruments, leur enthousiasme et leur soif, dans votre salon, un samedi après-midi. Nous venons, nous répétons, nous repartons. Ce qui reste de votre appartement après vous appartient toujours, au sens juridique du terme.",
  },
  {
    slug: 'defile-complet',
    name: 'Un défilé complet',
    price: 2500,
    emoji: '🎪',
    category: 'Prestations',
    tagline: 'Deux heures. Une rue. Aucun regret.',
    description:
      "La formation complète, percussions et danse, sur deux heures et le linéaire de rue de votre choix. Nous fournissons le son, le mouvement, les costumes et les sourires. Vous fournissez la rue et les autorisations. Les riverains fournissent leur opinion, spontanément.",
  },
  {
    slug: 'cours-particulier',
    name: 'Cours particulier',
    price: 60,
    emoji: '🎓',
    category: 'Prestations',
    tagline: 'Une heure pour comprendre. Un an pour y arriver.',
    description:
      "Une heure en tête-à-tête avec quelqu'un qui joue depuis quinze ans et qui va vous expliquer, très patiemment, que non, ce n'est pas sur le temps. Puis vous le referez. Puis ce ne sera toujours pas sur le temps. Puis, un jour, si.",
  },
  {
    slug: 'place-camion',
    name: 'Une place dans le camion',
    price: 40,
    emoji: '🚐',
    category: 'Prestations',
    tagline: "Sans le surdo. Avec, c'est 40 € aussi, mais debout.",
    description:
      "Aller-retour vers le lieu de prestation, dans le camion, avec les instruments, les costumes et quinze personnes qui chantent le répertoire depuis le départ. La place assise n'est pas garantie. L'ambiance, si.",
  },
  {
    slug: 'break-de-fin',
    name: 'Le break de fin (MP3)',
    price: 2,
    emoji: '💿',
    category: 'Divers',
    tagline: 'Huit secondes. En boucle. Chez vous.',
    description:
      "Le break final, isolé, en 320 kbps, à écouter chez vous autant de fois qu'il vous plaira. Nos membres l'ont déjà entendu environ neuf mille fois et le fredonnent involontairement dans les transports. Vous voilà prévenu.",
  },
  {
    slug: 'biere-apres-concert',
    name: "La bière d'après-concert",
    price: 6,
    emoji: '🍺',
    category: 'Divers',
    tagline: 'La seule partie du répertoire maîtrisée par tous.',
    description:
      "Servie tiède, bue debout, dans un gobelet en plastique, en rejouant le morceau raté à la bouche avec des onomatopées. C'est la seule partie du répertoire que l'ensemble des membres maîtrise parfaitement, sans partition, dès la première année.",
  },
  {
    slug: 'voisin-comprehensif',
    name: 'Un voisin compréhensif',
    price: 5000,
    emoji: '🪟',
    category: 'Divers',
    tagline: 'Denrée rare à Lyon.',
    description:
      "Un voisin qui sourit quand vous rentrez le surdo dans l'ascenseur à minuit. Qui dit « c'était chouette dimanche ». Qui ne connaît pas le numéro du commissariat du 7e par cœur. Nous n'avons jamais réussi à en produire un seul. Le prix reflète la difficulté.",
  },
  {
    slug: 'trois-minutes-silence',
    name: '3 minutes de silence',
    price: 9999,
    emoji: '🤫',
    category: 'Divers',
    tagline: 'Notre produit le plus rare. Stock : néant.',
    description:
      "Cent quatre-vingts secondes consécutives sans un son, en présence de la batucada complète. Théoriquement possible. Jamais observé en dix-neuf ans d'existence. Le prix est indicatif : aucune transaction n'a jamais abouti, faute de marchandise.",
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
