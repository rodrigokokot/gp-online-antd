import React from "react";
import FloatInput from "../components/molecules/FloatInput/index";
import FloatSelected from "../components/molecules/FloatSelected/index";
import DateRangeFilter from "../components/organisms/DateRangeFilter";

const MovimientosIPMSearch = [
  {
    index: "id",
    input: <FloatInput placeholder="ID file" label="ID file" />,
  },
  {
    index: "numeroIca",
    input: <FloatInput placeholder="Nº de ICA" label="Nº de ICA" />,
  },

  {
    index: "apellido",
    input: <FloatInput placeholder="Código" label="Código" />,
  },

  {
    index: "nombre",
    input: <FloatInput placeholder="Código Postal" label="Código Postal" />,
  },

  {
    index: "numeroDocumento",
    input: <FloatInput placeholder="Nº de Documento" label="Nº de Documento" />,
  },

  {
    index: "Por fecha",
    input: <DateRangeFilter></DateRangeFilter> ,
  },
];

export { MovimientosIPMSearch };
