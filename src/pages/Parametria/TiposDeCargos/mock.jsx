import { Link } from "react-router-dom";
import FloatInput from "../../../components/molecules/FloatInput";
import FloatSelected from "../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";

const columnsTiposDeCargos = [
  {
    name: "Codigo",
    selector: (row) => row.idcuenta,
    sortable: true,
  },
  {
    name: "Descripcion",
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: "Tipos Cargo",
    selector: (row) => row.gpafinidad,
    sortable: true,
  },
  {
    name: "Aplica IVA",
    selector: (row) => row.cexterna,
    sortable: true,
  },
  {
    name: "Débito/Crédito",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Moneda",
    selector: (row) => row.dni,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.tarjeta,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/parametria/tiposDeCargos/editar/${row.idcuenta}`}
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
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
    option: <Link>Editar</Link>,
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
    option: <Link>Editar</Link>,
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
    option: <Link>Editar</Link>,
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
    option: <Link>Editar</Link>,
  },
];
const tiposDeCargosSearch = [
  {
    name: "Codigo",
    index: "tarjeta",
    input: <FloatInput label="Codigo" placeholder="Codigo" />,
  },
  {
    name: "Descripcion",
    index: "documento",
    input: <FloatInput label="Descripcion" placeholder="Descripcion" />,
  },
  {
    name: "Todos",
    index: "producto",
    input: <FloatInput label="Todos" placeholder="Todos" />,
  },
  {
    name: "Debito",
    index: "cuenta",
    input: <FloatInput label="Debito" placeholder="Debito" />,
  },
  {
    name: "Grupo Transaccion",
    index: "cuentaexterna",
    input: <FloatInput label="Grupo Transaccion" placeholder="Grupo Transaccion"/>,
  },
  {
    name: "Comprobante",
    index: "producto",
    input: <FloatInput label="Comprobante" placeholder="Comprobante" />,
  },
  {
    name: "Numero de cuenta",
    index: "cuenta",
    input: <FloatInput label="Numero de cuenta" placeholder="Numero de cuenta" />,
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
    name: "Moneda",
    index: "gpafinidad",
    input: (
      <FloatSelected
        width={203}
        label="Moneda"
        placeholder="Moneda"
        options={[
          {
            title: "Libra",
            value: "Libra",
          },
          {
            title: "Peso",
            value: "Peso",
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
export { dataTiposDeCargos, columnsTiposDeCargos, tiposDeCargosSearch };
