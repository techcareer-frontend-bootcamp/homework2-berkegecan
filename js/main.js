// Selectors
const toggle = document.getElementById('menu-button');
const nav    = document.getElementById('menu-list');
const menuItems = document.querySelectorAll(".menu-item");

// Show / Remove Menu
function toggleMenu() {
  if(nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
  else {
    nav.classList.add("show");
  }
}

toggle.addEventListener("click", toggleMenu);

// Items Show / Remove
menuItems.forEach( 
  function(menuItems) { 
    menuItems.addEventListener("click", toggleMenu);
  }
)
