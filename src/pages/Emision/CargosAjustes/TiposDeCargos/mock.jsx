import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput"; 
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";

const ColumnsTiposDeCargos =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("tiposcargos.table.column1")),
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: (t("tiposcargos.table.column2")),
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: (t("tiposcargos.table.column3")),
    selector: (row) => row.tipoCargo,
    sortable: true,
  },
  {
    name: (t("tiposcargos.table.column4")),
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: (t("tiposcargos.table.column5")),
    selector: (row) => row.tipoTarjeta,
    sortable: true,
  },
  {
    name:(t("tiposcargos.table.column6")),
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: (t("tiposcargos.table.column7")),
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/tiposDeCargos/editarTipoDeCargo=${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        {t("tiposcargos.table.column8")}
      </Link>
    ),
  },
])
}

const dataTiposDeCargos = [
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
const TiposDeCargosSearch=()=>{
  const { t} = useTranslation();
  return( [
  {
    name: "Codigo",
    index: "tarjeta",
    input: <FloatInput label={t("tiposcargos.search.input1")} placeholder={t("tiposcargos.search.input1")}/>,
  },
  {
    name: "Descripcion",
    index: "documento",
    input: <FloatInput label={t("tiposcargos.search.input2")} placeholder={t("tiposcargos.search.input2")} />,
  },
  {
    name: "Todos",
    index: "producto",
    input: <FloatInput label={t("tiposcargos.search.input3")} placeholder={t("tiposcargos.search.input3")} />,
  },
  {
    name: "Debito",
    index: "cuenta",
    input: <FloatInput label={t("tiposcargos.search.input4")} placeholder={t("tiposcargos.search.input4")}/>,
  },
  {
    name: "Grupo Transaccion",
    index: "cuentaexterna",
    input: <FloatInput label={t("tiposcargos.search.input5")}placeholder={t("tiposcargos.search.input5")}/>,
  },
  {
    name: "Comprobante",
    index: "producto",
    input: <FloatInput label={t("tiposcargos.search.input6")} placeholder={t("tiposcargos.search.input6")} />,
  },
  {
    name: "Numero de cuenta",
    index: "cuenta",
    input: <FloatInput label={t("tiposcargos.search.input7")} placeholder={t("tiposcargos.search.input7")} />,
  },
  {
    name: "Adic",
    index: "producto",
    input: <FloatInput label={t("tiposcargos.search.input8")} placeholder={t("tiposcargos.search.input8")} />,
  },
  {
    name: "Liq. Socios (LS)",
    index: "cuenta",
    input: <FloatInput label={t("tiposcargos.search.input9")} placeholder={t("tiposcargos.search.input9")} />,
  },
  {
    name: "Cuotas",
    index: "cuenta",
    input: <FloatInput label={t("tiposcargos.search.input10")} placeholder={t("tiposcargos.search.input10")} />,
  },
  {
    index: "moneda",
    input: <SelectImg showSearch={true} placeholder={t("tiposcargos.search.input11")} style={{width: 250}}/>
  }, 

  {
    index: "fecha",
    input: <DateRangeFilter placeholder={t("tiposcargos.search.input12")} label={t("tiposcargos.search.input12")} />,
  },
])
}
export { dataTiposDeCargos, ColumnsTiposDeCargos, TiposDeCargosSearch };
