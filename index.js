window.addEventListener('load', function () {
  var webview = document.getElementById('didiyun')
  var loading = document.querySelector('.loading')
  
  var loadstart = function() {
    loading.style.display="flex";
  }
  var loadstop = function() {
    loading.style.display="none";
  }
  webview.addEventListener("loadstart", loadstart);
  webview.addEventListener("loadstop", loadstop);

  webview.addEventListener('newwindow', function(e) {
    e.preventDefault()
    webview.src = e.targetUrl
  })
})
