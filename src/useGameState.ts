import { useState } from "react";
import { calculateBoardState } from "./util";

export function useGameState() {
  const [square, setSquare] = useState(Array(9).fill(undefined));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const { winner, colors } = calculateBoardState(square);

  function handleClick(index) {
    if (winner) {
      return;
    }
    if (square[index]) {
      return;
    }
    const newSquare = [...square];
    newSquare[index] = currentPlayer;
    setSquare(newSquare);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function reset() {
    setSquare(Array(9).fill(undefined));
  }

  return { square, colors, winner, handleClick, reset };
}
