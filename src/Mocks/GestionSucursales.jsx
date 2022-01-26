import { Link } from "react-router-dom";
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
    option:<Link to="/parametrosPrincipales/gestionSucursales/editarSucursal">Editar</Link>
  },
  {
    id: 32,
    estado: "Activo",
    descripcion: "Sucursal San juan",
    codigo: '0002',
    option:<Link>Editar</Link>
  },
  {
    id: 34,
    estado: "Activo",
    descripcion: "Sucursal San Luis",
    codigo: '0003',
    option:<Link>Editar</Link>
  },
  {
    id: 54,
    estado: "Activo",
    descripcion: "Sucursal Tucuman",
    codigo: '0004',
    option:<Link>Editar</Link>
  },
  {
    id: 25,
    estado: "Activo",
    descripcion: "Sucursal Salta",
    codigo: '0005',
    option:<Link>Editar</Link>
  },
];

export { dataGestionSucursales, columnsGestionSucursales };
