import { Link } from "react-router-dom";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
import { useTranslation } from "react-i18next";
const ColumnsCPMovimiento =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("movimiento.table.column1")),
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column2")),
    selector: (row) => row.movimiento,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column3")),
    selector: (row) => row.locacion,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column4")),
    selector: (row) => row.evento,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column5")),
    selector: (row) => row.precio,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column6")),
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column7")),
    selector: (row) => row.porcentaje,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column8")),
    selector: (row) => row.concepto,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column9")),
    selector: (row) => row.fdesde,
    sortable: true,
  },
  {
    name: (t("movimiento.table.column10")),
    selector: (row) => row.fhasta,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/cargosPorProductosMovimientos/editarCargoPorProductoYMovimiento=${row.evento}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
       {t("movimiento.table.column11")}
      </Link>
    ),
  },
])
}

const dataCPMovimiento = [
  {
    producto: "Producto Pre",
    movimiento: "GAF 99",
    locacion: "Cargo por renovacion",
    evento: "15",
    precio: "-si",
    iva: "-",
    porcentaje: "-",
    concepto: "-",
    fdesde: "28/04/2021",
    fhasta: "-",
    option: <Link>Editar</Link>,
  },
  {
    producto: "Producto Pre",
    movimiento: "GAF 99",
    locacion: "Cargo por renovacion",
    evento: "15",
    precio: "-si",
    iva: "-",
    porcentaje: "-",
    concepto: "-",
    fdesde: "28/04/2021",
    fhasta: "-",
    option: <Link>Editar</Link>,
  },
];
const CPMovimientoSearch =()=>{
  const { t} = useTranslation();
  return([
  {
      index: "codigo",
      input: <FloatInput label={t("movimiento.search.input1")} />,
  },
  {
      index: "descripcion",
      input: <FloatInput label={t("movimiento.search.input2")} />,
  },
  {
      index: "todos",
      input: <FloatInput label={t("movimiento.search.input3")}/>,
  },
  {
      index: "debito",
      input: <FloatSelected label={t("movimiento.search.input4")} options={[
          {
              title:"Visa",
              value:"Visa",
              disabled:false,
          }
      ]} />,
  },
  {
      index: "transaccion",
      input: <FloatSelected label={t("movimiento.search.input5")} options={[
          {
              title:"Juridico",
              value:"Juridico",
              disabled:false,
          }
      ]} />
  },
  {
      index: "comprobante",
      input: <FloatInput label={t("movimiento.search.input6")} />,
  },
  {
      index: "cuenta",
      input: <FloatInput label={t("movimiento.search.input7")} />,
  },
  {
      index: "adic",
      input: <FloatInput label={t("movimiento.search.input8")} />,
  },
  {
      index: "socios",
      input: <FloatSelected label={t("movimiento.search.input9")} options={[
          {
              title:"Liquidado",
              value:"Liquidado",
              disabled:false,
          }
      ]} />
  },
  {
      index: "cuotas",
      input: <FloatSelected label={t("movimiento.search.input10")} options={[
          {
              title:"3",
              value:"3",
              disabled:false,
          }
      ]} />
  },
  {
      index: "producto",
      input: <FloatSelected label={t("movimiento.search.input11")}options={[
          {
              title:"producto A",
              value:"producto A",
              disabled:false,
          }
      ]} />
  },
  {
      index: "afinidad",
      input: <FloatSelected label={t("movimiento.search.input12")} options={[
          {
              title:"Grupo A",
              value:"Grupo A",
              disabled: false,
          }
      ]} />
  }, 
  {
    index: "Movimiento",
    input: (
      <FloatSelected
        placeholder={t("movimiento.search.input13")}
        label={t("movimiento.search.input13")}
        options={[
          { title: "Movimiento 1", value: 1, disabled: false },
          { title: "Movimiento 2", value: 2, disabled: false },
          { title: "Movimiento 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
      index: "fecha",
      input: <DateRangeFilter />
  },
  {
    index: "moneda",
    input: <SelectImg showSearch={true} placeholder={t("movimiento.search.input14")}style={{width: 250}}/>
  }
])
} 
export { dataCPMovimiento, ColumnsCPMovimiento, CPMovimientoSearch };
