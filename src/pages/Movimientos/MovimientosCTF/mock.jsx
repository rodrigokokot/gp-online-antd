import { Link } from "react-router-dom";
import FloatInput from "../../../components/molecules/FloatInput/index";
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";
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
const columnsMovimientosCTF = [
  {
    name: "ID Identidad",
    selector: (row) => row.ididentidad,
    sortable: true,
  },
  {
    name: "Nº CTF",
    selector: (row) => row.numeroCTF,
    sortable: true,
  },
  {
    name: "ID Consumo",
    selector: (row) => row.idconsumo,
    sortable: true,
  },
  {
    name: "ID Autorización",
    selector: (row) => row.idautorizacion,
    sortable: true,
  },
  {
    name: "ID CTF Origen",
    selector: (row) => row.idorigen,
    sortable: true,
  },
  {
    name: "Procesado",
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/CTF/detalles/`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				ver detalle
			</Link>
		),
  },
];

const dataMovimientosCTF = [
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
const MovimientosCTFSearch = [
    {
      index: 'id',
      input: <FloatInput placeholder="ID File" label="ID File" />,
    },
    {
      index: 'numeroIca',
      input: <FloatInput placeholder="Nº de ICA" label="Nº de ICA" />,
    },

    {
      index: 'apellido',
      input: <FloatInput placeholder="Apellido" label="Apellido" />,
    },

    {
      index: 'nombre',
      input: <FloatInput placeholder="Nombre" label="Nombre" />,
    },

    {
        index: 'numeroDocumento',
        input: <FloatInput placeholder="Nº de Documento" label="Nº de Documento" />,
    },
    {
        index: 'fecha',
        input: <DateRangeFilter></DateRangeFilter>,
    },

  ];
  const columnsRegistroCTF = [
    {
      name: "Contenido",
      selector: (row) => row.contenido,
      sortable: true,
    },
    {
      name: "Start",
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: "Length",
      selector: (row) => row.length,
      sortable: true,
    },
    {
      name: "end",
      selector: (row) => row.end,
      sortable: true,
    },
    {
      name: "Alias_Campo",
      selector: (row) => row.alias,
      sortable: true,
    }
  ];
  
  const dataRegistroCTF = [
    {
      contenido: "Transaction Code",
      start: "180660",
      length: "Entrada",
      end: '20/07/2021 00:33:24',
      alias:'287'
    },{
      contenido: "Transaction Code",
      start: "180660",
      length: "Entrada",
      end: '20/07/2021 00:33:24',
      alias:'287'
    },{
      contenido: "Transaction Code",
      start: "180660",
      length: "Entrada",
      end: '20/07/2021 00:33:24',
      alias:'287'
    },
  ];
export { dataRegistroCTF, columnsRegistroCTF,dataDetallesCTF, columnsDetallesCTF,dataMovimientosCTF, columnsMovimientosCTF, MovimientosCTFSearch };
