// Objetivo: crear elementos con React.createElement
import React from "https://esm.sh/react@18.2.0";
// ES Module
import reactDOM from "https://esm.sh/react-dom@18.2.0/client";

// Elemento raíz de la aplicación
const appDomElement = document.getElementById("app");

// Creación del elemento raíz
const root = reactDOM.createRoot(appDomElement);

// Elementos:parámetros(Elemento a crear, propiedades/atributos del elemento, contenido del elemento)
// Creación de un botón
const button1 = React.createElement("button", { "data-id": 123 }, "Button 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Button 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Button 3");

// Creación de un contenedor que envuelve a los botones
const div = React.createElement(
  React.Fragment,
  null,
  button1,
  button2,
  button3
);

// Renderizado del contenedor
root.render(div);

// JSX: Extensión de ES6 que permite escribir código JavaScript que simula los elementos HTML para crear elementos de React de forma más sencilla y legible.

/* <React.Fragment>
  <button data-id="123">Button 1</button>
  <button data-id="456">Button 2</button>
  <button data-id="789">Button 3</button>
</React.Fragment>;
 */

// Expresiones en JSX: se utilizan las llaves {} para insertar expresiones de JavaScript en JSX.

//const name = "John Doe";
//const element = <h1>Hello, {name}</h1>;

// JSX es una sintaxis de JavaScript, por lo que las expresiones de JavaScript se pueden utilizar dentro de JSX.

//SWC: Compilador de JavaScript (https://swc.rs/playground)
