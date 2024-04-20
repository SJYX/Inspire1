const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // 在渲染进程中启用 Node.js
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  const menuTemplate = [
    {
      label: 'Electron Test',
      submenu: [
        {
          label: 'TX Test',
          click: () => {
            mainWindow.webContents.send('showTxTestPage');
          }
        },
        {
          label: 'RX Test',
          click: () => {
            mainWindow.webContents.send('showRxTestPage');
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }
  ];
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

