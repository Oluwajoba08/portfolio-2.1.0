# Deployment Guide - Andlo Portfolio

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers excellent support for React projects.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Framework preset will auto-detect as Vite
6. Click "Deploy"

```bash
# Vercel CLI (optional)
npm i -g vercel
vercel
```

### Option 2: Netlify

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder, or:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
4. Deploy

### Option 3: GitHub Pages

**Steps:**
1. Add `homepage` to package.json:
```json
"homepage": "https://yourusername.github.io/new-portfolio"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Hosting (Shared/VPS)

**Steps:**
1. Build for production: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Configure server to serve index.html for all routes
4. Set up SSL certificate
5. Configure domain DNS

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        root /var/www/dist;
        try_files $uri /index.html;
    }
}
```

### Option 5: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and Run:**
```bash
docker build -t andlo-portfolio .
docker run -p 3000:3000 andlo-portfolio
```

## 📋 Pre-Deployment Checklist

- [ ] Update all profile information
- [ ] Add actual project images
- [ ] Update contact email
- [ ] Update social media links
- [ ] Test all links work correctly
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`
- [ ] Set up proper meta tags in index.html
- [ ] Configure custom domain name
- [ ] Set up SSL certificate (HTTPS)
- [ ] Test on mobile devices
- [ ] Test contact form integration
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Optimize images
- [ ] Test performance with Lighthouse

## 🔧 Environment Variables

If you use backend services, create `.env` file:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your-email@example.com
VITE_FORM_BACKEND_URL=https://api.example.com/contact
```

Update code to use:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📊 Performance Optimization

Before deployment, optimize:

1. **Images**: Use WebP format, compress
2. **Bundling**: Run build and check sizes
3. **Caching**: Configure cache headers
4. **CDN**: Serve static assets from CDN
5. **Minification**: Already handled by Vite
6. **Code Splitting**: Already configured

**Check build size:**
```bash
npm run build
```

**Performance audit:**
1. Run Chrome DevTools Lighthouse
2. Target scores: 90+ in all categories
3. Optimize based on recommendations

## 🔒 Security

- Enable HTTPS (essential)
- Set security headers:
  ```
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  ```
- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data

## 📈 Analytics Setup

Add Google Analytics:

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🌐 Custom Domain Setup

1. Register domain on registrar (GoDaddy, Namecheap, etc.)
2. Point DNS to your hosting provider
3. Configure SSL certificate (usually free)
4. Update environment settings

### Vercel Custom Domain:
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

### Netlify Custom Domain:
1. Go to Domain settings
2. Add custom domain
3. Update DNS or use Netlify DNS

## 📞 After Deployment

1. Test all pages
2. Verify form submissions
3. Check all links
4. Test mobile responsiveness
5. Monitor performance
6. Set up email notifications for errors
7. Regular backups
8. Keep dependencies updated

## 🆘 Troubleshooting

**404 errors after deployment:**
- Ensure server is configured for SPA (single page application)
- Point all routes to index.html

**Styles not loading:**
- Check CSS file paths
- Verify CSS is included in build

**Images not displaying:**
- Use relative paths or CDN URLs
- Ensure images are in public folder

**Form not submitting:**
- Check backend URL is correct
- Verify CORS settings
- Check browser console for errors

## 📚 Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com

---

**Happy Deploying! 🎉**
