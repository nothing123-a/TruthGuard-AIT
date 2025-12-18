@echo off
echo === TruthGuard Deployment ===
echo.

echo Step 1: Building project...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo Step 2: Adding files to git...
git add .
git commit -m "Update project files"
git push origin main

echo.
echo === Manual GitHub Pages Setup Required ===
echo 1. Go to your GitHub repository
echo 2. Click Settings tab
echo 3. Scroll to Pages section
echo 4. Select "Deploy from a branch"
echo 5. Choose "main" branch
echo 6. Select "/ (root)" folder
echo 7. Click Save
echo.
echo Your site will be available at:
echo https://nothing123-a.github.io/TruthGuard-AIT/
echo.
pause