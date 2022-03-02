import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";

const ColumnsCargosPorProductos=()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("cargosproductos.table.column1")),
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column2")),
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column3")),
    selector: (row) => row.tipoCargo,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column4")),
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column5")),
    selector: (row) => row.tipoTarjeta,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column6")),
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: (t("cargosproductos.table.column7")),
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/cargosPorProductos/editarCargoPorProducto=${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
       {t("cargosproductos.table.column8")}
      </Link>
    ),
  },
])
}

const dataCargosPorProductos = [
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
const CargosPorProductosSearch =()=>{
  const { t} = useTranslation();
  return([
  {
    name: "Código",
    index: "codigo",
    input: <FloatInput label={t("cargosproductos.search.input1")} placeholder={t("cargosproductos.search.input1")} />,
  },
  {
    name: "Descripción",
    index: "descripcion",
    input: <FloatInput label={t("cargosproductos.search.input2")} placeholder={t("cargosproductos.search.input2")} />,
  },
  {
    name: "Todos",
    index: "todos",
    input: <FloatInput label={t("cargosproductos.search.input3")}placeholder={t("cargosproductos.search.input3")} />,
  },
  {
    name: "Débito",
    index: "debito",
    input: <FloatInput label={t("cargosproductos.search.input4")} placeholder={t("cargosproductos.search.input4")} />,
  },
  {
    name: "Grupo Transacción",
    index: "grupoTransaccion",
    input: <FloatInput label={t("cargosproductos.search.input5")} placeholder={t("cargosproductos.search.input5")}/>,
  },
  {
    name: "Comprobante",
    index: "comprobante",
    input: <FloatInput label={t("cargosproductos.search.input6")} placeholder={t("cargosproductos.search.input6")} />,
  },
  {
    name: "N° de cuenta",
    index: "numeroCuenta",
    input: <FloatInput label={t("cargosproductos.search.input7")}placeholder={t("cargosproductos.search.input7")} />,
  },
  {
    name: "Adic",
    index: "adic",
    input: <FloatInput label={t("cargosproductos.search.input8")} placeholder={t("cargosproductos.search.input8")}/>,
  },
  {
    name: "Liq. Socios (LS)",
    index: "liquidacionSocios",
    input: <FloatInput label={t("cargosproductos.search.input9")} placeholder={t("cargosproductos.search.input9")} />,
  },
  {
    name: "Cuotas",
    index: "cuotas",
    input: <FloatInput label={t("cargosproductos.search.input10")} placeholder={t("cargosproductos.search.input10")} />,
  },
  {
    name: "Producto",
    index: "producto",
    input: (
      <FloatSelected
        width={203}
        label={t("cargosproductos.search.input11")}
        placeholder={t("cargosproductos.search.input11")}
        options={[
          {
            title: "producto 1",
            value: "prod1",
          },
          {
            title: "producto 2",
            value: "prod2",
          },
        ]}
      />
    ),
  }, 
  {
    index: "moneda",
    input: <SelectImg showSearch={true} placeholder={t("cargosproductos.search.input12")} style={{width: 250}}/>
  },  
  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  }, 
])
}
export { dataCargosPorProductos, ColumnsCargosPorProductos, CargosPorProductosSearch };
