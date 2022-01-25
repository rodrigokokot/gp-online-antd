import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const columnsGestionUsuarios = [
  {
    name: "Usuario",
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Apellido",
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: "Perfil",
    selector: (row) => row.perfil,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => ( 
            <Link to={`/usuarios/gestionUsuarios/editarUsuario/${row.codigo}`} style={{textDecoration:"underline"}} target="_blank" rel="noopener noreferrer">
              Editar
            </Link>
		),
  },
];

const dataGestionUsuarios = [
  {
    id: 10,
    Usuario: 21,
    Nombre: "Pedro",
    Apellido: "Perez",
    Documento: "35.534.654",
    Perfil: "Customer Service",
    option:<Link to="/usuarios/gestionUsuarios/editarUsuario">Editar</Link>
  },
  {
    id: 13,
    Usuario: 21,
    Nombre: "Pedro",
    Apellido: "Perez",
    Documento: "35.534.654",
    Perfil: "Customer Service",
    option:<Link to="/usuarios/gestionUsuarios/editarUsuario">Editar</Link>
  },
  {
    id: 14,
    Usuario: 21,
    Nombre: "Pedro",
    Apellido: "Perez",
    Documento: "35.534.654",
    Perfil: "Customer Service",
    option:<Link to="/usuarios/gestionUsuarios/editarUsuario">Editar</Link>
  },
  {
    id: 15,
    Usuario: 21,
    Nombre: "Pedro",
    Apellido: "Perez",
    Documento: "35.534.654",
    Perfil: "Customer Service",
    option:<Link to="/usuarios/gestionUsuarios/editarUsuario">Editar</Link>
  },
  {
    id: 16,
    Usuario: 21,
    Nombre: "Pedro",
    Apellido: "Perez",
    Documento: "35.534.654",
    Perfil: "Customer Service",
    option:<Link to="/usuarios/gestionUsuarios/editarUsuario">Editar</Link>
  },
];

export { dataGestionUsuarios, columnsGestionUsuarios };
