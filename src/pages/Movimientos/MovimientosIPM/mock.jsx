import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FloatInput from "../../../components/molecules/FloatInput/index"; 
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";

const ColumnsDetalleMovimientosIPM =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("ipm.view.table.column1")),
    selector: (row) => row.idFile,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column2")),
    selector: (row) => row.numeroIca,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column3")),
    selector: (row) => row.tipo,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column4")),
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column5")),
    selector: (row) => row.registros,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column6")),
    selector: (row) => row.regOk,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column7")),
    selector: (row) => row.regError,
    sortable: true,
  },
  {
    name: (t("ipm.view.table.column8")),
    selector: (row) => row.idProceso,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/IPM/detalle=${row.idFile}/registro=${row.registros}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				{t("ipm.view.table.column9")}
			</Link>
		),
  },
])
}

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
const MovimientosIPMSearch =()=>{
  const { t} = useTranslation();
  return( [
  {
    index: "id",
    input: <FloatInput placeholder={t("ipm.search.input1")} label={t("ipm.search.input1")} />,
  },
  {
    index: "numeroIca",
    input: <FloatInput placeholder={t("ipm.search.input2")} label={t("ipm.search.input2")} />,
  },

  {
    index: "apellido",
    input: <FloatInput placeholder={t("ipm.search.input3")}label={t("ipm.search.input3")} />,
  },

  {
    index: "nombre",
    input: <FloatInput placeholder={t("ipm.search.input4")} label={t("ipm.search.input4")} />,
  },

  {
    index: "numeroDocumento",
    input: <FloatInput placeholder={t("ipm.search.input5")} label={t("ipm.search.input5")} />,
  },

  {
    index: "fecha",
    input: <DateRangeFilter></DateRangeFilter> ,
  },
])
}

const ColumnsMovimientosIPM =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("ipm.table.column1")),
    selector: (row) => row.idFile,
    sortable: true,
  },
  {
    name: (t("ipm.table.column2")),
    selector: (row) => row.numeroIca,
    sortable: true,
  },
  {
    name: (t("ipm.table.column3")),
    selector: (row) => row.tipo,
    sortable: true,
  },
  {
    name: (t("ipm.table.column4")),
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: (t("ipm.table.column5")),
    selector: (row) => row.registros,
    sortable: true,
  },
  {
    name: (t("ipm.table.column6")),
    selector: (row) => row.regOk,
    sortable: true,
  },
  {
    name: (t("ipm.table.column7")),
    selector: (row) => row.regError,
    sortable: true,
  },
  {
    name: (t("ipm.table.column8")),
    selector: (row) => row.idProceso,
    sortable: true,
  },
  {
    name: (t("ipm.table.column9")),
    selector: (row) => row.nombreArch,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/movimientos/IPM/detalle=${row.idFile}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				{t("ipm.table.column10")}
			</Link>
		),
  },
])
}

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
const ColumnsDetalleRegistroIPM =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("ipm.view.details.table.column1")),
    selector: (row) => row.campo,
    sortable: true,
  },
  {
    name: (t("ipm.view.details.table.column2")),
    selector: (row) => row.valor,
    sortable: true,
  },
])
}

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

export { dataDetalleRegistroIPM, ColumnsDetalleRegistroIPM,dataMovimientosIPM, ColumnsMovimientosIPM, MovimientosIPMSearch, dataDetalleMovimientosIPM, ColumnsDetalleMovimientosIPM  };
