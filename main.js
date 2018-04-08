const electron = require('electron');

electron.app.on("ready", function() {
  const window = new electron.BrowserWindow({
    width: 1200,
    height: 700,
    titleBarStyle: "hidden",
    webPreferences: {
      experimentalFeatures: true
    },
    frame:false
  });
  window.loadURL("file://" + __dirname + "/index.html");

  window.openDevTools();
});
