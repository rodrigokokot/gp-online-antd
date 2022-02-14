import { Link } from "react-router-dom";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
const columnsCPMovimiento = [
  {
    name: "Producto",
    selector: (row) => row.producto,
    sortable: true,
  },
  {
    name: "Movimiento",
    selector: (row) => row.movimiento,
    sortable: true,
  },
  {
    name: "Locación",
    selector: (row) => row.locacion,
    sortable: true,
  },
  {
    name: "Evento",
    selector: (row) => row.evento,
    sortable: true,
  },
  {
    name: "Precio",
    selector: (row) => row.precio,
    sortable: true,
  },
  {
    name: "Aplica IVA",
    selector: (row) => row.iva,
    sortable: true,
  },
  {
    name: "%",
    selector: (row) => row.porcentaje,
    sortable: true,
  },
  {
    name: "Concepto",
    selector: (row) => row.concepto,
    sortable: true,
  },
  {
    name: "Fecha desde",
    selector: (row) => row.fdesde,
    sortable: true,
  },
  {
    name: "Fecha hasta",
    selector: (row) => row.fhasta,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/cargosAjustes/cargosPorProductosMovimientos/editarCargoPorProductoYMovimiento=${row.evento}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        Editar
      </Link>
    ),
  },
];

const dataCPMovimiento = [
  {
    producto: "Producto Pre",
    movimiento: "GAF 99",
    locacion: "Cargo por renovacion",
    evento: "15",
    precio: "-si",
    iva: "-",
    porcentaje: "-",
    concepto: "-",
    fdesde: "28/04/2021",
    fhasta: "-",
    option: <Link>Editar</Link>,
  },
  {
    producto: "Producto Pre",
    movimiento: "GAF 99",
    locacion: "Cargo por renovacion",
    evento: "15",
    precio: "-si",
    iva: "-",
    porcentaje: "-",
    concepto: "-",
    fdesde: "28/04/2021",
    fhasta: "-",
    option: <Link>Editar</Link>,
  },
];
const CPMovimientoSearch = [
  {
    index: "Codigo",
    name: "codigo",
    input: <FloatInput placeholder="Código" label="Código" />,
  },
  {
    index: "Descripcion",
    name: "descripcion",
    input: <FloatInput placeholder="Descripción" label="Descripción" />,
  },
  {
    index: "Todos",
    name: "todos",
    input: <FloatInput placeholder="Todos" label="Todos" />,
  },
  {
    index: "Debito",
    input: (
      <FloatSelected
        placeholder="Débito"
        label="Débito"
        options={[
          { title: "dev 1", value: 1, disabled: false },
          { title: "dev 2", value: 2, disabled: false },
          { title: "dev 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "Grupo Transaccion",
    input: (
      <FloatSelected
        placeholder="Grupo Transacción"
        label="Grupo Transacción"
        options={[
          { title: "Transacción 1", value: 1, disabled: false },
          { title: "Transacción 2", value: 2, disabled: false },
          { title: "Transacción 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "Comprobante",
    name: "comprobante",
    input: <FloatInput placeholder="Comprobante" label="Comprobante" />,
  },
  {
    index: "N° de cuenta",
    name: "cuenta",
    input: <FloatInput placeholder="N° de cuenta" label="N° de cuenta" />,
  },
  {
    index: "Adic",
    name: "adic",
    input: <FloatInput placeholder="Adic" label="Adic" />,
  },
  {
    index: "Liq. Socio (LS)",
    input: (
      <FloatSelected
        placeholder="Liq. Socio (LS)"
        label="Liq. Socio (LS)"
        options={[
          { title: "LS 1", value: 1, disabled: false },
          { title: "LS 2", value: 2, disabled: false },
          { title: "LS 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "Cuotas",
    name: "cuotas",
    input: <FloatInput placeholder="Cuotas" label="Cuotas" />,
  },
  {
    index: "Producto",
    input: (
      <FloatSelected
        placeholder="Producto"
        label="Producto"
        options={[
          { title: "producto 1", value: 1, disabled: false },
          { title: "producto 2", value: 2, disabled: false },
          { title: "producto 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "Grupo de afinidad",
    input: (
      <FloatSelected
        placeholder="Grupo de afinidad"
        label="Grupo de afinidad"
        options={[
          { title: "Grupo de afinidad 1", value: 1, disabled: false },
          { title: "Grupo de afinidad 2", value: 2, disabled: false },
          { title: "Grupo de afinidad 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "Movimiento",
    input: (
      <FloatSelected
        placeholder="Movimiento"
        label="Movimiento"
        options={[
          { title: "Movimiento 1", value: 1, disabled: false },
          { title: "Movimiento 2", value: 2, disabled: false },
          { title: "Movimiento 3", value: 3, disabled: false },
        ]}
      ></FloatSelected>
    ),
  },
  {
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
  {
    index: "moneda",
    input: (
      <SelectImg
        showSearch={true}
        placeholder="Busca tipo de moneda"
        style={{ width: 250 }}
      />
    ),
  },
];
export { dataCPMovimiento, columnsCPMovimiento, CPMovimientoSearch };
