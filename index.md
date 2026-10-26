---
title: "Accueil"
---

# Cinema 4D – Supports de cours

**Motion Design · INA**

Chaque semaine de formation a son propre support, avec son sommaire et ses pages. Choisissez une semaine :

<div class="week-cards">
{% for s in site.data.semaines %}
  <a class="week-card" href="{{ '/semaine-' | append: s.id | append: '/' | relative_url }}">
    <span class="num">Semaine {{ s.id }}</span>
    <strong>{{ s.titre | split: '– ' | last }}</strong>
    <span class="txt">{{ s.resume }}</span>
  </a>
{% endfor %}
</div>

## Poser une question sur le cours

Un carnet Google rassemble les supports de cours : vous pouvez l’interroger en langage naturel pour retrouver une notion, un réglage ou un raccourci.

**[Ouvrir le carnet de questions sur le cours](https://notebook.google.com/notebook/60d3c664-478d-4b2d-a611-521982e20e17)**
