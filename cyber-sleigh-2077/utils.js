// Canvas Resizing
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createExplosion(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function showNotification(text) {
    const el = document.getElementById('notification');
    el.innerText = text;
    el.classList.remove('hidden');
    setTimeout(() => {
        el.classList.add('hidden');
    }, 3000);
}

function drawBackground() {
    // Cyber Grid
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;
    
    // Horizon Line
    let horizonY = canvas.height - 100;
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(canvas.width, horizonY);
    ctx.stroke();

    // Vertical Lines (Perspective)
    let vanishingPointX = canvas.width / 2;
    let vanishingPointY = -200; // Above screen
    
    // Moving Vertical Grid
    backgroundOffset = (backgroundOffset - game.speed * 0.5) % 100;
    
    for (let i = 0; i < canvas.width + 100; i += 100) {
        let x = i + backgroundOffset;
        ctx.beginPath();
        ctx.moveTo(x, horizonY);
        ctx.lineTo(x - (x - vanishingPointX) * 2, canvas.height); // Fake perspective
        ctx.stroke();
    }

    // Horizontal Lines
    // ... simpler approach for side scroller ground
    ctx.fillStyle = '#050510';
    ctx.fillRect(0, horizonY, canvas.width, 100); // Ground
    
    // Ground Grid
    ctx.beginPath();
    for (let i = 0; i < canvas.width; i+=50) {
         ctx.moveTo(i - (game.frames * game.speed) % 50, horizonY);
         ctx.lineTo(i - (game.frames * game.speed) % 50, canvas.height);
    }
    ctx.stroke();
    
    // City Skyline (Far background)
    ctx.fillStyle = '#000033';
    ctx.globalAlpha = 0.5;
    // Simple boxes for buildings
    // Static for now, could be an array
    
    ctx.globalAlpha = 1;
}