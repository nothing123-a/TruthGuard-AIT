# TruthGuard Deployment Instructions

## 🚀 Deploy to GitHub Pages

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build and Deploy
```bash
npm run deploy
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Select "/ (root)" folder
6. Click Save

### Step 4: Access Your Site
Your site will be live at:
```
https://nothing123-a.github.io/TruthGuard-AIT/
```

## 🔧 Git Commands

```bash
# Add all files
git add .

# Commit changes
git commit -m "Deploy TruthGuard to GitHub Pages"

# Push to repository
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## ✅ Configuration Complete

- ✅ package.json updated with deploy scripts
- ✅ vite.config.js configured with correct base path
- ✅ gh-pages dependency added
- ✅ Ready for deployment

Your TruthGuard project is now ready for GitHub Pages deployment!