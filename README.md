# Assembly: Endgame

A word-guessing game where you must save the programming world from Assembly!  
Guess the hidden programming language within a limited number of attempts. Each wrong guess eliminates a language from the stack—can you keep Assembly at bay?

## Features

- **Fun Hangman-style gameplay** themed around programming languages
- **Accessible UI** with ARIA live regions and keyboard navigation
- **Colorful language chips** that track your progress
- **Confetti celebration** on victory
- **Fully typed with TypeScript** for safety and maintainability

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/your-username/assembly-endgame.git
cd assembly-endgame
npm install
```

### Running the App

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to play the game in your browser.

## Project Structure

```
src/
  components/        # Reusable UI components (Header, Keyboard, GameStatus, etc.)
  languages.ts       # List of programming languages
  utils.ts           # Utility functions
  App.tsx            # Main game logic
  index.tsx          # Entry point
public/
  index.html         # HTML template
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

\*Keep the programming world safe—one word at
