import { Link } from "react-router-dom";

import FloatInput from "../components/molecules/FloatInput/index";
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
    name: '',
		button: true,
		cell: row => ( 
            <Link to={`/emision/socios/avisoViajes/editar/${row.idaviso}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
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
export { dataAvisosViajes, columnsAvisosViajes,AvisosViajesSearch};
