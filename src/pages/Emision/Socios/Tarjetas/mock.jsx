import { Link } from "react-router-dom";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import FloatInput from "../../../../components/molecules/FloatInput";
import { useTranslation } from "react-i18next";

///////// MOCK INPUTS SEARCH ////////
const TarjetasSearchArray=()=>{
  const { t} = useTranslation();
  return([
  {
    index: "tarjeta",
    input: <FloatInput label={t("tarjeta.search.input1")} />,
  },
  {
    index: "cuenta",
    input: <FloatInput label={t("tarjeta.search.input2")}  />,
  },
  {
    index: "adicional",
    input: <FloatInput label={t("tarjeta.search.input3")} />,
  },
  {
    index: "documento",
    input: <FloatInput label={t("tarjeta.search.input4")} />,
  },
  {
    index: "nombre",
    input: <FloatInput label={t("tarjeta.search.input5")} />,
  },
  {
    index: "fecha",
    input: <DateRangeFilter />,
  },
])
}

///////// MOCK COLUMNAS TABLA ////////
const ColumnsTarjetas =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("tarjeta.table.column1")),
    selector: (row) => row.tarjeta,
    sortable: false,
  },
  {
    name: (t("tarjeta.table.column2")),
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: (t("tarjeta.table.column3")),
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: (t("tarjeta.table.column4")),
    selector: (row) => row.afinidad,
    sortable: true,
  },
  {
    name: (t("tarjeta.table.column5")),
    selector: (row) => row.externa,
    sortable: true,
  },
  {
    name: (t("tarjeta.table.column6")),
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: (t("tarjeta.table.column7")),
    selector: (row) => row.documento,
    sortable: false,
  },
  {
    name: (t("tarjeta.table.column8")),
    selector: (row) => row.estado,
    sortable: false,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/socios/tarjetas/detalle=${row.tarjeta}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        {t("tarjeta.table.column9")}
      </Link>
    ),
  },
])
}

////////// MOCK DATA TABLA /////////

const dataTarjetas = [
  {
    tarjeta: "552268XXXXXX0372",
    cuenta: "001471107",
    producto: "Producto S",
    afinidad: "Disponible",
    externa: "001471105",
    nombre: "Raymundo Valdez",
    documento: "DNI 24801003",
    estado: "Activo",
  },
];

////////// MOCK TARJETAS HISTORIAL //////////

////////// MOCK TARJETAS HISTORIAL COLUMNAS //////////

const ColumnsTarjetasHistorial =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("tarjeta.history.column1")),
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: (t("tarjeta.history.column2")),
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    name: (t("tarjeta.history.column3")),
    selector: (row) => row.estado,
    sortable: true,
  },
])
}

///////// MOCK DATA TARJETAS HISTORIAL //////////

const dataTarjetasHistorial = [
  {
    fecha: new Date().toISOString().split("T")[0],
    usuario: "ANEG",
    estado: "Pendiente",
  },
];

export {
  TarjetasSearchArray,
  dataTarjetas,
  ColumnsTarjetas,
  ColumnsTarjetasHistorial,
  dataTarjetasHistorial,
};
