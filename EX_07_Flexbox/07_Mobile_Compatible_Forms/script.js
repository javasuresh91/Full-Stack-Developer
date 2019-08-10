function toggleDropdown() {
    let navToggleBtn = document.getElementById("navbarToggle");
    if (navToggleBtn.className === "topnav") {
        navToggleBtn.className += ' responsive';
    } else {
        navToggleBtn.className = 'topnav'
    }
}
