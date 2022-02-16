import { DownOutlined } from "@ant-design/icons";
import FloatSelected from "../../components/molecules/FloatSelected";
import { useTranslation } from 'react-i18next';

const ColumnsNovedades =()=> {
  const { t} = useTranslation();
  
  return ([
    {
      name: (t("gestionaprobaciones.tab1.table.column1")),
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column2")),
      selector: (row) => row.novedad,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column3")),
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column4")),
      selector: (row) => row.usuario,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column5")),
      selector: (row) => row.comentario,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column6")),
      selector: (row) => row.cuenta,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column7")),
      selector: (row) => row.marca,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column8")),
      selector: (row) => row.producto,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column9")),
      selector: (row) => row.sucursal,
      sortable: true,
    },
    {
      name: (t("gestionaprobaciones.tab1.table.column10")),
      selector: (row) => row.cliente,
      sortable: true,
    },
  {
    cell: (row) => <DownOutlined />,
    allowOverflow: true,
    button: true,
    width: "56px",
  },
])
}

const dataNovedades = [
  {
    id: 23,
    novedad: "Cambio de estado de tarjeta",
    fecha: "8/13/2021 11:43 AM",
    usuario: "Carlos, lucia",
    comentario: "-",
    cuenta: "334252",
    marca: "Tarjeta Individual",
    producto: "Tarjeta Individual",
    sucursal: "Cordoba",
    cliente: "Candela, Olga Miriam del Valle",
  },
  {
    id: 32,
    novedad: "Cambio de estado de tarjeta",
    fecha: "8/13/2021 11:43 AM",
    usuario: "Carlos, lucia",
    comentario: "-",
    cuenta: "334252",
    marca: "Tarjeta Individual",
    producto: "Tarjeta Individual",
    sucursal: "Cordoba",
    cliente: "Candela, Olga Miriam del Valle",
  },
  {
    id: 34,
    novedad: "Cambio de estado de tarjeta",
    fecha: "8/13/2021 11:43 AM",
    usuario: "Carlos, lucia",
    comentario: "-",
    cuenta: "334252",
    marca: "Tarjeta Individual",
    producto: "Tarjeta Individual",
    sucursal: "Cordoba",
    cliente: "Candela, Olga Miriam del Valle",
  },
  {
    id: 54,
    novedad: "Cambio de estado de tarjeta",
    fecha: "8/13/2021 11:43 AM",
    usuario: "Carlos, lucia",
    comentario: "-",
    cuenta: "334252",
    marca: "Tarjeta Individual",
    producto: "Tarjeta Individual",
    sucursal: "Cordoba",
    cliente: "Candela, Olga Miriam del Valle",
  },
  {
    id: 25,
    novedad: "Cambio de estado de tarjeta",
    fecha: "8/13/2021 11:43 AM",
    usuario: "Carlos, lucia",
    comentario: "-",
    cuenta: "334252",
    marca: "Tarjeta Individual",
    producto: "Tarjeta Individual",
    sucursal: "Cordoba",
    cliente: "Candela, Olga Miriam del Valle",
  },
];
const NovedadesSearch=() =>{ 
  const { t } = useTranslation();
  return ([
  {
    index: "emisor",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input1")}
        label={t("gestionaprobaciones.tab1.search.input1")}
        options={[
          { title: "emisor 1", value: "1", disabled: false },
          { title: "emisor 2", value: "2", disabled: false },
          { title: "emisor 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "marca",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input2")}
        label={t("gestionaprobaciones.tab1.search.input2")}
        options={[
          { title: "marca 1", value: 1, disabled: false },
          { title: "marca 2", value: 2, disabled: false },
          { title: "marca 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "transaccion",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input3")}
        label={t("gestionaprobaciones.tab1.search.input3")}
        options={[
          { title: "transaccion 1", value: 1, disabled: false },
          { title: "transaccion 2", value: 2, disabled: false },
          { title: "trs 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "sucursal",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input4")}
        label={t("gestionaprobaciones.tab1.search.input4")}
        options={[
          { title: "sucu 1", value: 1, disabled: false },
          { title: "sucu 2", value: 2, disabled: false },
          { title: "sucu 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "producto",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input5")}
        label={t("gestionaprobaciones.tab1.search.input5")}
        options={[
          { title: "prod 1", value: 1, disabled: false },
          { title: "prod 2", value: 2, disabled: false },
          { title: "prod 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "novedades",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input6")}
        label={t("gestionaprobaciones.tab1.search.input6")}
        options={[
          { title: "nov 1", value: 1, disabled: false },
          { title: "nov 2", value: 2, disabled: false },
          { title: "nov 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
])
}

const ColumnsAjustes =()=>{
  const { t} = useTranslation();
return( [
  {
    name: (t("gestionaprobaciones.tab2.table.column1")),
    selector: (row) => row.marca,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column2")),
    selector: (row) => row.emisor,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column3")),
    selector: (row) => row.comprobante,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column4")),
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name:(t("gestionaprobaciones.tab2.table.column5")),
    selector: (row) => row.concepto,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column6")),
    selector: (row) => row.importe,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column7")),
    selector: (row) => row.cuotas,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column8")),
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column9")),
    selector: (row) => row.confirmacion,
    sortable: true,
  },
  {
    name: (t("gestionaprobaciones.tab2.table.column10")),
    selector: (row) => row.fproceso,
    sortable: true,
  },
])
}

const dataAjustes = [
  {
    marca: 23,
    emisor: "Beetlejuice",
    comprobante: "1988",
    cuenta: "23/4/35 23:12",
    concepto: "Romero, lucia",
    importe: "-",
    cuotas: "3",
    estado: "Normal", 
    confirmacion: "Si",
    fproceso: "20/04/25",
  },
  {
    marca: 23,
    emisor: "Beetlejuice",
    comprobante: "1988",
    cuenta: "23/4/35 23:12",
    concepto: "Romero, lucia",
    importe: "-",
    cuotas: "3",
    estado: "Normal", 
    confirmacion: "Si",
    fproceso: "20/04/25",
  },
  {
    marca: 23,
    emisor: "Beetlejuice",
    comprobante: "1988",
    cuenta: "23/4/35 23:12",
    concepto: "Romero, lucia",
    importe: "-",
    cuotas: "3",
    estado: "Normal", 
    confirmacion: "Si",
    fproceso: "20/04/25",
  },
  {
    marca: 23,
    emisor: "Beetlejuice",
    comprobante: "1988",
    cuenta: "23/4/35 23:12",
    concepto: "Romero, lucia",
    importe: "-",
    cuotas: "3",
    estado: "Normal", 
    confirmacion: "Si",
    fproceso: "20/04/25",
  },
]; 
const AjustesSearch=()=> { 
  const { t} = useTranslation();
  return ([
  {
    index: "moneda",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input1")}
        label={t("gestionaprobaciones.tab1.search.input1")}
        options={[
          { title: "mon 1", value: "1", disabled: false },
          { title: "mon 2", value: "2", disabled: false },
          { title: "mon 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "conceptoAjuste",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input2")}
        label={t("gestionaprobaciones.tab1.search.input2")}
        options={[
          { title: "marca 1", value: 1, disabled: false },
          { title: "marca 2", value: 2, disabled: false },
          { title: "marca 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "comprobante",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input3")}
        label={t("gestionaprobaciones.tab1.search.input3")}
        options={[
          { title: "transaccion 1", value: 1, disabled: false },
          { title: "transaccion 2", value: 2, disabled: false },
          { title: "trs 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "novedadesUrgente",
    input: (
      <FloatSelected
        placeholder={t("gestionaprobaciones.tab1.search.input4")}
        label={t("gestionaprobaciones.tab1.search.input4")}
        options={[
          { title: "sucu 1", value: 1, disabled: false },
          { title: "sucu 2", value: 2, disabled: false },
          { title: "sucu 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
])
}

export {
  dataAjustes,
  dataNovedades,
  ColumnsAjustes,
  ColumnsNovedades,
  NovedadesSearch,
  AjustesSearch,
};
