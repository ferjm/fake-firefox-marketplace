window.addEventListener("load", function onload() {
  window.navigator.mozSetMessageHandler("activity", function(activity) {
    console.log("token " + activity.source.token);
    var tokenContainer = window.document.getElementById("token");
    tokenContainer.textContent = "Token received via activity " + token;
  });
});
