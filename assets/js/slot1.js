var startpage = document.getElementById('homePage');
var slot1Container = document.getElementById('slot1');
var slot2Container = document.getElementById('slot2');
var slot3Container = document.getElementById('slot3');
var reelContainer = document.getElementById('reel-container');

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

    startpage.style.display = "none";
    slot1Container.style.display = "flex";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";
    reelContainer.style.display = "flex";
    reelContainer.style.marginLeft = "260px";
    reelContainer.style.marginTop = "420px";

}
function startSlot2() {
    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "flex";
    slot3Container.style.display = "none";
    reelContainer.style.display = "flex";
    reelContainer.style.marginLeft = "240px";
    reelContainer.style.marginTop = "380px";

}
function startSlot3() {
    startpage.style.display = "none";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "flex";
    reelContainer.style.display = "flex";
    reelContainer.style.marginLeft = "270px";
    reelContainer.style.marginTop = "400px";
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