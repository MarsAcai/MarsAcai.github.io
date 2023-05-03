// toggle menu more
const menuMore = document.querySelector('.menu-more');
const menuItemMore = document.querySelector('.menu-item-more');

menuItemMore.addEventListener('click', function() {
  menuMore.style.display = (menuMore.style.display === 'block') ? 'none' : 'block';
});
