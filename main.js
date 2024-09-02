const { app, BrowserWindow } = require("electron");
const { setup } = require("firebase-electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
  win.on("closed", app.quit);
  setup(win.webContents);
});
