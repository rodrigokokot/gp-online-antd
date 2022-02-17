import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx/index.jsx";

const ColumnsEmisionConsumos =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: (t("consumos.table.column1")),
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    name: (t("consumos.table.column2")),
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: (t("consumos.table.column3")),
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: (t("consumos.table.column4")),
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: (t("consumos.table.column5")),
    selector: (row) => row.perfil,
    sortable: true,
  },
  {
    name: (t("consumos.table.column6")),
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: (t("consumos.table.column7")),
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: (t("consumos.table.column8")),
    selector: (row) => row.perfil,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/movimientos/consumos/detalle=${row.id}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        {t("consumos.table.column9")}
      </Link>
    ),
  },
])
}

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

const EmisionConsumosSearch =()=>{
  const { t} = useTranslation();
  return(  [
  {
    index: "id",
    input: <FloatInput placeholder={t("consumos.search.input1")} label={t("consumos.search.input1")} />,
  },
  {
    index: "nombreComercio",
    input: (
      <FloatInput placeholder={t("consumos.search.input2")} label={t("consumos.search.input2")} />
    ),
  },

  {
    index: "numeroDocumento",
    input: <FloatInput placeholder={t("consumos.search.input3")} label={t("consumos.search.input3")}/>,
  },

  {
    index: "numeroTarjeta",
    input: <FloatInput placeholder={t("consumos.search.input4")} label={t("consumos.search.input4")} />,
  },

  {
    index: "grupoTransaccion",
    input: (
      <FloatSelected
        placeholder={t("consumos.search.input5")}
        label={t("consumos.search.input5")}
        options={[
          { title: "grupo 1", value: 1, disabled: false },
          { title: "grupo 2", value: 2, disabled: false },
          { title: "grupo 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },

  {
    index: "comprobante",
    input: <FloatInput placeholder={t("consumos.search.input6")} label={t("consumos.search.input6")} />,
  },

  {
    index: "numeroCuenta",
    input: <FloatInput placeholder={t("consumos.search.input7")} label={t("consumos.search.input7")} />,
  },

  {
    index: "adic",
    input: <FloatInput placeholder={t("consumos.search.input8")} label={t("consumos.search.input8")} />,
  },

  {
    index: "liquidacionSocio",
    input: (
      <FloatSelected
        placeholder={t("consumos.search.input9")}
        label={t("consumos.search.input9")}
        options={[
          { title: "socio 1", value: 1, disabled: false },
          { title: "socio 2", value: 2, disabled: false },
          { title: "socio 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },

  {
    index: "cuotas",
    input: <FloatInput placeholder={t("consumos.search.input10")} label={t("consumos.search.input10")} />,
  },

  {
    index: "moneda",
    input: <SelectImg/>
  },

  {
    index: "Por fecha",
    input: <DateRangeFilter></DateRangeFilter>,
  },
])
}

export { dataEmisionConsumos, ColumnsEmisionConsumos, EmisionConsumosSearch };
