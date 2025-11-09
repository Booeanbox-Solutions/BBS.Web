# Deployment Guide - Boolean Box Solutions Website

This guide provides step-by-step instructions for deploying your React application to production.

## Pre-Deployment Checklist

- [ ] All environment variables are configured
- [ ] Update URLs in `sitemap.xml` with your production domain
- [ ] Update `robots.txt` with your production sitemap URL
- [ ] Update meta tags in `index.html` with production URLs
- [ ] Test the production build locally (`yarn build && yarn preview`)
- [ ] Replace placeholder logo and images
- [ ] Update contact information (email, phone, address)
- [ ] Test on multiple devices and browsers
- [ ] Run accessibility audit
- [ ] Check SEO with tools like Lighthouse

---

## Deployment Options

### 🚀 Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

**Steps:**

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Connect GitHub Repository**
   - Click "Add New Project"
   - Import your `BBS.Web` repository
   - Authorize Vercel to access your GitHub

3. **Configure Project** (Vercel auto-detects these):
   - Framework Preset: Vite
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `yarn install`

4. **Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add your variables (e.g., `VITE_API_URL`)

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live!

6. **Custom Domain**:
   - Go to Project Settings → Domains
   - Add your domain (e.g., `booleanboxsolutions.com`)
   - Update DNS records as instructed
   - Vercel automatically handles SSL certificates

**Using CLI:**
```bash
# Install Vercel CLI
yarn global add vercel

# Login
vercel login

# Deploy (first time - will ask questions)
vercel

# Deploy to production
vercel --prod
```

---

### 🌐 Option 2: Netlify

**Why Netlify?**
- Simple drag-and-drop deployment
- Automatic HTTPS
- Form handling
- Free tier available
- Serverless functions support

**Steps:**

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Deploy via Dashboard**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     ```
     Build command: yarn build
     Publish directory: dist
     ```
   - Click "Deploy site"

3. **Custom Domain**:
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS instructions
   - SSL is automatic

**Using Netlify CLI:**
```bash
# Install Netlify CLI
yarn global add netlify-cli

# Login
netlify login

# Initialize
netlify init

# Build
yarn build

# Deploy
netlify deploy --prod --dir=dist
```

**netlify.toml** (optional configuration):
```toml
[build]
  command = "yarn build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 📄 Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**:
```bash
yarn add -D gh-pages
```

2. **Update package.json**:
```json
{
  "name": "bbs-web",
  "homepage": "https://booeanbox-solutions.github.io/BBS.Web",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BBS.Web/',  // Your repo name
})
```

4. **Deploy**:
```bash
yarn deploy
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

6. **Custom Domain** (optional):
   - Add `CNAME` file to `public/` with your domain
   - Update DNS records

---

### ☁️ Option 4: AWS S3 + CloudFront

**Steps:**

1. **Build the project**:
```bash
yarn build
```

2. **Create S3 Bucket**:
   - Go to AWS S3 Console
   - Create bucket (e.g., `bbs-web`)
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for SPA routing)

3. **Upload files**:
```bash
# Install AWS CLI
brew install awscli  # macOS
# or download from: https://aws.amazon.com/cli/

# Configure
aws configure

# Upload
aws s3 sync dist/ s3://bbs-web --delete
```

4. **Make bucket public** (Bucket Policy):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bbs-web/*"
    }
  ]
}
```

5. **Create CloudFront Distribution**:
   - Origin: Your S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Compress Objects Automatically: Yes
   - Default Root Object: `index.html`

6. **Configure Error Pages** (for SPA routing):
   - Error Code: 403
   - Response Page Path: `/index.html`
   - Response Code: 200

7. **Custom Domain**:
   - Add Alternate Domain Names (CNAMEs)
   - Request SSL certificate via ACM
   - Update DNS to point to CloudFront distribution

8. **Deploy updates**:
```bash
# Upload new build
aws s3 sync dist/ s3://bbs-web --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

### 🐳 Option 5: Docker + Any Cloud (AWS ECS, DigitalOcean, etc.)

**Create Dockerfile**:
```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

**Create nginx.conf**:
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caching for static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

**Build and test locally**:
```bash
# Build image
docker build -t bbs-web .

# Run container
docker run -p 8080:80 bbs-web

# Test at http://localhost:8080
```

**Deploy to Docker Hub**:
```bash
# Tag image
docker tag bbs-web yourusername/bbs-web:latest

# Push to Docker Hub
docker push yourusername/bbs-web:latest
```

**Deploy to AWS ECS**:
1. Push image to Amazon ECR
2. Create ECS cluster
3. Create task definition
4. Create service
5. Configure load balancer
6. Set up custom domain with Route 53

**Deploy to DigitalOcean App Platform**:
1. Connect GitHub repository
2. Choose Docker deployment
3. App Platform auto-detects Dockerfile
4. Configure resources
5. Deploy

---

## Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Check website loads correctly
- [ ] Test all pages and navigation
- [ ] Verify forms work
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify meta tags with social media debuggers
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager (if needed)

### 3. Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test page load speed
- [ ] Verify images are optimized
- [ ] Check Gzip/Brotli compression

### 4. Security
- [ ] Verify HTTPS is working
- [ ] Check SSL certificate
- [ ] Review security headers
- [ ] Set up CSP (Content Security Policy)

### 5. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up analytics (Google Analytics, Plausible)

---

## Continuous Deployment

### Automatic Deployments with Vercel/Netlify:
- Push to `main` branch → automatic production deployment
- Push to other branches → preview deployments

### GitHub Actions (for other platforms):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
    
    - name: Install dependencies
      run: yarn install --frozen-lockfile
    
    - name: Build
      run: yarn build
    
    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@master
      with:
        args: --delete
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        SOURCE_DIR: 'dist'
```

---

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Configure server for SPA routing (see nginx.conf above)

### Issue: Environment variables not working
**Solution**: Ensure variables start with `VITE_` and rebuild

### Issue: Slow load times
**Solution**: 
- Enable Gzip/Brotli compression
- Optimize images
- Use CDN
- Enable caching headers

### Issue: CORS errors
**Solution**: Configure CORS on your API server

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html
- **Email Support**: info@booleanboxsolutions.com

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀
