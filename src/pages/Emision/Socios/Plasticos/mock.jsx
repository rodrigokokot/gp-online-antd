import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import { Link } from "react-router-dom";

////////// MOCK SEARCH ARRAY //////////
const PlasticosSearchArray = [
  {
    index: "cuenta",
    input: <FloatInput label="N° de Cuenta" />,
  },
  {
    index: "cuenta-orig",
    input: <FloatInput label="N° de Cuenta Original" />,
  },
  {
    index: "apellido",
    input: <FloatInput label="Apellidos" />,
  },
  {
    index: "nombre",
    input: <FloatInput label="Nombres" />,
  },
  {
    index: "tipodoc",
    input: (
      <FloatSelected
        label="Tipo de documento"
        options={[
          {
            title: "DNI",
            value: "DNI",
            disabled: false,
          },
          {
            title: "Libreta",
            value: "Libreta de Enrolamiento",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "doc",
    input: <FloatInput label="N° de documento" />,
  },
  {
    index: "razon",
    input: <FloatInput label="Razón Social" />,
  },
  {
    index: "empresa",
    input: <FloatInput label="Número empresa" />,
  },
  {
    index: "emisor",
    input: (
      <FloatSelected
        label="Emisor"
        options={[
          {
            title: "Mastercard",
            value: "Mastercard",
            disabled: false,
          },
          {
            title: "Visa",
            value: "Visa",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "producto",
    input: (
      <FloatSelected
        label="Producto"
        options={[
          {
            title: "ProductoA",
            value: "Producto A",
            disabled: false,
          },
        ]}
      />
    ),
  },
];

const columnsPlasticos = [
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
    selector: (row) => row.cargo,
    sortable: true,
  },
  {
    name: "Aplica IVA",
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: "Débito/Crédito",
    selector: (row) => row.debcred,
    sortable: true,
  },
  {
    name: "Móneda",
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
        to={`/emision/socios/plasticos/editar/${row.codigo}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

const dataPlasticos = [
  {
    codigo: 3,
    descripcion: "Débito prueba",
    cargo: "Sistema",
    iva: "si",
    debcred: "Débito",
    moneda: "Pesos",
    estado: "habilitado",
    option: <Link>Editar</Link>,
  },
];

export { PlasticosSearchArray, columnsPlasticos, dataPlasticos };
