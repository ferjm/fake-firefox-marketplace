const APP_REPO = document.location.protocol + '//' + document.location.host;
const PACKAGED_APP = APP_REPO + '/apps/packagedApp/manifest.webapp';

function _installPackagedApp(app) {
  var req = navigator.mozApps.installPackage(PACKAGED_APP);
  req.onsuccess = function onsuccess() {
    console.log('Successfully installed ' + PACKAGED_APP);
  };

  req.onerror = function onerror(e) {
    console.log('Error ' + e.target.error.name);
  };
}

window.addEventListener('load', function init(evt) {
  document.getElementById('packaged').addEventListener('click', function() {
    _installPackagedApp(PACKAGED_APP);
  });
});
