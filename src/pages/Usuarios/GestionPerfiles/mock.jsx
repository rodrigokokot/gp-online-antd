import FloatInput from '../../../components/molecules/FloatInput/index'
import {Link} from 'react-router-dom'


/////////MOCK PARA LOS INPUTS DEL SEARCH////////
const GestionPerfilesSearchMock = [
    {
        name: 'Tipo de Perfil',
        index: 'tipo',
        input: <FloatInput placeholder='Tipo de Perfil' label='Tipo de Perfil' />
    },
    {
        name: 'Nombre',
        index: 'nombre',
        input: <FloatInput placeholder='Nombre' label='Nombre' />
    },
    {
        name: 'Apellido',
        index: 'apellido',
        input: <FloatInput placeholder='Apellido' label='Apellido' />
    },
    {
        name: 'N° de documento',
        index: 'doc',
        input: <FloatInput placeholder='N° de documento' label='N° de documento' />
    }
];

////////MOCK PARA LAS COLUMNAS DE LA TABLA/////
const columnsGestionPerfiles =[
    {
        name: 'Tipo de Perfil',
        selector: (row) => row.tipo,
        sortable: true
    },
    {
        name: '',
        button: true,
        cell: row =>(
            <Link to={`/usuarios/gestionDePerfiles/editar/${row.id}`} style={{textDecoration:"underline"}} rel="noopener noreferrer" > Editar </Link>
        )
    }
]

////////MOCK PARA LA DATA DE LA TABLA
const dataGestionPerfiles = [
    {
        id: '001',
        tipo: 'Admin',
        nombre: 'Juan',
        apellido: 'Carlos',
        option:<Link>Editar</Link>
    },
    {
        id: '002',
        tipo: 'User',
        nombre: 'Facu',
        apellido: 'Flores',
        option:<Link>Editar</Link>
    }
]


export {GestionPerfilesSearchMock, columnsGestionPerfiles, dataGestionPerfiles}