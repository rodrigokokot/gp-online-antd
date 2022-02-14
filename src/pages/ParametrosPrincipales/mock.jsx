import { Link } from "react-router-dom";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelected from "../../components/molecules/FloatSelected/index";
///////MOCK PARA LOS INPUTS DEL SEARCH////////
const GestionSucursalesSearchMock = [
  {
    index: 'descripcion',
    name: "Descripción",
    input: <FloatInput placeholder="Descripción" label="Descripcion" />,
  },


  {
    index: 'codigo',
    name: "Código",
    input: <FloatInput placeholder="Código" label="Código" />,
  },

  {
    index: 'cp',
    name: "Código Postal",
    input: <FloatInput placeholder="Código Postal" label="Código Postal" />,
  },

  {
    index: 'provincia',
    name: "Provincia",
    input: (
      <FloatSelected
        placeholder="Provincia"
        label="Provincia"
        options={[
          {
            title: "San Juan",
            value: "San Juan",
            disabled: false,
          },
          {
            title: "Mendoza",
            value: "Mendoza",
            disabled: false,
          },
          {
            title: "San Luis",
            value: "San Luis",
            disabled: false,
          },
        ]}
      />
    ),
  },

  {
    index: 'estado',
    name: "Estado",
    input: (
      <FloatSelected
        placeholder="Estado"
        label="Estado"
        options={[
          {
            title: "Activo",
            value: "Activo",
            disabled: false,
          },

          {
            title: "Suspendido",
            value: "Suspendido",
            disabled: false,
          },

          {
            title: "Cancelado",
            value: "Cancelado",
            disabled: false,
          },
        ]}
      />
    ),
  },
];

const columnsGestionSucursales = [
  
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
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/parametrosPrincipales/gestionSucursales/editar/${row.codigo}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				Editar
			</Link>
		),
  },
];

const dataGestionSucursales = [
  {
    id: 23,
    estado: "Activo",
    descripcion: "Sucursal cordoba",
    codigo: '0001',
  },
  {
    id: 32,
    estado: "Activo",
    descripcion: "Sucursal San juan",
    codigo: '0002',
  },
  {
    id: 34,
    estado: "Activo",
    descripcion: "Sucursal San Luis",
    codigo: '0003',
  },
  {
    id: 54,
    estado: "Activo",
    descripcion: "Sucursal Tucuman",
    codigo: '0004',
  },
  {
    id: 25,
    estado: "Activo",
    descripcion: "Sucursal Salta",
    codigo: '0005',
  },
];

export { dataGestionSucursales, columnsGestionSucursales,GestionSucursalesSearchMock };
