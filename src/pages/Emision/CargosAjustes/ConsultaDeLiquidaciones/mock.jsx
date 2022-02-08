import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";


///////// MOCK SEARCH ARRAY ///////////
export const ConsultaLiquidacionesSearchArray = [
    {
        index:"marca",
        input:<FloatSelected label="Marca" options={[
            {
                title:"EUR",
                value:"EUR",
                disabled:false,
            }
        ]} />
    },
    {
        index:"emisor",
        input:<FloatSelected label="Emisor" options={[
            {
                title:"Emisor A",
                value:"Emisor A",
                disabled:false,
            }
        ]} />
    },
    {
        index:"ap-razonsocial",
        input:<FloatInput label="Apellido/Raz. Social" />
    },
    {
        index:"2apellido",
        input:<FloatInput label="2do apellido" />
    },
    {
        index:"producto",
        input:<FloatSelected label="Tipo de producto" options={[
            {
                title:"ProductoA",
                value:"ProductoA",
                disabled:false,
            }
        ]} />
    },
    {
        index:"tipo-documento",
        input:<FloatSelected label="Tipo de Documento" options={[
            {
                title:"DNI",
                value:"DNI",
                disabled:false,
            }
        ]} />
    },
    {
        index:"documento",
        input:<FloatInput label="N° de Documento" />
    },
    {
        index:"cuenta",
        input:<FloatSelected label="Cuentas" options={[
            {
                title:"CuentaA",
                value:"CuentaA",
                disabled:false,
            }
        ]} />
    },
    {
        index:"periodo",
        input:<FloatSelected label="Periodo (AAAAMM)" options={[
            {
                title: new Date().toISOString().split('T')[0],
                value: new Date().toISOString().split('T')[0],
                disabled: false,
            }
        ]} />
    },
    {
        index: "mensual",
        input: <FloatSelected label="Mensual" options={[
            {
                title:"Trimestre",
                value:"Trimestre",
                disabled:false,
            }
        ]} />
    },
    {
        index: "??",
        input: <FloatSelected options={[
            {
                title:"1",
                value:"1",
                disabled:false,
            }
        ]} />
    }
]

////////// MOCK COLUMNAS TABLA ///////////

export const columnsConsultaLiquidaciones = [
    {
        name:"Fecha",
        selector: (row) => row.fecha,
        sortable: true,
    },
    {
        name:"Tarjeta",
        selector: (row) => row.tarjeta,
        sortable: true,
    },
    {
        name:"Descripcion",
        selector: (row) => row.descripcion,
        sortable: true,
    },
    {
        name:"Moneda",
        selector: (row) => row.moneda,
        sortable: true,
    },
    {
        name:"Importe",
        selector: (row) => row.importe,
        sortable: true,
    },
    {
        name:"Importe",
        selector: (row) => row.importe,
        sortable: true,
    },
    {
        name:"Comprobante",
        selector: (row) => row.comprobante,
        sortable: true,
    },
    {
        name:"Producto",
        selector: (row) => row.producto,
        sortable: true,
    }
];

///////// MOCK DATA TABLA /////////

export const dataConsultaLiquidaciones = [
    {
        fecha: new Date().toISOString().split('T')[0],
        tarjeta: "525882025",
        descripcion: "C2C AR",
        moneda: "Local",
        importe: "500",
        comprobante: "107687131",
        producto: "Ualá producto",
    }
];
