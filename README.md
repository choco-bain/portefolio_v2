# 🚀 Portfolio — Cheick Kouassi

Modern, responsive portfolio built with **Next.js 13**, **TypeScript**, and **TailwindCSS**. Optimized for GitHub Pages deployment.

**Live Site:** [https://YOUR_USERNAME.github.io/portfolio/](https://YOUR_USERNAME.github.io/portfolio/)

---

## 📋 Features

- ✨ Modern white/clean design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance (static export)
- 🎨 Custom font (Geist typography)
- 📄 PDF CV download
- 📧 Contact form
- 🔗 Social links (LinkedIn, GitHub, Email)
- 🎯 Smooth scroll navigation
- 📊 Experience & skills showcase

---

## 🛠 Setup & Development

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
cd /Users/chocobain/devs/projets/portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📦 Build & Deploy to GitHub Pages

### Step 1️⃣ — Commit code to Git

```bash
git add .
git commit -m "Portfolio: modern design with white theme"
git branch -M main
```

### Step 2️⃣ — Create GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or your preferred name)
3. Do **NOT** initialize with README
4. Click **Create repository**

### Step 3️⃣ — Push to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 4️⃣ — Enable GitHub Pages

1. Go to your repo **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `/ (root)`
3. Click **Save**

### Step 5️⃣ — Deploy

```bash
npm run deploy
```

This command:
- ✅ Builds the Next.js site
- ✅ Exports static HTML/CSS/JS
- ✅ Pushes to `gh-pages` branch
- ✅ Site goes live at: `https://YOUR_USERNAME.github.io/portfolio/`

**Wait 1-2 minutes** for GitHub Pages to deploy, then refresh!

---

## ✏️ Customize Your Portfolio

### Update Your Info

Edit [`data/cv.ts`](./data/cv.ts):

```typescript
export const cv = {
  name: 'CHEICK KOUASSI',
  title: 'Data Engineer & Dev Fullstack JS',
  contact: {
    email: 'your@email.com',
    phone: '+33 7 44 13 06 00',
    // ... 
  },
  experience: [ /* your jobs */ ],
  skills: [ /* your tech stack */ ],
  projects: [ /* your projects */ ],
  // ...
}
```

### Update Profile Photo

1. Replace `public/images/photo.png` with your photo
2. Or update `data/cv.ts` → `photo` field

### Update CV PDF

1. Replace `public/cv.pdf` with your CV file
2. Keep the filename as `cv.pdf`

### Change Colors/Theme

Edit [`styles/globals.css`](./styles/globals.css) to modify:
- Gradient colors
- Button styles
- Card backgrounds
- Text colors

---

## 🏗 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills section
│   ├── ExperienceList.tsx
│   ├── ContactForm.tsx # Contact form
│   └── Footer.tsx
├── pages/
│   ├── index.tsx       # Main page (single-page app)
│   └── _app.tsx        # App wrapper
├── data/
│   └── cv.ts           # Your CV data
├── styles/
│   └── globals.css     # Global styles & animations
├── public/
│   ├── cv.pdf          # Your CV file
│   └── images/         # Images
├── package.json
└── tsconfig.json
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 13** | React framework |
| **TypeScript** | Type-safe development |
| **TailwindCSS** | Utility-first CSS |
| **Geist Font** | Modern typography |
| **gh-pages** | GitHub Pages deployment |

---

## 📝 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build Next.js
npm run export   # Export static site
npm run deploy   # Build + Export + Deploy to GitHub Pages
```

---

## 🚀 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project showcase with images
- [ ] Analytics integration
- [ ] Email form backend (Netlify, EmailJS, etc.)

---

## 📄 License

MIT — Feel free to use this portfolio template!

---

**Made with ❤️ by [Cheick Kouassi](https://github.com/choco-bain)**
