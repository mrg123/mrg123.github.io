// Classes
class Player {
    constructor() {
        this.width = 60;
        this.height = 40;
        this.x = 100;
        this.y = canvas.height - 150;
        this.dy = 0;
        this.baseJumpForce = 15;
        this.jumpForce = this.baseJumpForce;
        this.gravity = 0.8;
        this.grounded = false;
        this.color = '#00f3ff';
        this.trail = [];
        this.jumpCount = 0;
        this.maxJumps = game.difficulty === 'easy' ? 2 : 1;
    }

    update() {
        // Handle Hyper Jump State
        if (game.hyperJumpActive) {
            this.maxJumps = 100;
            this.color = '#ffff00'; // Yellow
        } else {
            this.maxJumps = game.difficulty === 'easy' ? 2 : 1;
            this.color = '#00f3ff'; // Default Blue
        }

        // Jump
        if (keys['Space'] || keys['ArrowUp']) {
            if (!this.jumpPressed) {
                this.jumpPressed = true;
                if (this.jumpCount < this.maxJumps) {
                    this.dy = -this.jumpForce;
                    this.grounded = false;
                    this.jumpCount++;
                    createExplosion(this.x, this.y + this.height, '#00f3ff', 5); // Jump effect
                }
            }
        } else {
            this.jumpPressed = false;
        }

        // Physics
        this.y += this.dy;
        if (this.y + this.height < canvas.height - 100) {
            this.dy += this.gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - 100 - this.height;
            this.jumpCount = 0; // Reset jumps on ground
        }

        // Trail effect
        if (game.frames % 5 === 0) {
            this.trail.push({x: this.x, y: this.y, alpha: 1});
        }
        this.trail.forEach(t => t.x -= game.speed);
        this.trail = this.trail.filter(t => t.x > -50);
    }

    draw() {
        // Draw Trail
        this.trail.forEach(t => {
            ctx.globalAlpha = t.alpha * 0.5;
            ctx.fillStyle = this.color;
            ctx.fillRect(t.x, t.y, this.width, this.height);
            t.alpha -= 0.1;
        });
        ctx.globalAlpha = 1;

        // Draw Sleigh (Cyber Style)
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        
        // Simple Sleigh Shape
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + 10);
        ctx.lineTo(this.x + this.width - 10, this.y + this.height);
        ctx.lineTo(this.x + 10, this.y + this.height);
        ctx.closePath();
        ctx.fill();

        // Engine Glow
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(this.x - 5, this.y + 15, 10, 10);
        
        ctx.shadowBlur = 0;
    }
}

class Obstacle {
    constructor() {
        this.width = 50;
        this.height = Math.random() > 0.5 ? 50 : 100; // Random height
        this.x = canvas.width + this.width;
        this.y = canvas.height - 100 - this.height;
        this.color = '#ff0000'; // Red for danger
        this.markedForDeletion = false;
    }

    update() {
        this.x -= game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw() {
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
        // Glitch inside
        ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.5})`;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Tech markings
        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.fillText('ERR', this.x + 5, this.y + 15);
        
        ctx.shadowBlur = 0;
    }
}

class Collectible {
    constructor(type = 'score') {
        this.type = type; // 'score' (Green) or 'powerup' (Yellow)
        this.width = 30;
        this.height = 30;
        this.x = canvas.width;
        
        if (this.type === 'powerup') {
            // Yellow Gift Physics Init
            this.y = -50; // Spawn from top
            this.dy = 2;  // Initial drop speed
            this.gravity = 0.4;
            this.bounce = -0.5; // Energy loss on bounce
            this.groundY = canvas.height - 100 - this.height;
        } else {
            // Green Gift Floating Init
            this.y = canvas.height - 100 - 150 - (Math.random() * 100); 
            this.dy = 0;
            this.gravity = 0;
        }

        this.color = this.type === 'powerup' ? '#ffff00' : '#39ff14'; // Yellow or Green
        this.markedForDeletion = false;
        this.angle = 0;
    }

    update() {
        this.x -= game.speed;

        if (this.type === 'powerup') {
            // Gravity Physics
            this.dy += this.gravity;
            this.y += this.dy;

            // Ground Collision & Bounce
            if (this.y >= this.groundY) {
                this.y = this.groundY;
                this.dy *= this.bounce;
            }
        } else {
            // Floating Sine Wave
            this.angle += 0.1;
            this.y += Math.sin(this.angle) * 2; 
        }

        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.rotate(this.angle);
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
        
        // Gift Cross
        ctx.beginPath();
        ctx.moveTo(0, -this.height/2);
        ctx.lineTo(0, this.height/2);
        ctx.moveTo(-this.width/2, 0);
        ctx.lineTo(this.width/2, 0);
        ctx.stroke();

        ctx.restore();
        ctx.shadowBlur = 0;
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.life = 100;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 100;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1;
    }
}