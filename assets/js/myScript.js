function screenRotate () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('body').css({
            "-webkit-transform": "rotate(90deg)"
        }); 
    }
    
}
function startGame() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("gameScreen").style.display = "flex";
}