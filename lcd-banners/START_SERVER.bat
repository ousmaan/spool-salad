@echo off
echo ========================================
echo   LCD BANNERS - LOCAL SERVER
echo ========================================
echo.
echo Starting Python web server...
echo.
echo Open your browser to:
echo   http://localhost:8000/
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
cd /d "%~dp0"
python -m http.server 8000
pause
