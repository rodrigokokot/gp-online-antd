import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectSearch from "../../../../components/molecules/SelectSearch";



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
        input: <FloatSelected label="Moneda" showSearch={true} options={[
            {
                value:"EUR",
                title:"EUR",
                disabled:false,
            }
        ]} />
    },
    {
        index: "fecha",
        input: <DateRangeFilter />
    }
]