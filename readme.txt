=============================================================================
PROJET : JEU MASTERMIND (JS / HTML / CSS)
=============================================================================

1. DESCRIPTION
--------------
Ce projet est une version web du célèbre jeu de logique "Mastermind". 
L'objectif est de deviner une combinaison secrète de 5 chiffres générée 
aléatoirement par l'ordinateur.

2. STRUCTURE DES FICHIERS
-------------------------
Le projet est composé de trois fichiers principaux :

- test.html   : La structure de la page (les zones d'affichage, l'input, le bouton).
- style.css   : La mise en forme visuelle (couleurs, centrage, design moderne).
- scri.js     : La logique du jeu (génération du code secret, vérification des saisies).

3. INSTALLATION ET LANCEMENT
----------------------------
Aucune installation de logiciel n'est nécessaire.

1. Assurez-vous que les trois fichiers (test.html, style.css, scri.js) sont 
   dans le même dossier.
2. Ouvrez le fichier "test.html" avec n'importe quel navigateur web moderne 
   (Chrome, Firefox, Edge, Safari).

4. RÈGLES DU JEU
----------------
1. L'ordinateur génère une combinaison secrète de 5 chiffres (de 0 à 9).
2. Vous devez entrer une proposition de 5 chiffres dans la case "Votre réponse".
3. Cliquez sur le bouton "Vérifier".
4. Le jeu affiche deux indices pour chaque tentative :
   - "Bien placés" : Le chiffre est correct et à la bonne position.
   - "Mal placés" : Le chiffre est présent dans le code secret mais à une autre position.
5. Le jeu continue jusqu'à ce que vous trouviez les 5 chiffres bien placés. 
   Le code secret est alors révélé en haut de la page.

5. FONCTIONNEMENT TECHNIQUE (ALGORITHME)
----------------------------------------
Le script (scri.js) utilise un algorithme de comparaison en deux passes pour 
garantir l'exactitude des indices, notamment en cas de chiffres en double :

- Passe 1 (Boucle 'Bien placés') : 
  On parcourt la proposition et le secret en parallèle. Si les chiffres correspondent 
  à la même position, on incrémente "Bien placés" et on marque ces positions comme 
  "traitées" pour ne plus les utiliser.

- Passe 2 (Boucle 'Mal placés') : 
  On parcourt les chiffres restants de la proposition. Pour chaque chiffre, on cherche 
  s'il existe une correspondance libre (non traitée) dans le secret. Si oui, on 
  incrémente "Mal placés" et on marque l'emplacement du secret comme "traité".

=============================================================================