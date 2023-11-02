// Descripción: Componente para renderizar un cuadrado del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`; // Si el cuadrado está seleccionado, añadir la clase "is-selected"

  // Función que se ejecuta cuando se hace click en el cuadrado
  const handleClick = () => {
    updateBoard(index); // Actualizar el tablero
  };

  // Renderizar el componente
  return (
    <div onClick={handleClick} className={className}>
      {children} {/* Renderizar el contenido del cuadrado */}
    </div>
  );
};
