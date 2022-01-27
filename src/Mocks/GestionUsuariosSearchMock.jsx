import { Link } from "react-router-dom";

import FloatInput from "../components/molecules/FloatInput/index";
const columnsGestionUsuarios = [
  {
    name: 'Usuario',
    selector: (row) => row.usuario,
    sortable: true
  },
  {
    name: 'Nombre',
    selector: (row) => row.nombre,
    sortable: true
  },
  {
    name: 'Apellido',
    selector: (row) => row.apellido,
    sortable: true
  },
  {
    name: 'Documento',
    selector: (row) => row.documento,
    sortable: true
  },
  {
    name: 'Perfil',
    selector: (row) => row.perfil,
    sortable: true
  },
  {
    name: '',
		button: true,
		cell: row => ( 
            <Link to={`/usuarios/gestionUsuarios/editar/${row.Usuario}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
              Editar
            </Link>
		),
  },
];

const dataGestionUsuarios = [
  {
    id: '10',
    usuario: '21',
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option:<Link>Editar</Link>
  },
  {
    id: '13',
    usuario: '12',
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option:<Link>Editar</Link>
  },
  {
    id: '14',
    usuario: '3',
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option:<Link>Editar</Link>
  },
  {
    id: '15',
    usuario: '2',
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option:<Link>Editar</Link>
  },
  {
    id: '16',
    usuario: '1',
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option:<Link>Editar</Link>
  },
];
const GestionUsuariosSearch = [
  {
     index: 'usuario',
     name: 'Usuario',
     input: <FloatInput placeholder="Usuario" label="Usuario" />,
   },


   {
     index: 'nombre',
     name: 'Nombre',
     input: <FloatInput placeholder="Nombre" label="Nombre" />,
   },

   {
     index: 'apellido',
     name: 'Apellido',
     input: <FloatInput placeholder="Apellido" label="Apellido" />,
   },
   {
     index: 'Ndocumento',
     name: 'N° de documento',
     input: <FloatInput placeholder='N de documento' label='N de documento' />,
   },

 ];
export { dataGestionUsuarios, columnsGestionUsuarios,GestionUsuariosSearch };
