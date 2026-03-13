# Erich Fill Triathlon – Event Website

Modern, high-energy triathlon event website built with Next.js 14, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – Hero, highlights, race formats, course preview, gallery, sponsors, FAQ, CTA |
| `/courses` | Swim, bike, run course details with distances and elevation |
| `/schedule` | Full event timeline across 3 days |
| `/registration` | Pricing tiers, registration info, cancellation policy |
| `/athlete-info` | Check-in, transition zone, equipment rules, parking, safety |
| `/results` | Live timing placeholder + past year results |
| `/sponsors` | Sponsor tiers, logo grid, sponsorship packages |
| `/contact` | Contact form + organizer info |

## Design

- **Background**: `#0B0F19`
- **Primary**: `#00AEEF` (cyan blue)
- **Accent**: `#FF5A1F` (fire orange)
- **Text**: `#FFFFFF`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd "Relaunch EFT"
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

### Option 1 – Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 – GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js – no config needed
4. Click **Deploy**

### Environment Variables

No environment variables required for the base setup. Add your own for:
- Analytics (e.g., `NEXT_PUBLIC_GA_ID`)
- Registration platform API keys
- Contact form backend

## Customization

### Update event details

Search for `Musterstadt` and `15. Juni 2025` across all files to update the event location and date.

### Replace placeholder images

Images use Unsplash URLs. Replace with actual event photos by updating the `src` props in:
- `components/sections/Hero.tsx`
- `components/sections/CoursePreview.tsx`
- `components/sections/Gallery.tsx`
- `components/sections/CTASection.tsx`
- `app/courses/CoursesClient.tsx`

### Add registration platform

In `app/registration/RegistrationClient.tsx`, replace the button `onClick` handlers with links to your registration platform (e.g., DFBnet, DTriathlon, Raceresult, etc.).

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with Navbar + Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── courses/             # Courses page
│   ├── schedule/            # Schedule page
│   ├── registration/        # Registration page
│   ├── athlete-info/        # Athlete information page
│   ├── results/             # Results page
│   ├── sponsors/            # Sponsors page
│   └── contact/             # Contact page
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Footer.tsx           # Footer with links and social
│   └── sections/            # Homepage sections
│       ├── Hero.tsx
│       ├── EventHighlights.tsx
│       ├── RaceFormats.tsx
│       ├── CoursePreview.tsx
│       ├── Gallery.tsx
│       ├── SponsorsGrid.tsx
│       ├── FAQ.tsx
│       └── CTASection.tsx
├── public/                  # Static assets
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```
