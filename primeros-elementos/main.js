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
