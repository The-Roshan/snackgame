# 🐍 Snake Game

## Overview
The Snake Game is a classic, web-based arcade game created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it recreates the iconic Snake gameplay where players control a snake to eat food, grow longer, and avoid collisions with itself or the boundaries. The game features a score display, a restart button, and mobile-friendly touch controls with directional buttons. It is optimized for both desktop and mobile devices, offering a nostalgic and engaging gaming experience.

## Features
- **Gameplay** 🎮:
  - Players control a snake that moves continuously, eating food to increase score and length.
  - Game ends on collision with the snake's own body or the game board boundaries.
- **Controls** 🕹️:
  - **Desktop**: Use arrow keys or WASD to change the snake's direction.
  - **Mobile**: On-screen buttons (`up`, `down`, `left`, `right`) for touch-based directional control.
  - Restart button (`restart`) to reset the game.
- **Scoring** 📊:
  - Score increments when the snake eats food, displayed in real-time (`score`).
- **Game Board** 🖼️:
  - The snake and food are rendered within a designated board (`board`), styled via CSS.
- **Responsive Design** 📱:
  - Optimized for various screen sizes with flexible layouts and mobile-specific controls.
- **Visual Design** 🎨:
  - Clean and minimalistic design with customizable styles via `style.css`.

## Tech Stack
- **HTML5**: Structure of the game, including the game board, controls, and mobile buttons.
- **CSS3**: Styling for the game board, snake, food, buttons, and responsive layout (`style.css`).
- **JavaScript**: Game logic, including snake movement, food generation, collision detection, and score tracking (`game.js`).

## Project Structure
```
snake-game/
├── index.html         # Main HTML file
├── style.css         # CSS styles for layout and visuals
├── game.js           # JavaScript for game logic
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with JavaScript support.
- A code editor (e.g., VS Code) for customization.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/snake-game.git
cd snake-game
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit `style.css` to modify the game board, snake, food, or button styles (e.g., colors, animations).
- Update `game.js` to enhance gameplay (e.g., add difficulty levels, sound effects, or high score storage).
- Modify `index.html` to add features like a pause button, game over screen, or additional UI elements.

## Usage
1. **Start Game** 🚀: Load the page to begin the game automatically.
2. **Control Snake** 🐍:
   - **Desktop**: Use arrow keys or WASD to change direction.
   - **Mobile**: Tap the on-screen buttons (↑, ↓, ←, →) to control the snake.
3. **Eat Food** 🍎: Guide the snake to food to increase your score and grow longer.
4. **Avoid Collisions** ⚠️: Prevent the snake from hitting itself or the board edges.
5. **Track Score** 📊: Monitor your score in the controls section.
6. **Restart** 🔄: Click the "Restart Game" button to reset the snake and score.
7. **Responsive** 📱: Play on desktop or mobile for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `style.css`, and `game.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/snake-game`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**: The `game.js` file must implement:
  - Snake movement based on keyboard or touch input.
  - Food generation at random positions on the board.
  - Collision detection with the snake’s body or board boundaries.
  - Score increment and snake growth when food is eaten.
  - Game loop for continuous rendering and updates.
  - Restart functionality to reset the game state.
- **Styling**: The `style.css` file should define styles for the game board (e.g., grid or canvas), snake, food, buttons, and mobile controls, ensuring responsiveness.
- **Enhancements**: Consider adding:
  - Sound effects for eating food or game over.
  - High score storage using `localStorage`.
  - Difficulty levels (e.g., faster snake speed or smaller board).
  - Visual effects like animations for food collection or game over.
  - A game over screen with final score display.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Snake game by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).
- **Performance**: Ensure the game loop is optimized for smooth performance, especially on mobile devices.

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a nostalgic arcade experience.
- Inspired by the classic Snake game with modern web interactivity.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
