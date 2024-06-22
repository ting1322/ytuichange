// Put all the javascript code here, that you want to execute after page load.

function m() {
  var actions = document.getElementById("actions-inner");
  var player = document.getElementById("player");
  var below = document.getElementById("below");
  var info = document.getElementById("info-container");
  var desc = document.querySelector("div#description");

  if (actions == null ||
      player == null ||
      below == null ||
      info == null ||
      desc == null) {

    setTimeout(m, 1000);
    return;
  }

  below.parentElement.insertBefore(actions, below);
  player.style.marginBottom = "10px";

  var infodiv = document.createElement('div');
  infodiv.style.color="white";
  below.parentElement.insertBefore(infodiv, below);
  infodiv.appendChild(desc);
}

setTimeout(m, 3000);