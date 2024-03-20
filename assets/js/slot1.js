function startPage() {
    let startpage = document.getElementById('homePage');
    let slot1Container = document.getElementById('slot1');
    let slot2Container = document.getElementById('slot2');
    let slot3Container = document.getElementById('slot3');

    startpage.style.display = "flex";
    slot1Container.style.display = "none";
    slot2Container.style.display = "none";
    slot3Container.style.display = "none";    
}
function startSlot1() {
    let slot1Container = document.getElementById('slot1');
    let startpage = document.getElementById('homePage');

    startpage.style.display = "none";
    slot1Container.style.display = "flex";
}
var sum = 20;
var bet = 1;
var coins = 'Coin';
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