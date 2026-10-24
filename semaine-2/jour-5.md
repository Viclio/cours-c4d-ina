---
semaine: 2
title: "Jour 5 – MoGraph et simulations"
short: "MoGraph et simulations"
nav_order: 5
---

# Jour 5 – MoGraph et simulations

## Objectifs du jour

- Comprendre la logique MoGraph : cloneur → effecteur → champ.
- Créer des animations de grilles, de texte et de fragmentation.
- Utiliser les effecteurs Delay et le Tracer pour enrichir le mouvement.
- Simuler un tissu : collisions, forces, attaches et mise en cache.

## MoGraph : la naissance du motion design 3D

Les outils **MoGraph** sont apparus en **2006**, avec Cinema 4D 9.6. Ces outils procéduraux ont largement défini ce qu’est devenu le motion design en 3D. Aide Maxon : [MoGraph](https://help.maxon.net/c4d/en-us/Content/html/7439.html).

**La chaîne MoGraph, toujours dans le même ordre :**

1. Un objet est **cloné** par un **Cloneur**.
2. Les clones sont **modifiés** par un **Effecteur** (par exemple, déplacés au hasard par l’effecteur Aléatoire).
3. L’effet est **dosé** par un **Champ** (Field) : par exemple, de gauche à droite, et animé dans le temps.

C’est la combinaison des trois qui fait la puissance de MoGraph.

**Les règles de création**

- L’objet à cloner est **enfant** du Cloneur (icône verte).
- Pour relier automatiquement un effecteur à un cloneur : **sélectionnez le cloneur avant de créer l’effecteur**.
  - L’effecteur n’est ni parent ni enfant du cloneur : il reste **à part** dans la hiérarchie.
  - Un même effecteur peut agir sur plusieurs cloneurs.
  - Le lien est **invisible** dans la hiérarchie : on le voit seulement dans l’onglet **Effecteurs** du cloneur.
  - **L’erreur la plus fréquente** : oublier ce lien. Glissez alors l’effecteur à la main dans la liste Effecteurs du cloneur.
- Les **champs** se créent directement dans l’onglet Champs de l’effecteur, ou à part puis glissés dans cette liste.
- Un champ sans effecteur ne sert à rien dans MoGraph.

## Le Cloneur et ses modes

Aide Maxon : [Cloner Object](https://help.maxon.net/c4d/en-us/Content/html/OMOGRAPH_CLONER.html).

- **Linéaire** : des clones en ligne. Avec les décalages de position et de rotation par clone, on crée hélices, spirales, escaliers.
- **Radial** : des clones en cercle.
- **Grille** : des grilles en 2D ou 3D.
- **Objet** : les clones suivent une **spline**, ou se répartissent sur la **surface** d’un objet, voire dans son **volume**.

## Effecteurs et champs

**L’effecteur** modifie tous les clones du cloneur.

- **Aléatoire (Random)** : déplace, tourne et redimensionne chaque clone au hasard. Il casse l’aspect trop régulier des images de synthèse. Aide Maxon : [Random](https://help.maxon.net/c4d/en-us/Content/html/OERANDOMIZE.html).
- **Simple (Plain)** : n’a pas d’effet propre ; il applique les paramètres de son onglet Paramètres (position, échelle…) selon ses champs. Très rapide à calculer. Aide Maxon : [Plain](https://help.maxon.net/c4d/en-us/Content/html/OEPLAIN.html).
- **Force (Strength)** : de 0 à 100 %. L’animer suffit déjà pour des effets simples.

**Le champ** attribue à chaque clone une **intensité** d’effet, entre 0 et 100 %.

- **Spatial** : selon une ligne (**Linear Field**), une sphère (**Spherical Field**), une boîte… Aide Maxon : [Linear Field](https://help.maxon.net/c4d/en-us/Content/html/FLINEAR.html).
- **Par rang** : l’intensité se répartit du premier au dernier clone (**Step Field**).
- **Dans le temps** : **Time Field**.
- **Le long d’une spline** : **Spline Field**.
- **Aléatoire** : **Random Field** (voir plus bas).

## Exercice : une grille de cubes qui s’anime

1. Créez un **Cube**.
2. Placez-le dans un **Cloneur** en mode **Grille**. Ajustez l’espacement.
3. Ajoutez un effecteur **Aléatoire** : position, rotation et échelle.
4. Dans l’effecteur, ajoutez un **Linear Field**. Animez-le de gauche à droite.
    - **L’animation vient du champ**, pas de l’effecteur ni du cloneur !
5. Ajoutez un effecteur **Simple** au même cloneur, avec une **échelle à -1** : les cubes disparaissent.
6. Glissez le **même Linear Field** dans l’effecteur Simple.
7. Résultat : en passant, le champ fait disparaître les cubes tout en les dispersant.

## Le Texte MoGraph

L’objet **Texte** (anciennement MoText) regroupe trois fonctions en une : spline de texte + extrusion + cloneur. Chaque lettre, mot ou ligne est un clone. Aide Maxon : [Text](https://help.maxon.net/c4d/en-us/Content/html/OMOGRAPH_TEXT.html).

1. Animez l’apparition des lettres avec un effecteur **Aléatoire** + un effecteur **Simple** + un **Linear Field**.
2. L’arrivée des lettres est **linéaire et brutale**. Pour l’adoucir :
    - Onglet **Remappage** (Remap) du champ : fonction **Quadratique** pour lisser l’arrivée.
    - Ou fonction **Spline** : on dessine directement la courbe de transition.
3. Pour un ordre d’apparition moins mécanique : ajoutez un **Random Field** en mode Aléatoire, avec le mode de fusion **Incrustation** (Overlay). Les lettres arrivent toujours l’une après l’autre, mais à des vitesses différentes.

## Le Random Field : du bruit au vrai hasard

Aide Maxon : [Random Field](https://help.maxon.net/c4d/en-us/Content/html/FRANDOM.html).

Une grande grille de cubes avec un effecteur Simple et un Random Field donne des animations très riches.

- **Mode Noise (par défaut)** : un bruit qui suit des motifs mathématiques. Sur une très grande grille, jouez sur l’**échelle** du bruit : des vagues, des hexagones ou des lignes apparaissent selon le type de bruit.
- **Mode Random** : un désordre sans motif visible. C’est du « vrai » hasard… en apparence, car un ordinateur ne produit jamais de hasard pur.
- Le mode Noise peut s’**animer dans le temps**.
- En **cumulant les champs** (et leurs modes de fusion), on sculpte des mouvements complexes.

## L’objet Fracture

Le **Fracture** traite ses enfants comme des clones, que les effecteurs peuvent ensuite animer. Aide Maxon : [Fracture Object](https://help.maxon.net/c4d/en-us/Content/html/OMOGRAPH_FRACTURE.html).

- Il fonctionne sur un objet seul ou sur toute une hiérarchie.
- Mode **Exploser les segments** (Explode Segments) : chaque îlot de polygones devient un clone séparé.
- Mode **Direct** (Straight) : chaque enfant de la hiérarchie est un clone.
  - Réorganisez la hiérarchie à la main si besoin.
  - Groupez sous un **nul** les pièces qui doivent bouger ensemble.

**Exercice : le « morphing » de deux voitures**

1. Chargez deux voitures depuis l’Asset Browser.
2. Supprimez le rig et les éléments inutiles.
3. Placez chaque voiture dans son propre **Fracture**.
4. Voiture 1 : ajoutez un effecteur **Simple** avec une échelle à -1, et un **Linear Field**. En déplaçant le champ, la voiture disparaît.
5. Voiture 2 : un autre effecteur **Simple**, avec le **même** Linear Field, mais **inversé** (fonction Inverser (Invert) du champ).
6. Les deux voitures apparaissent et disparaissent de façon synchronisée : l’une semble se transformer en l’autre.
7. Enrichissez avec d’autres effecteurs et le **Remappage** du champ.

## L’effecteur Retard (Delay)

L’effecteur « triche » qui rend les animations plus belles. Aide Maxon : [Delay](https://help.maxon.net/c4d/en-us/Content/html/OEDELAY.html).

- Il ajoute un **retard** : les effets des autres effecteurs ne démarrent plus d’un coup, ils « traînent » derrière.
- C’est un effecteur **dynamique** : il a besoin de connaître l’image précédente.
  - Lancez toujours la lecture depuis 0.
  - On ne peut pas sauter directement à un moment de la Timeline.
- Mode **Mélange** (Blend) : lisse l’animation, comme un remappage, mais de façon dynamique.
- Mode **Ressort** (Spring) : effet de rebond élastique, très vivant.
- **Il se place toujours en dernier** dans la liste des effecteurs du cloneur.
  - Sans mouvement à retarder, il ne fait rien.
  - Désactivez-le pour modifier l’animation de départ.
- Une fois l’animation terminée, **figez-la** avec un **tag Cache MoGraph** pour une lecture libre. Pensez à **vider le cache** avant toute modification.

## Le Tracer

Le **Tracer** crée des splines à partir de points ou de trajectoires. Aide Maxon : [Tracer](https://help.maxon.net/c4d/en-us/Content/html/OMOGRAPH_TRACER.html).

**Relier des objets** (modes Connecter les objets / Connecter les éléments)

- Il trace une ligne entre les objets ou les clones.
- Placez le Tracer dans un **Balayage** (Sweep) avec un cercle pour obtenir un tube.
- Exemple : des clones reliés en ligne, un second cloneur qui duplique la ligne en grille, un effecteur Simple avec un Random Field : des lignes animées du plus bel effet.

**Tracer une trajectoire** (mode Tracer les chemins, Trace Paths)

- Il dessine le chemin parcouru par l’objet lié.
- Décochez **Tracer les sommets** (Trace Vertices) pour ne pas obtenir une spline par point de l’objet.
- Un simple **nul** avec un **tag Vibration** (Vibrate) donne un mouvement aléatoire à tracer.
- **Limiter** (Limit), par exemple Depuis la fin (From End), réduit la longueur de la traînée.
- Avec **Croissance** (Growth) du Balayage, on obtient une comète qui file dans l’espace ou un tracé de plume.

## Les simulations : le tissu (Cloth)

**Pourquoi simuler ?** Les simulations appliquent des règles qui imitent la réalité (gravité, conservation de l’énergie, rebonds). Elles produisent des mouvements trop complexes pour être animés à la main : un tissu qui se froisse, des dizaines de balles qui s’entrechoquent.

Depuis Cinema 4D 2023, un **nouveau système de simulation** gère tissus, corps mous et cordes. Aide Maxon : [The Simulation System](https://help.maxon.net/c4d/en-us/Content/html/Simulation.html), [Cloth Tag](https://help.maxon.net/c4d/en-us/Content/html/CLOTHTAG.html).

**Le tag Tissu (Cloth)**

- Le comportement dépend d’abord du **nombre de polygones** :
  - Beaucoup de polygones : tissu très fluide, comme de la soie.
  - Moins de polygones : toile cirée.
  - Très peu de polygones : plaque de métal.
- Les paramètres **Flexion** (Bendiness) et **Étirement** (Stretchiness) affinent le comportement. Mais c’est la **densité du maillage** qui décide vraiment.

**Le tag Collision (Collider)**

- Il transforme un objet en **obstacle** : le tissu le touche sans le traverser. Aide Maxon : [Collider Tag](https://help.maxon.net/c4d/en-us/Content/html/COLLIDERTAG.html).
- Un collider **n’est pas affecté** par la simulation : il ne bouge pas sous l’effet des objets simulés, il ignore la gravité et les forces.
- On peut en revanche l’**animer à la main** (un tissu posé sur une main qui bouge).

**La gravité**

- Elle est présente par défaut dans la scène. On la règle dans les **Réglages du projet** (`Ctrl + D`), onglet Simulation.
- Gravité à **0** : plus de chute.
- C’est une force très puissante, qui a tendance à **écraser toutes les autres**.

**Les autres forces**

- **Turbulence** : un courant d’air, une perturbation de l’atmosphère. Pour bien voir son effet, mettez la gravité à 0.
- **Rotation** : un effet de tourbillon (vortex), toujours autour de l’axe Z de la force.
- **Attraction** : attire le tissu vers un point. Parfait pour un effet froissé.
- **Friction** : freine et fluidifie les mouvements, comme si l’objet passait dans l’eau.
- **Limiter une force avec un champ** :
  - Rotation limitée par un **Spherical Field** : une « rose » de tissu.
  - Attraction limitée par un Spherical Field : le tissu ne s’écrase pas d’un coup.
  - Friction limitée par des champs : des zones « ralenties » très intéressantes.

## Attacher un tissu

**Méthode 1 : fixer des points (onglet Habillage / Dresser)**

- L’objet doit être **éditable** (polygones).
- Sélectionnez les points à immobiliser, puis **Fixer les points** (Fix Points).
- Exemple : un drapeau, dont les points du côté du mât sont fixés.

**Méthode 2 : la ceinture (Cloth Belt)**

Pour attacher un tissu à un **autre objet**, qui peut bouger. Aide Maxon : [Belt Tag](https://help.maxon.net/c4d/en-us/Content/html/BELTTAG.html).

1. Appliquez le tag **Cloth Belt** sur le tissu (le drapeau), qui doit être éditable.
2. L’objet d’attache (le mât) doit lui aussi être éditable.
3. Glissez l’objet d’attache dans le champ **Attacher à** (Belt On).
4. Sélectionnez les points à attacher, puis cliquez sur **Définir** (Set).
5. En animant l’objet d’attache, il entraîne le tissu.

- Évitez les mouvements brusques : privilégiez des mouvements doux et réalistes.
- Un même tissu peut être attaché à plusieurs objets avec plusieurs Cloth Belt.

Selon votre version (nouveau système ou mode **Legacy Solver**), les noms des onglets peuvent varier légèrement.

## Figer la simulation (cache)

Une fois la simulation terminée, **figez-la** (Bake) dans l’onglet **Cache** du tag.

- **Cache interne** : stocké dans le fichier .c4d. Attention, le fichier peut devenir très lourd.
- **Cache externe** : une séquence **Alembic** (.abc). On peut ensuite la **retimer** : la ralentir, l’accélérer, la décaler dans le temps.

## Points de vigilance

- Effecteur sans effet ? Vérifiez l’onglet Effecteurs du cloneur.
- L’animation vient du champ : c’est lui qu’on anime.
- Delay et Motion Camera sont dynamiques : lecture depuis 0, puis cache.
- Tissu : la densité du maillage compte plus que les réglages.
- La gravité écrase les autres forces : baissez-la pour tester une force.
- Cache interne = fichier lourd ; préférez l’Alembic pour les longues simulations.
