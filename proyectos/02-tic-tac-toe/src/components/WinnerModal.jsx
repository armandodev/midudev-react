// Componente para renderizar un cuadrado
import { Square } from "./Square.jsx";

// Descripción: Componente para renderizar el modal de ganador
export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null; // Si no hay ganador, no renderizar nada

  const winnerText = winner === false ? "Empate" : "Ganó:"; // Si no hay ganador, mostrar "Empate", si hay ganador, mostrar "Ganó:"

  // Renderizar el componente
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2> {/* Mostrar el texto del ganador */}
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>{" "}
        {/* Si hay ganador, renderizar el cuadrado con el símbolo del ganador */}
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>{" "}
          {/* Botón para reiniciar el juego */}
        </footer>
      </div>
    </section>
  );
}
