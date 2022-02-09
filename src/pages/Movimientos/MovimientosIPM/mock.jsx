import { Link } from "react-router-dom";
import FloatInput from "../../../components/molecules/FloatInput/index"; 
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";
const columnsDetalleMovimientosIPM = [
  {
    name: "ID registro",
    selector: (row) => row.idFile,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.numeroIca,
    sortable: true,
  },
  {
    name: "Movimiento",
    selector: (row) => row.tipo,
    sortable: true,
  },
  {
    name: "Processing code",
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: "Primary acount number",
    selector: (row) => row.registros,
    sortable: true,
  },
  {
    name: "Acount transaction",
    selector: (row) => row.regOk,
    sortable: true,
  },
  {
    name: "Currency code transaction",
    selector: (row) => row.regError,
    sortable: true,
  },
  {
    name: "Observaciones",
    selector: (row) => row.idProceso,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/IPM/detalles/${row.idFile}/${row.registros}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				ver detalle Elements
			</Link>
		),
  },
];

const dataDetalleMovimientosIPM = [
  {
    idFile: 233525325,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 2352356,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 4564572,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 34645754,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
];
const MovimientosIPMSearch = [
  {
    index: "id",
    input: <FloatInput placeholder="ID File" label="ID File" />,
  },
  {
    index: "numeroIca",
    input: <FloatInput placeholder="Nº de ICA" label="Nº de ICA" />,
  },

  {
    index: "apellido",
    input: <FloatInput placeholder="Apellido" label="Apellido" />,
  },

  {
    index: "nombre",
    input: <FloatInput placeholder="Nombre" label="Nombre" />,
  },

  {
    index: "numeroDocumento",
    input: <FloatInput placeholder="Nº de Documento" label="Nº de Documento" />,
  },

  {
    index: "fecha",
    input: <DateRangeFilter></DateRangeFilter> ,
  },
];

const columnsMovimientosIPM = [
  {
    name: "ID File",
    selector: (row) => row.idFile,
    sortable: true,
  },
  {
    name: "Nº ICA",
    selector: (row) => row.numeroIca,
    sortable: true,
  },
  {
    name: "Tipo",
    selector: (row) => row.tipo,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: "Registros",
    selector: (row) => row.registros,
    sortable: true,
  },
  {
    name: "Reg OK",
    selector: (row) => row.regOk,
    sortable: true,
  },
  {
    name: "Reg Error",
    selector: (row) => row.regError,
    sortable: true,
  },
  {
    name: "ID proceso",
    selector: (row) => row.idProceso,
    sortable: true,
  },
  {
    name: "Nombre Arch",
    selector: (row) => row.nombreArch,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/IPM/detalles/${row.idFile}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				ver detalle
			</Link>
		),
  },
];

const dataMovimientosIPM = [
  {
    idFile: 233525325,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 2352356,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 4564572,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
  {
    idFile: 34645754,
    numeroIca: "1231",
    tipo: "Entrada",
    fecha: '23/4/2020 00:21:45',
    registros:'356',
    regOk:'245',
    regError:'0',
    idProceso:'241',
    nombreArch:'356',
  },
];
const columnsDetalleRegistroIPM = [
  {
    name: "Campo / PDS",
    selector: (row) => row.campo,
    sortable: true,
  },
  {
    name: "Valor",
    selector: (row) => row.valor,
    sortable: true,
  },
];

const dataDetalleRegistroIPM = [
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
];

export { dataDetalleRegistroIPM, columnsDetalleRegistroIPM,dataMovimientosIPM, columnsMovimientosIPM, MovimientosIPMSearch, dataDetalleMovimientosIPM, columnsDetalleMovimientosIPM  };
