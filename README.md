# The Builders

A modern, clean website for an AI education platform that teaches practical AI skills: vibecoding, prompting, and AI builders.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Content**: JSON files in `src/data/` (easy to swap for a headless CMS later)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` – Pages (Home, About, Courses, Resources, Community, Contact)
- `src/components/` – Nav, Footer, cards, forms, FAQ, email popup
- `src/data/` – `courses.json`, `blog.json`, `testimonials.json`, `workshops.json` (update these or connect a CMS)
- `src/app/api/subscribe/route.ts` – Email signup API (wire to ConvertKit, Resend, etc.)

## Key features

- **Email capture**: Primary CTA and exit-intent/time-based popup; API route ready for your provider
- **Course & workshop cards**: Data-driven from JSON; filter by level on Courses page
- **Resources**: Blog cards, search, FAQ, placeholder for AI tools directory and guides
- **Community**: Discord CTA, guidelines, member projects
- **Contact**: Form + guest speaker section
- **Accessibility**: Semantic HTML, ARIA, focus states, reduced-motion support
- **SEO**: Meta tags and descriptions on main and About pages
- **Mobile**: Responsive layout, sticky nav, hamburger menu

## Customization

1. **Email list**: Implement `src/app/api/subscribe/route.ts` with your provider (Resend, ConvertKit, Mailchimp).
2. **Contact form**: Add Formspree, Resend, or your backend to the Contact page submit handler.
3. **Content**: Edit `src/data/*.json` or replace with CMS (Sanity, Contentful, etc.).
4. **Analytics**: Add Google Analytics in `src/app/layout.tsx` or via a provider component.
5. **Images**: Unsplash URLs are used for placeholders; replace with your own or keep for demo.

## Build

```bash
npm run build
npm start
```

## License

Private / All rights reserved.
