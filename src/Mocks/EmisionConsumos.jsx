import { Link } from "react-router-dom";
import { CalendarIcon } from "../assets/svg/icons/calendar";

import FloatInput from "../components/molecules/FloatInput/index";
import FloatSelected from "../components/molecules/FloatSelected";
import DateRangeFilter from "../components/organisms/DateRangeFilter";
import { HomeOutlined } from "@ant-design/icons";
import {
  MonedaBolivar,
  MonedaFranco,
  MonedaLibra,
} from "../assets/svg/icons/moenda";
import SelectImg from "../components/organisms/SelectImg.jsx";

const columnsEmisionConsumos = [
  {
    name: "ID consumo",
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    name: "Fecha/Hora",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Nombre comercio",
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: "Movimiento",
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: "DNI",
    selector: (row) => row.perfil,
    sortable: true,
  },
  {
    name: "Nº de cuenta",
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: "Cuota",
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: "Importe",
    selector: (row) => row.perfil,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/movimientos/consumos/consultaDeConsumo/${row.id}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Ver detalle
      </Link>
    ),
  },
];

const dataEmisionConsumos = [
  {
    id: "10",
    usuario: "21",
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option: <Link>Editar</Link>,
  },
  {
    id: "13",
    usuario: "12",
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option: <Link>Editar</Link>,
  },
  {
    id: "14",
    usuario: "3",
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option: <Link>Editar</Link>,
  },
  {
    id: "15",
    usuario: "2",
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option: <Link>Editar</Link>,
  },
  {
    id: "16",
    usuario: "1",
    nombre: "Pedro",
    apellido: "Perez",
    documento: "35.534.654",
    perfil: "Customer Service",
    option: <Link>Editar</Link>,
  },
];

const EmisionConsumosSearch = [
  {
    index: "id",
    input: <FloatInput placeholder="ID de Consumo" label="ID de Consumo" />,
  },
  {
    index: "nombreComercio",
    input: (
      <FloatInput placeholder="Nombre de Comercio" label="Nombre de Comercio" />
    ),
  },

  {
    index: "numeroDocumento",
    input: <FloatInput placeholder="Nº de Documento" label="Nº de Documento" />,
  },

  {
    index: "numeroTarjeta",
    input: <FloatInput placeholder="Nº de Tarjeta" label="Nº de Tarjeta" />,
  },

  {
    index: "grupoTransaccion",
    input: (
      <FloatSelected
        placeholder="Grupo Transaccion"
        label="Grupo transaccion"
        options={[
          { title: "grupo 1", value: 1, disabled: false },
          { title: "grupo 2", value: 2, disabled: false },
          { title: "grupo 3", value: 3, disabled: false },
        ]}
        width={200}
      ></FloatSelected>
    ),
  },

  {
    index: "comprobante",
    input: <FloatInput placeholder="Comprobante" label="Comprobante" />,
  },

  {
    index: "numeroCuenta",
    input: <FloatInput placeholder="Nº de Cuenta" label="Nº de Cuenta" />,
  },

  {
    index: "adic",
    input: <FloatInput placeholder="Adic" label="Adic" />,
  },

  {
    index: "liquidacionSocio",
    input: (
      <FloatSelected
        placeholder="Liq. Socios (LS)"
        label="Liq. Socios (LS)"
        options={[
          { title: "socio 1", value: 1, disabled: false },
          { title: "socio 2", value: 2, disabled: false },
          { title: "socio 3", value: 3, disabled: false },
        ]}
        width={200}
      ></FloatSelected>
    ),
  },

  {
    index: "cuotas",
    input: <FloatInput placeholder="Cuotas" label="Cuotas" />,
  },

  {
    index: "moneda",
    input: <SelectImg/>
  },

  {
    index: "Por fecha",
    input: <DateRangeFilter></DateRangeFilter>,
  },
];

export { dataEmisionConsumos, columnsEmisionConsumos, EmisionConsumosSearch };
