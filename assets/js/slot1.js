function startPage() {
    let startpage = document.getElementById('homePage');
    let slot1Container = document.getElementById('slot1');
    startpage.style.display = "flex";
    slot1Container.style.display = "none";
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
    const click = document.getElementById('slot1Theme');

    if (status == 'win') {
        sum = sum + bet;
        balance.innerText = 'Balance : ' + sum + coins;
        click.onclick = true;
    }
    else if (status == 'lose') {
        sum = sum - bet;
        balance.innerText = 'Balance : ' + sum + coins;
        click.add.setAttribute.onclick = rollAll();
        console.log(click.onclick);
    }
    
    if (sum <= 0) {
        sum = 0;
        bet = 0;
        click.onclick = false;
        balance.innerText = 'Balance : ' + sum + ' Coins';
        betLabel.innerText = 'Bet : ' + bet + ' Coins';
        alert("Balance is 0. Game Over! Please refresh the page to play again");
    }
}

function incBet () {
    let betLabel = document.getElementById('bet')

    bet += 1;
    if (bet > sum) {
        bet = sum;
    }
    let coins = bet < 2 ? 'Coin' : 'Coins';
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