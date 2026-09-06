const path = require('path');
const fs = require('fs');

const electron = require('electron');

// If executed directly with 'node' instead of the 'electron' runtime (e.g. Render / Cloud Web Service)
if (!electron || typeof electron === 'string' || !electron.app) {
  console.log('[Notice] Running under standard Node.js environment (e.g., Render / Cloud).');
  console.log('[Notice] Starting Web Server via server.cjs...');
  require('../server.cjs');
  return;
}

const { app, BrowserWindow, shell, ipcMain } = electron;

let mainWindow = null;

function createWindow() {
  const iconPath = path.join(__dirname, 'icon.ico');

  mainWindow = new BrowserWindow({
    width: 1320,
    height: 860,
    minWidth: 1024,
    minHeight: 700,
    title: 'Văn Học 10+ | Nền Tảng Học Ngữ Văn THCS & Ôn Thi Vào Lớp 10',
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webSecurity: true
    },
    show: false
  });

  // Remove default menu bar for clean modern desktop app look
  mainWindow.setMenuBarVisibility(false);

  // Load the built production app
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexPath)) {
    mainWindow.loadFile(indexPath);
  } else {
    // If not built yet, fallback to dev server
    mainWindow.loadURL('http://localhost:5173');
  }

  // Graceful show when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Open external links in user's default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
