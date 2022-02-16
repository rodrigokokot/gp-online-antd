import FloatInput from '../../../components/molecules/FloatInput/index'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


/////////MOCK PARA LOS INPUTS DEL SEARCH////////
const GestionPerfilesSearchMock =()=>{
    const { t} = useTranslation();
    return( [
    {
        name: 'Tipo de Perfil',
        index: 'tipo',
        input: <FloatInput placeholder={t("gestionperfiles.search.input1")} label={t("gestionperfiles.search.input1")} />
    },
    {
        index: 'nombre',
        name: 'Nombre',
        input: <FloatInput placeholder={t("gestionperfiles.search.input2")} label={t("gestionperfiles.search.input2")} />,
      },
   
      {
        index: 'apellido',
        name: 'Apellido',
        input: <FloatInput placeholder={t("gestionperfiles.search.input3")} label={t("gestionperfiles.search.input3")}/>,
      },
      {
        index: 'ndocumento',
        name: 'N de documento',
        input: <FloatInput placeholder={t("gestionperfiles.search.input4")} label={t("gestionperfiles.search.input4")} />,
      },
])
}

////////MOCK PARA LAS COLUMNAS DE LA TABLA/////
const ColumnsGestionPerfiles =()=>{
    const { t} = useTranslation();
    return([
    {
        name: (t("gestionperfiles.table.column1")),
        selector: (row) => row.tipo,
        sortable: true
    },
    {
        name: '',
        button: true,
        cell: row =>(
            <Link to={`/usuarios/gestionDePerfiles/editarPerfil=${row.id}`} style={{textDecoration:"underline"}} rel="noopener noreferrer" >
                {t("gestionperfiles.table.column2")}
            </Link>
        )
    }
])
}

////////MOCK PARA LA DATA DE LA TABLA
const dataGestionPerfiles = [
    {
        id: '001',
        tipo: 'Admin',
        nombre: 'Juan',
        apellido: 'Carlos',

    },
    {
        id: '002',
        tipo: 'User',
        nombre: 'Facu',
        apellido: 'Flores',

    }
]


export {GestionPerfilesSearchMock, ColumnsGestionPerfiles, dataGestionPerfiles}