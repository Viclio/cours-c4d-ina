---
semaine: 2
title: "Jour 4 – Animation par images clés et caméras"
short: "Animation par images clés et caméras"
nav_order: 4
---

# Jour 4 – Animation par images clés et caméras

## Objectifs du jour

- Créer et modifier des images clés, lisser le mouvement dans l’éditeur de courbes.
- Animer une balle qui rebondit.
- Choisir une focale et un angle de caméra en fonction de l’intention.
- Animer une caméra de plusieurs façons : images clés, Stage, Target, spline, Morph, Motion Camera.

## Les images clés (keyframes)

Une **image clé** enregistre la valeur d’une propriété à un instant donné (par exemple la position X à l’image 0, puis à l’image 50). Cinema 4D **interpole**, c’est-à-dire calcule, toutes les valeurs intermédiaires.

**Trois façons de créer des images clés**

- **Propriété par propriété** : cliquez sur le petit rond gris à côté d’un paramètre dans le Gestionnaire d’attributs.
- **Enregistrement** : bouton **Enregistrer** (icône clé) de la palette d’animation.
- **Auto-key** (enregistrement automatique), comme dans After Effects :
  1. Activez l’auto-key.
  2. Déplacez-vous dans le temps.
  3. Modifiez la propriété : l’image clé est créée automatiquement.

