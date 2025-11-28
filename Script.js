const accessBtn = document.getElementById('accessBtn');
const accessMenu = document.getElementById('accessMenu');
let fontSize = 1;
accessBtn.onclick = () => { accessMenu.classList.toggle('hidden'); };
function increaseFont() { fontSize += 0.1; document.body.style.fontSize = fontSize + 'em'; }
function decreaseFont() { fontSize -= 0.1; document.body.style.fontSize = fontSize + 'em'; }
function toggleContrast() { document.body.classList.toggle('high-contrast'); }
