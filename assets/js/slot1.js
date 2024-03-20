var startpage = document.getElementById('homePage');
var slot1Container = document.getElementById('slot1');
var slot2Container = document.getElementById('slot2');
var slot3Container = document.getElementById('slot3');
var reelContainer = document.getElementById('reel-container');
var slot1Theme = document.getElementById('slot1Theme');
var slot2Theme = document.getElementById('slot2Theme');
var slot3Theme = document.getElementById('slot3Theme');
const screenWidth = window.screen.width;

var sum = 20;
var bet = 1;
var coins = 'Coin';

function startPage() {

    startpage.style.display = "flex";
    reelContainer.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";    
}
function startSlot1() {

    if( screenWidth <= 768) {
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px";    
    } 
    else if (screenWidth >= 768){
        
        reelContainer.style.marginLeft = "55px";
        reelContainer.style.marginTop = "271px";
        reelContainer.style.gap = "8px";
    }

    startpage.style.display = "none";
    slot1Container.style.display = "flex";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";
    reelContainer.style.display = "flex";

    slot1Container.style.zIndex = "2";
    reelContainer.style.zIndex = "1";
    slot1Theme.append(reelContainer);
    reelContainer.style.position = "relative";
}
function startSlot2() {

    if( screenWidth <= 768) {
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px";    
    } 
    else if (screenWidth >= 768){
        
        reelContainer.style.marginLeft = "35px";
        reelContainer.style.marginTop = "230px";
        reelContainer.style.gap = "8px";
    }


    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "flex";
    slot3Container.style.display = "none";
    reelContainer.style.display = "flex";

    slot2Theme.append(reelContainer);
    reelContainer.style.position = "absolute";

}
function startSlot3() {

    if( screenWidth <= 768) {
        reelContainer.style.marginLeft = "11px";
        reelContainer.style.marginTop = "198px";
        reelContainer.style.gap = "8px";    
    } 
    else if (screenWidth >= 768){
        
        reelContainer.style.marginLeft = "65px";
        reelContainer.style.marginTop = "267px";
        reelContainer.style.gap = "18px";
    }


    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "flex";
    reelContainer.style.display = "flex";

    slot3Theme.append(reelContainer);
    reelContainer.style.position = "absolute";
    
}

function setBalance(status) {
    let balance = document.getElementById('balance')
    let betLabel = document.getElementById('bet')
    let sound = new Audio('../assets/media/Sounds/win.mp3');
	

    if (status == 'win') {
        sum = sum + bet;
        balance.innerText = 'Balance : ' + sum + coins;
        sound.play();
    } 
    else if (status == 'lose') {
        sum = sum - bet;
        balance.innerText = 'Balance : ' + sum + coins;
    }
    
    if (sum <= 0) {
        sum = 0;
        bet = 0;
        balance.innerText = 'Balance : ' + sum + ' Coins';
        betLabel.innerText = 'Bet : ' + bet + ' Coins';
        alert("Balance is 0. Game Over! Please refresh the page to play again");
    }
}

function incBet () {
    let betLabel = document.getElementById('bet')
    let sound = new Audio('../assets/media/Sounds/coin.mp3');

    bet += 1;
    if (bet > sum) {
        bet = sum;
    }
    let coins = bet < 2 ? 'Coin' : 'Coins';
    sound.play();
    betLabel.innerText = 'Bet : ' + bet + ' ' + coins;
}
function decBet () {
    let betLabel = document.getElementById('bet')
    
    if (sum !== 0) {
        bet -= 1;  
        if (bet < 1) {
            bet = 1;
        }
        let coins = bet < 2 ? 'Coin' : 'Coins';
        betLabel.innerText = 'Bet : ' + bet + ' ' +coins;
    }
}