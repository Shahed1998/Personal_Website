let i = 0;
function change() {
  const welcomeMsg = document.querySelector('.welcomeMsg');
  const msg = ['💕', '💘', '💗', '💝', '💞', '💖'];
  welcomeMsg.textContent = msg[i];
  i = (i + 1) % msg.length;
}
setInterval(change, 3000);
