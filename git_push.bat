@echo off
setlocal enabledelayedexpansion
title Git Push - Van Hoc 10+
cd /d "%~dp0"

echo ===================================================
echo     DANG TIEN HANH GIT PUSH LEN GITHUB
echo ===================================================
echo Repository: https://github.com/trongtinozzzz-stack/Tool_literature.git
echo.

REM Tim kiem git.exe
set "GIT_CMD=git"
where git >nul 2>&1
if errorlevel 1 (
    if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
        set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
        set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;!PATH!"
    ) else if exist "C:\Program Files\Git\cmd\git.exe" (
        set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
        set "PATH=C:\Program Files\Git\cmd;!PATH!"
    ) else if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
        set "GIT_CMD=C:\Program Files (x86)\Git\cmd\git.exe"
        set "PATH=C:\Program Files (x86)\Git\cmd;!PATH!"
    ) else (
        echo [LOI] Khong tim thay Git tren may tinh cua ban!
        echo Vui long cai dat Git tai: https://git-scm.com/downloads
        echo.
        pause
        exit /b 1
    )
)

REM Kiem tra user identity
"%GIT_CMD%" config user.name >nul 2>&1
if errorlevel 1 (
    "%GIT_CMD%" config --global user.name "trongtinozzzz-stack"
    "%GIT_CMD%" config --global user.email "trongtinozzzz-stack@users.noreply.github.com"
)

echo [1/5] Kiem tra Git Repository...
if not exist ".git" (
    echo Khoi tao git repo...
    "%GIT_CMD%" init
    "%GIT_CMD%" branch -M main
)

echo [2/5] Cau hinh Remote Origin...
"%GIT_CMD%" remote get-url origin >nul 2>&1
if errorlevel 1 (
    "%GIT_CMD%" remote add origin https://github.com/trongtinozzzz-stack/Tool_literature.git
) else (
    "%GIT_CMD%" remote set-url origin https://github.com/trongtinozzzz-stack/Tool_literature.git
)

echo [3/5] Dua toan bo thay doi vao Staging (git add .)...
"%GIT_CMD%" add .

echo [4/5] Tao Commit...
set "COMMIT_MSG="
set /p COMMIT_MSG="Nhap thong diep commit (Bam Enter de dung mac dinh): "
if "!COMMIT_MSG!"=="" (
    set "COMMIT_MSG=Cap nhat ung dung Van Hoc 10+ va Electron desktop app"
)

"%GIT_CMD%" commit -m "!COMMIT_MSG!"

echo.
echo [5/5] Dang day code len GitHub (git push -u origin main)...
"%GIT_CMD%" push -u origin main

if errorlevel 1 (
    echo.
    echo [THONG BAO] Neu day la lan dau push, co the ban can dang nhap GitHub trong cua so hien len.
    echo Hoac dung lenh: git push -u origin main --force neu muon ghi de.
) else (
    echo.
    echo ===================================================
    echo      DA PUSH THANH CONG LEN GITHUB!
    echo ===================================================
)

echo.
pause
