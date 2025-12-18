# 🚀 TruthGuard Deployment Guide

## ✅ Current Status
- ✅ Project builds successfully
- ✅ All dependencies installed
- ✅ Git repository synced
- ✅ Build files generated in `dist/` folder

## 🎯 Quick Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Go to your GitHub repository: https://github.com/nothing123-a/TruthGuard-AIT
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **"Deploy from a branch"**
5. Choose **"main"** branch
6. Select **"/ (root)"** folder
7. Click **Save**

Your site will be live at: `https://nothing123-a.github.io/TruthGuard-AIT/`

### Option 2: Manual GitHub Pages with dist folder
1. Run: `git add dist -f` (force add dist folder)
2. Run: `git commit -m "Add build files"`
3. Run: `git push origin main`
4. Follow Option 1 steps but select **"dist"** folder instead of root

### Option 3: Alternative Hosting Platforms

#### Netlify (Free)
1. Go to https://netlify.com
2. Drag and drop your `dist` folder
3. Get instant deployment

#### Vercel (Free)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Auto-deploys on every push

#### Surge.sh (Free)
```bash
npm install -g surge
cd dist
surge
```

## 🔧 Local Testing
```bash
# Test locally before deployment
npm run preview
```

## 🐛 Troubleshooting

### If deployment fails:
1. Ensure all files are committed: `git status`
2. Check build works: `npm run build`
3. Verify dist folder exists and has files
4. Try alternative hosting platforms

### Common Issues:
- **Path too long error**: Use shorter folder names
- **Build fails**: Check for missing dependencies with `npm install`
- **Site not loading**: Verify base path in vite.config.js matches repo name

## 📞 Need Help?
Contact the TruthGuard team:
- Riya Lad: 202401100008@mitaoe.ac.in
- Sakshi Barahate: 202401100110@mitaoe.ac.in
- Prajwal Kate: kateprajwal0806@gmail.com
- Dipak Patil: Dipakraj020207@gmail.com

---
**Your TruthGuard project is ready for deployment! 🎉**