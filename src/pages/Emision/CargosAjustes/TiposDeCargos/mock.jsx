import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput"; 
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";

const columnsTiposDeCargos = [
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
        to={`/emision/cargosAjustes/tiposDeCargos/editar/${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

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
const tiposDeCargosSearch = [
  {
    name: "Codigo",
    index: "tarjeta",
    input: <FloatInput label="Código" placeholder="Código" />,
  },
  {
    name: "Descripcion",
    index: "documento",
    input: <FloatInput label="Descripción" placeholder="Descripción" />,
  },
  {
    name: "Todos",
    index: "producto",
    input: <FloatInput label="Todos" placeholder="Todos" />,
  },
  {
    name: "Debito",
    index: "cuenta",
    input: <FloatInput label="Débito" placeholder="Débito" />,
  },
  {
    name: "Grupo Transaccion",
    index: "cuentaexterna",
    input: <FloatInput label="Grupo Transacción" placeholder="Grupo Transacción"/>,
  },
  {
    name: "Comprobante",
    index: "producto",
    input: <FloatInput label="Comprobante" placeholder="Comprobante" />,
  },
  {
    name: "Numero de cuenta",
    index: "cuenta",
    input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
  },
  {
    name: "Adic",
    index: "producto",
    input: <FloatInput label="Adic" placeholder="Adic" />,
  },
  {
    name: "Liq. Socios (LS)",
    index: "cuenta",
    input: <FloatInput label="Liq. Socios (LS)" placeholder="Liq. Socios (LS)" />,
  },
  {
    name: "Cuotas",
    index: "cuenta",
    input: <FloatInput label="Cuotas" placeholder="Cuotas" />,
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
export { dataTiposDeCargos, columnsTiposDeCargos, tiposDeCargosSearch };
