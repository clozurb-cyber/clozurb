# clozurb.fr — la boutique parodique des Zurbamateurs

Faux site e-commerce, statique, hébergé sur GitHub Pages. On peut y remplir un panier
sur 21 produits absurdes ; au moment de commander, tout est en rupture de stock.

Le but réel : **savoir quels produits font envie**. Le clic sur « Commander » est le vote.
Chaque commande part dans un Google Sheet, une ligne par produit, avec le nom et le pupitre
de la personne.

## Développer

```sh
npm install
npm run dev
```

| Commande | Effet |
| --- | --- |
| `npm run dev` | serveur de dev |
| `npm run build` | build statique dans `dist/` |
| `npm run preview` | sert le `dist/` |
| `npm run check` | typecheck |

Le catalogue vit dans `src/data/products.ts`, la liste des pupitres dans `src/data/sections.ts`.
Ajouter un produit = ajouter un objet au tableau, sa page est générée automatiquement.

## Brancher le Google Sheet

Sans cette étape le site fonctionne, mais aucune commande n'est enregistrée.

1. Créer un Google Sheet.
2. Extensions → Apps Script.
3. Coller le contenu de `apps-script/Code.gs`, sauvegarder.
4. Déployer → Nouveau déploiement → type **Application Web** :
   - Exécuter en tant que : **moi**
   - Qui a accès : **tout le monde**
5. Copier l'URL de déploiement (elle finit par `/exec`).
6. Dans le repo GitHub : Settings → Secrets and variables → Actions → New repository secret,
   nom `PUBLIC_ORDER_ENDPOINT`, valeur l'URL `/exec`.

En local, copier `.env.example` vers `.env` et y mettre la même URL.

L'onglet `Commandes` se crée tout seul à la première commande :

```
horodatage | commande_id | nom | pupitre | produit_slug | produit_nom | quantite
```

Pas de prix : il vit dans `src/data/products.ts` et n'apporterait rien de plus ici.

Une ligne par produit (et non par commande) : c'est ce qui rend le tableau croisé dynamique
immédiat — produits en lignes, `pupitre` en colonnes, `SOMME(quantite)` en valeurs.

### Pourquoi ce POST est bizarre

`src/scripts/order.ts` envoie du `Content-Type: text/plain` en `mode: 'no-cors'`, ce qui a l'air
faux mais ne l'est pas. Apps Script redirige `script.google.com` vers `script.googleusercontent.com`,
et cette redirection ne survit pas à un preflight CORS. La seule requête qui passe est une
*simple request*, d'où le `text/plain` (qui évite le preflight) avec du JSON dans le body.

Conséquence : **on n'a aucun retour du serveur**, l'envoi est en fire-and-forget. La modale de
rupture de stock s'affiche donc toujours, quoi qu'il arrive au `fetch`. Le tracking ne doit jamais
pouvoir casser la blague — c'est testé, endpoint coupé comme endpoint absent.

Corollaire : le seul vrai test du Sheet, c'est de commander une fois en prod et d'aller regarder.

## Déploiement

Repo : `git@github.com:clozurb-cyber/clozurb.git`
En ligne : **https://clozurb-cyber.github.io/clozurb/**

Push sur `main` → GitHub Action → Pages. Voir `.github/workflows/deploy.yml`.

Config requise sur le repo :

- Settings → Pages → Source : **GitHub Actions**
- Secret `PUBLIC_ORDER_ENDPOINT` (voir plus haut)

Le site est servi sous le sous-chemin `/clozurb/`, d'où le `base` dans `astro.config.mjs`.
**Aucun lien interne ne doit être écrit en dur** : passer par `src/lib/paths.ts`
(`path('/panier')`, `productPath(slug)`), y compris dans le JS client. Le helper lit
`import.meta.env.BASE_URL`, donc il fonctionne tel quel à la racine comme dans un sous-chemin.

### Passer sur clozurb.fr plus tard

Rien à changer dans le code — seulement de la config :

1. Créer `public/CNAME` contenant `clozurb.fr`
2. Définir les variables de repo `SITE_URL=https://clozurb.fr` et `BASE_PATH=/`
3. DNS : `clozurb.fr` est un domaine apex, un CNAME est impossible à la racine. Il faut quatre
   enregistrements **A**, ou un **ALIAS**/**ANAME** vers `clozurb-cyber.github.io` si le registrar
   le propose :

```
A      @    185.199.108.153
A      @    185.199.109.153
A      @    185.199.110.153
A      @    185.199.111.153
CNAME  www  clozurb-cyber.github.io.
```

4. Compter jusqu'à 24 h de propagation, puis cocher **Enforce HTTPS** dans Settings → Pages une fois
   le certificat émis.

## Git

Ce repo a une identité locale dédiée (`clozurb`), pour que le compte pseudonyme le reste :

```
user.name        clozurb
user.email       clozurb@gmail.com
commit.gpgsign   false
```

Le remote passe par l'alias SSH `clozurb` défini dans `~/.ssh/config`, qui force la clé
`~/.ssh/id_ed25519_clozurb`. Rien de tout ça n'affecte les autres repos de la machine.

## Parti pris technique

- **Astro, aucun framework UI** — 6 Ko de JS gzippé sur tout le site
- **Aucune image** : les vignettes produit sont des bandes CSS + un emoji, comme le logo
- **Polices auto-hébergées**, subset latin uniquement, aucun appel à Google Fonts
- **Le panier ne stocke que `{slug, quantity}`** en localStorage — noms et prix sont relus depuis
  `products.ts`, donc un vieux panier n'affiche jamais un prix périmé et un produit supprimé du
  catalogue est ignoré sans planter
- **Aucune donnée personnelle** au-delà d'un prénom et d'un pupitre, entre gens qui se connaissent
