const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:3000'); // Per lo sviluppo
  // win.loadFile(path.join(__dirname, 'build', 'index.html')); // Quando distribuito
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});