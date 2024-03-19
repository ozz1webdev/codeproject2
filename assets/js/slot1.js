function startSlot1() {
    let username = prompt("Enter a Username :");
    let slot1Container = document.getElementById('slot1');
    let startpage = document.getElementById('homePage');

    startpage.style.display = "none";
    slot1Container.style.display = "flex";
}
function setBalance(status) {
    let balance = document.getElementById('balance');
    if (status == 'win') {
        balance.innerText = 'YOU WIN';
    }
    else if (status == 'lose') {
        balance.innerText = 'YOU LOSE';
    }
}