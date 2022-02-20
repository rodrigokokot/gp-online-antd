import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";


///////// MOCK SEARCH ARRAY ///////////
export const ConsultaLiquidacionesSearchArray =()=>{
    const { t} = useTranslation();
    return([
    {
        index:"marca",
        input:<FloatSelected label={t("liquidacion.search.input1")} options={[
            {
                title:"EUR",
                value:"EUR",
                disabled:false,
            }
        ]} />
    },
    {
        index:"emisor",
        input:<FloatSelected label={t("liquidacion.search.input2")} options={[
            {
                title:"Emisor A",
                value:"Emisor A",
                disabled:false,
            }
        ]} />
    },
    {
        index:"ap-razonsocial",
        input:<FloatInput label={t("liquidacion.search.input3")} />
    },
    {
        index:"2apellido",
        input:<FloatInput label={t("liquidacion.search.input4")} />
    },
    {
        index:"producto",
        input:<FloatSelected label={t("liquidacion.search.input5")} options={[
            {
                title:"ProductoA",
                value:"ProductoA",
                disabled:false,
            }
        ]} />
    },
    {
        index:"tipo-documento",
        input:<FloatSelected label={t("liquidacion.search.input6")} options={[
            {
                title:"DNI",
                value:"DNI",
                disabled:false,
            }
        ]} />
    },
    {
        index:"documento",
        input:<FloatInput label={t("liquidacion.search.input7")} />
    },
    {
        index:"cuenta",
        input:<FloatSelected label={t("liquidacion.search.input8")} options={[
            {
                title:"CuentaA",
                value:"CuentaA",
                disabled:false,
            }
        ]} />
    },
    {
        index:"periodo",
        input:<FloatSelected label={t("liquidacion.search.input9")} options={[
            {
                title: new Date().toISOString().split('T')[0],
                value: new Date().toISOString().split('T')[0],
                disabled: false,
            }
        ]} />
    },
    {
        index: "mensual",
        input: <FloatSelected label={t("liquidacion.search.input10")}options={[
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
])
}

////////// MOCK COLUMNAS TABLA ///////////

export const ColumnsConsultaLiquidaciones=()=>{
    const { t} = useTranslation();
    return([
    {
        name:(t("liquidacion.table.column1")),
        selector: (row) => row.fecha,
        sortable: true,
    },
    {
        name:(t("liquidacion.table.column2")),
        selector: (row) => row.tarjeta,
        sortable: true,
    },
    {
        name:(t("liquidacion.table.column3")),
        selector: (row) => row.descripcion,
        sortable: true,
    },
    {
        name:(t("liquidacion.table.column4")),
        selector: (row) => row.moneda,
        sortable: true,
    },
    {
        name:(t("liquidacion.table.column5")),
        selector: (row) => row.importe,
        sortable: true,
    }, 
    {
        name:(t("liquidacion.table.column6")),
        selector: (row) => row.comprobante,
        sortable: true,
    },
    {
        name:(t("liquidacion.table.column7")),
        selector: (row) => row.producto,
        sortable: true,
    }
])
}

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
