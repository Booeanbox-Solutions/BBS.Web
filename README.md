# Boolean Box Solutions - Official Website# Boolean Box Solutions - Official Website# React + Vite



A modern, enterprise-grade website for Boolean Box Solutions built with React 19, Vite, Tailwind CSS, and Framer Motion following industry best practices.



## 🚀 FeaturesA modern, futuristic website for Boolean Box Solutions built with React 19, Vite, and Framer Motion.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



- **React 19** - Latest React version with functional components and hooks

- **Vite 7.x** - Lightning-fast build tool with HMR

- **Custom CSS** - Modern CSS with variables, animations, and responsive design## 🚀 FeaturesCurrently, two official plugins are available:

- **Framer Motion 12.x** - Production-ready animations

- **React Router DOM 7.x** - Client-side routing

- **SEO Optimized** - Complete meta tags, structured data, sitemap

- **Responsive Design** - Mobile-first approach for all screen sizes- **Modern React 19** - Built with the latest React version- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Accessibility** - WCAG 2.1 compliant

- **Performance** - Optimized for Core Web Vitals- **Vite** - Lightning-fast build tool and dev server- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## 📦 Tech Stack- **Framer Motion** - Beautiful scroll animations and transitions



| Technology | Version | Purpose |- **React Router** - Seamless navigation between pages## React Compiler

|------------|---------|---------|

| React | 19.1.1 | UI Framework |- **SEO Optimized** - Complete meta tags, structured data, and sitemap

| Vite | 7.x | Build Tool |

| Tailwind CSS | 4.x | Styling |- **Responsive Design** - Mobile-first, works on all devicesThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

| Framer Motion | 12.x | Animations |

| React Router | 7.x | Routing |- **Futuristic UI** - Cyberpunk-inspired design with gradient effects

| React Helmet Async | Latest | SEO Meta Tags |

| React Icons | Latest | Icon Library |- **Fast Performance** - Optimized for speed and user experience## Expanding the ESLint configuration



## 🏗️ Project Structure



```## 📦 Tech StackIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

BBS.Web/

├── public/                 # Static assets

│   ├── sitemap.xml        # SEO sitemap- React 19.1.1

│   └── robots.txt         # Crawler instructions- Vite 7.x

├── src/- React Router DOM 7.x

│   ├── components/        # Reusable components- Framer Motion 12.x

│   │   ├── Navbar.jsx- React Helmet Async (for SEO)

│   │   ├── Navbar.css- React Icons

│   │   ├── Footer.jsx

│   │   └── Footer.css## 🛠️ Installation

│   ├── pages/            # Route components

│   │   ├── Home.jsx```bash

│   │   ├── AboutUs.jsx# Install dependencies

│   │   ├── Services.jsxyarn install

│   │   ├── Blog.jsx

│   │   ├── BlogPost.jsx# Or with npm

│   │   ├── ContactUs.jsxnpm install

│   │   └── PrivacyPolicy.jsx```

│   ├── App.jsx           # Main app component

│   ├── main.jsx          # Entry point## 🏃‍♂️ Development

│   ├── index.css         # Global styles + Tailwind

│   └── App.css           # App-level styles```bash

├── index.html            # HTML template# Start development server

├── vite.config.js        # Vite configurationyarn dev

├── tailwind.config.js    # Tailwind configuration

├── postcss.config.js     # PostCSS configuration# Or with npm

└── package.json          # Dependenciesnpm run dev

``````



## 🛠️ InstallationThe site will be available at `http://localhost:5173`



```bash## 🏗️ Build

# Clone the repository

git clone https://github.com/Booeanbox-Solutions/BBS.Web.git```bash

cd BBS.Web# Build for production

yarn build

# Install dependencies using Yarn (recommended)

yarn install# Or with npm

npm run build

# Or with npm```

npm install

```## 📄 Pages



## 🏃‍♂️ Development- **Home** - Hero section, services overview, stats, and CTA

- **About Us** - Company information, expertise, values, and team

```bash- **Services** - Detailed service offerings and technologies

# Start development server- **Blog** - Blog listing and individual blog posts

yarn dev- **Contact Us** - Contact form and company information

- **Privacy Policy** - Comprehensive privacy policy

# Or with npm

npm run dev## 🎨 Customization

```

### Update Company Information

The site will be available at `http://localhost:5173`

Edit the following files to update company details:

## 🏗️ Build for Production- `src/components/Footer.jsx` - Contact information and social links

- `src/pages/ContactUs.jsx` - Contact details

