import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";

const ColumnsMovimientoDeCuenta =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("movimientocuenta.table.column1")),
    selector: (row) => row.tarjeta,
    sortable: true,
  },
  {
    name: (t("movimientocuenta.table.column2")),
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: (t("movimientocuenta.table.column3")),
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: (t("movimientocuenta.table.column4")),
    selector: (row) => row.fecha,
    sortable: true,
  },
])
}

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
const MovimientoDeCuentaSearch =()=>{
  const { t} = useTranslation();
  return([
  {
    name: "N° de tarjeta",
    index: "tarjeta",
    input: <FloatInput label={t("movimientocuenta.search.input1")} placeholder={t("movimientocuenta.search.input1")} />,
  },
  {
    name: "N° de cuenta",
    index: "cuenta",
    input: <FloatInput label={t("movimientocuenta.search.input2")} placeholder={t("movimientocuenta.search.input2")} />,
  },
  {
    name: "Pesos",
    index: "pesos",
    input: <FloatInput label={t("movimientocuenta.search.input3")} placeholder={t("movimientocuenta.search.input3")} />,
  },

  {
    index: "fecha",
    input: <DateRangeFilter placeholder={t("movimientocuenta.search.input4")} label={t("movimientocuenta.search.input4")} />,
  },
])
}
export {
  dataMovimientoDeCuenta,
  ColumnsMovimientoDeCuenta,
  MovimientoDeCuentaSearch,
};
