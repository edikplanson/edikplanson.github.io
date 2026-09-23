# Médias du site

Ce dossier est le « back-office » des images du site : **un dossier = une galerie**.
Aucun code à toucher, il suffit de déposer des fichiers.

## Ajouter / changer une image

1. Ouvre le dossier de la section, par ex. `public/media/projects/wall-e-animatronic/`.
2. Dépose une image, un GIF ou une vidéo dedans. Supprime celles dont tu ne veux plus.
3. Lance `npm run media` (compresse les gros fichiers, une seule fois par fichier).
4. `npm run dev` : c'est déjà en ligne sur la page.

## Nom des fichiers

Le nom pilote **l'ordre** et **la légende** affichée dans la visionneuse :

```
02-cablage-du-bras.webp
^^ ordre          ^^ légende : « Cablage du bras »
```

La première image du dossier sert de vignette principale.

## Formats acceptés

- Images : `.webp` `.jpg` `.png` `.gif` `.avif` `.svg`
- Vidéos : `.mp4` `.webm` (lues en boucle, sans son, comme un GIF)

`npm run media` convertit tout seul les GIF lourds en `.mp4` et les grosses photos
en `.webp` 1600 px. Les originaux pleine résolution partent dans `media-originals/`
à la racine du projet (non publié, non versionné).

## Brancher un nouveau dossier

Un projet lit le dossier indiqué par sa clé `media` dans `src/config.ts` :

```ts
{
  name: "Animatronique Wall-E",
  media: "projects/wall-e-animatronic",  // <- public/media/projects/wall-e-animatronic/
}
```

Le portrait de la page d'accueil vient de `public/media/about/`.
Un dossier vide ou absent : rien ne s'affiche, la page reste propre.
