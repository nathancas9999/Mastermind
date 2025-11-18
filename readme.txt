=============================================================================
PROJET : MASTERMIND MULTI-NIVEAUX (JS / HTML / CSS)
=============================================================================

1. DESCRIPTION
--------------
Ce projet est une suite de jeux "Mastermind" proposant plusieurs niveaux de 
difficulté. Le joueur peut choisir la longueur de la combinaison secrète 
(4, 5 ou 6 chiffres) via une page d'accueil.

2. STRUCTURE DES FICHIERS
-------------------------
Pour que le jeu fonctionne correctement, organisez vos fichiers comme ceci :

A. PAGE PRINCIPALE
   - accueil.html  : Le menu principal pour choisir son niveau.
   - style.css     : La feuille de style commune à toutes les pages.

B. LES NIVEAUX DE JEU (Exemples de noms)
   - niveau4.html (ou test.html)  : Le jeu avec 4 chiffres.
   - niveau5.html (ou test1.html) : Le jeu avec 5 chiffres (Standard).
   - niveau6.html (ou test2.html) : Le jeu avec 6 chiffres (Expert).

   *Note : Assurez-vous que chaque fichier HTML appelle le bon script JS 
   correspondant à sa difficulté.*

3. INSTALLATION ET LANCEMENT
----------------------------
1. Placez tous les fichiers (.html, .css, .js) dans le même dossier.
2. Ouvrez le fichier "accueil.html" avec votre navigateur web.
3. Cliquez sur le bouton du niveau auquel vous souhaitez jouer.

4. RÈGLES DU JEU
----------------
L'objectif est de trouver le code secret généré aléatoirement.

- Niveau 4 : Code de 4 chiffres.
- Niveau 5 : Code de 5 chiffres.
- Niveau 6 : Code de 6 chiffres.

Après chaque proposition, deux indices vous aident :
   - "Bien placés" : Chiffre correct et à la bonne place.
   - "Mal placés"  : Chiffre correct mais à la mauvaise place.

5. MODIFIER LES NIVEAUX
-----------------------
Si vous souhaitez changer les noms des fichiers (par exemple passer de "test.html" 
à "niveau4.html"), n'oubliez pas de mettre à jour les liens <a href="..."> 
dans le fichier "accueil.html".

=============================================================================