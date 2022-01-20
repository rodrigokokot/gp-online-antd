import React from "react";
import FloatInput from "../components/molecules/FloatInput/index";
import FloatSelected from "../components/molecules/FloatSelected/index";

export const GestionSucursalesSearch = () => {
  const array = [
    {
      name: "Descripción",
      input: <FloatInput placeholder="Descripción" label="Descripcion" />,
    },

    {
      name: "Código",
      input: <FloatInput placeholder="Código" label="Código" />,
    },

    {
      name: "CódigoPostal",
      input: <FloatInput placeholder="Código Postal" label="Código Postal" />,
    },

    {
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
