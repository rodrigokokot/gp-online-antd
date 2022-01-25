import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const columnsGestionSucursales = [
<<<<<<< HEAD
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Codigo",
      selector: (row) => row.codigo,
      sortable: true,
    }
  ];
  
  const dataGestionSucursales = [
    {
      id: 23,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 111,
    },
    {
      id: 32,
      estado: "Activo",
      descripcion: "buenas noches",
      codigo: 222,
    },
    {
      id: 34,
      estado: "Cancelado",
      descripcion: "buenas noches",
      codigo: 333,
    },
    {
      id: 54,
      estado: "Suspendido",
      descripcion: "buen dia",
      codigo: 444,
=======
  {
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: "Codigo",
    selector: (row) => row.codigo,
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
			<Link to={`/parametrosPrincipales/gestionSucursales/editarSucursal/${row.codigo}`} style={{textDecoration:"underline"}} target="_blank" rel="noopener noreferrer">
				Editar
			</Link>
		),
  },
];
>>>>>>> 0a588ca84d16218261d746c2de04537e6840179f

const dataGestionSucursales = [
  {
    id: 23,
    estado: "Activo",
    descripcion: "buen dia",
    codigo: 999,
    option:<Link to="/parametrosPrincipales/gestionSucursales/editarSucursal">Editar</Link>
  },
  {
    id: 32,
    estado: "Activo",
    descripcion: "buen dia",
    codigo: 999,
    option:<Link>Editar</Link>
  },
  {
    id: 34,
    estado: "Activo",
    descripcion: "buen dia",
    codigo: 999,
    option:<Link>Editar</Link>
  },
  {
    id: 54,
    estado: "Activo",
    descripcion: "buen dia",
    codigo: 999,
    option:<Link>Editar</Link>
  },
  {
    id: 25,
    estado: "Activo",
    descripcion: "buen dia",
    codigo: 999,
    option:<Link>Editar</Link>
  },
];

<<<<<<< HEAD



    },
    {
      id: 25,
      estado: "Suspendido",
      descripcion: "buen dia",
      codigo: 999,





    },
  ];
  


export {dataGestionSucursales,columnsGestionSucursales};
=======
export { dataGestionSucursales, columnsGestionSucursales };
>>>>>>> 0a588ca84d16218261d746c2de04537e6840179f
