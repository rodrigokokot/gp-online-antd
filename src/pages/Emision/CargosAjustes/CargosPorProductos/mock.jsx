import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";

const columnsCargosPorProductos = [
  {
    name: "Código",
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: "Descripción",
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
        to={`/emision/cargosAjustes/cargosPorProductos/editarCargoPorProducto=${row.codigo}`}
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
    name: "Código",
    index: "codigo",
    input: <FloatInput label="Código" placeholder="Código" />,
  },
  {
    name: "Descripción",
    index: "descripcion",
    input: <FloatInput label="Descripción" placeholder="Descripción" />,
  },
  {
    name: "Todos",
    index: "todos",
    input: <FloatInput label="Todos" placeholder="Todos" />,
  },
  {
    name: "Débito",
    index: "debito",
    input: <FloatInput label="Débito" placeholder="Débito" />,
  },
  {
    name: "Grupo Transacción",
    index: "grupoTransaccion",
    input: <FloatInput label="Grupo Transacción" placeholder="Grupo Transacción"/>,
  },
  {
    name: "Comprobante",
    index: "comprobante",
    input: <FloatInput label="Comprobante" placeholder="Comprobante" />,
  },
  {
    name: "N° de cuenta",
    index: "numeroCuenta",
    input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
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
        placeholder="Producto"
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
    input: <SelectImg showSearch={true} placeholder="Busca tipo de moneda" style={{width: 250}}/>
  },  
  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  }, 
];
export { dataCargosPorProductos, columnsCargosPorProductos, cargosPorProductosSearch };
