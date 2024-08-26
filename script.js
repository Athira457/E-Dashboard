// sidebar working

function openNav() {
    document.getElementById("sideMenu")
        .style.width = "280px";
    document.getElementById("contentArea")
        .style.marginLeft = "280px";
    document.getElementById("menuIcon")
        .style.display = "none";
}

function closeNav() {
    document.getElementById("sideMenu")
        .style.width = "0";
    document.getElementById("contentArea")
        .style.marginLeft = "0";
    document.getElementById("menuIcon")
        .style.display = "flex";
}

function showContent(content) {
    document.getElementById("contentTitle")
        .textContent = content + " page";
        
    closeNav();
}

// hamburger menu icon working
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
