# Glow Landing Page

This is the landing page for Glow - The new way to trade culture.

## Setup Instructions

### Fonts
Place your font files in the `app/fonts/` directory:
- `GeistVF.woff` - Main font file
- `GeistMonoVF.woff` - Monospace font file

### Assets
Place your assets in the `public/` directory:
- Logo/favicon files (e.g., `favicon.ico`, `logo.svg`)
- Any other images or assets

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Landing page component
  - `globals.css` - Global styles with dark theme and glow effects
  - `fonts/` - Custom font files (you need to add these)
- `public/` - Static assets

## Features

- Dark theme with green glow effects
- Responsive design
- SEO optimized metadata
- Custom fonts support
