@echo off
echo Building TruthGuard...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo Deploying to GitHub Pages...
cd /d "%~dp0"
git add dist -f
git commit -m "Deploy build"
git subtree push --prefix dist origin gh-pages
echo Deployment complete!
pause