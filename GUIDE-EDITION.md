# Guide d'édition

Tout le contenu est écrit en **Markdown** : du texte simple, avec quelques signes pour la mise en forme. On peut tout modifier directement sur github.com, sans rien installer. Après chaque enregistrement, le site se met à jour tout seul en une à deux minutes.

## Modifier une page

1. Sur github.com, ouvrez le fichier (par exemple `semaine-1/jour-2.md`). Chaque semaine a son dossier : `semaine-1/`, `semaine-2/`…
2. Cliquez sur l'icône crayon (*Edit this file*).
3. Modifiez le texte, puis cliquez sur **Commit changes**.

## Mise en forme

```markdown
## Titre de section          (apparaît dans le sommaire à gauche)
### Sous-titre
**gras**, *italique*, `raccourci clavier`
- élément de liste
1. étape numérotée
[texte du lien](https://adresse.com)
```

Les tableaux s'écrivent ainsi :

```markdown
| Action | Windows | Mac |
|---|---|---|
| Rendu dans la vue | `Ctrl + R` | `Cmd + R` |
```

## Ajouter une image

1. Déposez l'image dans le dossier `images/` **de la semaine** (par exemple `semaine-2/images/`, via *Add file › Upload files*).
2. Dans la page, écrivez l'image puis, **sur la ligne juste en dessous**, la légende en italique :

```markdown
![Texte alternatif](images/mon-image.jpg){: .w60}
*Légende de l'image — Source : …*
```

`{: .w60}` règle la largeur : `.w25`, `.w33`, `.w40`, `.w50`, `.w60`, `.w75`, `.w90` ou `.w100` (en % de la colonne). On peut l'enlever : l'image prend alors sa taille naturelle.

## Ajouter une vidéo

**YouTube** (l'identifiant est la fin de l'adresse `youtube.com/watch?v=IDENTIFIANT`) :

```liquid
{% include youtube.html id="4qUR-gbwsRQ" caption="Légende de la vidéo" %}
```

**Vimeo** :

```liquid
{% include vimeo.html id="123456789" caption="Légende" %}
```

**Fichier MP4 dans le dépôt** (déposez-le dans `videos/` ; GitHub refuse les fichiers de plus de 100 Mo, préférez YouTube ou Vimeo pour les vidéos lourdes) :

```liquid
{% include video.html src="videos/mon-film.mp4" caption="Légende" %}
```

## Ajouter une page (par exemple un jour 6)

Dans le dossier de la semaine, créez `jour-6.md` avec cet en-tête, puis le contenu :

```markdown
---
semaine: 2
title: "Jour 6 – Titre du jour"
short: "Titre du jour"
nav_order: 6
---

# Jour 6 – Titre du jour

Contenu…
```

`semaine` indique à quelle semaine la page appartient (même numéro que le dossier) et `nav_order` sa place dans le menu. La page apparaît automatiquement dans le menu de sa semaine, dans le sommaire de l'accueil de la semaine et dans les boutons Précédent / Suivant.

## Ajouter une semaine (par exemple une semaine 3)

1. Dans `_data/semaines.yml`, ajoutez une entrée `id: 3` avec son titre, son sous-titre et son résumé (copiez celle de la semaine 2).
2. Créez le dossier `semaine-3/` en copiant `semaine-2/index.md` et `semaine-2/credits.md`, et remplacez `semaine: 2` par `semaine: 3` dans leur en-tête (et `/semaine-2/credits.html` par `/semaine-3/credits.html` dans `index.md`).
3. Ajoutez les pages `jour-1.md`… avec `semaine: 3` dans l'en-tête, et les images dans `semaine-3/images/`.

La semaine apparaît alors sur l'accueil général et dans le lien « Autres semaines » du menu.

## Changer le titre ou les couleurs

- Titre du site : `_config.yml`. Titre, sous-titre et résumé de chaque semaine : `_data/semaines.yml`.
- Couleurs : en haut de `assets/style.css` (`--accent` est la couleur orange).

## Prévisualiser sur son ordinateur (facultatif)

Avec Ruby et Jekyll installés : `jekyll serve`, puis ouvrir http://localhost:4000.
