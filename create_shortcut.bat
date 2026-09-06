@echo off
title Tao Shortcut Desktop - Van Hoc 10+
cd /d "%~dp0"

echo ===================================================
echo        DANG TAO SHORTCUT RA NGOAI DESKTOP
echo ===================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$desktop = [Environment]::GetFolderPath('Desktop');" ^
  "$shortcutPath = [System.IO.Path]::Combine($desktop, 'Van Hoc 10+ (Desktop App).lnk');" ^
  "$wsh = New-Object -ComObject WScript.Shell;" ^
  "$s = $wsh.CreateShortcut($shortcutPath);" ^
  "$s.TargetPath = '%~dp0run_app.bat';" ^
  "$s.WorkingDirectory = '%~dp0';" ^
  "$s.Description = 'Van Hoc 10+ - On Thi Ngu Van Vao Lop 10 (Electron App)';" ^
  "if (Test-Path '%~dp0electron\icon.ico') { $s.IconLocation = '%~dp0electron\icon.ico,0' };" ^
  "$s.Save();" ^
  "Write-Host 'Tao shortcut thanh cong tai:' $shortcutPath"

echo.
echo ===================================================
echo   HOAN TAT! Hay ra ngoai Desktop de kiem tra!
echo ===================================================
pause
