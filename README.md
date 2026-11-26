# Sing and Perform

Professional marketing website for a singing and performance coaching business, built with Next.js and Tailwind CSS.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Features
- SEO-ready metadata, `robots.txt`, and `sitemap.xml`
- Responsive pages: Home, Services, About, Contact
- Accessible UI components and skip link
- Contact form with validation
- Optional Formspree integration for form delivery
- Basic security headers via Next.js `proxy.ts`

## Local Development
```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables
Set in `.env.local` for development and in your hosting provider for production.

- `NEXT_PUBLIC_SITE_URL`: Public site URL (example: `https://your-domain.com`)
- `NEXT_PUBLIC_BUSINESS_NAME`: Business display name
- `NEXT_PUBLIC_LOCATION_SERVED`: Primary service area
- `NEXT_PUBLIC_CONTACT_EMAIL`: Public email used in footer/schema
- `NEXT_PUBLIC_PHONE_DISPLAY`: Human-readable phone number
- `NEXT_PUBLIC_PHONE_E164`: Dialable phone format (example: `+447...`)
- `NEXT_PUBLIC_INSTAGRAM_URL`: Optional social URL
- `NEXT_PUBLIC_FACEBOOK_URL`: Optional social URL
- `FORMSPREE_ENDPOINT` is the optional server-only Formspree URL, in the form `https://formspree.io/f/FORM_ID`.

The browser submits to the site's own POST endpoint. The server forwards the submitted fields to Formspree only when delivery is configured. The form is disabled when delivery is unavailable. Set `FORMSPREE_ENDPOINT` in your hosting environment. Existing deployments can migrate from `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, which the server accepts as a fallback.

## Quality Checks
```bash
npm run lint
npm run build
npm run test:contact
```

## Deploy
1. Push to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables above.
4. Deploy.

## Publish Checklist
- Replace all contact fields with real values.
- Set `NEXT_PUBLIC_SITE_URL` to production domain.
- Connect form delivery (Formspree or server-side email provider).
- Verify metadata previews (Open Graph/Twitter).
- Confirm analytics and legal pages if required.
