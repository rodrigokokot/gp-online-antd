import { Link } from "react-router-dom";
import FloatInput from "../../../components/molecules/FloatInput/index";
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";
import { useTranslation } from "react-i18next";
const ColumnsDetallesCTF=()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("ctf.view.table.column1")),
    selector: (row) => row.ididentidad,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column2")),
    selector: (row) => row.numeroCTF,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column3")),
    selector: (row) => row.idconsumo,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column4")),
    selector: (row) => row.idautorizacion,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column5")),
    selector: (row) => row.idorigen,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column6")),
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: (t("ctf.view.table.column7")),
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/CTF/detalle=${row.ididentidad}/registro=${row.idorigen}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				{t("ctf.view.table.column8")}
			</Link>
		),
  },
])
}

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
const ColumnsMovimientosCTF =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("ctf.table.column1")),
    selector: (row) => row.ididentidad,
    sortable: true,
  },
  {
    name: (t("ctf.table.column2")),
    selector: (row) => row.numeroCTF,
    sortable: true,
  },
  {
    name: (t("ctf.table.column3")),
    selector: (row) => row.idconsumo,
    sortable: true,
  },
  {
    name: (t("ctf.table.column4")),
    selector: (row) => row.idautorizacion,
    sortable: true,
  },
  {
    name: (t("ctf.table.column5")),
    selector: (row) => row.idorigen,
    sortable: true,
  },
  {
    name: (t("ctf.table.column6")),
    selector: (row) => row.procesado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/CTF/detalle=${row.ididentidad}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				{t("ctf.table.column7")}
			</Link>
		),
  },
])
}

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
const MovimientosCTFSearch =()=>{
  const { t} = useTranslation();
  return( [
    {
      index: "id",
      input: <FloatInput placeholder={t("ctf.search.input1")} label={t("ipm.search.input1")} />,
    },
    {
      index: "numeroIca",
      input: <FloatInput placeholder={t("ctf.search.input2")} label={t("ipm.search.input2")} />,
    },
  
    {
      index: "apellido",
      input: <FloatInput placeholder={t("ctf.search.input3")}label={t("ipm.search.input3")} />,
    },
  
    {
      index: "nombre",
      input: <FloatInput placeholder={t("ctf.search.input4")} label={t("ipm.search.input4")} />,
    },
  
    {
      index: "numeroDocumento",
      input: <FloatInput placeholder={t("ctf.search.input5")} label={t("ipm.search.input5")} />,
    },
  
    {
      index: "fecha",
      input: <DateRangeFilter></DateRangeFilter> ,
    },

  ])
}
const ColumnsRegistroCTF=()=>{
  const { t} = useTranslation();
  return([
    {
      name: (t("ctf.view.details.table.column1")),
      selector: (row) => row.contenido,
      sortable: true,
    },
    {
      name: (t("ctf.view.details.table.column2")),
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: (t("ctf.view.details.table.column3")),
      selector: (row) => row.length,
      sortable: true,
    },
    {
      name: (t("ctf.view.details.table.column4")),
      selector: (row) => row.end,
      sortable: true,
    },
    {
      name: (t("ctf.view.details.table.column5")),
      selector: (row) => row.alias,
      sortable: true,
    }
  ])
}
  
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
export { dataRegistroCTF, ColumnsRegistroCTF,dataDetallesCTF, ColumnsDetallesCTF,dataMovimientosCTF, ColumnsMovimientosCTF, MovimientosCTFSearch };
