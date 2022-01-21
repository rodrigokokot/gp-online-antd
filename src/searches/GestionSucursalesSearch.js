import React from "react";
import { Select } from "antd";
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
      name: "Código Postal",
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
              title: "sanjuan",
              value: "San Juan",
              disabled: false,
            },
            {
              title: "mendoza",
              value: "Mendoza",
              disabled: false,
            },
            {
              title: "sanluis",
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
              title: "activo",
              value: "Activo",
              disabled: false,
            },

            {
              title: "suspendido",
              value: "Suspendido",
              disabled: false,
            },

            {
              title: "cancelado",
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
