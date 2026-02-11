window.addEventListener('load', () => {
  // Konfeti mulai setelah animasi utama (~5-6 detik)
  setTimeout(startConfetti, 5500);
});

function startConfetti() {
  const container = document.createElement('div');
  container.id = 'confetti';
  container.style.cssText = `
    position: fixed; inset: 0; pointer-events: none; z-index: 999; overflow: hidden;
  `;
  document.body.appendChild(container);

  const colors = ['#ff6b6b', '#ffd93d', '#6bcffb', '#95e1d3', '#ff9ff3', '#ff4757'];

  for (let i = 0; i < 180; i++) {
    const piece = document.createElement('div');
    const size = Math.random() * 10 + 5;
    piece.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      top: -15px;
      border-radius: 50% 30% 70% 30% / 60% 40% 60% 40%;
      opacity: ${Math.random() * 0.7 + 0.3};
      animation: fall ${Math.random() * 4 + 4}s linear forwards ${Math.random() * 3}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(piece);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
