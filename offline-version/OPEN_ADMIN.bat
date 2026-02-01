@echo off
title Spool Salad Terminal - Admin Panel
color 0E

echo.
echo ====================================
echo   SPOOL ADMIN PANEL
echo ====================================
echo.
echo Opening admin configuration...
echo.

REM Try to open with Chrome first
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --new-window "%~dp0admin.html"
    goto end
)

REM Try Chrome (x86)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --new-window "%~dp0admin.html"
    goto end
)

REM Try Edge
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --new-window "%~dp0admin.html"
    goto end
)

REM Fallback to default browser
start "" "%~dp0admin.html"

:end
echo Admin panel opened!
timeout /t 2
exit
