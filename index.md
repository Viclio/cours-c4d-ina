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
