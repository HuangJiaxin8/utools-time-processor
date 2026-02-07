// 暴露 uTools API 给渲染进程
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('utoolsAPI', {
  // 数据库操作
  db: {
    get: (key) => utools.db.get(key),
    put: (key, value) => utools.db.put(key, value),
    remove: (key) => utools.db.remove(key)
  },
  // 其他 API
  copyText: (text) => utools.copyText(text),
  ubrowser: utools.ubrowser
});
