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
    selector: (row) => row.new,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Usuario",
    selector: (row) => row.user,
    sortable: true,
  },
  {
    name: "Comentario",
    selector: (row) => row.comment,
    sortable: true,
  },
  {
    name: "Cuenta",
    selector: (row) => row.acount,
    sortable: true,
  },
  {
    name: "Marca",
    selector: (row) => row.brand,
    sortable: true,
  },
  {
    name: "Producto",
    selector: (row) => row.product,
    sortable: true,
  },
  {
    name: "Sucursal",
    selector: (row) => row.branch,
    sortable: true,
  },
  {
    name: "Cliente",
    selector: (row) => row.client,
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
    new: "Cambio de estado de tarjeta",
    date: "8/13/2021 11:43 AM",
    user: "Carlos, lucia",
    comment: "-",
    acount: "334252",
    brand: "Tarjeta Individual",
    product: "Tarjeta Individual",
    branch: "Cordoba",
    client: "Candela, Olga Miriam del Valle",
  },
  {
    id: 32,
    new: "Cambio de estado de tarjeta",
    date: "8/13/2021 11:43 AM",
    user: "Pedro, lucia",
    comment: "-",
    acount: "334252",
    brand: "Tarjeta Grupar",
    product: "Tarjeta Grupar",
    branch: "San Juan",
    client: "Candela, Olga Miriam del Valle",
  },
  {
    id: 34,
    new: "Cambio de estado de tarjeta",
    date: "8/13/2021 11:43 AM",
    user: "Juana, lucia",
    comment: "-",
    acount: "334252",
    brand: "Tarjeta Individual",
    product: "Tarjeta Individual",
    branch: "jachal",
    client: "Candela, Olga Miriam del Valle",
  },
  {
    id: 54,
    new: "Cambio de estado de tarjeta",
    date: "8/13/2021 11:43 AM",
    user: "Maria, lucia",
    comment: "-",
    acount: "334252",
    brand: "Tarjeta Individual",
    product: "Tarjeta Individual",
    branch: "Cordoba",
    client: "Candela, Olga Miriam del Valle",
  },
  {
    id: 25,
    new: "Cambio de estado de tarjeta",
    date: "8/13/2021 11:43 AM",
    user: "Juanita, lucia",
    comment: "-",
    acount: "334252",
    brand: "Tarjeta Grupar",
    product: "Tarjeta Grupar",
    branch: "Cordoba",
    client: "Candela, Olga Miriam del Valle",
  },
];

const columnsAjustes = [
  {
    name: "Marca",
    selector: (row) => row.brand,
    sortable: true,
  },
  {
    name: "Emisor",
    selector: (row) => row.transmitter,
    sortable: true,
  },
  {
    name: "Comprobante",
    selector: (row) => row.voucher,
    sortable: true,
  },
  {
    name: "Cuenta",
    selector: (row) => row.voucher,
    sortable: true,
  },
  {
    name: "Concepto",
    selector: (row) => row.voucher,
    sortable: true,
  },
  {
    name: "Importe",
    selector: (row) => row.voucher,
    sortable: true,
  },
];

const dataAjustes = [
  {
    brand: 23,
    transmitter: "Beetlejuice",
    voucher: "1988",
    acount: "23/4/35 23:12",
    concept: "Romero, lucia",
    amount: "-",
    fees: "334252",
    status: "Tareta Grupar",
    confirmation: "Tareta Grupar",
    dateOfProcess: "Cordoba",
  },
  {
    brand: 23,
    transmitter: "Beetlejuice",
    voucher: "1988",
    acount: "23/4/35 23:12",
    concept: "Romero, lucia",
    amount: "-",
    fees: "334252",
    status: "Tareta Grupar",
    confirmation: "Tareta Grupar",
    dateOfProcess: "Cordoba",
  },
  {
    brand: 23,
    transmitter: "Beetlejuice",
    voucher: "1988",
    acount: "23/4/35 23:12",
    concept: "Romero, lucia",
    amount: "-",
    fees: "334252",
    status: "Tareta Grupar",
    confirmation: "Tareta Grupar",
    dateOfProcess: "Cordoba",
  },
  {
    brand: 23,
    transmitter: "Beetlejuice",
    voucher: "1988",
    acount: "23/4/35 23:12",
    concept: "Romero, lucia",
    amount: "-",
    fees: "334252",
    status: "Tareta Grupar",
    confirmation: "Tareta Grupar",
    dateOfProcess: "Cordoba",
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
