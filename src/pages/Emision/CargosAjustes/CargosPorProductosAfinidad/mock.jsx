import { Link } from "react-router-dom";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";



///////// MOCK SEARCH ARRAY //////////
export const CargoPorProductosAfinidadSearchArray = [
    {
        index: "codigo",
        input: <FloatInput label="Código" />,
    },
    {
        index: "descripcion",
        input: <FloatInput label="Descripcion" />,
    },
    {
        index: "todos",
        input: <FloatInput label="Todos" />,
    },
    {
        index: "debito",
        input: <FloatSelected label="Débito" options={[
            {
                title:"Visa",
                value:"Visa",
                disabled:false,
            }
        ]} />,
    },
    {
        index: "transaccion",
        input: <FloatSelected label="Grupo Transacción" options={[
            {
                title:"Juridico",
                value:"Juridico",
                disabled:false,
            }
        ]} />
    },
    {
        index: "comprobante",
        input: <FloatInput label="Comprobante" />,
    },
    {
        index: "cuenta",
        input: <FloatInput label="N° de Cuenta" />,
    },
    {
        index: "adic",
        input: <FloatInput label="Adic" />,
    },
    {
        index: "socios",
        input: <FloatSelected label="Liq. Socios (LS)" options={[
            {
                title:"Liquidado",
                value:"Liquidado",
                disabled:false,
            }
        ]} />
    },
    {
        index: "cuotas",
        input: <FloatSelected label="Cuotas" options={[
            {
                title:"3",
                value:"3",
                disabled:false,
            }
        ]} />
    },
    {
        index: "producto",
        input: <FloatSelected label="Producto" options={[
            {
                title:"producto A",
                value:"producto A",
                disabled:false,
            }
        ]} />
    },
    {
        index: "afinidad",
        input: <FloatSelected label="Grupo de afinidad" options={[
            {
                title:"Grupo A",
                value:"Grupo A",
                disabled: false,
            }
        ]} />
    },
    {
        index: "moneda",
        input: <SelectImg />
    },
    {
        index: "fecha",
        input: <DateRangeFilter />
    }
]

///////// MOCK COLUMNA TABLA //////////
export const columnsCargosProductosAfinidad = [
    {
        name: "Producto",
        selector: (row) => row.producto,
        sortable: true,
    },
    {
        name: "Grupo de Afinidad",
        selector: (row) => row.afinidad,
        sortable: true,
    },
    {
        name: "Concepto",
        selector: (row) => row.concepto,
        sortable: true,
    },
    {
        name: "Precio",
        selector: (row) => row.precio,
        sortable: true,
    },
    {
        name: "Aplica IVA",
        selector: (row) => row.iva,
        sortable: true,
    },
    {
        name: "Porcentaje Cargo",
        selector: (row) => row.cargo,
        sortable: false,
    },
    {
        name: "Vigencia Desde",
        selector: (row) => row.fechadesde,
        sortable: true,
    },
    {
        name: "Vigencia Hasta",
        selector: (row) => row.fechahasta,
        sortable: true,
    },
    {
        name: "",
        button: true,
        cell: (row) =>(<Link
            to={`/emision/cargosAjustes/cargosPorProductosAfinidad/editar/${row.producto}`}
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            Editar
          </Link>
        ),
    },
];

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

