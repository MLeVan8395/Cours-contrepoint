# Cours de contrepoint

Un cours de contrepoint pour débutants, en français : des espèces de Fux jusqu'à l'analyse et l'écriture de la fugue. Chaque chapitre contient des explications simples, des exemples gravés, des exercices et leurs corrigés. Une application web interactive l'accompagne.

Auteur : Mickael Le Van, professeur de musiques actuelles et jazz.

## Contenu du dépôt

| Dossier | Contenu |
| --- | --- |
| [`cours/`](cours/) | Le cours, un fichier Markdown par chapitre, lisible directement sur GitHub |
| [`cours/images/`](cours/images/) | Les exemples et exercices gravés (PNG) |
| [`cours/Initiation_au_contrepoint.pdf`](cours/Initiation_au_contrepoint.pdf) | Le cours complet en PDF (A4, 55 pages), à imprimer ou à distribuer |
| [`app/index.html`](app/index.html) | L'application d'exercices interactifs, en un seul fichier |

## Sommaire

### Première partie : les espèces

- [1. Qu'est-ce que le contrepoint ?](cours/01-qu-est-ce-que-le-contrepoint.md)
- [2. Les outils : intervalles et consonances](cours/02-les-outils-intervalles-et-consonances.md)
- [3. Les quatre mouvements entre deux voix](cours/03-les-quatre-mouvements-entre-deux-voix.md)
- [4. Le cantus firmus](cours/04-le-cantus-firmus.md)
- [5. Première espèce : note contre note](cours/05-premiere-espece-note-contre-note.md)
- [6. Deuxième espèce : deux notes contre une](cours/06-deuxieme-espece-deux-notes-contre-une.md)
- [6 bis. Troisième espèce : quatre notes contre une](cours/07-troisieme-espece-quatre-notes-contre-une.md)
- [6 ter. Quatrième espèce : les syncopes](cours/08-quatrieme-espece-les-syncopes.md)
- [7. En vraie musique : un contre-chant sur « Au clair de la lune »](cours/09-en-vraie-musique-un-contre-chant-sur-au-clair-de.md)
- [8. Exercices](cours/10-exercices.md)
- [9. Corrigés](cours/11-corriges.md)
- [10. Banque de cantus firmus](cours/12-banque-de-cantus-firmus.md)
- [11. Corrigés de la banque de cantus firmus](cours/13-corriges-de-la-banque-de-cantus-firmus.md)

### Deuxième partie : de l'imitation à la fugue

- [12. L'imitation](cours/14-l-imitation.md)
- [12 bis. Miroir, rétrograde et canons savants](cours/15-miroir-retrograde-et-canons-savants.md)
- [13. Analyse : l'Invention n°1 en Do majeur de Bach (BWV 772)](cours/16-analyse-l-invention-n-1-en-do-majeur-de-bach-bwv.md)
- [14. La fugue : analyse de la Fugue en mi mineur (Clavier bien tempéré I, n°10, BWV 855)](cours/17-la-fugue-analyse-de-la-fugue-en-mi-mineur-clavie.md)
- [15. Fugue à trois voix : la Fugue en do mineur (Clavier bien tempéré I, n°2, BWV 847)](cours/18-fugue-a-trois-voix-la-fugue-en-do-mineur-clavier.md)
- [16. Fugue à quatre voix : la Fugue en Do majeur (Clavier bien tempéré I, n°1, BWV 846)](cours/19-fugue-a-quatre-voix-la-fugue-en-do-majeur-clavie.md)
- [17. Atelier : écrire le début d'une fugue](cours/20-atelier-ecrire-le-debut-d-une-fugue.md)
- [18. Corrigés de l'atelier](cours/21-corriges-de-l-atelier.md)

## L'application interactive

`app/index.html` est une page web autonome : on peut l'ouvrir dans un navigateur, sans installation. Elle propose :

- **Écrire en 1re espèce** et **Écrire en 2e espèce** : l'élève place ses notes au-dessus d'un cantus firmus (8 cantus au choix) et l'application corrige automatiquement, mesure par mesure (consonances, 5tes et 8ves parallèles, notes de passage, cadence…), avec une solution pour chaque cantus.
- **Quiz de cours** : 25 questions sur l'ensemble du cours, avec explications.
- **Intervalles** et **Mouvements** : exercices d'identification générés au hasard, avec le son.
- **Réponse de fugue** : choisir la bonne réponse (réelle ou tonale) parmi trois propositions.

Les scores sont gardés dans le navigateur de l'élève.

Pour la mettre en ligne gratuitement : dans les réglages du dépôt, **Settings → Pages**, choisir la branche `main` et le dossier `/ (root)`. L'application sera alors accessible à l'adresse `https://mlevan8395.github.io/Cours-contrepoint/app/`.

## Notation

Les notes sont écrites en solfège français (Do, Ré, Mi…). Les intervalles sont abrégés : 3ce, 5te, 6te, 8ve.

## Sources et crédits

- Johann Joseph Fux, *Gradus ad Parnassum* (1725) : méthode des espèces et cantus firmus en mode de Ré (domaine public).
- Les extraits de J.-S. Bach (Invention n°1 BWV 772, Fugues BWV 855, 847 et 846 du *Clavier bien tempéré*) ont été regravés à partir des fichiers LilyPond du [Mutopia Project](https://www.mutopiaproject.org) :
  - BWV 772 : saisie de Jeff Covey, d'après la Bach-Gesellschaft (CC BY-SA 3.0) ;
  - BWV 855 : saisie de Davide Castellone, d'après Breitkopf & Härtel 1866 (domaine public) ;
  - BWV 847 : saisie d'Urs Metzger, d'après l'édition Peters (CC BY-SA 4.0) ;
  - BWV 846 : saisie de Shay Rojansky et Andreas Scherer (domaine public).
- Les autres exemples (cantus firmus de la banque, sujets de fugue de l'atelier, canon à l'écrevisse…) ont été écrits pour ce cours.
- Les symboles musicaux de l'application (clés, altérations, silences) sont tirés des polices GNU FreeFont (FreeSerif) et DejaVu Sans.

## Licence

- **Contenu du cours** (textes, images, PDF) : [Creative Commons Attribution – Partage dans les mêmes conditions 4.0 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Vous pouvez le réutiliser et l'adapter, en citant l'auteur et en partageant vos modifications sous la même licence.
- **Code de l'application** : licence MIT (voir [`LICENSE`](LICENSE)).
