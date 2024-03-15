const icon_width = 79,
    icon_height = 79,
    num_icons = 9,
    time_per_icon = 100;
var indexes = [0,0,0];

function roll(reel,offset) {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
    const style = getComputedStyle(reel),
        backgroundPositionY = parseFloat(style["background-position-y"]);
        targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
        normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
    
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms cubic-bezier(.45,.05,.58,1.09)`;
    reel.style["background-position-y"] = `${targetBackgroundPositionY}px`;
    //reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
    
    return delta%num_icons;
}
function checkWin() {
    const reelsList = document.querySelectorAll('.reel-container > .reel');
    if (reelsList[0].style["background-position-y"] === "0px" && reelsList[1].style["background-position-y"] === "79px" && reelsList[2].style["background-position-y"] === "158px") {
        alert("You won!");
    }
}
function rollAll() {
    const reelsList = document.querySelectorAll('.reel-container > .reel');
    
    for (let i=0;i<3;i++) {
        let delta = roll(reelsList[i],indexes[i]);
        indexes[i] = (indexes[i] + delta) % num_icons;
    }
    checkWin();
}
rollAll();