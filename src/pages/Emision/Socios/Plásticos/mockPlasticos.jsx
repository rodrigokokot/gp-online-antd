import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";


////////// MOCK SEARCH ARRAY //////////
const PlasticosSearchArray = [
    {
        index:"cuenta",
        input:<FloatInput label="N° de Cuenta" />
    },
    {
        index:"cuenta-orig",
        input:<FloatInput label="N° de Cuenta Original" />,
    },
    {
        index:"apellido",
        input:<FloatInput label="Apellidos" />,
    },
    {
        index:"nombre",
        input:<FloatInput label="Nombres" />,
    },
    {
        index:"tipodoc",
        input:<FloatSelected label="Tipo de documento" options={[
            {
                title:"DNI",
                value:"DNI",
                disabled:false,
            },
            {
                title:"Libreta",
                value:"Libreta de Enrolamiento",
                disabled:false,
            },
        ]} />
    },
    {
        index:"doc",
        input:<FloatInput label="N° de documento" />,
    },
    {
        index:"razon",
        input:<FloatInput label="Razón Social" />,
    },
    {
        index:"empresa",
        input:<FloatInput label="Número empresa" />,
    },
    {
        index:"emisor",
        input:<FloatSelected label="Emisor" options={[
            {
                title:"Mastercard",
                value:"Mastercard",
                disabled:false,
            },
            {
                title:"Visa",
                value:"Visa",
                disabled:false,
            },
        ]} />
    },
    {
        index:"producto",
        input:<FloatSelected label="Producto" options={[
            {
                title:"ProductoA",
                value:"Producto A",
                disabled: false,
            }
        ]} />
    },
]

const columnsPlasticos = [
    {
        name:"Código",
        selector: (row) => row.codigo,
        sortable: true,
    },
    {
        name:"Descripción",
        selector: (row) => row.descripcion,
        sortable: true,
    },
    {
        name:"Tipos Cargo",
        selector: (row) => row.cargo,
        sortable: true,
    },
    {
        name:"Aplica IVA",
        
    }
]

export {PlasticosSearchArray}