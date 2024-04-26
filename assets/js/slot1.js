var startpage = document.getElementById('homePage');
var slot1Container = document.getElementById('slot1');
var slot2Container = document.getElementById('slot2');
var slot3Container = document.getElementById('slot3');
var reelContainer = document.getElementById('reel-container');
var slot1Theme = document.getElementById('slot1Theme');
var slot2Theme = document.getElementById('slot2Theme');
var slot3Theme = document.getElementById('slot3Theme');
var winMessage = document.getElementById('winMsg');
const screenWidth = window.screen.width;

var sum = 20;
var bet = 1;
var coins = 'Coin';

/**
 * Function to set the start page as the active page.
 * Hides the reel container, slot 1, 2 and 3 containers.
 */
function startPage() {
    
    // Set the start page as the active page
    startpage.style.display = "flex";
    
    // Hide the reel container, slot 1, 2 and 3 containers
    reelContainer.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";    
}
/**
 * Function to set the first slot page as the active page.
 * Hides the reel container, slot 2 and 3 containers,
 * and shows the first slot page container.
 */
function startSlot1() {

    // Set the appropriate styles for the reel container based on the screen width
    if( screenWidth <= 768) {
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px";   
    } 
    else {
        reelContainer.style.marginLeft = "55px";
        reelContainer.style.marginTop = "271px";
        reelContainer.style.gap = "8px";
    }

    // Hide the reel container, slot 2 and 3 containers
    startpage.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";
    
    // Show the first slot page container
    slot1Container.style.display = "flex";
    
    // Set the z-index of the reel container and the first slot page container
    reelContainer.style.zIndex = "1";
    slot1Container.style.zIndex = "2";
    
    
    // Set the position of the reel container
    reelContainer.style.display = "flex";
    reelContainer.style.position = "relative";

    // Append the reel container to the first slot page container
    slot1Theme.append(reelContainer);
        
}
/**
 * Function to set the second slot page as the active page.
 * Hides the reel container, slot 1 and 3 containers,
 * and shows the second slot page container.
 */
function startSlot2() {
    // Set the appropriate styles for the reel container based on the screen width
    if( screenWidth <= 768) {
        // Set styles for small screens
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px";   
    } 
    else {
        // Set styles for medium and large screens
        reelContainer.style.marginLeft = "35px";
        reelContainer.style.marginTop = "230px";
        reelContainer.style.gap = "8px";
    }

    // Hide the reel container, slot 1 and 3 containers
    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot3Container.style.display = "none";
    
    // Show the second slot page container
    slot2Container.style.display = "flex";
    
    // Set the reel container position to absolute and make it visible
    reelContainer.style.display = "flex";
    reelContainer.style.position = "absolute";

    // Append the reel container to the second slot page container
    slot2Theme.append(reelContainer);
}
/**
 * Function to set the third slot page as the active page.
 * Hides the reel container, slot 1 and 2 containers,
 * and shows the third slot page container.
 */
function startSlot3() {
    // Set the appropriate styles for the reel container based on the screen width
    
    // Set styles for small screens
    if( screenWidth <= 768) {
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px"; 
    } 
    // Set styles for medium and large screens
    else {
        reelContainer.style.marginLeft = "65px";
        reelContainer.style.marginTop = "267px";
        reelContainer.style.gap = "18px";
    }

    // Hide the reel container, slot 1 and 2 containers
    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    
    // Show the third slot page container
    slot3Container.style.display = "flex";
    
    // Set the reel container position to absolute and make it visible
    reelContainer.style.display = "flex";
    reelContainer.style.position = "absolute";

    // Append the reel container to the third slot page container
    slot3Theme.append(reelContainer);
}

/**
 * Sets the balance in the user interface and updates the sound
 * depending on the status of the game.
 * @param {string} status - The status of the game, either 'win' or 'lose'.
 */
