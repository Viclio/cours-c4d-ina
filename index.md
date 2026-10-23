---
title: "Accueil"
nav_order: 0
permalink: /index.html
---

# Cinema 4D – Support de cours, semaine 1

**Motion Design · INA**

Ce document accompagne les cinq premiers jours de formation sur Cinema 4D. Il suit la progression du cours : interface, splines, générateurs, modélisation polygonale, modélisation en volume, puis mise en scène et rendu. Le projet fil rouge de la semaine est un **petit train jouet**.

**Conventions de lecture**

- Les termes techniques sont donnés en français, avec le terme anglais officiel de Cinema 4D entre parenthèses à leur première apparition.
- Les raccourcis sont écrits en police fixe. Une séquence comme `N~A` signifie : appuyer sur N, relâcher, puis appuyer sur A.
- Aide officielle Cinema 4D : [C4D – The quick start](https://help.maxon.net/c4d/en-us/Content/html/CINEMA_4D_QUICKSTART.html) et [liste complète des raccourcis](https://help.maxon.net/c4d/en-us/Content/html/Shortcuts.html). Les liens « Aide » renvoient aux pages officielles (en anglais).
- Sur Mac, `Alt` correspond à la touche `Option (⌥)` et `Ctrl` à la touche `Cmd (⌘)`. Les touches F1 à F5 peuvent nécessiter la touche `fn`.

## Sommaire

{% assign jours = site.pages | where_exp: "p", "p.nav_order > 0 and p.nav_order < 99" | sort: "nav_order" %}
{% for p in jours %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}
- [Crédits des illustrations]({{ "/credits.html" | relative_url }})
