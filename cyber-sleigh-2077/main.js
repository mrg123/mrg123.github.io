// Input Handling
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'Enter') {
        if (!game.active) {
            if (document.getElementById('start-screen').classList.contains('active')) {
                startGame();
            } else if (document.getElementById('game-over-screen').classList.contains('active')) {
                startGame();
            } else if (document.getElementById('win-screen').classList.contains('active')) {
                startGame();
            }
        }
    }
});
window.addEventListener('keyup', (e) => keys[e.code] = false);

// Touch Support for Mobile
window.addEventListener('touchstart', () => keys['Space'] = true);
window.addEventListener('touchend', () => keys['Space'] = false);

function startGame() {
    player = new Player();
    obstacles = [];
    collectibles = [];
    particles = [];
    game.active = true;
    game.score = 0;
    game.speed = 8;
    game.frames = 0;
    game.jumpUpgraded = false;
    game.gameWon = false;
    game.hyperJumpActive = false;
    game.yellowGiftSpawnIndex = 0;
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('hud').classList.remove('hidden');
    document.getElementById('notification').classList.add('hidden');
    
    animate();
}

function gameOver() {
    game.active = false;
    document.getElementById('game-over-screen').classList.add('active');
    document.getElementById('final-score').innerText = Math.floor(game.score);
    document.getElementById('hud').classList.add('hidden');
}

function gameWin() {
    game.active = false;
    game.gameWon = true;
    document.getElementById('win-screen').classList.add('active');
    document.getElementById('win-score').innerText = Math.floor(game.score);
    document.getElementById('hud').classList.add('hidden');
    createExplosion(canvas.width/2, canvas.height/2, '#00f3ff', 50);
    createExplosion(canvas.width/2, canvas.height/2, '#ff00ff', 50);
    createExplosion(canvas.width/2, canvas.height/2, '#39ff14', 50);
}

function animate() {
    if (!game.active) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.frames++;
    game.score += 0.1;
    game.speed += 0.001; // Accelerate

    document.getElementById('score').innerText = Math.floor(game.score);
    document.getElementById('speed').innerText = Math.floor(game.speed * 10);

    // Check for upgrades and win
    // Check Yellow Gift Spawns (100, 200, 500, 1500)
    if (game.yellowGiftSpawnIndex < YELLOW_SPAWN_SCORES.length) {
        if (game.score >= YELLOW_SPAWN_SCORES[game.yellowGiftSpawnIndex]) {
            collectibles.push(new Collectible('powerup'));
            game.yellowGiftSpawnIndex++;
        }
    }

    if (game.score >= 1000 && !game.jumpUpgraded) {
        game.jumpUpgraded = true;
        // 高度 = v^2 / 2g。要让高度变为2倍，初速度需要变为 sqrt(2) 倍
        player.jumpForce = player.baseJumpForce * Math.sqrt(2); 
        showNotification(translations[currentLang].upgrade_notif);
        createExplosion(player.x, player.y, '#39ff14', 20);
    }

    if (game.score >= 3000 && !game.gameWon) {
        gameWin();
    }

    // Check Hyper Jump Expiration
    if (game.hyperJumpActive && Date.now() > game.hyperJumpEndTime) {
        game.hyperJumpActive = false;
    }

    drawBackground();

    // Spawn Obstacles
    if (game.frames % Math.floor(1000/game.speed) === 0) { // Spawn rate increases with speed
        obstacles.push(new Obstacle());
    }
    // Spawn Collectibles
    if (game.frames % Math.floor(1500/game.speed) === 0) {
        collectibles.push(new Collectible('score'));
    }

    // Update & Draw Player
    player.update();
    player.draw();

    // Update & Draw Obstacles
    obstacles.forEach((obs, index) => {
        obs.update();
        obs.draw();
        
        // Collision
        if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ) {
            createExplosion(player.x, player.y, '#ff0000', 50);
            gameOver();
        }

        if (obs.markedForDeletion) obstacles.splice(index, 1);
    });

    // Update & Draw Collectibles
    collectibles.forEach((col, index) => {
        col.update();
        col.draw();

        // Collision
        if (
            player.x < col.x + col.width &&
            player.x + player.width > col.x &&
            player.y < col.y + col.height &&
            player.y + player.height > col.y
        ) {
            if (col.type === 'powerup') {
                game.hyperJumpActive = true;
                game.hyperJumpEndTime = Date.now() + 10000; // 10 seconds
                showNotification(translations[currentLang].hyper_jump_notif);
                createExplosion(col.x, col.y, '#ffff00', 30);
            } else {
                game.score += 50;
                createExplosion(col.x, col.y, '#39ff14', 20);
            }
            
            col.markedForDeletion = true;
            // Sound effect could go here
        }
        
        if (col.markedForDeletion) collectibles.splice(index, 1);
    });

    // Particles
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
}

// Difficulty Selection
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active from all
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        // Add active to clicked
        e.target.classList.add('active');
        // Set game difficulty
        game.difficulty = e.target.getAttribute('data-difficulty');
    });
});

// Button Listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('win-restart-btn').addEventListener('click', startGame);

// Initial Draw
// resize() is called in utils.js, but we might want to ensure it runs correctly
// drawBackground() is also in utils.js
// demoPlayer is for the start screen visual

// Draw static player for start screen
const demoPlayer = new Player();
demoPlayer.draw();