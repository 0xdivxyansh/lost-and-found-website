// JavaScript to toggle menu and switch icons
const toggleButton = document.querySelector('.menu .toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');  // Toggle the active class on the menu
});
