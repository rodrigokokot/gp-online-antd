import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index'
import FloatInput from "../../../../components/molecules/FloatInput/index";
const columnsAvisosViajes = [
  {
    name: 'ID Aviso de viaje',
    selector: (row) => row.idviaje,
    sortable: true
  },
  {
    name: 'N° de cuenta',
    selector: (row) => row.cuenta,
    sortable: true
  },
  {
    name: 'Tipo documento',
    selector: (row) => row.tdocumento,
    sortable: true
  },
  {
    name: 'N° de Documento',
    selector: (row) => row.documento,
    sortable: true
  },
  {
    name: 'Fecha desde',
    selector: (row) => row.fdesde,
    sortable: true
  },
  {
    name: 'Fecha hasta',
    selector: (row) => row.fhasta,
    sortable: true
  },
  {
    name: 'Estado',
    selector: (row) => row.estado,
    sortable: true
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/socios/avisosViajes/editar/${row.idviaje}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

const dataAvisosViajes = [
  {
    idviaje: '100000',
    cuenta: '552268XXXX',
    tdocumento: "DNI",
    documento: "24801003",
    fdesde: "11/01/21",
    fhasta: "11/02/21", 
    estado: "Activo",
    option:<Link>Editar</Link>
  },
  {
    idviaje: '100000',
    cuenta: '552268XXXX',
    tdocumento: "DNI",
    documento: "24801003",
    fdesde: "11/01/21",
    fhasta: "11/02/21", 
    estado: "Activo",
    option:<Link>Editar</Link>
  },
  {
    idviaje: '100000',
    cuenta: '552268XXXX',
    tdocumento: "DNI",
    documento: "24801003",
    fdesde: "11/01/21",
    fhasta: "11/02/21", 
    estado: "Activo",
    option:<Link>Editar</Link>
  },
];
const AvisosViajesSearch = [
  {
     index: 'N° de ID de viaje',
     name: 'idviaje',
     input: <FloatInput placeholder="N° de ID de viaje" label="N° de ID de viaje" />,
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
    index: 'Estado',
    name: 'estado',
    input: <FloatInput placeholder="Estado" label="Estado" />,
  },

 ];
/* hacer que router tengo la dir de app.js  */
const AvisosViajes=()=> {    
  const [data, setData] = useState("");

  const handleCallback = (values) => {
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataAvisosViajes);
    } else {
      setData(
        dataAvisosViajes.filter((d) => {
          return (
            d.cuenta.toString() === values.cuenta.toString() ||
            d.documento.toString() === values.documento.toString() ||
            d.estado.toString() === values.estado.toString()||
            d.fdesde.toString() === values.fdesde.toString()||
            d.fhasta.toString() === values.fhasta.toString()||
            d.idviaje.toString() === values.idviaje.toString()||
            d.tdocumento.toString() === values.tdocumento.toString()
          );
        })
      );
    }
  };
  
  return(
  <>
          {/* width del searchfrom ver tamaño en Mocks*/}
          <SearchForm array={AvisosViajesSearch} parentCallback={handleCallback} title="Busqueda de Usuario" />
          <br></br>
          <Table data={data} columns={columnsAvisosViajes} expandible={false} editable={true}/>
  </>);
}
export default AvisosViajes;