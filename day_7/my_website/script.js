const falls = document.querySelectorAll('.fall')

falls.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.style.opacity = '1';
  });
});
