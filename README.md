# 🎲 Tenzies Game

A fun and addictive dice game built with React and Vite. The goal is simple: roll until all dice show the same number!

![Tenzies Game](https://img.shields.io/badge/Game-Tenzies-brightgreen) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.2.0-yellow)

## 🎯 Game Rules

- **Objective**: Get all 10 dice to show the same number
- **How to Play**:
  1. Click "Roll" to roll all unheld dice
  2. Click on individual dice to "hold" them (they'll turn green)
  3. Held dice won't change when you roll again
  4. Keep rolling and holding until all dice match
  5. Beat the game in under 10 rolls!

## ✨ Features

### 🎮 Core Gameplay
- **10 Interactive Dice**: Click to hold/unhold dice between rolls
- **Visual Feedback**: Dice change color when held (green) or failed (red)
- **Realistic Dice Display**: Each die shows proper dot patterns (1-6)
- **Roll Limit Challenge**: Must win within 10 rolls or face game over

### 📊 Game Statistics
- **Timer**: Track how long it takes to win
- **Roll Counter**: See current rolls vs maximum allowed (X/10)
- **Real-time Updates**: Stats update as you play

### 🎉 Victory & Failure States
- **Confetti Animation**: Celebration when you win!
- **Game Over Screen**: Animated overlay when you exceed roll limit
- **New Game Option**: Easy restart from any state

### ♿ Accessibility Features
- **Screen Reader Support**: ARIA labels and live regions
- **Keyboard Navigation**: Fully accessible via keyboard
- **Visual Indicators**: Clear visual states for all interactions

## 🛠️ Technical Stack

- **Frontend**: React 19.0.0 with Hooks (useState, useEffect)
- **Build Tool**: Vite 6.2.0 with SWC for fast refresh
- **Styling**: Pure CSS with Grid and Flexbox layouts
- **Animations**: CSS animations and transitions
- **Dependencies**:
  - `nanoid` - Unique ID generation for dice
  - `react-confetti` - Victory celebration animation
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tenzies-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start playing!

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## 📁 Project Structure

```
tenzies-game/
├── public/
│   └── vite.svg                 # Favicon
├── src/
│   ├── components/
│   │   ├── Die.jsx             # Individual die component
│   │   └── Failed.jsx          # Game over overlay
│   ├── assets/
│   │   └── react.svg           # React logo
│   ├── App.jsx                 # Main game logic
│   ├── main.jsx               # React app entry point
│   └── index.css              # Global styles
├── eslint.config.js           # ESLint configuration
├── vite.config.js            # Vite build configuration
├── package.json              # Dependencies and scripts
└── index.html               # HTML template
```

## 🎨 Key Components

### `App.jsx` - Main Game Controller
- Manages game state (dice, rolls, timer, win/loss conditions)
- Handles dice rolling logic and hold functionality
- Implements timer and roll counting
- Controls game flow and state transitions

### `Die.jsx` - Individual Die Component
- Renders realistic dice with dot patterns
- Handles visual states (normal, held, failed)
- Provides click interaction for holding dice
- Includes accessibility features

### `Failed.jsx` - Game Over Overlay
- Displays when player exceeds roll limit
- Shows final statistics
- Provides restart functionality
- Animated entrance for visual impact

## 🎯 Game Mechanics

### Dice Generation
- Each die has a random value (1-6)
- Unique ID for React key management
- Hold state tracking
- Dynamic re-rolling of unheld dice

### Win Condition
```javascript
const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)
```

### Difficulty Settings
- **MAX_ROLLS**: Currently set to 10 (configurable in `App.jsx`)
- **Timer**: Starts when first action taken
- **Progressive Challenge**: Tension builds as rolls approach limit

## 🎨 Styling Features

### Color Scheme
- **Background**: Deep blue (`#0B2434`)
- **Game Board**: Light gray (`#F5F5F5`)
- **Held Dice**: Success green (`#59E391`)
- **Failed State**: Error red (`#ff6b6b`)
- **Primary Button**: Purple (`#5035FF`)

### Responsive Design
- Fixed game board size (400x400px max)
- Grid-based dice layout (5x2)
- Flexible stats display
- Mobile-friendly touch targets

### Animations
- Fade-in effects for overlays
- Slide-in animations for modals
- Smooth color transitions on dice
- Confetti celebration animation

## 🔧 Customization

### Difficulty Adjustment
Change the roll limit in `App.jsx`:
```javascript
const MAX_ROLLS = 10  // Increase for easier, decrease for harder
```

### Dice Count
Modify the dice array generation:
```javascript
new Array(10)  // Change 10 to desired number of dice
```

### Styling
- Edit `src/index.css` for visual customizations
- Modify color variables for different themes
- Adjust animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the classic Tenzi dice game
- Built with React and modern web development practices
- Thanks to the open-source community for the excellent libraries used

---

**Happy Rolling! 🎲**

Try to beat your best time and see how few rolls you can win in!
