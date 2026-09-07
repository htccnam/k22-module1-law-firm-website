# Law Firm Website

A responsive, multi‑page website for a law firm built with **React** and **Vite**. The site features a modern UI with a hamburger menu, dropdown sections, and clean sections for Home, About, Services, Features, Attorneys, Awards, Testimonials, and Blog.

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [License](#license)

## ✨ Features
- Fully responsive design (desktop, tablet, mobile)
- Hamburger menu with backdrop (pure CSS) that closes when clicking outside
- Dropdown menus for Practice Areas and Pages
- Smooth scrolling navigation (`onSectionChange` handler)
- Reusable components (Header, Footer, Card‑like sections)
- CSS reset and consistent styling using CSS variables
- Easy to extend with new pages or sections

## 🛠️ Tech Stack
- **React 18** (functional components with hooks)
- **Vite** (fast dev server & bundler)
- **CSS3** (Flexbox, Grid, custom properties)
- **Font Awesome 6** (hamburger icon)
- **ESLint** (optional, already configured)

## 📂 Project Structure
```
src/
├── assets/               # Images, icons, etc.
├── components/
│   ├── About.jsx
│   ├── Attorneys.jsx
│   ├── Awards.jsx
│   ├── Blog.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HomePage.jsx
│   ├── Services.jsx
│   └── Testimonial.jsx
├── App.jsx               # Main app container with routing (state‑based)
├── App.css               # Global app styles (font size)
├── index.css             # CSS reset + root variables
└── main.jsx              # React entry point
public/
    # (static assets if any)
```
## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn (or pnpm)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/k22-module1-law-firm-website.git
   cd k22-module1-law-firm-website
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

### Development Server
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (Vite default).

### Build for Production
```bash
npm run build
# or
yarn build
```
Production assets will be generated in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📦 Available Scripts (from `package.json`)
| Script          | Description                              |
|-----------------|------------------------------------------|
| `dev`           | Start Vite dev server with hot reload    |
| `build`         | Bundle the app for production            |
| `preview`       | Locally preview the production build     |
| `lint`          | Run ESLint (if configured)               |
| `test`          | Run tests (if any)                       |

## 🎨 Customization
- **Colors & Fonts**: Edit `:root` variables in `src/index.css`.
- **Content**: Update the text and image sources inside each component (`src/components/*.jsx`).
- **Navigation**: Modify `onSectionChange` callbacks in `Header.jsx` or add new routes in `App.jsx`.
- Styling: Component‑specific styles are in `src/components/*.css`. Global tweaks go in `src/App.css` or `src/index.css`.

## 📄 License
This project is open source and available under the **MIT License**.

---
*Created with ❤️ using React & Vite.*