```bash- `index.html` - Meta tags and structured data

# Create optimized production build

yarn build### Replace Logo



# Or with npmReplace the placeholder logo by updating:

npm run build- `src/components/Navbar.jsx` - Logo text or add image

```- `public/` - Add your logo files



Build output will be in the `dist/` directory.### Add Blog Posts



## 👀 Preview Production BuildEdit `src/pages/Blog.jsx` to add or modify blog posts. In production, connect to a CMS or backend API.



```bash## 🔍 SEO Features

# Preview the production build locally

yarn preview- Meta tags for social media (Open Graph, Twitter Cards)

- Structured data (JSON-LD)

# Or with npm- Semantic HTML

npm run preview- Sitemap.xml

```- Robots.txt

- Canonical URLs

## 🌐 Deployment to Production- Optimized page titles and descriptions



### Option 1: Vercel (Recommended - Zero Config)## 🎯 Performance Optimizations



**Using Vercel CLI:**- Code splitting with React lazy loading

```bash- Optimized images and assets

# Install Vercel CLI- Efficient animations with Framer Motion

yarn global add vercel- CSS optimization

- Fast development with Vite HMR

# Deploy

vercel## 📱 Responsive Breakpoints



# Production deployment- Mobile: < 640px

vercel --prod- Tablet: 640px - 968px

```- Desktop: > 968px



**Using Vercel Dashboard:**## 🤝 Contributing

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New Project"Feel free to customize and enhance the website according to your needs!

3. Import your GitHub repository

4. Vercel auto-detects Vite configuration## 📝 License

5. Click "Deploy"

Proprietary - Boolean Box Solutions

**Configuration (automatic):**

- Build Command: `vite build`---

- Output Directory: `dist`

- Install Command: `yarn install`Built with ❤️ by Boolean Box Solutions


### Option 2: Netlify

**Using Netlify CLI:**
```bash
# Install Netlify CLI
yarn global add netlify-cli

# Build
yarn build

# Deploy
netlify deploy --prod --dir=dist
```

**Using Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `yarn build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
yarn add -D gh-pages
```

2. **Update package.json**
```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/BBS.Web"
}
```

3. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/BBS.Web/',
  // ... rest of config
})
```

4. **Deploy**
```bash
yarn deploy
```

### Option 4: AWS S3 + CloudFront

```bash
# Build
yarn build

# Install AWS CLI
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 5: Docker + Any Cloud Provider

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Create nginx.conf:**
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

**Build and Deploy:**
```bash
# Build image
docker build -t bbs-web .

# Run locally
docker run -p 80:80 bbs-web

# Push to registry
docker tag bbs-web your-registry/bbs-web:latest
docker push your-registry/bbs-web:latest
```

## 🎨 Customization

### Update Company Information
- **Contact Details**: `src/components/Footer.jsx`, `src/pages/ContactUs.jsx`
- **Company Info**: `src/pages/AboutUs.jsx`
- **Services**: `src/pages/Services.jsx`
- **Meta Tags**: `index.html`

### Replace Logo
```bash
# Add logo to public folder
cp your-logo.png public/logo.png
```

Update `src/components/Navbar.jsx`:
```jsx
<img src="/logo.png" alt="Boolean Box Solutions" className="h-10" />
```

### Customize Theme
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00f2ff',
      secondary: '#7b2cbf',
      accent: '#ff006e',
    },
  },
}
```

## 🔍 SEO Configuration

### Update Sitemap
Edit `public/sitemap.xml`:
```xml
<loc>https://yourdomain.com/</loc>
```

### Update robots.txt
Edit `public/robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### Update Meta Tags
Edit `index.html` - update title, description, og:image URLs

## 📊 Performance Best Practices

- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ CSS purging (Tailwind)
- ✅ Minification
- ✅ Tree shaking
- ✅ Gzip/Brotli compression

## 📱 Responsive Breakpoints (Tailwind)

| Breakpoint | Pixels | Devices |
|------------|--------|---------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

## 🔒 Environment Variables

Create `.env`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_EMAIL=info@booleanboxsolutions.com
```

Usage:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🧪 Quality Assurance

```bash
# Lint code
yarn lint

# Build and check
yarn build

# Type check (if using TypeScript)
yarn type-check
```

## 📞 Support

- **Email**: info@booleanboxsolutions.com
- **Website**: https://booleanboxsolutions.com

## 📝 License

Proprietary - Boolean Box Solutions

---

**Built with ❤️ by Boolean Box Solutions | Enterprise-Grade React Application**
