@echo off
echo ========================================
echo   Chrome Kiosk Shortcut Creator
echo ========================================
echo.

set /p url="Enter your display URL (e.g., https://username.github.io/lcd-banners/display.html): "

echo.
echo Creating shortcut on Desktop...

set SCRIPT="%TEMP%\CreateShortcut.vbs"

echo Set oWS = WScript.CreateObject("WScript.Shell") > %SCRIPT%
echo sLinkFile = "%USERPROFILE%\Desktop\LCD Display.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "C:\Program Files\Google\Chrome\Application\chrome.exe" >> %SCRIPT%
echo oLink.Arguments = "--kiosk ""%url%"" --incognito --disable-infobars" >> %SCRIPT%
echo oLink.Description = "LCD Display Fullscreen" >> %SCRIPT%
echo oLink.IconLocation = "C:\Program Files\Google\Chrome\Application\chrome.exe, 0" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript /nologo %SCRIPT%
del %SCRIPT%

echo.
echo ========================================
echo   ✅ Shortcut Created!
echo ========================================
echo.
echo A shortcut called "LCD Display" has been created on your Desktop.
echo.
echo Double-click it to launch the display in fullscreen kiosk mode!
echo.
echo To exit kiosk mode: Press Alt+F4
echo.
echo ✨ Tip: Copy this shortcut to Startup folder to auto-launch on boot:
echo    Press Win+R, type: shell:startup
echo.
pause
