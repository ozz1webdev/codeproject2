icon_width = 79,	
icon_height = 79,	
num_icons = 9,	
time_per_icon = 100,
indexes = [0, 0, 0];

const roll = (reel, offset = 0) => {

	const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
	
	return new Promise((resolve, reject) => {
		
		const style = getComputedStyle(reel),
					backgroundPositionY = parseFloat(style["background-position-y"]),
					targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
					normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);
		
		setTimeout(() => { 
			reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
			reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
		}, offset * 150);
			
		setTimeout(() => {
			reel.style.transition = `none`;
			reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
			resolve(delta%num_icons);
		}, (8 + 1 * delta) * time_per_icon + offset * 150);
		
	});
};


function rollAll() {
	slot1Theme.onclick = "";
	slot2Theme.onclick = "";
	slot3Theme.onclick = "";

	const reelsList = document.querySelectorAll('.reel-container > .reel');
	let sound = new Audio('../assets/media/Sounds/reel.mp3');
	sound.play();

	Promise
		.all( [...reelsList].map((reel, i) => roll(reel, i)) )	
		.then((deltas) => {
			sound.pause();
			deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta)%num_icons);
		
			if (indexes[0] == indexes[1] || indexes[1] == indexes[2]) {
				//const winCls = indexes[0] == indexes[2] ? "win2" : "win1";
				setBalance('win');
			}
			else if (indexes[0] == indexes[1] && indexes[1] == indexes[2]) {
				setBalance('3win');
			}
			else {
				setBalance('lose');
			}
		});
};