import React from "react";
import FloatInput from "../components/molecules/FloatInput/index";


const GestionUsuariosSearch = [
   {
      index: 'usuario',
      name: "Usuario",
      input: <FloatInput placeholder="Usuario" label="Usuario" />,
    },


    {
      index: 'nombre',
      name: "Nombre",
      input: <FloatInput placeholder="Nombre" label="Nombre" />,
    },

    {
      index: 'apellido',
      name: "Apellido",
      input: <FloatInput placeholder="Apellido" label="Apellido" />,
    },
    {
      index: 'Ndocumento',
      name: "N° de documento",
      input: <FloatInput placeholder="N de documento" label="N de documento" />,
    },

  ];

  export {GestionUsuariosSearch}
