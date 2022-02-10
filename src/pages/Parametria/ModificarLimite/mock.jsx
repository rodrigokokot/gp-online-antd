import { Link } from 'react-router-dom';
import FloatSelected from '../../../components/molecules/FloatSelected';
import FloatInput from "../../../components/molecules/FloatInput/index";
const columnsLimite = [
    {
      name: 'Emisor-Sucursal',
      selector: (row) => row.esucursal,
      sortable: true
    },
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true
    },
    {
      name: 'Documento',
      selector: (row) => row.documento,
      sortable: true
    },
    {
      name: 'Marca',
      selector: (row) => row.marca,
      sortable: true
    },
    {
      name: 'Cuenta',
      selector: (row) => row.cuenta,
      sortable: true
    },
    {
      name: 'Producto',
      selector: (row) => row.producto,
      sortable: true
    },
    {
      name: 'Adicional',
      selector: (row) => row.adicional,
      sortable: true
    },
    {
      name: 'Tarjeta',
      selector: (row) => row.tarjeta,
      sortable: true
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <Link
          to={`/parametria/modificarLimite/editar/${row.id}`}
          style={{ textDecoration: "underline" }}
          rel="noopener noreferrer"
        >
          Editar
        </Link>
      ),
    },
  ];
  
  const dataLimite = [
    {
      esucursal: 'Tarjeta Grupar - Cordoba',
      id: '1617811',
      nombre: "Mari",
      documento: "DNI 24801003",
      marca: "Tarjeta Grupar",
      cuenta: "001471107", 
      producto: "Tarjeta Grupar",
      adicional: "1",
      tarjeta: "6063011055857316",

    }, 
    {
        esucursal: 'Tarjeta Grupar - Cordoba',
        id: '1617811',
        nombre: "Mari",
        documento: "DNI 24801003",
        marca: "Tarjeta Grupar",
        cuenta: "001471108", 
        producto: "Tarjeta Grupar",
        adicional: "1",
        tarjeta: "6063011055857316",
      }, 
  ];
  const LimiteSearch = [
    {
       index: 'Emisor', 
       input: (
        <FloatSelected
          placeholder="Emisor"
          label="Emisor"
          options={[
            { title: "emisor 1", value: 1,disabled: false, },
            { title: "emisor 2", value: 2,disabled: false, },
            { title: "emisor 3", value: 3,disabled: false, },
          ]} 
        ></FloatSelected>
      ),
     },
     {
      index: 'N° de tajeta',
      name: 'tarjeta',
      input: <FloatInput placeholder="N° de tajeta" label="N° de tajeta" />,
    },
    {
      index: 'N° de documento',
      name: 'documento',
      input: <FloatInput placeholder="N° de documento" label="N° de documento" />,
    },
    {
        index: 'Producto', 
        input: (
         <FloatSelected
           placeholder="Producto"
           label="Producto"
           options={[
             { title: "producto 1", value: 1,disabled: false, },
             { title: "producto 2", value: 2,disabled: false, },
             { title: "producto 3", value: 3,disabled: false, },
           ]} 
         ></FloatSelected>
       ),
      },
      {
        index: 'N° de cuenta',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta" label="N° de cuenta" />,
      },
      {
        index: 'N° de cuenta orginal',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta original" label="N° de cuenta original" />,
      },
      {
        index: 'N° de cuenta relacionada',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta relacionada" label="N° de cuenta relacionada" />,
      },
      {
          index: 'Marca', 
          input: (
           <FloatSelected
             placeholder="Marca"
             label="Marca"
             options={[
               { title: "Marca 1", value: 1,disabled: false, },
               { title: "Marca 2", value: 2,disabled: false, },
               { title: "Marca 3", value: 3,disabled: false, },
             ]} 
           ></FloatSelected>
         ),
      },
      {
          index: 'Tipo de documento', 
          input: (
           <FloatSelected
             placeholder="Tipo de documento"
             label="Tipo de documento"
             options={[
               { title: "T de documento 1", value: 1,disabled: false, },
               { title: "T de documento 2", value: 2,disabled: false, },
               { title: "T de documento 3", value: 3,disabled: false, },
             ]} 
           ></FloatSelected>
         ),
      },
      {
        index: 'N° de documento',
        name: 'ndocumento',
        input: <FloatInput placeholder="N° de documento" label="N° de documento" />,
      },
        {
          index: 'Razón social',
          name: 'razonsocial',
          input: <FloatInput placeholder="Razón social" label="Razón social" />,
        },
        {
            index: 'Número de empresa', 
            input: (
             <FloatSelected
               placeholder="Número de empresa"
               label="Número de empresa"
               options={[
                 { title: "Número de empresa 1", value: 1,disabled: false, },
                 { title: "Número de empresa 2", value: 2,disabled: false, },
                 { title: "Número de empresa 3", value: 3,disabled: false, },
               ]} 
             ></FloatSelected>
           ),
        },
        {
          index: 'Nombre',
          name: 'nombre',
          input: <FloatInput placeholder="Nombre" label="Nombre" />,
        },
        {
          index: 'Apellido',
          name: 'apellido',
          input: <FloatInput placeholder="Apellido" label="Apellido" />,
        },
  
   ];
export {dataLimite,columnsLimite,LimiteSearch};