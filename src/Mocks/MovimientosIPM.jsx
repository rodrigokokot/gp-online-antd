import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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

export { dataMovimientosIPM, columnsMovimientosIPM };
