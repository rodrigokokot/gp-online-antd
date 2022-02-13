import { DownOutlined } from "@ant-design/icons";
import FloatSelected from "../../components/molecules/FloatSelected";

const columnsNovedades = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Tipo de novedad",
    selector: (row) => row.novedad,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name: "Usuario",
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    name: "Comentario",
    selector: (row) => row.comentario,
    sortable: true,
  },
  {
    name: "Cuenta",
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: "Marca",
    selector: (row) => row.marca,
    sortable: true,
  },
  {
    name: "Producto",
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: "Sucursal",
    selector: (row) => row.sucursal,
    sortable: true,
  },
  {
    name: "Cliente",
    selector: (row) => row.cliente,
    sortable: true,
  },
  {
    cell: (row) => <DownOutlined />,
    allowOverflow: true,
    button: true,
    width: "56px",
  },
];

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

const columnsAjustes = [
  {
    name: "Marca",
    selector: (row) => row.marca,
    sortable: true,
  },
  {
    name: "Emisor",
    selector: (row) => row.emisor,
    sortable: true,
  },
  {
    name: "Comprobante",
    selector: (row) => row.comprobante,
    sortable: true,
  },
  {
    name: "Cuenta",
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: "Concepto",
    selector: (row) => row.concepto,
    sortable: true,
  },
  {
    name: "Importe",
    selector: (row) => row.importe,
    sortable: true,
  },
  {
    name: "Cuotas",
    selector: (row) => row.cuotas,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Confirmación",
    selector: (row) => row.confirmacion,
    sortable: true,
  },
  {
    name: "Fecha de proceso",
    selector: (row) => row.fproceso,
    sortable: true,
  },
];

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

const novedadesSearch = [
  {
    index: "emisor",
    input: (
      <FloatSelected
        placeholder="Emisor"
        label="Emisor"
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
        placeholder="Marca"
        label="Marca"
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
        placeholder="Transaccion"
        label="Transaccion"
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
        placeholder="Sucursal"
        label="Sucursal"
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
        placeholder="Producto"
        label="Producto"
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
        placeholder="Novedades"
        label="Novedades"
        options={[
          { title: "nov 1", value: 1, disabled: false },
          { title: "nov 2", value: 2, disabled: false },
          { title: "nov 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
];
const ajustesSearch = [
  {
    index: "moneda",
    input: (
      <FloatSelected
        placeholder="Moneda"
        label="Moneda"
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
        placeholder="Concepto de ajuste"
        label="Concepto de ajuste"
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
        placeholder="Comprobante"
        label="Comprobante"
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
        placeholder="Novedades urgente"
        label="Novedades urgente"
        options={[
          { title: "sucu 1", value: 1, disabled: false },
          { title: "sucu 2", value: 2, disabled: false },
          { title: "sucu 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
];

export {
  dataAjustes,
  dataNovedades,
  columnsAjustes,
  columnsNovedades,
  novedadesSearch,
  ajustesSearch,
};
