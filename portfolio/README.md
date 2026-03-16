# Harsh Shukla — Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite + Tailwind CSS**, featuring animated sections, competitive programming profiles, and project showcases.

🔗 **Live Demo:** _Deploy to Vercel/Netlify to get your live link_

---

## ✨ Features

- **Hero Section** — Side-by-side intro text with circular profile photo and glowing hover animation
- **About Section** — Biography, education details, interests grid, and clickable achievement cards
- **Skills Section** — Categorized 4-column grid (Languages, Frameworks, Tools, Technologies) with brand-colored icons
- **Competitive Programming** — Profile cards for LeetCode, Codeforces, CodeChef, AtCoder, and GeeksforGeeks
- **Projects Section** — GitHub project cards with tech stacks, descriptions, and live demo links
- **Contact Section** — Email CTA with clipboard copy functionality
- **Smooth Animations** — Scroll-triggered animations via Framer Motion
- **SEO Optimized** — Meta tags managed via React Helmet Async
- **Fully Responsive** — Mobile-first design that works on all screen sizes

---

## 🛠 Tech Stack

| Category     | Technology                          |
| ------------ | ----------------------------------- |
| **Framework** | React 19 + Vite                    |
| **Styling**   | Tailwind CSS 4                     |
| **Animations**| Framer Motion                      |
| **Icons**     | React Icons                        |
| **SEO**       | React Helmet Async                 |
| **Build Tool**| Vite                               |

---

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets (favicon, icons)
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # React components
│   │   ├── Navbar/       # Responsive navigation bar
│   │   ├── Hero.jsx      # Hero section with profile photo
│   │   ├── About.jsx     # About, interests, achievements
│   │   ├── Skills.jsx    # Categorized skills grid
│   │   ├── CompetitiveProgramming.jsx
│   │   ├── Projects.jsx  # Project showcase cards
│   │   ├── Contact.jsx   # Contact section
│   │   └── Footer.jsx    # Footer with social links
│   ├── data/
│   │   └── portfolioData.js  # All portfolio data (edit this to customize)
│   ├── App.jsx           # Root application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and Tailwind directives
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── .gitignore            # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

The app will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import your GitHub repository.
4. Vercel auto-detects the Vite framework. Keep the defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** — your portfolio will be live in seconds!

Every push to `main` will trigger an automatic redeployment.

---

## 🎨 Customization

All portfolio data is centralized in **`src/data/portfolioData.js`**. Edit this single file to update:

- Your name, role, and tagline
- Email and social links
- Skills and technologies
- Project descriptions and links
- Competitive programming profiles
- Achievements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
