function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function toggleSettings() {
    document.getElementById("settingsPanel").classList.toggle("open");
}

function setTheme(theme) {
    document.body.className = theme;
    const header = document.querySelector("header");
    header.className = `header ${theme}`;
    
}

