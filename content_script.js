// Put all the javascript code here, that you want to execute after page load.

function m() {
  var actions = document.getElementById("actions-inner");

  var player = document.getElementById("player");

  var below = document.getElementById("below");

  below.parentElement.insertBefore(actions, below);
  player.style.marginBottom = "10px";
}

setTimeout(m, 5000);