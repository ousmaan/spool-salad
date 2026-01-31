@echo off
echo ========================================
echo   LCD BANNERS - Git Deployment Helper
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed!
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo Or use GitHub Desktop: https://desktop.github.com
    echo.
    pause
    exit /b
)

echo ✅ Git is installed!
echo.

REM Check if already initialized
if exist ".git" (
    echo ⚠️ Already a Git repository!
    echo.
    echo Run these commands manually:
    echo   git add .
    echo   git commit -m "Update"
    echo   git push
    echo.
    pause
    exit /b
)

echo.
echo ⚠️ IMPORTANT: You must create the repository on GitHub FIRST!
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: lcd-banners
echo 3. Select: Public
echo 4. DO NOT initialize with README
echo 5. Click "Create repository"
echo.
set /p created="Have you created the repository? (y/n): "

if /i not "%created%"=="y" (
    echo.
    echo Please create the repository first, then run this script again.
    pause
    exit /b
)

echo.
set /p username="Enter your GitHub username: "

echo.
echo 🚀 Initializing Git repository...
git init

echo.
echo 📦 Adding all files...
git add .

echo.
echo 💾 Creating first commit...
git commit -m "Initial deployment of LCD Banners"

echo.
echo 🌿 Setting main branch...
git branch -M main

echo.
echo 🔗 Connecting to GitHub...
git remote add origin https://github.com/%username%/lcd-banners.git

echo.
echo 🚀 Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   ✅ DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/%username%/lcd-banners
echo 2. Click "Settings" → "Pages"
echo 3. Source: main branch
echo 4. Click "Save"
echo 5. Wait 3 minutes
echo 6. Open: https://%username%.github.io/lcd-banners/display.html
echo.
pause
