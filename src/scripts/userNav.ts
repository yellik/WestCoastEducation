
// toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburgerIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon');
  
    if (menu && hamburgerIcon && closeIcon) {
      menu.classList.toggle('show');
      hamburgerIcon.classList.toggle('hide');
      closeIcon.classList.toggle('show');
    }
  }
  
  // Event listener for burger menu
  const hamburgerButton = document.querySelector('.hamburger');
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', toggleMenu);
  }
  
  // collapse the menu on click
  const menuItems = document.querySelectorAll('.menuItem');
  if (menuItems) {
    menuItems.forEach((item) => {
      item.addEventListener('click', toggleMenu);
    });
  }
  