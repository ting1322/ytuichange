// Put all the javascript code here, that you want to execute after page load.

function m() {
    var actions = document.getElementById("actions-inner");
    var player = document.getElementById("player");
    var below = document.getElementById("below");
    var info = document.getElementById("info-container");
    var desc = document.querySelector("div#description");
    //var chatContainer = document.querySelector("div#chat-container");
    var chatroom = document.querySelector("ytd-live-chat-frame#chat");


    if (actions == null ||
        player == null ||
        below == null ||
        info == null ||
        desc == null ||
        chatroom == null) {

        console.log("try again");

        setTimeout(m, 3000);
        return;
    }

    if (chatroom.style != null) {
        chatroom.style.visibility = "visible";
    }

    //actions.remove();
    below.parentElement.insertBefore(actions, below);
    if (player.style != null) {
        player.style.marginBottom = "10px";
    }

    //desc.remove();
    var infodiv = document.createElement('div');
    infodiv.style.color = "white";
    below.parentElement.insertBefore(infodiv, below);
    infodiv.appendChild(desc);
}

//(function(history) {
//    var pushState = history.pushState;
//    history.pushState = function(state) {
//        // YOUR CUSTOM HOOK / FUNCTION
//        console.log('I am called from pushStateHook');
//        if (/\/(watch|live)/.test(document.URL)) {
//            setTimeout(m, 8000);
//        }
//        return pushState.apply(history, arguments);
//    };
//})(window.history);

setTimeout(m, 3000);