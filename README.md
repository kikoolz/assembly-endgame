# Assembly: Endgame

A word-guessing game where you must save the programming world from Assembly!  
Guess the hidden programming language within a limited number of attempts. Each wrong guess eliminates a language from the stack—can you keep Assembly at bay?

## Features

- **Fun Hangman-style gameplay** themed around programming languages
- **Accessible UI** with ARIA live regions and keyboard navigation
- **Colorful language chips** that track your progress
- **Confetti celebration** on victory
- **Fully typed with TypeScript** for safety and maintainability

## How to Play

- Guess the hidden programming language by typing letters.
- Each incorrect guess removes a language from the stack.
- Win by guessing the word before the stack is empty!
- Use the on-screen keyboard or your physical keyboard.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/kikoolz/assembly-endgame.git
cd assembly-endgame
npm install
```

### Running the App

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to play the game in your browser.

### Building for Production

```sh
npm run build
npm run preview
```

## Project Structure

```
src/
  components/        # Reusable UI components (Header, Keyboard, GameStatus, etc.)
  languages.ts       # List of programming languages
  utils.ts           # Utility functions
  words.ts           # Word-related data
  App.tsx            # Main game logic
  main.tsx           # Entry point
public/
  index.html         # HTML template
```

## Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **ESLint** - Code linting
- **React Confetti** - Victory animations

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please ensure your code follows the existing style and passes the linting checks.

## License

[MIT](LICENSE)

---

_Keep the programming world safe—one word at a time._
