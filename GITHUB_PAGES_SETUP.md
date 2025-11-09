# 🚀 GitHub Pages Deployment Guide for booleanbox.com

## ✅ What's Already Done

I've set up everything for automated deployment:

1. ✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main` branch
   - Uses Yarn for fast, reliable builds
   - Uploads build artifacts to GitHub Pages

2. ✅ **Custom Domain Configuration** (`public/CNAME`)
   - Pre-configured for `booleanbox.com`
   - File will be included in the build

3. ✅ **Vite Configuration** (`vite.config.js`)
   - Base path set to `/` for custom domain
   - Optimized for production builds

## 📋 Setup Steps (Do Once)

### Step 1: Enable GitHub Pages

1. Go to your repository: `https://github.com/Booeanbox-Solutions/BBS.Web`
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### Step 2: Configure Custom Domain in GitHub

1. Still in **Settings > Pages**
2. Under **Custom domain**, enter: `booleanbox.com`
3. Click **Save**
4. Wait for DNS check (it may take a few minutes)
5. ✅ Check **Enforce HTTPS** (recommended for security)

### Step 3: Configure DNS Records at Your Domain Provider

You need to add DNS records at your domain registrar (where you bought booleanbox.com):

#### Option A: Apex Domain (booleanbox.com)

Add these **A Records**:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### Option B: WWW Subdomain (www.booleanbox.com)

Add this **CNAME Record**:
```
Type: CNAME
Name: www
Value: booeanbox-solutions.github.io
```

#### Recommended: Add Both

For best practice, set up both apex and www:
1. Add the 4 A records (above)
2. Add the CNAME record for www (above)
3. GitHub Pages will automatically redirect www to non-www (or vice versa)

### Step 4: Push to Main Branch

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Setup GitHub Pages deployment with custom domain"

# Push to main branch
git push origin main
```

**That's it!** The GitHub Actions workflow will automatically:
1. ✅ Detect the push to main
2. ✅ Install dependencies with Yarn
3. ✅ Build the production site
4. ✅ Deploy to GitHub Pages
5. ✅ Your site will be live at https://booleanbox.com

## 🔍 Monitoring Deployment

### Check Workflow Status

1. Go to your repository: `https://github.com/Booeanbox-Solutions/BBS.Web`
2. Click **Actions** tab
3. You'll see the "Deploy to GitHub Pages" workflow running
4. Click on the workflow run to see detailed logs
5. Wait for both "build" and "deploy" jobs to complete (usually 1-2 minutes)

### Check Deployment Status

- Green ✅ = Successfully deployed
- Red ❌ = Failed (click to see error logs)
- Yellow 🟡 = In progress

## 🌐 DNS Propagation Time

After adding DNS records:
- **Minimum**: 5-10 minutes
- **Typical**: 1-2 hours
- **Maximum**: 24-48 hours

You can check DNS propagation at: https://dnschecker.org

## 🔧 Troubleshooting

### Issue: DNS Check Failed in GitHub Settings

**Solution**: 
- Wait 10-15 minutes after adding DNS records
- Check DNS records are correct at your domain provider
- Try removing and re-adding the custom domain in GitHub Settings

### Issue: "404 - File not found" on GitHub Pages

**Solution**:
- Make sure the workflow completed successfully (check Actions tab)
- Verify the CNAME file exists in the deployed site
- Clear browser cache and try again

### Issue: Site Shows "GitHub Pages is not available"

**Solution**:
- Check that GitHub Pages is enabled in Settings > Pages
- Verify source is set to "GitHub Actions"
- Make sure the workflow has run at least once

### Issue: Custom Domain Not Working

**Solution**:
- Verify DNS records are correct (use `dig booleanbox.com` or `nslookup booleanbox.com`)
- Check the CNAME file is in the `public` folder
- Wait for DNS propagation (can take up to 48 hours)

### Issue: HTTPS Not Working

**Solution**:
- Make sure "Enforce HTTPS" is checked in GitHub Settings > Pages
- Wait 10-15 minutes for SSL certificate to be issued
- GitHub automatically provisions SSL certificates via Let's Encrypt

## 📊 Workflow Details

### Triggers
- ✅ Push to `main` branch (automatic)
- ✅ Manual trigger via "workflow_dispatch" (Actions tab > Run workflow)

### Build Process
```yaml
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (yarn install --frozen-lockfile)
4. Build production site (yarn build)
5. Upload build artifact
6. Deploy to GitHub Pages
```

### Permissions
- `contents: read` - Read repository code
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Required for deployment

## 🔄 Making Updates

Every time you push to `main` branch:

```bash
# Make your changes to code
# ...

# Stage changes
git add .

# Commit
git commit -m "Your update description"

# Push (triggers automatic deployment)
git push origin main
```

The site will automatically rebuild and redeploy in 1-2 minutes!

## 📈 Performance Optimizations

The deployed site includes:
- ✅ Minified JavaScript and CSS
- ✅ Optimized images
- ✅ Code splitting
- ✅ Tree shaking (removes unused code)
- ✅ Gzip compression
- ✅ CDN delivery via GitHub's infrastructure

## 🔒 Security

- ✅ HTTPS enforced (SSL certificate from Let's Encrypt)
- ✅ Secure headers recommended
- ✅ No sensitive data in client-side code

## 📝 Important Notes

1. **Build Time**: Usually 1-2 minutes per deployment
2. **Cache**: GitHub Pages may cache content; use hard refresh (Ctrl+Shift+R) to see latest changes
3. **Custom Domain**: Once DNS propagates, your site will be available at https://booleanbox.com
4. **SSL Certificate**: Automatically issued and renewed by GitHub
5. **Bandwidth**: GitHub Pages has generous limits (100GB/month, 100,000 requests/month)

## 🎯 Post-Deployment Checklist

After your first successful deployment:

- [ ] Visit https://booleanbox.com (after DNS propagates)
- [ ] Verify all pages load correctly
- [ ] Test navigation (mobile and desktop)
- [ ] Check responsive design on different devices
- [ ] Test contact form (note: you'll need a backend service for form submissions)
- [ ] Verify SSL certificate is active (look for padlock icon)
- [ ] Test social media sharing (Open Graph tags)
- [ ] Check Google Search Console for indexing

## 🆘 Need Help?

1. **Check GitHub Actions logs**: Repository > Actions tab
2. **Review GitHub Pages settings**: Repository > Settings > Pages
3. **DNS Issues**: Contact your domain registrar
4. **Workflow Issues**: Check `.github/workflows/deploy.yml`

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Your automated deployment is ready! 🎉**

Just push to main, and your site will automatically deploy to https://booleanbox.com
