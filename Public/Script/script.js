let i = 0;
function change() {
  const welcomeMsg = document.querySelector('.welcomeMsg');
  const msg = ['💕', '💘', '💗', '💝', '💞', '💖'];
  welcomeMsg.textContent = msg[i];
  i = (i + 1) % msg.length;
}
setInterval(change, 3000);

// Hamburger script
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});
