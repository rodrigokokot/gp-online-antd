import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FloatInput from "../../components/molecules/FloatInput";
import FloatSelected from "../../components/molecules/FloatSelected";
import DateRangeFilter from "../../components/organisms/DateRangeFilter";
import { test } from "../../services";

const useMock = () => {
  const [dataProducts, setProducts] = useState([])
  useEffect( async () => {
    const res = await test.getAll()
    console.log(res);
  }, [])

}

const columnsGestionCuenta = [
  {
    name: "N° de cuenta",
    selector: (row) => row.idcuenta,
    sortable: true,
  },
  {
    name: "Producto",
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: "Grupo de afinidad",
    selector: (row) => row.gpafinidad,
    sortable: true,
  },
  {
    name: "Cuenta externa",
    selector: (row) => row.cexterna,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.dni,
    sortable: true,
  },
  {
    name: "N° tarjeta",
    selector: (row) => row.tarjeta,
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
        to={`/emision/socios/cuentas/editarCuenta=${row.idcuenta}`}
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
const GestionCuentaSearch = [
  {
    name: "N° de tarjeta",
    index: "tarjeta",
    input: <FloatInput label="N° de tarjeta" placeholder="N° de tarjeta" />,
  },
  {
    name: "N° de documento",
    index: "documento",
    input: <FloatInput label="N° de documento" placeholder="N° de documento" />,
  },
  {
    name: "N° de cuenta",
    index: "cuenta",
    input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
  },
  {
    name: "N° de cuenta externa",
    index: "cuentaexterna",
    input: (
      <FloatInput
        label="N° de cuenta externa"
        placeholder="N° de cuenta externa"
      />
    ),
  },
  {
    name: "Producto",
    index: "producto",
    input: (
      <FloatSelected
        label="Producto"
        placeholder="Producto"
        options={[
          {
            title: "Producto 1",
            value: "Producto 1",
            disabled: false,
          },
          {
            title: "Producto 2",
            value: "Producto 2",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    name: "Grupo de afinidad",
    index: "gpafinidad",
    input: (
      <FloatSelected
        label="Grupo de afinidad"
        placeholder="Grupo de afinidad"
        options={[
          {
            title: "Grupo 1",
            value: "Grupo 1",
            disabled: false,
          },
          {
            title: "Grupo 2",
            value: "Grupo 2",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    name: "Nombre",
    index: "nombre",
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
export { dataGestionCuenta, columnsGestionCuenta, GestionCuentaSearch, useMock };
