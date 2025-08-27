# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### 2. Netlify

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify](https://netlify.com)

3. **Or use Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### 3. GitHub Pages

1. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### 1. Update Personal Information
- [ ] Replace `[YOUR_NAME]` with your actual name
- [ ] Replace `[YOUR_TITLE]` with your professional title
- [ ] Replace `[YOUR_EMAIL]` with your email address
- [ ] Replace `[CITY, COUNTRY]` with your location
- [ ] Update GitHub and LinkedIn URLs
- [ ] Update meta tags in `index.html`

### 2. Update Projects Data
- [ ] Edit `src/data/projects.js` with your actual projects
- [ ] Add real project images to `public/projects/`
- [ ] Update project URLs and descriptions

### 3. Add Your CV
- [ ] Place your CV file in the `public/` folder
- [ ] Update the CV download link in `src/sections/About.jsx`

### 4. Update Domain
- [ ] Replace `yourdomain.com` with your actual domain
- [ ] Update `robots.txt` and `sitemap.xml`

### 5. Test Everything
- [ ] Test language switching (EN/CZ)
- [ ] Test theme switching (Dark/Light)
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Test responsive design on different devices

## 🌐 Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### GitHub Pages
1. Go to repository settings
2. Scroll to "GitHub Pages" section
3. Enter your custom domain
4. Update DNS records

## 📱 Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Compress images before uploading
- Use appropriate image sizes for different devices

### 2. Build Optimization
```bash
npm run build
```
- The build process automatically optimizes your code
- CSS and JavaScript are minified
- Assets are optimized

### 3. CDN
- Consider using a CDN for faster global delivery
- Vercel and Netlify provide CDN automatically

## 🔍 SEO Setup

### 1. Meta Tags
- All meta tags are already configured in `index.html`
- Update with your specific information

### 2. Sitemap
- `sitemap.xml` is included in the `public/` folder
- Update the URL in the sitemap

### 3. Robots.txt
- `robots.txt` is configured to allow all crawlers
- Update the sitemap URL

## 🚨 Common Issues

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Missing Assets
- Ensure all images are in the `public/` folder
- Check file paths in your code

### Theme Not Persisting
- Check if localStorage is enabled in the browser
- Verify the theme toggle is working

### Language Not Switching
- Check if translation files exist
- Verify the language toggle logic

## 📊 Analytics Setup

### Google Analytics
1. Add your GA tracking code to `index.html`
2. Place it in the `<head>` section

### Other Analytics
- Add any other tracking scripts to `index.html`
- Consider using environment variables for sensitive data

## 🔒 Security Considerations

### 1. Environment Variables
- Don't commit API keys to version control
- Use environment variables for sensitive data

### 2. HTTPS
- Most deployment platforms provide HTTPS by default
- Ensure your custom domain uses HTTPS

### 3. Content Security Policy
- Consider adding CSP headers for additional security

## 📈 Post-Deployment

### 1. Test Everything
- Test on different devices and browsers
- Check all functionality works as expected

### 2. Monitor Performance
- Use tools like Lighthouse for performance analysis
- Monitor Core Web Vitals

### 3. Update Regularly
- Keep your projects and skills up to date
- Regular updates improve SEO and user engagement

## 🆘 Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Verify all dependencies are installed
3. Check the deployment platform's documentation
4. Open an issue on GitHub with detailed error information

---

**Happy Deploying! 🎉**
