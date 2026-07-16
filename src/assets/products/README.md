# Photos des produits

Déposer les photos ici, puis renseigner le nom du fichier dans
`src/data/products.ts` :

```ts
{
  slug: 'surdo-22',
  image: 'surdo-22.jpg',
  ...
}
```

`image: null` affiche le placeholder. Les deux peuvent cohabiter, les photos
peuvent donc arriver au compte-gouttes.

Astro optimise ces images au build : redimensionnement, conversion en webp,
et hash dans le nom de fichier. Inutile de les préparer, on peut déposer le
fichier tel qu'il sort de l'appareil.

Formats acceptés : jpg, jpeg, png, webp, avif. Le nom du fichier n'a pas à
correspondre au slug, mais c'est plus lisible.
