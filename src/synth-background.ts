export function initSynthBackground() {
    const canvas = document.getElementById('synth-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    let offset = 0;
    const stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.05
    }));

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        // Background Gradient
        const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
        bgGradient.addColorStop(0, '#0d0221');
        bgGradient.addColorStop(0.5, '#240b36');
        bgGradient.addColorStop(1, '#0d0221');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);

        // Stars
        ctx.fillStyle = '#fff';
        stars.forEach(star => {
            ctx.globalAlpha = 0.2 + Math.sin(Date.now() * 0.001 + star.x) * 0.3;
            ctx.fillRect(star.x, star.y, star.size, star.size);
        });
        ctx.globalAlpha = 1.0;

        // Retro Sun
        const sunY = height * 0.45;
        const sunRadius = Math.min(width, height) * 0.25;
        const sunGradient = ctx.createLinearGradient(0, sunY - sunRadius, 0, sunY + sunRadius);
        sunGradient.addColorStop(0, '#ff00ff');
        sunGradient.addColorStop(1, '#ff8800');
        
        ctx.shadowBlur = 40;
        ctx.shadowColor = '#ff00ff';
        ctx.fillStyle = sunGradient;
        ctx.beginPath();
        ctx.arc(width / 2, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Sun scanlines (the iconic stripes)
        ctx.fillStyle = '#0d0221';
        for (let i = 0; i < 15; i++) {
            const h = 2 + i * 2;
            const y = sunY + (i * (sunRadius * 2 / 15)) - 10;
            if (y > sunY - sunRadius && y < sunY + sunRadius) {
                ctx.fillRect(width / 2 - sunRadius, y, sunRadius * 2, h);
            }
        }

        // Horizon line
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.6);
        ctx.lineTo(width, height * 0.6);
        ctx.stroke();

        // Grid
        const horizon = height * 0.6;
        const gridHeight = height - horizon;
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 1;

        // Perspective lines (Verticals)
        for (let i = -10; i <= 10; i++) {
            const xTop = width / 2 + i * (width / 20);
            const xBottom = width / 2 + i * (width / 2);
            ctx.beginPath();
            ctx.moveTo(xTop, horizon);
            ctx.lineTo(xBottom, height);
            ctx.stroke();
        }

        // Horizontal lines
        offset = (offset + 1) % 40;
        for (let i = 0; i < 20; i++) {
            const yRatio = (i * 40 + offset) / 800;
            // Use exponential for perspective
            const y = horizon + Math.pow(yRatio, 2) * gridHeight;
            ctx.globalAlpha = yRatio;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        ctx.globalAlpha = 1.0;

        requestAnimationFrame(draw);
    }

    draw();
}
