# 🐉 Pokémon Pokédex (ng-pokedex)

[![Angular Version](https://img.shields.io/badge/Angular-v17+-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Node Version](https://img.shields.io/badge/Node.js-v18.13.0+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An advanced, interactive Pokédex web application built with **Angular 17**, featuring premium UI/UX, responsive design, and real-time data from the [PokeAPI](https://pokeapi.co/).

---

## ✨ Features (Fitur Utama)

- **⚡ Modern Angular Architecture**: Built using Angular v17 with Standalone Components.
- **🎨 Dynamic Design System**: Card backgrounds and details change based on the Pokémon's primary type.
- **📱 Ultra-Responsive Layout**: Optimized for every screen size (Mobile, Tablet, Desktop).
- **🔎 Infinite/Paginated Browsing**: Smooth pagination with smart visibility for active pages.
- **🛡️ UX Best Practices**: 
  - **Scroll Locking**: Prevents background scrolling when viewing Pokémon details.
  - **High Contrast**: Optimized font colors and shadows for accessibility.
- **🛠️ Clean Code**: Strict TypeScript typing and modular service-based data fetching.

---

## 🛠️ Technical Stack (Teknologi)

| Category | Technology |
| :--- | :--- |
| **Framework** | [Angular 17+](https://angular.io/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Vanilla CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Modern flex/grid) |
| **Icons & Fonts** | [Google Fonts (Inter)](https://fonts.google.com/) |
| **Data Source** | [PokeAPI V2](https://pokeapi.co/) |
| **Tooling** | [Angular CLI](https://angular.io/cli), [NPM](https://www.npmjs.com/) |

---

## 📥 Installation (Instalasi)

### 1. Prerequisites (Persyaratan)
Install the following on your local machine:
- **Node.js**: `v18.13.0` or higher (Mandatory for Angular 17).
- **NPM**: `v9.x` or higher (Bundled with Node.js).

### 2. Steps (Langkah-langkah)
Run these commands in your terminal:

```bash
# 1. Clone the repository
git clone <your-repository-url>

# 2. Enter the directory
cd pokemon-pokedex

# 3. Install dependencies
npm install
```

---

## 🚀 Development (Menjalankan Projek)

### Start Development Server
Run this command to start the app locally:
```bash
npm start
# or
ng serve
```
Open **[http://localhost:4200](http://localhost:4200)** in your browser.

### Other Commands
- **Build**: `npm run build` (Generate production files in `/dist`).
- **Test**: `npm test` (Run unit tests via Karma).
- **Lint**: `npm run lint` (Check code style/errors).

---

## 📂 Project Structure (Struktur Folder)

```text
src/app/
├── components/          # Reusable UI Components
│   ├── pokedex/         # Main container, Loading, & Pagination
│   ├── pokemon-card/    # Individual Pokémon Cards
│   └── pokemon-modal/   # Detail overlay (Abilities & Moves)
├── models/              # TypeScript Interfaces (Pokemon, Type, etc.)
├── services/            # API Interaction Logic (RxJS based)
├── app.component.ts     # Main Root Entry
└── styles.css           # Global variables & Design tokens
```

---

## 📦 Deployment (Panduan Hosting)

This project can be easily deployed to:
- **[Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)**: Connect your GitHub repo and use `npm run build` as the build command.
- **[GitHub Pages](https://pages.github.com/)**: Use the `angular-cli-ghpages` tool.

```bash
# Build with base-href for subdirectory hosting
ng build --base-href /repo-name/
```

---

## 📄 License (Lisensi)

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute.

### 👤 Contact
**Ade Novendra** - [adenovend19@gmail.com](mailto:adenovend19@gmail.com)

---
*Gotta catch 'em all!* ⚡️
