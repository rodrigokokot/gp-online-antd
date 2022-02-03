import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";



///////// MOCK INPUTS SEARCH ////////
const TarjetasSearchArray = [
    {
        index:"tarjeta",
        input: <FloatInput label="N° de tarjeta" />,
    },
    {
        index:"cuenta",
        input: <FloatInput label="N° de cuenta" />,
    },
    {
        index:"adicional",
        input: <FloatInput label="Adicional"/>,
    },
    {
        index:"documento",
        input: <FloatInput label="N° de documento" />,
    },
    {
        index:"nombre",
        input: <FloatInput label="Nombre" />,
    },
    {
        index:"fecha",
        input:<DateRangeFilter />
    }
]

///////// MOCK COLUMNAS TABLA ////////
    const columnsTarjetas = [
        {
            name: "N° Tarjeta",
            selector: (row) => row.tarjeta,
            sortable:false,
        },
        {
            name:"N° Cuenta",
            selector:(row) => row.cuenta,
            sortable: true,
        },
        {
            name:"Producto",
            selector:(row) => row.producto,
            sortable:true,
        },
        {
            name:"Grupo de afinidad",
            selector:(row) => row.afinidad,
            sortable:true,
        },
        {
            name:"Cuenta externa",
            selector:(row) => row.externa,
            sortable:true,
        },
        {
            name:"Nombre",
            selector:(row) => row.nombre,
            sortable:true,
        },
        {
            name:"N° documento",
            selector:(row) => row.documento,
            sortable:false,
        },
        {
            name:"Estado",
            selector:(row) => row.estado,
            sortable:false,
        },
        {
            name:"",
            button:true,
            cell: (row) =>(<Link
            to={`/emision/socios/tarjetas/ver/${row.tarjeta}`}
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            Ver detalle
          </Link>
        ),
        }
    ]

////////// MOCK DATA TABLA /////////

    const dataTarjetas = [
        {
            tarjeta: '552268XXXXXX0372',
            cuenta: "001471107",
            producto: "Producto S",
            afinidad: "Disponible",
            externa: "001471105",
            nombre: "Raymundo Valdez",
            documento: "DNI 24801003",
            estado: "Activo",
            option: <Link>Ver detalle</Link>
        }
    ]


    const handleCallback = (values) =>{
        console.log(values);
    }

export default function TarjetasSearch() {
  return <div>

    <SearchForm array={TarjetasSearchArray} title="Búsqueda de tarjetas" parentCallback={handleCallback} span={4} />
    <Table columns={columnsTarjetas} data={dataTarjetas} expandible={false} editable={true} />
  </div>;
}
