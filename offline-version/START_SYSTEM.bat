@echo off
title Spool Salad Terminal - Launcher
color 0A

echo.
echo ====================================
echo   SPOOL SALAD TERMINAL SYSTEM
echo ====================================
echo.
echo Starting the POS system...
echo.

REM Try to open with Chrome first
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    echo Opening with Google Chrome...
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --new-window "%~dp0index.html"
    goto end
)

REM Try Chrome (x86)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    echo Opening with Google Chrome...
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --new-window "%~dp0index.html"
    goto end
)

REM Try Edge
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    echo Opening with Microsoft Edge...
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --new-window "%~dp0index.html"
    goto end
)

REM Fallback to default browser
echo Opening with default browser...
start "" "%~dp0index.html"

:end
echo.
echo System launched successfully!
echo You can close this window.
echo.
timeout /t 3
exit
