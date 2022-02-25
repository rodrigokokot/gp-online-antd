import { Link } from "react-router-dom";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import { cuentas } from "../../../../services";

let productos = [];
let gruposAfinidad = [];

const getListaProductos = async () => {
  const response = await cuentas.getProductos();
  response.map((producto) => {
    productos.push({
      value: producto.idProducto,
      title: producto.descripcion,
    });
  });
};

const getListaGruposAfinidad = async () => {
  const response = await cuentas.getGruposAfinidad();
  response.map((grupo) => {
    gruposAfinidad.push({
      value: grupo.idGrupoAfinidad,
      title: grupo.descripcion,
    });
  });
};

getListaProductos();
getListaGruposAfinidad();

const columnsGestionCuenta = [
  {
    name: "N° de cuenta",
    selector: (row) => row.idCuenta,
    sortable: true,
  },
  {
    name: "Producto",
    selector: (row) => row.producto.descripcion,
    sortable: true,
  },
  {
    name: "Grupo de afinidad",
    selector: (row) => row.grupoAfinidad.descripcion,
    sortable: true,
  },
  {
    name: "Cuenta externa",
    selector: (row) => row.idCuentaExterna,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.socio.persona.nombre,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.socio.persona.numeroDocumento,
    sortable: true,
  },
  {
    name: "N° tarjeta",
    selector: (row) => row.socio.tarjeta.numeroTarjeta,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.idEstado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/socios/cuentas/editarCuenta=${row.idCuenta}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

const dataGestionCuenta = [
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
  },
];
const GestionCuentaSearch = [
  {
    name: "N° de tarjeta",
    index: "Tarjeta",
    input: <FloatInput label="N° de tarjeta" placeholder="N° de tarjeta" />,
  },
  {
    name: "N° de documento",
    index: "NroDocumento",
    input: <FloatInput label="N° de documento" placeholder="N° de documento" />,
  },
  {
    name: "N° de cuenta",
    index: "IdCuenta",
    input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
  },
  {
    index: "IdCuentaExterna",
    input: (
      <FloatInput
        label="N° de cuenta externa"
        placeholder="N° de cuenta externa"
      />
    ),
  },
  {
    index: "IdProducto",
    input: (
      <FloatSelected
        label="Producto"
        placeholder="Producto"
        options={productos}
      />
    ),
  },
  {
    index: "IdGrupoAfinidad",
    input: (
      <FloatSelected
        label="Grupo de afinidad"
        placeholder="Grupo de afinidad"
        options={gruposAfinidad}
      />
    ),
  },
  {
    name: "Nombre",
    index: "Nombre",
    input: <FloatInput label="Nombre" placeholder="Nombre" />,
  },
  {
    name: "Fecha Rel. Hasta",
    index: "fechahasta",
    input: (
      <FloatInput label="Fecha Rel. Hasta" placeholder="Fecha Rel. Hasta" />
    ),
  },
  {
    name: "Cuotas",
    index: "cuotas",
    input: (
      <FloatSelected
        placeholder="Cuotas"
        label="Cuotas"
        options={[
          {
            title: "1",
            value: "1",
            disabled: false,
          },
          {
            title: "3",
            value: "3",
            disabled: false,
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
export { dataGestionCuenta, columnsGestionCuenta, GestionCuentaSearch };
