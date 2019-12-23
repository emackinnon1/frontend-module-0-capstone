const clickers = document.querySelectorAll('.clickers')

clickers.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.style.opacity = '1';
  });
});
