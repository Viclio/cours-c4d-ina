# Guide d'édition

Tout le contenu est écrit en **Markdown** : du texte simple, avec quelques signes pour la mise en forme. On peut tout modifier directement sur github.com, sans rien installer. Après chaque enregistrement, le site se met à jour tout seul en une à deux minutes.

## Modifier une page

1. Sur github.com, ouvrez le fichier (par exemple `jour-2.md`).
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

1. Déposez l'image dans le dossier `images/` (*Add file › Upload files*).
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

Créez `jour-6.md` avec cet en-tête, puis le contenu :

```markdown
---
title: "Jour 6 – Titre du jour"
short: "Titre du jour"
nav_order: 6
---

# Jour 6 – Titre du jour

Contenu…
```

`nav_order` décide de la place dans le menu. La page apparaît automatiquement dans le menu, dans le sommaire de l'accueil et dans les boutons Précédent / Suivant.

## Changer le titre ou les couleurs

- Titre et sous-titre du site : `_config.yml`.
- Couleurs : en haut de `assets/style.css` (`--accent` est la couleur orange).

## Prévisualiser sur son ordinateur (facultatif)

Avec Ruby et Jekyll installés : `jekyll serve`, puis ouvrir http://localhost:4000.
