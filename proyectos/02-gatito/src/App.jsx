const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

import "./App.css";

function App() {
  return (
    <main className="board">
      <h1>Juego del Gatito</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <div className="cell" key={index}>
              <span className="cell__content">{index}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
