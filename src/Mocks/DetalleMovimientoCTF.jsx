import { Link } from "react-router-dom";
const columnsDetallesCTF = [
  {
    name: "Transaction Code",
    selector: (row) => row.ididentidad,
    sortable: true,
  },
  {
    name: "Transaction Code Qualifer",
    selector: (row) => row.numeroCTF,
    sortable: true,
  },
  {
    name: "Transaction Component Sequence Number",
    selector: (row) => row.idconsumo,
    sortable: true,
  },
  {
    name: "Account Number",
    selector: (row) => row.idautorizacion,
    sortable: true,
  },
  {
    name: "Account Number Extension",
    selector: (row) => row.idorigen,
    sortable: true,
  },
  {
    name: "Floor Limit Indicator",
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: "CRB/Exception File Indicator",
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/CTF/detalles/${row.ididentidad}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				ver detalle otro
			</Link>
		),
  },
];

const dataDetallesCTF = [
  {
    ididentidad: "001211",
    numeroCTF: "180660",
    idconsumo: "Entrada",
    idautorizacion: '20/07/2021 00:33:24',
    idorigen:'287',
    procesado:'0',
  },
  {
    ididentidad: "001211",
    numeroCTF: "180660",
    idconsumo: "Entrada",
    idautorizacion: '20/07/2021 00:33:24',
    idorigen:'287',
    procesado:'0',
  },
  {
    ididentidad: "001211",
    numeroCTF: "180660",
    idconsumo: "Entrada",
    idautorizacion: '20/07/2021 00:33:24',
    idorigen:'287',
    procesado:'0',
  },
  {
    ididentidad: "001211",
    numeroCTF: "180660",
    idconsumo: "Entrada",
    idautorizacion: '20/07/2021 00:33:24',
    idorigen:'287',
    procesado:'0',
  },
];

export { dataDetallesCTF, columnsDetallesCTF };
