import FloatInput from '../components/molecules/FloatInput/index'
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
            <Link to={`/usuarios/gestionDePerfiles/edit/${row.id}`} />
        )
    }
]

export {GestionPerfilesSearchMock}