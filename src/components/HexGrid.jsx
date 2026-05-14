import { useEffect, useRef } from 'react';

const HEX_SIZE = 26;
const GAP = 1.5;
const MOUSE_RADIUS = 210;
const PUSH_RADIUS = 110;
const PUSH_FORCE = 12;

function buildHexPath(ctx, cx, cy, size) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const px = cx + size * Math.cos(angle);
    const py = cy + size * Math.sin(angle);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export default function HexGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const hexesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const w = Math.sqrt(3) * HEX_SIZE;
    const h = 2 * HEX_SIZE;

    function buildGrid() {
      hexesRef.current = [];
      const cols = Math.ceil((canvas.width + w * 2) / w) + 1;
      const rows = Math.ceil((canvas.height + h * 2) / (h * 0.75)) + 1;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * w + (row % 2 === 1 ? w / 2 : 0);
          const y = row * h * 0.75;
          hexesRef.current.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            brightness: 0,
          });
        }
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGrid();
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      const t = time * 0.001;

      for (const hex of hexesRef.current) {
        const dx = hex.x - mx;
        const dy = hex.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const target = dist < MOUSE_RADIUS
          ? Math.pow(1 - dist / MOUSE_RADIUS, 1.6)
          : 0;
        hex.brightness += (target - hex.brightness) * 0.09;

        // Subtle float
        const fx = Math.sin(t + hex.phase) * 1.3;
        const fy = Math.cos(t * 0.8 + hex.phase) * 1.3;

        // Mouse repulsion push
        let px = 0, py = 0;
        if (dist < PUSH_RADIUS && dist > 0) {
          const force = (1 - dist / PUSH_RADIUS) * PUSH_FORCE;
          px = (dx / dist) * force;
          py = (dy / dist) * force;
        }

        const cx = hex.x + fx + px;
        const cy = hex.y + fy + py;
        const b = hex.brightness;

        // Fill: dark base → dark blue-tinted on hover
        const r = Math.round(13 + b * 28);
        const g = Math.round(13 + b * 20);
        const bl = Math.round(13 + b * 62);

        buildHexPath(ctx, cx, cy, HEX_SIZE - GAP);
        ctx.fillStyle = `rgb(${r},${g},${bl})`;
        ctx.fill();

        // Border
        ctx.strokeStyle = `rgba(160,170,230,${0.035 + b * 0.1})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
