# Mettre Wanderlust sur GitHub — étape par étape

## 1. Créer un compte GitHub (si besoin)

- Va sur [github.com](https://github.com) et crée un compte (gratuit).

---

## 2. Installer Git sur ton PC (si pas déjà fait)

- Télécharge : [https://git-scm.com/download/win](https://git-scm.com/download/win)
- Installe en laissant les options par défaut.
- Ouvre un **nouveau** terminal (PowerShell ou CMD) après l’installation.

---

## 3. Te connecter à GitHub avec Git (une fois)

Dans le terminal :

```bash
git config --global user.name "Ton Nom ou Pseudo"
git config --global user.email "ton-email@exemple.com"
```

Utilise **le même email** que sur ton compte GitHub.

---

## 4. Créer un nouveau dépôt sur GitHub

1. Va sur [github.com](https://github.com) et connecte-toi.
2. Clique sur le **+** en haut à droite → **New repository**.
3. Remplis :
   - **Repository name** : `wanderlust` (ou un autre nom si tu préfères).
   - **Description** (optionnel) : `App voyage type Pinterest + TripAdvisor`.
   - Choisis **Public**.
   - **Ne coche pas** "Add a README" (le projet en a déjà un).
4. Clique sur **Create repository**.

Tu arrives sur une page avec des commandes. **Ne les exécute pas tout de suite** — on va les faire dans l’ordre ci-dessous.

---

## 5. Initialiser Git dans le projet et faire le premier commit

Ouvre un terminal dans le dossier du projet :

```bash
cd C:\Users\nour.aoussim\wanderlust
```

Puis exécute **une commande à la fois** :

```bash
git init
```

```bash
git add .
```

```bash
git status
```

Tu dois voir la liste des fichiers qui seront commités (pas `node_modules` ni `.next`).

```bash
git commit -m "Initial commit: Wanderlust app"
```

---

## 6. Brancher sur GitHub et pousser le code

Remplace **TON_USERNAME** par ton vrai pseudo GitHub et **wanderlust** par le nom du dépôt si tu as choisi autre chose.

```bash
git branch -M main
git remote add origin https://github.com/TON_USERNAME/wanderlust.git
git push -u origin main
```

- Si on te demande **username** : ton pseudo GitHub.
- Si on te demande **password** : utilise un **Personal Access Token** (GitHub n’accepte plus le mot de passe du compte pour le push).
  - Pour créer un token : GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Donne-lui au moins la permission `repo`, copie le token et colle-le quand Git demande le mot de passe.

---

## 7. Vérifier

Rafraîchis la page de ton dépôt sur GitHub : tu dois voir tous les fichiers du projet (sans `node_modules` ni `.next`).

---

## Récap des commandes (dans l’ordre)

```bash
cd C:\Users\nour.aoussim\wanderlust
git init
git add .
git commit -m "Initial commit: Wanderlust app"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/wanderlust.git
git push -u origin main
```

Ensuite, pour chaque modification :

```bash
git add .
git commit -m "Description de ce que tu as changé"
git push
```
