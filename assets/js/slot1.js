function startSlot1() {
    let slot1Container = document.getElementById('slot1');
    let startpage = document.getElementById('homePage');

    startpage.style.display = "none";
    slot1Container.style.display = "flex";
    slot1Container.style.zIndex = 2;
    slot1Container.style.height = "100%";
    slot1Container.style.transition = "all 5s ease";
}