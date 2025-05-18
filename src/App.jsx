import { useState } from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
import { getFarewellText } from "./utils";

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.reduce((count, letter) => {
    return currentWord.includes(letter) ? count : count + 1;
  }, 0);

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessCorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  console.log(isLastGuessCorrect);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  const languageElements = languages.map((lang, index) => {
    const isLost = index < wrongGuessCount;

    const className = clsx("chip", isLost && "lost");

    return (
      <span
        className={className}
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx("key", {
      keyGuessed: isGuessed,
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        onClick={() => handleGuess(letter)}
        key={letter}
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);

    return (
      <span className="letter" key={index}>
        {isGuessed ? letter.toUpperCase() : " "}
      </span>
    );
  });

  const gameStatus = () => {
    if (!isGameOver && isLastGuessCorrect)
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    if (isGameWon) {
      return (
        <>
          <h2>You win</h2>
          <p>Well done🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly😭</p>
        </>
      );
    }
  };

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section
        className={clsx("game-status", {
          won: isGameWon,
          lost: isGameLost,
          farewell: !isGameOver && isLastGuessCorrect,
        })}
      >
        {gameStatus()}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