Aide Maxon : [Méthodes de création des pistes et images clés](https://help.maxon.net/c4d/en-us/Content/html/10592.html).

**Les outils d’édition**

- **Timeline** (bas de l’interface) : pour voir et déplacer rapidement les images clés.
- **Dope Sheet** : chaque propriété animée est une **piste** (track). Plus de contrôle.
- **Éditeur de courbes (F-Curve)** : touche `Tab` pour y basculer depuis le Dope Sheet. La courbe montre l’évolution de la valeur dans le temps : sa pente, c’est la vitesse.
- **Tangentes** : les poignées de chaque image clé règlent l’accélération. Cassez-les pour contrôler séparément l’arrivée et le départ.
- Raccourcis vus en cours : `L` rend les images clés **linéaires** (vitesse constante), `A` remet un **lissage automatique**.

Aide Maxon : [Timeline](https://help.maxon.net/c4d/en-us/Content/html/10596.html).

## Exercice : la balle qui rebondit

1. **Observez** : la hauteur de chute et la taille de la balle déterminent le rythme.
2. **Choisissez un rythme** et tenez-le (un contact toutes les 3 ou 4 images, par exemple). Les rebonds suivants sont de plus en plus bas et rapprochés.
3. Dans l’éditeur de courbes, **cassez les tangentes** au moment du contact : la balle repart d’un coup, en pointe. En haut de la trajectoire, la courbe est arrondie (ralentissement).
4. Utilisez l’outil **Zone** (`R` dans l’éditeur de courbes) pour encadrer un groupe d’images clés et le déplacer ou le redimensionner.
5. **Attention :** Cinema 4D n’a pas de courbe de vélocité comme After Effects. On anime **par piste et par valeur**, pas par vitesse.

## Choisir sa focale : la focale raconte la scène

Chaque plan doit choisir sa focale avec soin : elle change la perception de l’espace.

**50 mm : la focale neutre**

- Proche de la vision humaine, peu de déformations de perspective.
- Point de vue neutre, utile partout : plan subjectif, packshot, plan d’ensemble.

**Moins de 50 mm : le grand-angle**

- Le **35 mm** est très courant : c’est la focale « cinéma ».
- Il exagère un peu les perspectives, sans trop déformer.
- Excellent pour **situer un lieu** (plan d’établissement) et pour les plans d’**action**, dynamiques.
- En **plongée** ou **contre-plongée**, il écrase ou grandit le sujet.
- Il découpe efficacement l’espace en profondeur.

**Moins de 24 mm : l’ultra grand-angle**

- En 3D, les caméras sont parfaites : **pas de déformation en barillet** (les lignes droites restent droites). En dessous de 24 mm, on obtient donc des perspectives spectaculaires, peu crédibles.
- La caméra Redshift propose des projections déformées (**fisheye**) pour retrouver l’effet d’un vrai objectif.
- Une course-poursuite en 24 mm ou moins sera extrêmement dynamique : caméra sur une spline, en contre-plongée, près du sol, et l’impression de vitesse est maximale. La même scène en longue focale peut sembler se traîner.
- **À éviter pour les plans beauté et les packshots** : les perspectives extrêmes enlaidissent.
- En **architecture** et pour les environnements, elles donnent au contraire profondeur, ampleur et dynamisme.

**Plus de 50 mm : le téléobjectif (longue focale)**

- Il **écrase les perspectives** et rapproche les objets les uns des autres.
- Idéal pour les **packshots** et les plans beauté.
- En rapprochant les plans, il peut créer une impression d’**oppression**, de foule compacte.

**Au-delà de 120 mm**

- La perspective disparaît presque.
- Effet de plan « paparazzi », pris de loin.
- Sur un environnement vu d’en haut : **effet maquette**.

## Orienter la caméra : H, P, B

Les rotations d’une caméra se lisent en **H, P, B** :

- **H (Heading, cap)** : la direction, on tourne la tête de gauche à droite.
- **P (Pitch, tangage)** : l’inclinaison, on lève ou on baisse la tête.
- **B (Bank, roulis)** : la bascule, on penche la tête de côté.

**Conseils de cadrage**

- **Pitch à 0** : les verticales restent verticales, les lignes de fuite au bord de l’image sont minimisées. Idéal pour l’architecture et les packshots.
- **Bank** : crée des diagonales et déséquilibre le cadre. Parfait pour dynamiser, ou pour suggérer le malaise, la folie.
- **Projection orthographique** : supprime la perspective. Vue de trois-quarts, elle donne la **vue isométrique**.
- **Aides au cadrage** (onglet Composition de la caméra) : règle des tiers, diagonales, spirale d’or. Aide Maxon : [Camera Object](https://help.maxon.net/c4d/en-us/Content/html/OCAMERA.html).

## Animer une caméra

**1. Par images clés**

- On active l’enregistrement de la position et de la rotation, puis on anime directement dans la vue.
- Pour un mouvement simple, ça marche. Pour un mouvement complexe, on obtient vite des **à-coups** désagréables : à éviter.
- Pour un travelling simple, saisissez plutôt les **coordonnées** directement. **Le moins d’images clés possible**, c’est le mieux.
- **Travaillez le lissage** : un travelling est le plus souvent **linéaire**, sans accélération au début ni ralentissement à la fin. Dans l’éditeur de courbes, `L` supprime le lissage (`A` le remet), ou créez directement des images clés de type **Linéaire** au lieu de Bézier.

**2. L’objet Stage : enchaîner les plans**

- L’objet **Stage** agit comme un **réalisateur** : il décide quelle caméra est active à quel moment. Aide Maxon : [Stage Object](https://help.maxon.net/c4d/en-us/Content/html/OSTAGE.html).
- Parfait pour créer une **animatique** : une première version grossière du film, pour placer les caméras et trouver le rythme.
- **Tous** les films d’animation et projets de motion importants passent par une animatique. Même très grossière, elle vaut mieux que rien. Exemple : l’animatique du film *Flow*, oscarisé : [voir la vidéo](https://www.youtube.com/shorts/4qUR-gbwsRQ).
- Les changements de caméra se font avec des **images clés de maintien** (step/hold) : pas d’interpolation entre deux caméras.
- **Désactivez l’objet Stage** pour reprendre la main sur une caméra dans la vue.

**3. Le tag Cible (Target)**

- Une caméra libre qu’on anime tourne souvent de façon désagréable.
- Le tag **Cible** oblige la caméra à **toujours regarder un objet** (souvent un nul). Aide Maxon : [Target Expression](https://help.maxon.net/c4d/en-us/Content/html/TTARGETEXPRESSION.html).
- On anime ensuite la position de la cible indépendamment de la caméra.

**4. Sur une spline : Aligner sur spline (Align to Spline)**

- Dessinez une spline, ajoutez à la caméra le tag **Aligner sur spline**, puis animez la **Position** le long de la spline (de 0 à 100 %). Aide Maxon : [Align to Spline](https://help.maxon.net/c4d/en-us/Content/html/TALIGNTOSPLINE.html).
- L’option **Tangentielle** aligne la caméra sur la courbure de la spline.
- Sinon, ajoutez un tag **Cible** pour fixer le regard.
- Astuce : placez la cible sur la **même spline**, légèrement en avance. Le regard anticipe la trajectoire et la caméra est plus stable.
- Limite : ce tag utilise la spline d’origine, pas une spline déformée par un déformateur.

**5. Travelling circulaire autour d’un objet**

1. Créez une spline **Cercle** autour de l’objet et ajustez son rayon.
2. Ajoutez à la caméra le tag **Aligner sur spline**.
3. Ajoutez un tag **Cible** visant un nul placé au centre de l’objet.
4. Animez la Position du tag dans le temps.
5. Pour plus de dynamisme, animez aussi la **hauteur** et le **rayon** du cercle.

**6. Le Morph de caméra (Camera Morph)**

- Créez plusieurs caméras, une par point de vue intéressant.
- Sélectionnez-les, puis Créer \> Caméra \> **Morph de caméra** : une nouvelle caméra passe en douceur d’un point de vue à l’autre, focale comprise. Aide Maxon : [Camera Morph](https://help.maxon.net/c4d/en-us/Content/html/TMORPHCAM.html).
- Animez la valeur de transition (**Blend**). Dans l’éditeur de courbes, cette courbe permet des ralentis et des accélérations très dynamiques.
- On peut ajouter ou retirer des caméras à tout moment.

**7. Le tag Motion Camera**

- À utiliser **en dernier** : il raffine le mouvement final. Aide Maxon : [Motion Camera](https://help.maxon.net/c4d/en-us/Content/html/TMOTIONCAM.html).
- **Mode Dynamics** : lisse le mouvement, ajoute un effet de ressort.
  - C’est un mode **dynamique** : il calcule chaque image à partir de la précédente. Relancez toujours la lecture depuis l’image 0.
  - Pour le rendu (et une lecture fluide), **figez** l’animation : glissez la caméra dans la Timeline, puis **Figer les objets** (Bake Objects) pour obtenir de vraies images clés.
- **Mode Motion** : ajoute les petits **bougés** d’une caméra portée à la main. Même un plan fixe gagne en réalisme avec un très léger bougé.
- Dans les préréglages, la partie **Footsteps** simule une marche : inutile pour un travelling, désactivez-la.

## Points de vigilance

- Le moins d’images clés possible sur une caméra.
- Un travelling est généralement linéaire.
- Stage actif = impossible de piloter la caméra à la main.
- Motion Camera en mode Dynamics : lecture depuis 0, puis figer avant le rendu.
