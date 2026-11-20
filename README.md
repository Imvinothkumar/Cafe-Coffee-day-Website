# Café Coffee Day

A high-performance digital storefront and brand experience for Café Coffee Day. Engineered with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, and GSAP ScrollTrigger.

<p align="center">
  <img src="public/assets/previews/screen-recording.gif" alt="Café Coffee Day Walkthrough Preview" width="100%" />
</p>

<p align="center">
  <a href="https://vinothkumar-portfolio-mu.vercel.app/">Designer Portfolio</a> &nbsp;|&nbsp;
  <a href="public/assets/previews/screen-recording.mp4">HD Video Walkthrough</a> &nbsp;|&nbsp;
  <a href="#getting-started">Getting Started</a> &nbsp;|&nbsp;
  <a href="#tech-stack">Tech Stack</a>
</p>

---

## Engineering Highlights

- **GSAP ScrollTrigger Engine:** Viewport-pinned horizontal timeline scrubbed smoothly across the heritage section.
- **Dedicated Menu Route (`/menu`):** Client-side real-time search and category filtering across 28 catalog offerings.
- **Responsive Navigation:** Touch-friendly mobile drawer with backdrop blur, focus management, and body scroll locking.
- **Performance First:** Full static pre-rendering (SSG), optimized image pipelines, and zero layout shift.
- **Store Services:** Live customer care touchpoints, operating hours timetable, and highway lounge guidance.

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js 15 (App Router) | Static site generation and pre-rendered routing |
| UI Library | React 19 | Component hierarchy and state management |
| Language | TypeScript 5 | Static type safety and data models |
| Styling | Tailwind CSS 3.4 | Utility design system and responsive layouts |
| Animation | GSAP 3 + ScrollTrigger | Scrubbed horizontal scroll storytelling |
| Motion | Framer Motion 11 | Parallax effects and drawer micro-interactions |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, pnpm, or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Imvinothkumar/Cafe-Coffee-day-Website.git

# Navigate to project directory
cd Cafe-Coffee-day-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Directory Structure

```text
├── app/
│   ├── layout.tsx        # Root layout, fonts, and global metadata
│   ├── page.tsx          # Landing page (Hero, Explore, About, Menu, Hours)
│   ├── menu/page.tsx     # Dedicated menu route with real-time search
│   ├── research/page.tsx # Brand storytelling and origin history
│   ├── privacy/page.tsx  # Privacy policy
│   ├── terms/page.tsx    # Terms and legal reserve
│   ├── cookies/page.tsx  # Cookie compliance notice
│   └── not-found.tsx     # Themed 404 handler
├── components/
│   ├── About.tsx         # GSAP ScrollTrigger horizontal section
│   ├── Explore/          # Beverage categories
│   ├── Menu/             # Menu components and item cards
│   ├── Nav/              # Responsive navigation drawer
│   └── OpeningHours.tsx  # Store schedule and highway lounge matrix
└── public/assets/        # Media, brand emblems, and preview assets
```

---

## Author

**VINOTHKUMAR P** — Product Designer & Frontend Engineer  
- Portfolio: [vinothkumar-portfolio-mu.vercel.app](https://vinothkumar-portfolio-mu.vercel.app/)  
- Email: [veeravinoth292@gmail.com](mailto:veeravinoth292@gmail.com)  
- GitHub: [@Imvinothkumar](https://github.com/Imvinothkumar)
