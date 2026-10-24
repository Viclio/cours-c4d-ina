---
title: "Accueil"
nav_order: 0
semaine: 2
---

# Cinema 4D – Support de cours, semaine 2

**Motion Design · INA**

Ce support accompagne la deuxième semaine de formation. Après la modélisation (semaine 1), on donne vie aux objets : **texturer** (Substance Painter, UVs, matériaux Redshift), **éclairer**, **animer** (images clés, caméras), puis **automatiser** le mouvement avec MoGraph et les simulations de tissu.

**Conventions de lecture**

- Les termes techniques sont en français, avec le nom anglais officiel entre parenthèses à la première occurrence.
- Les raccourcis sont écrits en police fixe : `Ctrl + D`, `Tab`, `L`.
- Les liens « Aide Maxon » renvoient à l’aide officielle de Cinema 4D et de Redshift (en anglais). Les liens « Aide Adobe » renvoient à la documentation de Substance 3D Painter. Les repères chiffrés sur le PBR viennent de *The PBR Guide* (Allegorithmic, aujourd’hui Adobe).
- Selon votre version de Cinema 4D, certains noms de menus peuvent changer (notamment les outils UV, entièrement refaits dans la version 2026.3).

## Sommaire

{% assign jours = site.pages | where: "semaine", page.semaine | sort: "nav_order" %}
{% for p in jours %}{% if p.nav_order > 0 and p.nav_order < 99 %}
- [{{ p.title }}]({{ p.url | relative_url }})
{%- endif %}{% endfor %}
- [Crédits des illustrations]({{ "/semaine-2/credits.html" | relative_url }})
