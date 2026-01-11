function createPetal() {
  const petal = document.createElement('div');
  petal.innerHTML = '🌸';
  petal.style.cssText = `
    position: fixed;
    left: ${Math.random() * window.innerWidth}px;
    top: -30px;
    font-size: ${Math.random() * 20 + 10}px;
    opacity: ${Math.random() * 0.6 + 0.3};
    pointer-events: none;
    z-index: 1;
    animation: fall ${Math.random() * 8 + 6}s linear forwards;
    filter: drop-shadow(0 0 5px rgba(255, 105, 180, 0.5));
  `;
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
}

// Creează petale la fiecare 300ms
setInterval(createPetal, 300);

// Animație CSS pentru cădere
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
