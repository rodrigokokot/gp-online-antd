import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";

const columnsCargosPorProductos = [
  {
    name: "Codigo",
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: "Tipos Cargo",
    selector: (row) => row.tipoCargo,
    sortable: true,
  },
  {
    name: "Aplica IVA",
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: "Débito/Crédito",
    selector: (row) => row.tipoTarjeta,
    sortable: true,
  },
  {
    name: "Moneda",
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/cargosPorProductos/editar/${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

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
const cargosPorProductosSearch = [
  {
    name: "Codigo",
    index: "codigo",
    input: <FloatInput label="Codigo" placeholder="Codigo" />,
  },
  {
    name: "Descripcion",
    index: "descripcion",
    input: <FloatInput label="Descripcion" placeholder="Descripcion" />,
  },
  {
    name: "Todos",
    index: "todos",
    input: <FloatInput label="Todos" placeholder="Todos" />,
  },
  {
    name: "Debito",
    index: "debito",
    input: <FloatInput label="Debito" placeholder="Debito" />,
  },
  {
    name: "Grupo Transaccion",
    index: "grupoTransaccion",
    input: <FloatInput label="Grupo Transaccion" placeholder="Grupo Transaccion"/>,
  },
  {
    name: "Comprobante",
    index: "comprobante",
    input: <FloatInput label="Comprobante" placeholder="Comprobante" />,
  },
  {
    name: "Numero de cuenta",
    index: "numeroCuenta",
    input: <FloatInput label="Numero de cuenta" placeholder="Numero de cuenta" />,
  },
  {
    name: "Adic",
    index: "adic",
    input: <FloatInput label="Adic" placeholder="Adic" />,
  },
  {
    name: "Liq. Socios (LS)",
    index: "liquidacionSocios",
    input: <FloatInput label="Liq. Socios (LS)" placeholder="Liq. Socios (LS)" />,
  },
  {
    name: "Cuotas",
    index: "cuotas",
    input: <FloatInput label="Cuotas" placeholder="Cuotas" />,
  },
  {
    name: "Producto",
    index: "producto",
    input: (
      <FloatSelected
        width={203}
        label="Producto"
        placeholder="producto"
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
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
];
export { dataCargosPorProductos, columnsCargosPorProductos, cargosPorProductosSearch };
