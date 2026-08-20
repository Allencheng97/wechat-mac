const { app, BrowserWindow, session, shell } = require('electron');
const path = require('path');
const HOME_URL = 'https://weread.qq.com/';
const PARTITION = 'persist:weread';
function createWindow() {
  const win = new BrowserWindow({ width: 1320, height: 860, minWidth: 960, minHeight: 640, title: '微信读书', backgroundColor: '#f7f8fa', webPreferences: { partition: PARTITION, preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith('https://weread.qq.com/')) return { action: 'allow' }; shell.openExternal(url); return { action: 'deny' }; });
  win.loadURL(HOME_URL);
}
app.whenReady().then(() => { session.fromPartition(PARTITION); createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
