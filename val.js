const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const scale = 15;

let progress = 0;

function heartPoint(t) {
  const x = 16 * Math.sin(t) ** 3;
  const y = 13 * Math.cos(t)
    - 5 * Math.cos(2 * t)
    - 2 * Math.cos(3 * t)
    - Math.cos(4 * t);
  return {
    x: centerX + x * scale,
    y: centerY - y * scale,
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 0.5;

  const maxT = progress * Math.PI * 2;

  for (let t = 0; t < maxT; t += 0.02) {
    const point = heartPoint(t);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  }

  progress += 0.01;
  if (progress <= 1) {
    requestAnimationFrame(animate);
  }
}

animate();
