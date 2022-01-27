import React from 'react';
import {DatePicker} from 'antd'
import FloatInput from '../components/molecules/FloatInput';
import FloatSelected from '../components/molecules/FloatSelected';

const {RangePicker} = DatePicker;

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
        input: <RangePicker placeholder={["Fecha Rel. Desde","Fecha Red. Hasta"]}/>
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
    }
]

export {AutorizacionesSearchArray}
