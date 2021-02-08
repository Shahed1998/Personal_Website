const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const welcomeMsg = document.querySelector('.welcomeMsg');
const links = document.querySelectorAll('.nav-links li');
const msg = ['💕', '💘', '💗', '💝', '💞', '💖'];
let i = 0;

// ========================================== Emoji beside welcome =====================================
function change() {
  welcomeMsg.textContent = msg[i];
  i = (i + 1) % msg.length;
}
setInterval(change, 3000);

// ========================================== Hamburger script ==========================================
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});
