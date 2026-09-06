@echo off
title Van Hoc 10+ - Khoi dong Electron Desktop App
cd /d "%~dp0"

echo ===================================================
echo     DANG KHOI DONG UNG DUNG VAN HOC 10+ (ELECTRON)
echo ===================================================
echo.

REM Kiem tra neu dist chua build thi build truoc
if not exist "dist\index.html" (
    echo Dang bien dich giao dien lan dau...
    call npm.cmd run build
)

echo Dang mo ung dung desktop...
call npx.cmd electron .

exit
