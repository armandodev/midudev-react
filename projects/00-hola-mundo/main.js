// ES Module
import reactDOM from "https://esm.sh/react-dom@18.2.0/client";

// Elemento raíz de la aplicación
const appDomElement = document.getElementById("app");

// Creación del elemento raíz
const root = reactDOM.createRoot(appDomElement);
// Renderizado del elemento raíz
root.render("¡Hola mundo!");
