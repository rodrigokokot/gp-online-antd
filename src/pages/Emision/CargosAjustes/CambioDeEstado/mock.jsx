import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";

const columnsCambioDeEstado = [
  {
    name: "Emisor - Sucursal",
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: "Id",
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: "Cliente",
    selector: (row) => row.tipoCargo,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: "Marca",
    selector: (row) => row.tipoTarjeta,
    sortable: true,
  },
  {
    name: "Cuenta",
    selector: (row) => row.moneda,
    sortable: true,
  },
  {
    name: "Producto",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Adic.",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Tarjeta",
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
        Ver detalle
      </Link>
    ),
  },
];

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
const cambioDeEstadoSearch = [
  {
    name: "Emisor",
    index: "emisor",
    input: <FloatSelected width={200} label="Emisor" placeholder="Emisor" />,
  },
  {
    name: "Marca",
    index: "marca",
    input: <FloatSelected width={200} label="Marca" placeholder="Marca" />,
  },
  {
    name: "Producto",
    index: "producto",
    input: <FloatSelected width={200} label="Producto" placeholder="Producto" />,
  },
  {
    name: "Nº de Tarjeta",
    index: "cuenta",
    input: <FloatInput label="Nº de Tarjeta" placeholder="Nº de Tarjeta" />,
  },
  {
    name: "Nº Cuenta relacionada",
    index: "cuentaexterna",
    input: <FloatSelected width={200} label="Nº Cuenta relacionada" placeholder="Nº Cuenta relacionada"/>,
  },
  {
    name: "Apellidos",
    index: "producto",
    input: <FloatInput label="Apellidos" placeholder="Apellidos" />,
  },
  {
    name: "Nombres",
    index: "cuenta",
    input: <FloatInput label="Nombres" placeholder="Nombres" />,
  },
  {
    name: "Tipo de Documento",
    index: "producto",
    input: <FloatSelected width={200} label="Tipo de Documento" placeholder="Tipo de Documento" />,
  },
  {
    name: "Nº de Documento",
    index: "cuenta",
    input: <FloatSelected width={200} label="Nº de Documento" placeholder="Nº de Documento" />,
  },
  {
    name: "Razón Social",
    index: "cuenta",
    input: <FloatInput label="Razón Social" placeholder="Razón Social" />,
  },
  {
    name: "Nº Empresa",
    index: "cuenta",
    input: <FloatInput label="Nº Empresa" placeholder="Nº Empresa" />,
  },
  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
];
export { dataCambioDeEstado, columnsCambioDeEstado, cambioDeEstadoSearch };
