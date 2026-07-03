const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icon.ico'),   // <-- تعيين أيقونة النافذة
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');
}

// النسخ الاحتياطي التلقائي (يبقى كما هو)
ipcMain.handle('save-backup', async (event, jsonData) => {
  const backupDir = path.join(app.getPath('userData'), 'backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  const dateStr = new Date().toISOString().slice(0,10).replace(/-/g,'');
  const filePath = path.join(backupDir, `backup_${dateStr}.json`);
  fs.writeFileSync(filePath, jsonData, 'utf-8');
  return { success: true, path: filePath };
});

// ---- آلية النسخ الاحتياطي عند الإغلاق ----
app.on('before-quit', (event) => {
  // منع الإغلاق الفوري حتى ننتهي من النسخ الاحتياطي
  event.preventDefault();
  if (mainWindow && !mainWindow.isDestroyed()) {
    // نطلب من نافذة التطبيق تنفيذ النسخ الاحتياطي الأخير
    mainWindow.webContents.send('trigger-backup-before-close');
    // ننتظر فترة قصيرة ليتم النسخ ثم نخرج
    setTimeout(() => {
      app.exit();
    }, 1000); // مهلة كافية
  } else {
    app.exit();
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});