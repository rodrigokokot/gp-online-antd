import { Link } from 'react-router-dom';
import FloatSelected from '../../../../components/molecules/FloatSelected';
import FloatInput from "../../../../components/molecules/FloatInput/index";  
const columnsPBoletin= [
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
        name: 'Cliente',
        selector: (row) => row.cliente,
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
        name: 'Adic.',
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
            to={`/emision/cargosAjustes/publicacionEnBoletin/detalle=${row.id}`}
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            Ver detalle
          </Link>
        ),
      },
  ];
  
  const dataPBoletin = [
    {
        esucursal: 'Tarjeta Grupar - Cordoba',
        id: '3227811',
        cliente: "Mari",
        documento: "DNI 24801003",
        marca: "Tarjeta Grupar",
        cuenta: "54071107", 
        producto: "Tarjeta Grupar",
        adicional: "0",
        tarjeta: "6063011055857316",
        option:<Link>Ver detalle</Link>
      }, 
      {
          esucursal: 'Tarjeta Grupar - Cordoba',
          id: '1617811',
          cliente: "Mari",
          documento: "DNI 24801003",
          marca: "Tarjeta Grupar",
          cuenta: "001471108", 
          producto: "Tarjeta Grupar",
          adicional: "0",
          tarjeta: "6063011055857316",
          option:<Link>Ver detalle</Link>
        }, 
  ];
  const PBoletinSearch = [
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
         index: 'Apellidos',
         name: 'apellidos',
         input: <FloatInput placeholder="Apellidos" label="Apellidos" />,
       },
       {
         index: 'Nombres',
         name: 'nombres',
         input: <FloatInput placeholder="Nombres" label="Nombres" />,
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
           index: 'N° Empresa',
           name: 'empresa',
           input: <FloatInput placeholder="N° Empresa" label="N° Empresa" />,
         },
   ];
export { dataPBoletin, columnsPBoletin,PBoletinSearch};