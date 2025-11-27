# BooleanBox Solutions Website - AI Coding Agent Instructions

## Project Overview
This is a React 19 + Vite SPA for BooleanBox Solutions, a company providing IT services, AI solutions, cybersecurity, and IoT integration. The site features modern animations, SEO optimization, and a futuristic design aesthetic.

## Architecture & Structure

### Tech Stack
- **React 19.1.1** with functional components and hooks
- **Vite 7.x** for build tooling (NOT Create React App or Next.js)
- **React Router DOM 7.x** for client-side routing
- **Framer Motion 12.x** for animations and scroll effects
- **React Helmet Async** for SEO meta tags

### Project Structure
```
src/
  ├── components/     # Reusable components (Navbar, Footer)
  ├── pages/          # Route components (Home, About, Services, Blog, Contact, PrivacyPolicy)
  ├── App.jsx         # Main app with Router setup
  ├── main.jsx        # Entry point
  └── *.css           # Component-specific styles
```

## Key Conventions

### Styling Approach
- **CSS Variables** defined in `:root` for theming (see `App.css` and `index.css`)
- **Component-scoped CSS files** - each component has its own `.css` file
- **No CSS-in-JS or Tailwind** - pure custom CSS with modern features
- **Cyberpunk aesthetic**: Dark backgrounds, neon gradients (`--gradient-cyber`), glow effects
- **Modern CSS features**: Custom properties, animations, transitions, flexbox, grid
- **Glass-morphism effects** with backdrop-filter
- **Responsive design** using media queries

### Component Patterns
- All components use **functional components with hooks**
- **Framer Motion** for animations:
  - `motion` wrappers for animated elements
  - `whileInView` for scroll-triggered animations
  - `viewport={{ once: true }}` to prevent re-animation on scroll
- **React Helmet Async** in page components for SEO (title, meta, structured data)

### SEO Implementation
- Each page component includes `<Helmet>` with unique meta tags
- `index.html` has base meta tags and JSON-LD structured data
- `public/sitemap.xml` and `public/robots.txt` for crawlers
- Semantic HTML (`<nav>`, `<section>`, `<article>`, etc.)

### Animation Standards
- Use `initial`, `animate`, `whileInView` from Framer Motion
- Common pattern: `initial={{ opacity: 0, y: 50 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger children animations with `staggerChildren` in parent variants
- Hover effects: `whileHover={{ scale: 1.05 }}` on cards

### Color Scheme
- Primary: `#00f2ff` (cyan)
- Secondary: `#7b2cbf` (purple)
- Accent: `#ff006e` (pink)
- Background: `#0a0a0a` (near black)
- Cyber gradient: Linear gradient combining all three colors

## Development Workflows

### Starting Development
```bash
yarn dev  # Starts Vite dev server at localhost:5173
```

### Building for Production
```bash
yarn build     # Creates production build in /dist
yarn preview   # Preview production build locally
```

### Adding New Pages
1. Create component in `src/pages/PageName.jsx`
2. Create corresponding `PageName.css`
3. Add route in `src/App.jsx` inside `<Routes>`
4. Add to `src/components/Navbar.jsx` if needed
5. Update `public/sitemap.xml`

### Updating Content
- **Company info**: `src/components/Footer.jsx`, `src/pages/ContactUs.jsx`
- **Blog posts**: `src/pages/Blog.jsx` (array of posts - connect to CMS in production)
- **Services**: `src/pages/Services.jsx` and `src/pages/Home.jsx`

## Common Patterns

### Card Component Pattern
```jsx
<div className="card">  {/* Base card styles in App.css */}
  {/* Content */}
</div>
```
Cards have hover effects, glass-morphism backdrop, and border animations built-in.

### Section Layout Pattern
```jsx
<section className="section">
  <div className="container">
    <h2 className="section-title">Title</h2>
    <p className="section-subtitle">Subtitle</p>
    {/* Content grid */}
  </div>
</section>
```

### Router Link Pattern
```jsx
import { Link } from 'react-router-dom';
<Link to="/path">Text</Link>  // NOT <a href="/path">
```

## Important Notes

- **NO TypeScript** - This project uses plain JavaScript
- **Vite config** is in `vite.config.js` (React plugin already configured)
- **Package manager**: Prefer `yarn` over `npm` (lockfile is yarn.lock)
- **Icons**: Use `react-icons` library (already installed)
- **Forms**: Contact form in `ContactUs.jsx` uses local state (connect to backend as needed)
- **Blog**: Currently static data - designed to connect to headless CMS or API

## Debugging Tips

- Check browser console for React errors
- Vite shows build errors in terminal and browser overlay
- Animation issues: Verify Framer Motion syntax and viewport settings
- Routing issues: Ensure `Router` wraps entire app and routes match Link paths
