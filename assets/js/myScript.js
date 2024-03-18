const icon_width = 79,
    icon_height = 79,
    num_icons = 9,
    time_per_icon = 100;
let indexes = [0,0,0];

function roll(reel,offset) {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
    const style = getComputedStyle(reel),
        backgroundPositionY = parseFloat(style["background-position-y"]),
        targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
        normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
    
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms cubic-bezier(.45,.05,.58,1.09)`;
    reel.style["background-position-y"] = `${targetBackgroundPositionY}px`;
    //reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;


        return delta%num_icons;
        
    
}
function checkWin() {
    if (indexes[0] == indexes[1] || indexes[1] == indexes[2] || indexes[0] == indexes[2]) {
        alert("win 2 same icons");
    }
    if (indexes[0] == indexes[1] ==  indexes[2]) {
        alert("win 3 same icons");
    }
}


function rollAll() {
    const reelsList = document.querySelectorAll('.reel-container > .reel');
    
    let delta;
    
    for (let i=0;i<3;i++) {
        delta = roll(reelsList[i],indexes[i]);
        indexes[i] = (indexes[i] + delta) % num_icons;
        
    }
    console.log('delta :',delta);
    console.log('indexes:',indexes);
    //checkWin();
}
rollAll();