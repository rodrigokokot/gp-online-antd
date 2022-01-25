import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const columnsGestionSucursales = [

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
  

export {dataGestionSucursales,columnsGestionSucursales};
