var btnFullScreen = document.getElementById("btnFullScreen");
btnFullScreen.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
function onStart () {

}
function startGame() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("gameScreen").style.display = "flex";
}

