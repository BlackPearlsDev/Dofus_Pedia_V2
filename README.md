Dofus Pedia est une encyclopédie de Dofus, le jeu de rôle massivement multijoueur en ligne (MMORPG) de Ankama. Elle est développée par moi, fan de Dofus, pour les fans de Dofus. Elle est disponible en ligne à l'adresse (à venir). Elle est également disponible en version mobile (responsive), pour Android et iOS. Elle est développée en React et Node.js. 

# TODO

## Classes /!\ FAIRE UN SEUL COMPOSANT DYNAMIQUE QUI GERE TOUTES LES CLASSES /!\
- dans le router path="/classes/:name" (name = nom de la classe)
- dans le composant, faire un fetch sur l'API pour récupérer les infos de la classe

## Degager les alts des imgs de classes (icones)

## Finir le bestiaire
- Essayer de faire deplier une seule section et pas toutes en même temps
- Une barre de recherche + filtres (ex: type de monstre, niveau, etc.)

## Gestion du site admin (panel, ajout, supression etc)
- Pour le panel d'ajout de mob ajouter a droite (exemple) une preview de ce que l'admin saisie (ex: nom, image, description, etc.) avec le 
même style de fiche que celui du bestiaire. ✔️

Ajout en cours: 
- Ajout de monstres avec preview ♾️


## Page Classe créer une ancre (anchor) pour aller directement aux infos de la classe cliquée

## BDD
Faire des nouvelles tables et faire les relations entre elles:

- ecosystem ✔️
- race ✔️
- spells
- zones
- drops

Comme ça quand on ajoutera un mob dans le panel admin on aura des select pour affecter les valeurs de la BDD

/!\ Quand ce changement sera fais il faudra changer les valeurs des colonnes concernées dans la table monsters, faire passer les ID des autres
tables (INNER JOIN) pour récupérer le 'name' ! 

Exemple: Dans la table monsters, colonne spells: 'Frappe, Larvement' donnera '1, 2', ici 1 = Frappe et 2 = Larvement par exemple.

Pareil pour les autres colonnes. (ecosystem, race, zones, drops)

# DONE ✔️

## Page Classes avec toutes les classes Outlets + Responsive spécial pour les écrans inférieur à 370px ✔️
## Page Carte drag + zoom & informations de la géoposition, responsive ✔️
- Bonus: Afficher les points d'intérêts sur la map (ex: les donjons, hotels de vente, ateliers de craft, etc.) ✔️
## Page Bestiaire avec un responsive spécial pour les écrans inférieur à 370px ✔️
## Page de création de compte ✔️
## Page de connexion ✔️
## Page de déconnexion ✔️
## Page de profil (en cours ♾️)
## Page de gestion admin (en cours ♾️)

Ce projet est réalisé dans le cadre de ma formation de développeur web full stack. Il s'agit de mon projet final.