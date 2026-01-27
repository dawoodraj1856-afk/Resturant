"use client";
import { useState, useEffect } from "react";

const Game = () => {
  const [grid, setGrid] = useState<boolean[]>([]);

  useEffect(() => {
    const initialGrid = Array.from({ length: 25 }, () => Math.random() > 0.5);
    setGrid(initialGrid);
  }, []);

  const toggle = (index: number) => {
    const newGrid = [...grid];
    const toggleIndex = (i: number) => {
      if (i >= 0 && i < 25) newGrid[i] = !newGrid[i];
    };
    const row = Math.floor(index / 5);
    const col = index % 5;
    toggleIndex(index);
    toggleIndex(index - 5);
    toggleIndex(index + 5);
    if (col > 0) toggleIndex(index - 1);
    if (col < 4) toggleIndex(index + 1);
    setGrid(newGrid);
  };

  const restartGame = () => {
    const newGrid = Array.from({ length: 25 }, () => Math.random() > 0.5);
    setGrid(newGrid);
  };

  const hasWon = grid.every((cell) => cell === false);

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center pt-6 px-4 md:px-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-4 md:mb-6">
        Light Out Game
      </h1>
      <p className="font-bold text-center text-sm md:text-base mb-6">
        Click on a light to toggle it and its neighbors. <br />
        Turn all lights off to win!
      </p>

      {/* Grid */}
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {grid.map((cell, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`h-12 w-12 md:h-16 md:w-16 rounded border-2 cursor-pointer transition-colors duration-300 ${
              cell ? "bg-yellow-500" : "bg-gray-800"
            }`}
          ></div>
        ))}
      </div>

      <button
        onClick={restartGame}
        className="mt-6 px-6 py-2 md:px-10 md:py-3 font-bold text-lg md:text-2xl border-2 border-black hover:bg-black hover:text-yellow-400 transition-colors duration-300"
      >
        Restart
      </button>

      {hasWon && (
        <div className="text-center font-bold text-lg md:text-2xl text-green-800 mt-5 animate-pulse">
          🎉 You Win! 🎉
        </div>
      )}

      <div className="flex justify-center mt-10 pb-10">
        <a
          href="#"
          className="text-black text-sm md:text-lg font-bold hover:underline text-center"
        >
          MANAGE CONSENT PREFERENCE
        </a>
      </div>
    </div>
  );
};

export default Game;
