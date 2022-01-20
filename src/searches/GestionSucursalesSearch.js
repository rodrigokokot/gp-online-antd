import React from "react";
import FloatInput from "../components/molecules/FloatInput/index";
import FloatSelected from "../components/molecules/FloatSelected/index";

export const GestionSucursalesSearch = () => {
  const array = [
    {
      index: 'descripcion',
      name: "Descripción",
      input: <FloatInput placeholder="Descripción" label="Descripcion" />,
    },

    {
      index: 'codigo',
      name: "Código",
      input: <FloatInput placeholder="Código" label="Código" />,
    },

    {
      index: 'cp',
      name: "Código Postal",
      input: <FloatInput placeholder="Código Postal" label="Código Postal" />,
    },

    {
      index: 'provincia',
      name: "Provincia",
      input: (
        <FloatSelected
          placeholder="Provincia"
          label="Provincia"
          options={[
            {
              title: "San Juan",
              value: "San Juan",
              disabled: false,
            },
            {
              title: "Mendoza",
              value: "Mendoza",
              disabled: false,
            },
            {
              title: "San Luis",
              value: "San Luis",
              disabled: false,
            },
          ]}
        />
      ),
    },

    {
      index: 'estado',
      name: "Estado",
      input: (
        <FloatSelected
          placeholder="Estado"
          label="Estado"
          options={[
            {
              title: "Activo",
              value: "Activo",
              disabled: false,
            },

            {
              title: "Suspendido",
              value: "Suspendido",
              disabled: false,
            },

            {
              title: "Cancelado",
              value: "Cancelado",
              disabled: false,
            },
          ]}
        />
      ),
    },
  ];
  return array;
};
