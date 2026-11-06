const canvas = document.createElement("canvas");
canvas.className = "ambient-network";
canvas.setAttribute("aria-hidden", "true");
document.body.prepend(canvas);

const context = canvas.getContext("2d");
if (!context) {
  throw new Error("Unable to initialize the animated background canvas.");
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let width = 0;
let height = 0;
let points = [];
let frame = 0;
let lastFrame = 0;

function resize() {
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);

  const count = Math.min(110, Math.max(34, Math.round((width * height) / 11500)));
  points = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    phase: Math.random() * Math.PI * 2,
  }));
  draw(0, true);
}

function draw(time, stationary = false) {
  context.clearRect(0, 0, width, height);
  const connectionDistance = Math.min(165, Math.max(105, width * 0.105));

  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    if (!stationary && !reduceMotion.matches) {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -12 || point.x > width + 12) point.vx *= -1;
      if (point.y < -12 || point.y > height + 12) point.vy *= -1;
    }

    for (let j = i + 1; j < points.length; j += 1) {
      const other = points[j];
      const dx = point.x - other.x;
      const dy = point.y - other.y;
      const distance = Math.hypot(dx, dy);
      if (distance >= connectionDistance) continue;

      const opacity = (1 - distance / connectionDistance) * 0.21;
      context.beginPath();
      context.moveTo(point.x, point.y);
      context.lineTo(other.x, other.y);
      context.strokeStyle = `rgba(72, 179, 231, ${opacity})`;
      context.lineWidth = 0.7;
      context.stroke();
    }

    const pulse = reduceMotion.matches ? 1 : 0.72 + Math.sin(time * 0.0012 + point.phase) * 0.28;
    context.beginPath();
    context.arc(point.x, point.y, 1.45 * pulse, 0, Math.PI * 2);
    context.fillStyle = `rgba(173, 132, 255, ${0.72 * pulse})`;
    context.shadowColor = "#8c5cff";
    context.shadowBlur = 8 * pulse;
    context.fill();
    context.shadowBlur = 0;
  }
}

function animate(time) {
  if (time - lastFrame >= 33) {
    draw(time);
    lastFrame = time;
  }
  frame = window.requestAnimationFrame(animate);
}

function updateMotionPreference() {
  window.cancelAnimationFrame(frame);
  if (reduceMotion.matches) {
    draw(0, true);
  } else {
    frame = window.requestAnimationFrame(animate);
  }
}

window.addEventListener("resize", resize, { passive: true });
reduceMotion.addEventListener("change", updateMotionPreference);
resize();
updateMotionPreference();
