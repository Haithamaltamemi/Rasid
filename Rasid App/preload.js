const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveBackup: (jsonData) => ipcRenderer.invoke('save-backup', jsonData),
  // إضافة دالة لاستقبال طلب النسخ الاحتياطي عند الإغلاق
  onBackupBeforeClose: (callback) => {
    ipcRenderer.on('trigger-backup-before-close', () => {
      callback();
    });
  }
});