function setBalance(status) {
    // Get the balance element and the bet label
    let balance = document.getElementById('balance');
    let betLabel = document.getElementById('bet');
    
    // Create a new audio element with the appropriate sound file
    let sound = new Audio('https://github.com/ozz1webdev/codeproject2/blob/main/assets/media/Sounds/win.mp3?raw=true');
    
    // Depending on the status of the game, update the balance and sound
    if (status == 'win') {
        // Set the onclick attribute of the slot themes to rollAll
        slot1Theme.attributes.onclick.value ="rollAll()";
        slot2Theme.attributes.onclick.value ="rollAll()";
        slot3Theme.attributes.onclick.value ="rollAll()";

        // Increase the balance and update the text in the UI
        sum = sum + bet;
        balance.innerText = 'Balance : ' + sum + ' ' +coins;
        sound.play();
        winMessage.style.display = "block";
        
    } 
    
    else if (status == 'lose') {
        // Set the onclick attribute of the slot themes to rollAll
        slot1Theme.attributes.onclick.value ="rollAll()";
        slot2Theme.attributes.onclick.value ="rollAll()";
        slot3Theme.attributes.onclick.value ="rollAll()";

        // Decrease the balance and update the text in the UI
        sum = sum - bet;
        balance.innerText = 'Balance : ' + sum + ' ' +coins;
    }
    
    // Check if the bet is greater than the sum
    if (bet > sum) {
        // If it is, set the bet to the sum and update the text in the UI
        bet = sum;
        betLabel.innerText = 'Bet : ' + bet + ' Coins';
    }
    
    // Check if the sum is less than or equal to 0
    if (sum <= 0) {
        // If it is, set the sum and bet to 0 and display an alert
        sum = 0;
        bet = 0;
        balance.innerText = 'Balance : ' + sum + ' Coins';
        betLabel.innerText = 'Bet : ' + bet + ' Coins';
        alert("Balance is 0. Game Over! Please refresh the page to play again or set a bet");
    }
}

/**
 * Increases the bet by 1 and updates the UI accordingly.
 * If the sum is greater than or equal to 3 and the bet is greater than 3, 
 * the bet is set to 3. If the sum is less than 3 and the bet is greater than 3, 
 * the bet is set to the sum. The UI is updated with the new bet value and the 
 * corresponding coins. A sound effect is played.
 */
function incBet () {
    // Get the bet label element and create a new audio element
    let betLabel = document.getElementById('bet');
    let sound = new Audio('https://github.com/ozz1webdev/codeproject2/blob/main/assets/media/Sounds/coin.mp3?raw=true');

    // Increase the bet by 1
    bet += 1;

    // Check if the sum is greater than or equal to 3 and the bet is greater than 3
    if (sum >= 3 && bet > 3) {
        // If it is, set the bet to 3
        bet = 3;
    }
    // Check if the sum is less than 3 and the bet is greater than 3
    else if (sum < 3 && bet > 3) {
        // If it is, set the bet to the sum
        bet = sum;
    }

    // Determine the coins based on the bet value
    let coins = bet < 2 ? 'Coin' : 'Coins';

    // Play the sound effect
    sound.play();

    // Update the bet label with the new bet value and coins
    betLabel.innerText = 'Bet : ' + bet + ' ' + coins;
}
/**
 * Decreases the bet by 1 and updates the UI accordingly.
 * If the sum is not equal to 0, the bet is decreased by 1. 
 * If the decreased bet is less than 1, the bet is set to 1. 
 * The UI is updated with the new bet value and the 
 * corresponding coins.
 */
function decBet () {
    // Get the bet label element
    let betLabel = document.getElementById('bet');

    // Check if the sum is not equal to 0
    if (sum !== 0) {
        // Decrease the bet by 1
        bet -= 1;  
        // If the decreased bet is less than 1, set the bet to 1
        if (bet < 1) {
            bet = 1;
        }
        // Determine the coins based on the bet value
        let coins = bet < 2 ? 'Coin' : 'Coins';
        // Update the bet label with the new bet value and coins
        betLabel.innerText = 'Bet : ' + bet + ' ' +coins;
    }
}
