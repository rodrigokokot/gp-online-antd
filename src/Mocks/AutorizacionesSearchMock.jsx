import React from 'react';
import {DatePicker} from 'antd'
import FloatInput from '../components/molecules/FloatInput';
import FloatSelected from '../components/molecules/FloatSelected';
import { Link } from 'react-router-dom';
import DateRangeFilter from '../components/organisms/DateRangeFilter';

const {RangePicker} = DatePicker;

///////// MOCK INPUTS DE FORMULARIO /////////
const AutorizacionesSearchArray = [
    {
        name: "N° de tarjeta",
        index: "tarjeta",
        input: <FloatInput label="N° de tarjeta" placeholder="N° de tarjeta" />,
    },
    {
        name: "N° de documento",
        index: "documento",
        input: <FloatInput label="N° de documento" placeholder="N° de documento" />,
    },
    {
        name: "Producto",
        index: "producto",
        input: <FloatInput label="Producto" placeholder="Producto" />,
    },
    {
        name: "N° de cuenta",
        index: "cuenta",
        input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />
    },
    {
        name: "Cuenta Adicional",
        index: "adicional",
        input: <FloatInput label="Cuenta Adicional" placeholder="Cuenta Adicional" />
    },
    {
        name: "N° de comercio",
        index: "comercio",
        input: <FloatInput label="N° de comercio" placeholder="N° de comercio" />,
    },
    {
        name: "Modo Ingreso",
        index: "ingreso",
        input: <FloatInput label="Modo Ingreso" placeholder="Modo Ingreso" />,
    },
    {
        name: "Ubicación",
        index: "ubicacion",
        input: <FloatSelected label="Ubicación" placeholder="Ubicación" options={[
            {
                title:"Local",
                value:"Local",
                disabled:false,
            },
            {
                title:"Ajeno",
                value:"Ajeno",
                disabled:false,
            }
        ]} />
    },
    {
        name: "Origen",
        index: "origen",
        input: <FloatSelected label="Origen" placeholder="Origen" options={[
            {
                title:"ArchivoMar",
                value:"ArchivoMar",
                disabled:false,
            }
        ]} />
    },
    {
        name: "Relacionada",
        index: "relacionada",
        input: <FloatSelected label="Relacionada" placeholder="Relacionada" options={[
            {
                title:"Parcial",
                value:"Parcial",
                disabled:false,
            }
        ]} />
    },
    {
        name: "Motivo de rechazo",
        index: "rechazo",
        input: <FloatSelected label="Motivo de rechazo" placeholder="Motivo de rechazo" options={[
            {
                title:"Emisor inválido",
                value:"Emisor inválido",
                disabled: false
            }
        ]} />
    },
    {
        name: "Estado",
        index: "estado",
        input: <FloatSelected label="Estado" placeholder="Estado" mode="tags" options={[
            {
                title:"Aprobada",
                value:"Aprobada",
                disabled: false,
            },
            {
                title:"Rechazada",
                value:"Rechazada",
                disabled: false,
            },
            {
                title:"Anulada",
                value:"Anulada",
                disabled:false,
            },
            {
                title:"Sin autorizacióin emisor",
                value:"Sin autorización emisor",
                disabled:false,
            }
        ]} />
    },
    {
        name: "Fecha Rel. Desde/Hasta",
        index: "rangefecharel",
        input: <RangePicker placeholder={["Fecha Rel. Desde","Fecha Rel. Hasta"]}/>
    },
    {
        name: "Cuotas",
        index: "cuotas",
        input: <FloatSelected placeholder="Cuotas" label="Cuotas" options={[
            {
                title:"1",
                value:"1",
                disabled:false,
            },
            {
                title:"3",
                value:"3",
                disabled: false,
            }
        ]}/>
    },
    {
        name: "DateRange",
        index: "dateragne",
        input: <DateRangeFilter></DateRangeFilter>
    }
]

////////// MOCK COLUMNAS DE LA TABLA //////////
const columnsAutorizaciones = [
    {
        name:"Cuenta",
        selector: (row) => row.cuenta,
        sortable: true,
    },
    {
        name:"Adi",
        selector: (row) => row.adi,
        sortable: false,
    },
    {
        name:"Tarjeta",
        selector: (row) => row.tarjeta,
        sortable: false,
    },
    {
        name:"Fecha",
        selector: (row) => row.fecha,
        sortable: true,
    },
    {
        name:"Importe",
        selector: (row) => row.importe,
        sortable: false,
    },
    {
        name:"Moneda",
        selector: (row) => row.moneda,
        sortable: false,
    },
    {
        name:"Plan",
        selector: (row) => row.plan,
        sortable: false,
    },
    {
        name:"Cuotas",
        selector: (row) => row.cuotas,
        sortable: true,
    },
    {
        name:"Cod/Auto",
        selector: (row) => row.auto,
        sortable: false,
    },
    {
        name:"Comercio",
        selector: (row) => row.comercio,
        sortable: true,
    },
    {
        name:"Estado",
        selector: (row) => row.estado,
        sortable: true,
    },
    {
        name:"",
        button:true,
        cell: (row) =>(
            <Link to={`/emision/movimientos/autorizaciones/ver/${row.auto}`} style={{textDecoration:"underline"}} rel="noopener noreferrer" > ver detalle </Link>
        )
    }
]

const dataAutorizaciones = [
    {
        cuenta: 1471107,
        adi: 0,
        tarjeta: 5427022564065454,
        fecha: new Date().toString(),
        importe: 3890,
        moneda: "Local",
        plan: "Consumo en pesos",
        cuotas: 3,
        auto: 339302,
        comercio: "13011602-Hidalo Liliana Beatriz",
        estado: "Aprobada",
        option: <Link>Editar</Link>

    }
]

export {AutorizacionesSearchArray, columnsAutorizaciones, dataAutorizaciones}
