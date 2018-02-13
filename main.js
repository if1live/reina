chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

function runApp() {
  chrome.app.window.create('terminal.html', {
    id: "terminalWinID",
    innerBounds: {
      width: 1024,
      height: 768,
    }
  });
}
