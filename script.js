const burgerMenu = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

burgerMenu.addEventListener('click', (event) => {
  burgerMenu.classList.toggle('active');
  menuList.classList.toggle('active');
  menuBody.classList.toggle('active');
});
