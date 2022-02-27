import { Link } from "react-router-dom";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import { useTranslation } from "react-i18next";
import {cuentas} from "../../../../services";

let productos = [];
let gruposAfinidad = [];

const getListaProductos = async () => {
  const response = await cuentas.getProductos();
  response.map((producto) => {
    productos.push({
      value: producto.idProducto,
      title: producto.descripcion,
    });
  });
};

const getListaGruposAfinidad = async () => {
  const response = await cuentas.getGruposAfinidad();
  response.map((grupo) => {
    gruposAfinidad.push({
      value: grupo.idGrupoAfinidad,
      title: grupo.descripcion,
    });
  });
};

getListaProductos();
getListaGruposAfinidad();

const ColumnsGestionCuenta =()=>{
  const { t} = useTranslation();
  return([
  {
    name: (t("gestioncuenta.table.column1")),//"N° de cuenta",
    selector: (row) => row.idCuenta,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column2")),//"Producto",
    selector: (row) => row.producto.descripcion,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column3")),//"Grupo de afinidad",
    selector: (row) => row.grupoAfinidad.descripcion,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column4")),//"Cuenta externa",
    selector: (row) => row.idCuentaExterna,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column5")),//"Nombre",
    selector: (row) => row.socio.persona.nombre,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column6")),//"Documento",
    selector: (row) => row.socio.persona.numeroDocumento,
    sortable: true,
  },
  {
    name:(t("gestioncuenta.table.column7")),// "N° tarjeta",
    selector: (row) => row.socio.tarjeta.numeroTarjeta,
    sortable: true,
  },
  {
    name: (t("gestioncuenta.table.column8")),//"Estado",
    selector: (row) => row.idEstado,
    sortable: true,
  },
  {
    name: "",
    button: true,
    cell: (row) => (
      <Link
        to={`/emision/socios/cuentas/editarCuenta=${row.idCuenta}`}
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
      >
        {t("gestioncuenta.table.column9")}
      </Link>
    ),
  },
])
}

const dataGestionCuenta = [
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
  {
    idcuenta: "001471107",
    producto: "Producto Sobre Disponible",
    gpafinidad: "Disponible",
    cexterna: "8",
    nombre: "Marianela Esteves",
    dni: "DNI 24801003",
    tarjeta: "552268XXXX",
    estado: "activo",
  },
];
const GestionCuentaSearch =()=>{
  const { t} = useTranslation();
  return( [
  {
    name: "N° de tarjeta",
    index: "tarjeta",
    input: <FloatInput label={t("gestioncuenta.search.input1")} placeholder={t("gestioncuenta.search.input1")} />,
  },
  {
    name: "N° de documento",
    index: "documento",
    input: <FloatInput label={t("gestioncuenta.search.input2")} placeholder={t("gestioncuenta.search.input2")} />,
  },
  {
    name: "N° de cuenta",
    index: "cuenta",
    input: <FloatInput label={t("gestioncuenta.search.input3")} placeholder={t("gestioncuenta.search.input3")} />,
  },
  {
    index: "IdCuentaExterna",
    input: (
      <FloatInput
        label={t("gestioncuenta.search.input4")}
        placeholder={t("gestioncuenta.search.input4")}
      />
    ),
  },
  {
    index: "IdProducto",
    input: (
      <FloatSelected
        label={t("gestioncuenta.search.input5")}
        placeholder={t("gestioncuenta.search.input5")}
        options={productos}
      />
    ),
  },
  {
    index: "IdGrupoAfinidad",
    input: (
      <FloatSelected
        label={t("gestioncuenta.search.input6")}
        placeholder={t("gestioncuenta.search.input6")}
        options={[
          {
            title: "Grupo 1",
            value: "Grupo 1",
            disabled: false,
          },
          {
            title: "Grupo 2",
            value: "Grupo 2",
            disabled: false,
          },
        ]}
      />
    ),
  },
  {
    name: "Nombre",
    index: "nombre",
    input: <FloatInput label={t("gestioncuenta.search.input7")} placeholder={t("gestioncuenta.search.input7")}/>,
  },
  {
    name: "Fecha Rel. Hasta",
    index: "fechahasta",
    input: (
      <FloatInput label={t("gestioncuenta.search.input8")} placeholder={t("gestioncuenta.search.input8")} />
    ),
  },
  {
    name: "Cuotas",
    index: "cuotas",
    input: (
      <FloatSelected
        placeholder={t("gestioncuenta.search.input9")}
        label={t("gestioncuenta.search.input9")}
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
    index: "fecha",
    input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
  },
])
}
export { dataGestionCuenta, ColumnsGestionCuenta, GestionCuentaSearch };
