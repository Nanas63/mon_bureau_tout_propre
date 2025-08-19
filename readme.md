# 🧼 Simulateur de Prix – Mon Bureau Tout Propre

## 📌 Présentation du projet

**Mon Bureau Tout Propre** est une entreprise fictive spécialisée dans le nettoyage de bureaux. Elle souhaite proposer à ses clients un simulateur de prix interactif, intégré à son site internet, permettant d’obtenir une estimation claire et rapide du coût hebdomadaire des prestations.

---

## 🎯 Objectifs

- Offrir un outil **simple**, **responsive** et **accessible** pour estimer un tarif en ligne.
- Valoriser la **transparence tarifaire** de l’entreprise.
- Permettre aux clients de **comparer différentes options** de nettoyage.

---

## 🧰 Fonctionnalités

### Formulaire interactif

- Saisie de la **surface des bureaux** (en m²)
- Choix de la **fréquence de nettoyage** :
  - Une fois par semaine
  - Deux fois par semaine
  - Tous les jours (5 fois par semaine)
- Option **vitres incluses** : Oui / Non

### Calcul automatique du prix

#### A. Tarif de base

Prix = Surface × 1,50 €

Code

#### B. Majoration selon la fréquence

× 1 → 1 fois par semaine × 2 → 2 fois par semaine × 5 → tous les jours

Code

#### C. Option vitres

+10% si vitres incluses

Code

#### D. Résultat affiché

- **Montant HT**
- **TVA (20%)**
- **Montant TTC**


## 🧪 Instructions pour tester le projet

1. **Cloner le dépôt** :

git clone https://github.com/votre-utilisateur/mon-bureau-tout-propre.git
cd mon-bureau-tout-propre

## 🛠️ Contraintes techniques

Développé en HTML / CSS / JavaScript (vanilla)

Sans framework ni backend

Code séparé, clair et bien indenté

Site responsive : compatible ordinateur, tablette, mobile


## 🧑‍💻 Choix de programmation

🔹 HTML
Structure sémantique avec form, fieldset, label, input, select pour une accessibilité optimale

Utilisation de id et name pour faciliter la liaison avec JavaScript

Organisation en conteneurs (container1, container2) pour une mise en page claire

🔹 CSS
Palette de couleurs harmonieuse :

#1B3C53 (bleu foncé)

#456882 (bleu doux)

#D2C1B6 (beige)

#F9F3EF (blanc cassé)

Utilisation de Flexbox pour une disposition fluide et responsive

Styles typographiques cohérents :

Police sans-serif

Titres en majuscules

Ombrage et bordures pour la hiérarchisation visuelle

Composants interactifs stylisés :

Boutons

Champs

Sélecteurs

🔹 JavaScript

Écouteur d’événement submit pour intercepter le formulaire sans rechargement de page

Récupération des valeurs via document.getElementById et querySelector

Calcul du prix selon les règles métier définies dans le cahier des charges

Affichage dynamique des résultats dans les balises <p> dédiées

Utilisation de conditions if/else pour gérer les différentes fréquences et options
Ouvrir le fichier index.html dans votre navigateur.

