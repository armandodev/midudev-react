// Constante que contiene los posibles ganadores
import { WINNER_COMBOS } from "../constants.js";

// Función que comprueba si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
  // Recorremos el array de combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo; // Destructuring de la combinación
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // Devolvemos el ganador
    }
  }
  return null; // Si no hay ganador devolvemos null
};

// Función que comprueba si el juego ha terminado
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null); // Devolvemos true si todos los elementos del array son distintos de null
};
