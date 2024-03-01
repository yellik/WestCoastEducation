const app = document.createElement('div');
app.setAttribute('header', '');
document.body.appendChild(app);

// Create navbar element
const navbar = document.createElement('div');
navbar.classList.add('navbar');
app.appendChild(navbar);

const logoLink = document.createElement('a');
logoLink.href = 'index.html';
navbar.appendChild(logoLink);

const logoImage = document.createElement('img');
logoImage.src = '/content/images-new/1114.jpg';
logoImage.alt = 'Logo';
logoImage.classList.add('logo');
logoLink.appendChild(logoImage);

const menuUl = document.createElement('ul');
menuUl.classList.add('menu');
navbar.appendChild(menuUl);

const menuItemsData = [
  { text: 'See all courses', href: '/course.html' },
  { text: 'Admin', href: 'src/pages/admin/index.html' },
  { text: 'Student Login', href: '../src/pages/login.html' },
];

menuItemsData.forEach((menuItemData) => {
  const menuItemLi = document.createElement('li');
  const menuItemLink = document.createElement('a');
  menuItemLink.classList.add('menuItem');
  menuItemLink.href = menuItemData.href;
  menuItemLink.textContent = menuItemData.text;
  menuItemLi.appendChild(menuItemLink);
  menuUl.appendChild(menuItemLi);
});

// Create hamburger button
const hamburgerButton = document.createElement('button');
hamburgerButton.classList.add('hamburger');
navbar.appendChild(hamburgerButton);

const menuIconElement = document.createElement('i');
menuIconElement.classList.add('menuIcon', 'material-icons');
menuIconElement.textContent = 'menu';

const closeIconElement = document.createElement('i');
closeIconElement.classList.add('closeIcon', 'material-icons');
closeIconElement.textContent = 'close';

hamburgerButton.appendChild(menuIconElement);
hamburgerButton.appendChild(closeIconElement);

// Query elements after creation
const menu = document.querySelector(".menu") as HTMLElement | null;
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const closeIcon = document.querySelector(".closeIcon") as HTMLElement | null;
const menuIcon = document.querySelector(".menuIcon") as HTMLElement | null;

function toggleMenu() {
  if (menu && closeIcon && menuIcon) {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
}

if (hamburger) {
  hamburger.addEventListener("click", toggleMenu);
}

menuItems.forEach((menuItem: Element) => {
  menuItem.addEventListener("click", toggleMenu);
});
