# Deployment Guide

> How to deploy the LawnGuru Design System documentation website

---

## 🚀 Deployment Options

The documentation site is a static website that can be deployed to various platforms.

---

## Option 1: Vercel (Recommended)

### Why Vercel?
- Free for open source
- Automatic deployments from GitHub
- Custom domains
- Great performance
- Zero configuration

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects VitePress

3. **Configure Build Settings** (usually auto-detected)
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`

4. **Deploy**
   - Click "Deploy"
   - Your site is live!

### Custom Domain
- Add your custom domain in Vercel settings
- Update DNS records as instructed
- SSL is automatic

---

## Option 2: Netlify

### Steps

1. **Push to GitHub** (if not already done)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `npm run docs:build`
   - Publish directory: `docs/.vitepress/dist`

4. **Deploy**

### netlify.toml

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run docs:build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Option 3: GitHub Pages

### Steps

1. **Create GitHub Action**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Documentation

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

3. **Update VitePress Config**

In `docs/.vitepress/config.js`, add:

```js
export default defineConfig({
  base: '/design-system/', // Replace with your repo name
  // ... rest of config
})
```

---

## Option 4: Self-Hosted (VPS/Server)

### Build

```bash
npm run docs:build
```

This creates a `docs/.vitepress/dist` folder with static files.

### Deploy

#### Using Nginx

1. **Copy files to server**
   ```bash
   scp -r docs/.vitepress/dist/* user@server:/var/www/design-system/
   ```

2. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name design-system.yourdomain.com;

       root /var/www/design-system;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## Environment Variables

No environment variables needed for basic deployment.

For custom features:

```env
# Example for API integration
VITE_API_URL=https://api.lawnguru.com
```

Add to `.env.production`:

```env
VITE_API_URL=https://api.lawnguru.com
```

---

## Custom Domain

### DNS Configuration

Add these DNS records:

```
Type    Name    Value
A       @       [your-server-ip]
CNAME   www     [your-deployment-url]
```

### SSL Certificate

Most platforms (Vercel, Netlify) provide automatic SSL.

For self-hosted, use [Let's Encrypt](https://letsencrypt.org/):

```bash
sudo certbot --nginx -d design-system.yourdomain.com
```

---

## Performance Optimization

### Build Optimization

Already optimized by VitePress, but you can:

1. **Enable compression**
   - Gzip/Brotli compression
   - Most platforms enable this automatically

2. **CDN**
   - Vercel/Netlify include CDN
   - For self-hosted, consider Cloudflare

3. **Image Optimization**
   - Use WebP format
   - Optimize SVGs
   - Lazy load images

---

## Continuous Deployment

### Automatic Deployments

With Vercel/Netlify:
- Push to `main` → Auto-deploy to production
- Push to other branches → Preview deployments

### Manual Deployment

```bash
# Build
npm run docs:build

# Deploy (using your method)
# Example with rsync:
rsync -avz docs/.vitepress/dist/ user@server:/var/www/design-system/
```

---

## Monitoring

### Analytics

Add analytics in `docs/.vitepress/config.js`:

```js
export default defineConfig({
  head: [
    // Google Analytics
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `]
  ],
  // ... rest of config
})
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules
rm -rf docs/.vitepress/cache
npm install
npm run docs:build
```

### 404 Errors

- Ensure base path is correct in config
- Check redirect rules
- Verify output directory

### Styles Not Loading

- Check base path configuration
- Clear browser cache
- Rebuild and redeploy

---

## Deployment Checklist

Before deploying:

- [ ] All markdown files reviewed
- [ ] Images and assets added
- [ ] Links tested
- [ ] Build succeeds locally
- [ ] Base path configured (if needed)
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics added (optional)
- [ ] README updated

---

## 📞 Support

Deployment issues?
- Check [VitePress Deployment Docs](https://vitepress.dev/guide/deploy)
- Open GitHub issue
- Contact DevOps team

---

**Happy deploying! 🚀🌱**
