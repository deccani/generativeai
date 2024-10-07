const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');
const $profileButton = document.getElementById('profile-button');
const $dropdownMenu = document.getElementById('dropdown-menu');

$profileButton.addEventListener('click', function (event) {
  event.stopPropagation();
  $dropdownMenu.style.display = $dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});