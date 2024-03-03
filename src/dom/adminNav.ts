import { createDiv } from "./dom-modules.js";
document.addEventListener('DOMContentLoaded', () => {
const navbar = createDiv();
navbar.classList.add('admin-nav');
document.body.appendChild(navbar);

const header = document.querySelector('header');

if (header) {
  header.appendChild(navbar);
}else{
    const newHeader = document.createElement('header');
  newHeader.appendChild(navbar);
  document.body.insertBefore(newHeader, document.body.firstChild);
}
const logoLink = document.createElement('a');
logoLink.href = '/index.html';
navbar.appendChild(logoLink);


const logoImage = document.createElement('img');
logoImage.src = 'src/content/images/1114.jpg';
logoImage.alt = 'Logo';
logoImage.classList.add('logo');
logoLink.appendChild(logoImage);

const menuUl = document.createElement('ul');
menuUl.classList.add('admin-menu');
navbar.appendChild(menuUl);


const menuItemsData = [
    { text: 'Admin Main', href: '/src/pages/admin/index.html' },
    { text: 'Add a Course', href: '/src/pages/admin/add-course.html' },
    { text: 'Add a Student', href: '/src/pages/admin/add-student.html' },
    { text: 'See all students', href: '/src/pages/admin/student-list.html' }
  ];
  
console.log('menuItemsData:', menuItemsData);

menuItemsData.forEach((menuItemData) => {
    const menuItemLi = document.createElement('li');
    const menuItemLink = document.createElement('a');
    menuItemLink.classList.add('menuItem');
    menuItemLink.href = menuItemData.href;
    menuItemLink.textContent = menuItemData.text;
    menuItemLi.appendChild(menuItemLink);
    menuUl.appendChild(menuItemLi);
  });
console.log('menuUl:', menuUl);

  const menuIconElement = document.createElement('i');
  menuIconElement.classList.add('menuIcon')

});