import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";

const ColumnsCambioDeEstado=()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("estado.table.column1")) ,
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: (t("estado.table.column2")) ,
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name:(t("estado.table.column3")) ,
    selector: (row) => row.tipoCargo,
    sortable: true,
  },
  {
    name: (t("estado.table.column4")) ,
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: (t("estado.table.column5")) ,
    selector: (row) => row.tipoTarjeta,
    sortable: true,
  },
  {
    name: (t("estado.table.column6")) ,
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: (t("estado.table.column7")) ,
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: (t("estado.table.column8")) ,
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: (t("estado.table.column9")) ,
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/cambioDeEstado/detalle=${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        {t("estado.table.column10") }
      </Link>
    ),
  },
])}

const dataCambioDeEstado = [
  {
    codigo: "3",
    descripcion: "Debito prueba",
    tipoCargo: "sistema",
    iva: "si",
    tipoTarjeta: "debito",
    moneda: "pesos",
    estado: "habilitado",
  },
  {
    codigo: "3",
    descripcion: "Debito prueba",
    tipoCargo: "sistema",
    iva: "si",
    tipoTarjeta: "debito",
    moneda: "pesos",
    estado: "habilitado",
  },
  {
    codigo: "3",
    descripcion: "Debito prueba",
    tipoCargo: "sistema",
    iva: "si",
    tipoTarjeta: "debito",
    moneda: "pesos",
    estado: "habilitado",
  },
  {
    codigo: "3",
    descripcion: "Debito prueba",
    tipoCargo: "sistema",
    iva: "si",
    tipoTarjeta: "debito",
    moneda: "pesos",
    estado: "habilitado",
  },
  {
    codigo: "3",
    descripcion: "Debito prueba",
    tipoCargo: "sistema",
    iva: "si",
    tipoTarjeta: "debito",
    moneda: "pesos",
    estado: "habilitado",
  },
];
const CambioDeEstadoSearch=()=>{
  const { t} = useTranslation();
  return( [
  {
    name: "Emisor",
    index: "emisor",
    input: <FloatSelected label={t("estado.search.input1")} placeholder={t("estado.search.input1")} />,
  },
  {
    name: "Marca",
    index: "marca",
    input: <FloatSelected label={t("estado.search.input2")}  placeholder={t("estado.search.input2")}  />,
  },
  {
    name: "Producto",
    index: "producto",
    input: <FloatSelected label={t("estado.search.input3")}  placeholder={t("estado.search.input3")} />,
  },
  {
    name: "Nº de Tarjeta",
    index: "cuenta",
    input: <FloatInput label={t("estado.search.input4")}  placeholder={t("estado.search.input4")}  />,
  },
  {
    name: "Nº Cuenta relacionada",
    index: "cuentaexterna",
    input: <FloatSelected label={t("estado.search.input5")}  placeholder={t("estado.search.input5")} />,
  },
  {
    name: "Apellidos",
    index: "producto",
    input: <FloatInput label={t("estado.search.input6")}  placeholder={t("estado.search.input6")}  />,
  },
  {
    name: "Nombres",
    index: "cuenta",
    input: <FloatInput label={t("estado.search.input7")}  placeholder={t("estado.search.input7")}  />,
  },
  {
    name: "Tipo de Documento",
    index: "producto",
    input: <FloatSelected label={t("estado.search.input8")}  placeholder={t("estado.search.input8")} />,
  },
  {
    name: "Nº de Documento",
    index: "cuenta",
    input: <FloatSelected label={t("estado.search.input9")}  placeholder={t("estado.search.input9")}  />,
  },
  {
    name: "Razón Social",
    index: "cuenta",
    input: <FloatInput label={t("estado.search.input10")}  placeholder={t("estado.search.input10")}  />,
  },
  {
    name: "Nº Empresa",
    index: "cuenta",
    input: <FloatInput label={t("estado.search.input11")}  placeholder={t("estado.search.input11")}  />,
  },
  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
])
}
export { dataCambioDeEstado, ColumnsCambioDeEstado, CambioDeEstadoSearch };
