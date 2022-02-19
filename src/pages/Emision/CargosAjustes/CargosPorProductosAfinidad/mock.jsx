import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";



///////// MOCK SEARCH ARRAY //////////
export const CargoPorProductosAfinidadSearchArray =()=>{
    const { t} = useTranslation();
    return([
    {
        index: "codigo",
        input: <FloatInput label={t("afinidad.search.input1")} />,
    },
    {
        index: "descripcion",
        input: <FloatInput label={t("afinidad.search.input2")} />,
    },
    {
        index: "todos",
        input: <FloatInput label={t("afinidad.search.input3")}/>,
    },
    {
        index: "debito",
        input: <FloatSelected label={t("afinidad.search.input4")} options={[
            {
                title:"Visa",
                value:"Visa",
                disabled:false,
            }
        ]} />,
    },
    {
        index: "transaccion",
        input: <FloatSelected label={t("afinidad.search.input5")} options={[
            {
                title:"Juridico",
                value:"Juridico",
                disabled:false,
            }
        ]} />
    },
    {
        index: "comprobante",
        input: <FloatInput label={t("afinidad.search.input6")} />,
    },
    {
        index: "cuenta",
        input: <FloatInput label={t("afinidad.search.input7")} />,
    },
    {
        index: "adic",
        input: <FloatInput label={t("afinidad.search.input8")} />,
    },
    {
        index: "socios",
        input: <FloatSelected label={t("afinidad.search.input9")} options={[
            {
                title:"Liquidado",
                value:"Liquidado",
                disabled:false,
            }
        ]} />
    },
    {
        index: "cuotas",
        input: <FloatSelected label={t("afinidad.search.input10")} options={[
            {
                title:"3",
                value:"3",
                disabled:false,
            }
        ]} />
    },
    {
        index: "producto",
        input: <FloatSelected label={t("afinidad.search.input11")}options={[
            {
                title:"producto A",
                value:"producto A",
                disabled:false,
            }
        ]} />
    },
    {
        index: "afinidad",
        input: <FloatSelected label={t("afinidad.search.input12")} options={[
            {
                title:"Grupo A",
                value:"Grupo A",
                disabled: false,
            }
        ]} />
    }, 
    {
      index: "moneda",
      input: <SelectImg showSearch={true} placeholder={t("afinidad.search.input13")}style={{width: 250}}/>
    }, 
    {
        index: "fecha",
        input: <DateRangeFilter />
    }
])
}

///////// MOCK COLUMNA TABLA //////////
export const ColumnsCargosProductosAfinidad=()=>{
    const { t} = useTranslation();
    return([
    {
        name: (t("afinidad.table.column1")),
        selector: (row) => row.producto,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column2")),
        selector: (row) => row.afinidad,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column3")),
        selector: (row) => row.concepto,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column4")),
        selector: (row) => row.precio,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column5")),
        selector: (row) => row.iva,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column6")),
        selector: (row) => row.cargo,
        sortable: false,
    },
    {
        name: (t("afinidad.table.column7")),
        selector: (row) => row.fechadesde,
        sortable: true,
    },
    {
        name: (t("afinidad.table.column8")),
        selector: (row) => row.fechahasta,
        sortable: true,
    },
    {
        name: "",
        button: true,
        cell: (row) =>(<Link
            to={`/emision/cargosAjustes/cargosPorProductosAfinidad/editarCargoPorProductoYAfinidad=${row.producto}`}
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            {t("afinidad.table.column9")}
          </Link>
        ),
    },
])
}

////////// MOCK DATA TABLA /////////

export const dataCargosProductosAfinidad = [
    {
        producto:"001",
        afinidad:"GAF 999 HABILITADO",
        concepto:"Cargo por renovación",
        precio:"15",
        iva: true.toString(),
        cargo: "-",
        fechadesde: new Date().toString(),
        fechahasta: new Date().toString(),
    }
]

