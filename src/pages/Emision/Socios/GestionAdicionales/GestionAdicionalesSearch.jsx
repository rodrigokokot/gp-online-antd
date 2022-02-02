import React from 'react';
import FloatInput from '../../../../components/molecules/FloatInput';
import SearchForm from '../../../../components/organisms/SearchForm';

export default function GestionAdicionalesSearch() {
    const handleCallback = (values) =>{
        console.log(values);
    } 


    const GestionAdicionalesSearchArray = [
        {
            index:"cuenta",
            input: <FloatInput label="N° de cuenta" />,
        },
        {
            index:"cuenta-adicional",
            input: <FloatInput label="Cta./Adicional" />,
        },
        {
            index:"documento",
            input:<FloatInput label="N° de documento" />,
        },
        {
            index:"tarjeta",
            input:<FloatInput label="N° de tarjeta" />,
        },
        {
            index:"nombre",
            input:<FloatInput label="Nombre" />,
        },
    ]

    const columnsGestionSucursales = [
        {
            name:"Cta/Adic.",
            selector: (row) => row.adicional,
            sortable: true,
        },
        {
            name:"Nombre",
            selector: (row) => row.nombre,
            sortable: true,
        },
        {
            name:"Documento",
            selector: (row) => row.documento,
            sortable: false,
        },
        {
            name:"Producto",
            selector: (row) => row.producto,
            sortable:true,
        },
        {
            name:"Estado",
            selector: (row) => row.estado,
            sortable: true,
        },
        {
            name:"",
            button: true,
            cell: (row) => (
                <Link to={`/emision/socios/cuentas/gestionDeAdicionales/nueva/${row.adicional}`} style={{textDecoration:"underline"}} rel="noopener noreferrer" />
            )
        }
    ]
  
  
  return <div>

      <SearchForm array={GestionAdicionalesSearchArray} title="Búsqueda de gestión de cuentas" span={6} parentCallback={handleCallback}/>
      <Table />
  </div>;
}
