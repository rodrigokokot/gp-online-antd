import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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

export { dataDetalleMovimientosIPM, columnsDetalleMovimientosIPM };
