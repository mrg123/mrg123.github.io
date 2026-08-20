const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game State
let game = {
    active: false,
    score: 0,
    speed: 5,
    frames: 0,
    highScore: 0,
    jumpUpgraded: false,
    gameWon: false,
    difficulty: 'easy', // 'easy' or 'hard'
    hyperJumpActive: false,
    hyperJumpEndTime: 0,
    yellowGiftSpawnIndex: 0 // Track which threshold we've passed
};

const YELLOW_SPAWN_SCORES = [100, 300, 600, 900, 1500, 2500];

// Global Variables
let player;
let obstacles = [];
let collectibles = [];
let particles = [];
let backgroundOffset = 0;