import { Table } from "antd";
import { Link } from "react-router-dom";
import FloatInput from "../components/molecules/FloatInput/index";
import DateRangeFilter from "../components/organisms/DateRangeFilter";
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
      input: <FloatInput placeholder="ID file" label="ID file" />,
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
        input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
    },

  ];

export { dataMovimientosCTF, columnsMovimientosCTF, MovimientosCTFSearch };