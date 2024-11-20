const board = document.getElementById('board');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart');

const boardSize = 20; // 20x20 grid
let snake = [{ x: 10, y: 10 }]; // Initial snake position
let food = { x: 5, y: 5 }; // Initial food position
let direction = { x: 0, y: 0 }; // Initial direction
let score = 0;
let speed = 200;
let interval;

function drawBoard() {
  board.innerHTML = ''; // Clear board
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    board.appendChild(snakeElement);
  });

  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  board.appendChild(foodElement);
}

function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head); // Add new head
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreDisplay.textContent = score;
    generateFood();
    increaseSpeed();
  } else {
    snake.pop(); // Remove the tail if no food is eaten
  }

  if (checkCollision()) {
    gameOver();
  }
}

function generateFood() {
  food = {
    x: Math.floor(Math.random() * boardSize) + 1,
    y: Math.floor(Math.random() * boardSize) + 1,
  };
  // Ensure food doesn't spawn on the snake
  if (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
    generateFood();
  }
}

function checkCollision() {
  const head = snake[0];
  // Check wall collision
  if (head.x < 1 || head.x > boardSize || head.y < 1 || head.y > boardSize) {
    return true;
  }
  // Check self-collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function gameOver() {
  clearInterval(interval);
  alert('Game Over! Your score: ' + score);
}

function increaseSpeed() {
  if (speed > 50) {
    speed -= 10;
    clearInterval(interval);
    interval = setInterval(updateGame, speed);
  }
}

function updateGame() {
  moveSnake();
  drawBoard();
}

function changeDirection(event) {
  const keyPressed = event.keyCode;
  switch (keyPressed) {
    case 37: // Left arrow
      if (direction.x !== 1) direction = { x: -1, y: 0 };
      break;
    case 38: // Up arrow
      if (direction.y !== 1) direction = { x: 0, y: -1 };
      break;
    case 39: // Right arrow
      if (direction.x !== -1) direction = { x: 1, y: 0 };
      break;
    case 40: // Down arrow
      if (direction.y !== -1) direction = { x: 0, y: 1 };
      break;
  }
}

function restartGame() {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 0, y: 0 };
  food = { x: 5, y: 5 };
  score = 0;
  speed = 200;
  scoreDisplay.textContent = score;
  clearInterval(interval);
  interval = setInterval(updateGame, speed);
}

document.addEventListener('keydown', changeDirection);
restartButton.addEventListener('click', restartGame);

interval = setInterval(updateGame, speed);
drawBoard();
// Mobile Controls
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

// Add event listeners for mobile buttons
upButton.addEventListener('click', () => {
  if (direction.y !== 1) direction = { x: 0, y: -1 };
});
downButton.addEventListener('click', () => {
  if (direction.y !== -1) direction = { x: 0, y: 1 };
});
leftButton.addEventListener('click', () => {
  if (direction.x !== 1) direction = { x: -1, y: 0 };
});
rightButton.addEventListener('click', () => {
  if (direction.x !== -1) direction = { x: 1, y: 0 };
});
