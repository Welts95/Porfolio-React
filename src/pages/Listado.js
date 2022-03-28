import SobreMi from "./Sobre-Mi/SobreMi";
import MiProyecto from "./Mi-Proyecto/MiProyecto";
import Contacto from "./Contacto/Contacto";

const listado = [
  {
    path: "sobre-mi",
    titulo: "Sobre mi",
    element: <SobreMi />,
  },
  {
    path: "mi-proyecto",
    titulo: "Mi Proyecto",
    element: <MiProyecto />,
  },
  {
    path: "contactame",
    titulo: "Contáctame",
    element: <Contacto />,
  },
];

export default listado;
