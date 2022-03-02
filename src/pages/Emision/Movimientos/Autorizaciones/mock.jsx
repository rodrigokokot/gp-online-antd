import React from "react";
import { DatePicker } from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import { Link } from "react-router-dom";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const { RangePicker } = DatePicker;

///////// MOCK INPUTS DE FORMULARIO /////////
const AutorizacionesSearchArray =()=>{
  const { t} = useTranslation();
  return([
  {
    index: "numeroTarjeta",
    input: <FloatInput label={t("autorizaciones.search.input1")} placeholder={t("autorizaciones.search.input1")} />,
  },
  {
    index: "documento",
    input: <FloatInput label={t("autorizaciones.search.input2")} placeholder={t("autorizaciones.search.input2")} />,
  },
  {
    index: "producto",
    input: <FloatInput label={t("autorizaciones.search.input3")}placeholder={t("autorizaciones.search.input3")} />,
  },
  {
    index: "cuenta",
    input: <FloatInput label={t("autorizaciones.search.input4")} placeholder={t("autorizaciones.search.input4")} />,
  },
  {
    index: "adicional",
    input: (
      <FloatInput label={t("autorizaciones.search.input5")} placeholder={t("autorizaciones.search.input5")} />
    ),
  },
  {
    index: "comercio",
    input: <FloatInput label={t("autorizaciones.search.input6")} placeholder={t("autorizaciones.search.input6")}  />,
  }, 
  {
    index: "ingreso",
    input: <FloatInput label={t("autorizaciones.search.input7")} placeholder={t("autorizaciones.search.input7")} />,
  },
  {
    index: "ubicacion",
    input: (
      <FloatSelected
        label={t("autorizaciones.search.input8")}
        placeholder={t("autorizaciones.search.input8")}
        options={[
          {
            title: "Local",
            value: "Local",
            disabled: false,
          },
          {
            title: "Ajeno",
            value: "Ajeno",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "origen",
    input: (
      <FloatSelected
        label={t("autorizaciones.search.input9")}
        placeholder={t("autorizaciones.search.input9")}
        options={[
          {
            title: "ArchivoMar",
            value: "ArchivoMar",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "relacionada",
    input: (
      <FloatSelected
        label={t("autorizaciones.search.input10")}
        placeholder={t("autorizaciones.search.input10")}
        options={[
          {
            title: "Parcial",
            value: "Parcial",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "rechazo",
    input: (
      <FloatSelected
        label={t("autorizaciones.search.input11")}
        placeholder={t("autorizaciones.search.input11")}
        options={[
          {
            title: "Emisor inválido",
            value: "Emisor inválido",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "estado",
    input: (
      <FloatSelected
        label={t("autorizaciones.search.input12")}
        placeholder={t("autorizaciones.search.input12")}
        mode="tags"
        options={[
          {
            title: "Aprobada",
            value: "Aprobada",
            disabled: false,
          },
          {
            title: "Rechazada",
            value: "Rechazada",
            disabled: false,
          },
          {
            title: "Anulada",
            value: "Anulada",
            disabled: false,
          },
          {
            title: "Sin autorizacióin emisor",
            value: "Sin autorización emisor",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "cuotas",
    input: (
      <FloatSelected
        placeholder={t("autorizaciones.search.input13")}
        label={t("autorizaciones.search.input13")}
        options={[
          {
            title: "1",
            value: "1",
            disabled: false,
          },
          {
            title: "3",
            value: "3",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    index: "Fecha Rel. Desde",
    input: (
      <FloatInput
        type="date"
        label={t("autorizaciones.search.input14")}
        value="2018-07-22"
        defaultValue={format(new Date(), "dd-mm-yyyy")}
      />
    ),
  },
  {
    index: "Fecha Rel. Hasta",
    input: <FloatInput type="date" label={t("autorizaciones.search.input15")} defaultValue=" " />,
  },
  {
    index: "Fecha Desde",
    input: <FloatInput type="date" label={t("autorizaciones.search.input16")} defaultValue=" " />,
  },
  {
    index: "Hora Desde",
    input: (
      <FloatInput type="time" label={t("autorizaciones.search.input17")} defaultValue=" " />
    ),
  },
  {
    index: "Fecha Hasta",
    input: (
      <FloatInput type="date" label={t("autorizaciones.search.input18")} defaultValue=" " />
    ),
  },
  {
    index: "Hora Hasta",
    input: (
      <FloatInput type="time" label={t("autorizaciones.search.input19")} defaultValue=" " />
    ),
  },
  {
    index: "dateragne",
    input: <DateRangeFilter></DateRangeFilter>,
  },
])
}

////////// MOCK COLUMNAS DE LA TABLA //////////
const ColumnsAutorizaciones =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("autorizaciones.table.column1")),
    selector: (row) => row.cuenta,
    sortable: true,
  },
  {
    name: (t("autorizaciones.table.column2")),
    selector: (row) => row.adi,
    sortable: false,
  },
  {
    name: (t("autorizaciones.table.column3")),
    selector: (row) => row.tarjeta,
    sortable: false,
  },
  {
    name: (t("autorizaciones.table.column4")),
    selector: (row) => row.fecha,
    sortable: true,
  },
  {
    name:(t("autorizaciones.table.column5")),
    selector: (row) => row.importe,
    sortable: false,
  },
  {
    name:(t("autorizaciones.table.column6")),
    selector: (row) => row.moneda,
    sortable: false,
  },
  {
    name: (t("autorizaciones.table.column7")),
    selector: (row) => row.plan,
    sortable: false,
  },
  {
    name: (t("autorizaciones.table.column8")),
    selector: (row) => row.cuotas,
    sortable: true,
  },
  {
    name: (t("autorizaciones.table.column9")),
    selector: (row) => row.auto,
    sortable: false,
  },
  {
    name: (t("autorizaciones.table.column10")),
    selector: (row) => row.comercio,
    sortable: true,
  },
  {
    name: (t("autorizaciones.table.column11")),
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/movimientos/autorizaciones/detalle=${row.auto}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      > 
        {t("autorizaciones.table.column12")}
      </Link>
    ),
  },
])
}

const dataAutorizaciones = [
  {
    cuenta: 1471107,
    adi: 0,
    tarjeta: 5427022564065454,
    fecha: new Date().toString(),
    importe: 3890,
    moneda: "Local",
    plan: "Consumo en pesos",
    cuotas: 3,
    auto: 339302,
    comercio: "13011602-Hidalo Liliana Beatriz",
    estado: "Aprobada",
  },
];
export { AutorizacionesSearchArray, ColumnsAutorizaciones, dataAutorizaciones }; 