@echo off
echo ========================================
echo   PUSH MAINTENANCE MODE TO GITHUB
echo ========================================
echo.

cd /d "%~dp0"

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed!
    echo.
    echo Use GitHub Desktop or web interface instead.
    pause
    exit /b
)

echo 🔄 Adding changes...
git add .

echo.
echo 💾 Committing...
git commit -m "Emergency maintenance mode - updating prices"

echo.
echo 🚀 Pushing to GitHub...
git push

echo.
echo ========================================
echo   ✅ PUSHED TO GITHUB!
echo ========================================
echo.
echo Wait 30-60 seconds for LCD to auto-refresh
echo.
echo The LCD will now show maintenance mode!
echo.
pause
