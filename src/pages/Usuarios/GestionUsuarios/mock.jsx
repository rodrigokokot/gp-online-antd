import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 
import FloatInput from "../../../components/molecules/FloatInput/index";
const ColumnsGestionUsuarios =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("gestionusuarios.table.column1")),
    selector: (row) => row.usuario,
    sortable: true
  },
  {
    name: (t("gestionusuarios.table.column2")),
    selector: (row) => row.nombre,
    sortable: true
  },
  {
    name: (t("gestionusuarios.table.column3")),
    selector: (row) => row.apellido,
    sortable: true
  },
  {
    name: (t("gestionusuarios.table.column4")),
    selector: (row) => row.documento,
    sortable: true
  },
  {
    name: (t("gestionusuarios.table.column5")),
    selector: (row) => row.perfil,
    sortable: true
  },
  {
    name: '',
		button: true,
		cell: row => ( 
            <Link to={`/usuarios/gestionDeUsuarios/editarUsuario=${row.usuario}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
              {t("gestionusuarios.table.column6")}
            </Link>
		),
  },
])
}

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
const GestionUsuariosSearch=()=>{
  const { t} = useTranslation();
  return([
  {
     index: 'usuario',
     name: 'Usuario',
     input: <FloatInput placeholder={t("gestionusuarios.search.input1")} label={t("gestionusuarios.search.input1")} />,
   },


   {
     index: 'nombre',
     name: 'Nombre',
     input: <FloatInput placeholder={t("gestionusuarios.search.input2")} label={t("gestionusuarios.search.input2")} />,
   },

   {
     index: 'apellido',
     name: 'Apellido',
     input: <FloatInput placeholder={t("gestionusuarios.search.input3")} label={t("gestionusuarios.search.input3")}/>,
   },
   {
     index: 'ndocumento',
     name: 'N de documento',
     input: <FloatInput placeholder={t("gestionusuarios.search.input4")} label={t("gestionusuarios.search.input4")} />,
   },

 ])
}
export { dataGestionUsuarios, ColumnsGestionUsuarios,GestionUsuariosSearch };
