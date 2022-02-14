import FloatInput from "../../../../components/molecules/FloatInput";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";

const columnsMovimientoDeCuenta = [
  {
    name: "Tarjeta",
    selector: (row) => row.tarjeta,
    sortable: true,
  },
  {
    name: "Nº cuenta",
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: "Moneda",
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
    sortable: true,
  },
];

const dataMovimientoDeCuenta = [
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
  {
    tarjeta: "Visa",
    cuenta: "15213414",
    moneda: "Libra",
    fecha: "26/07/2021",
  },
];
const MovimientoDeCuentaSearch = [
  {
    name: "N° de tarjeta",
    index: "tarjeta",
    input: <FloatInput label="N° de tarjeta" placeholder="N° de tarjeta" />,
  },
  {
    name: "N° de cuenta",
    index: "cuenta",
    input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
  },
  {
    name: "Pesos",
    index: "pesos",
    input: <FloatInput label="Pesos" placeholder="Pesos" />,
  },

  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
];
export {
  dataMovimientoDeCuenta,
  columnsMovimientoDeCuenta,
  MovimientoDeCuentaSearch,
};
