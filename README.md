# Portfolio — Rufayda Sanjida

Personal portfolio website built with Next.js, TypeScript, and Framer Motion.

**Live:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page and element animations
- **Nunito** — primary font via Next.js Google Fonts

---

## Pages

| Route           | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `/`             | Home — animated hero with typewriter effect and nav buttons |
| `/about`        | Photo, bio, age, location                                   |
| `/skills`       | Skill pills grouped by category                             |
| `/projects`     | Project cards with stack tags                               |
| `/experience`   | Vertical timeline of work history                           |
| `/achievements` | Scholarship, hackathon win, patent                          |
| `/contact`      | Email, LinkedIn, GitHub, Discord                            |

---

## Running locally

**Prerequisites:** Node.js and pnpm installed.

```bash
# install pnpm if you don't have it
npm install -g pnpm

# install dependencies
pnpm install

# start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
├── layout.tsx          # root layout, fonts
├── page.tsx            # home page
├── globals.css         # global styles + responsive breakpoints
├── about/
│   ├── page.tsx
│   └── about.css
├── skills/
│   ├── page.tsx
│   └── skills.css
├── projects/
│   ├── page.tsx
│   └── projects.css
├── experience/
│   ├── page.tsx
│   └── experience.css
├── achievements/
│   ├── page.tsx
│   └── achievements.css
├── contact/
│   ├── page.tsx
│   └── contact.css
└── components/
    ├── Character.tsx   # animated avatar used across all pages
    ├── HeroSection.tsx # home page hero
    ├── NavButtons.tsx  # home page navigation
    ├── Button.tsx      # glassmorphism pill button
    └── BackLink.tsx    # back to home link
public/
└── assets/             # images
```

---

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic redeploy.
