window.onresize = doLayout;

onload = function() {
  doLayout();
}

function doLayout() {
  var webview = document.querySelector('webview');
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;

  webview.style.width = windowWidth + 'px';
  webview.style.height = windowHeight + 'px';
}
