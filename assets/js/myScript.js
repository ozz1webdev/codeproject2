icon_width = 79,
icon_height = 79,	
num_icons = 9,	
time_per_icon = 100,
indexes = [0, 0, 0];

/**
 * Function to simulate the roll of a reel in a slot machine game.
 * 
 * @param {Element} reel - The reel element in the DOM.
 * @param {number} [offset=0] - The offset of the roll.
 * @returns {Promise<number>} - A promise that resolves to the delta of the roll.
 */
const roll = (reel, offset = 0) => {
	// Calculate the delta of the roll.
	const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
	
	// Return a promise that resolves to the delta of the roll.
	return new Promise((resolve, reject) => {
		
		// Get the computed style of the reel.
		const style = getComputedStyle(reel),
					// Get the background position Y of the reel.
					backgroundPositionY = parseFloat(style["background-position-y"]),
					// Calculate the target background position Y of the reel.
					targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
					// Calculate the normalized target background position Y of the reel.
					normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);
		
		// Set a timeout to set the transition and background position Y of the reel.
		setTimeout(() => { 
			reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
			reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
		}, offset * 150);
			
		// Set a timeout to set the background position Y of the reel and resolve the promise.
		setTimeout(() => {
			reel.style.transition = `none`;
			reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
			resolve(delta%num_icons);
		}, (8 + 1 * delta) * time_per_icon + offset * 150);
		
	});
};


/**
 * Rolls all the reels in the slot machine game and updates the indexes array.
 * If there is a winning combination, it calls the setBalance function with 'win' parameter.
 * Otherwise, it calls the setBalance function with 'lose' parameter.
 */
function rollAll() {
	// Disable click events on the themes
	slot1Theme.onclick = "";
	slot2Theme.onclick = "";
	slot3Theme.onclick = "";

	// Set the Win Message to none
	winMessage.style.display = "none";
	// Get all the reels in the DOM
	const reelsList = document.querySelectorAll('.reel-container > .reel');
	// Create a new Audio object for reel sound
	let sound = new Audio('https://github.com/ozz1webdev/codeproject2/blob/main/assets/media/Sounds/reel.mp3?raw=true');
	// Play the reel sound
	sound.play();

	// Roll all the reels and update the indexes array
	Promise
		.all( [...reelsList].map((reel, i) => roll(reel, i)) )	
		.then((deltas) => {
			// Pause the reel sound
			sound.pause();
			// Update the indexes array based on the deltas
			deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta)%num_icons);
		
			// Check for a winning combination
			if (indexes[0] == indexes[1] || indexes[1] == indexes[2] || indexes[0] == indexes[2]) {
				setBalance('win');
			}
			else {
				setBalance('lose');
			}
		});
};
