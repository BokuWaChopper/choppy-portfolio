// Inițializare canvas și contexte
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

// Set dimensiuni canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array pentru stele
const stars = [];
const STAR_COUNT = 80;

// Creare stele
function createStars() {
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      speedY: Math.random() * 0.1 + 0.02
    });
  }
}

// Animare
function animate() {
  // Șterge canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Desenează și mișcă fiecare stea
  stars.forEach(star => {
    // Desenează steaua
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Mișcă steaua în sus
    star.y -= star.speedY;
    
    // Dacă steaua merge sus, o punem jos
    if (star.y < -10) {
      star.y = canvas.height + 10;
      star.x = Math.random() * canvas.width;
    }
  });
  
  requestAnimationFrame(animate);
}

// Redimensionează canvas la schimbarea ferestrei
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start
createStars();
animate();
