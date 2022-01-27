import React from "react";
import FloatInput from "../components/molecules/FloatInput/index";
import FloatSelected from "../components/molecules/FloatSelected/index";
import DateRangeFilter from "../components/organisms/DateRangeFilter";


const GestionSucursalesSearch = [
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
          width={200}
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
          width={200}
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
    {
      index: 'fecha',
      name: "Por fecha",
      input: <DateRangeFilter></DateRangeFilter>,
    },
  ];

  export {GestionSucursalesSearch}
