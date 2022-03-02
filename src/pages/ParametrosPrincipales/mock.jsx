import { Link } from "react-router-dom";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelected from "../../components/molecules/FloatSelected/index";
import { useTranslation } from "react-i18next";
import { sucursales } from "../../services";

let provincias = [];
let estados = [];

const getListaProvincias = async () => {
  const response = await sucursales.getProvincias();
  console.log(response);
  response.map((item) => {
    provincias.push({
      value: item.idProvincia,
      title: item.descripcion,
    });
  });
};

const getListaEstados = async () => {
  const response = await sucursales.getEstados();
  // console.log(response);
  response.map((item) => {
    estados.push({
      value: item.idEstado,
      title: item.descripcion,
    });
  });
};

getListaProvincias();
getListaEstados();

///////MOCK PARA LOS INPUTS DEL SEARCH////////
const GestionSucursalesSearchMock = () => {
  const { t } = useTranslation();
  return [
    {
      index: "descripcion",
      input: (
        <FloatInput
          placeholder={t("gestionsucursales.search.input1")}
          label={t("gestionsucursales.search.input1")}
        />
      ),
    },
    {
      index: "codigo",
      name: "Código",
      input: (
        <FloatInput
          placeholder={t("gestionsucursales.search.input2")}
          label={t("gestionsucursales.search.input2")}
        />
      ),
    },

    {
      index: "cp",
      name: "Código Postal",
      input: (
        <FloatInput
          placeholder={t("gestionsucursales.search.input3")}
          label={t("gestionsucursales.search.input3")}
        />
      ),
    },

    {
      index: "provincia",
      name: "Provincia",
      input: (
        <FloatSelected
          placeholder={t("gestionsucursales.search.input4")}
          label={t("gestionsucursales.search.input4")}
          options={provincias}
        />
      ),
    },

    {
      index: "estado",
      input: (
        <FloatSelected
          label={t("gestionsucursales.search.input5")}
          placeholder={t("gestionsucursales.search.input5")}
          options={estados}
        />
      ),
    },
  ];
};

const ColumnsGestionSucursales = () => {
  const { t } = useTranslation();
  return [
    {
      name: t("gestionsucursales.table.column1"),
      selector: (row) => row.idSucursal,
      sortable: true,
    },
    {
      name: t("gestionsucursales.table.column2"),
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: t("gestionsucursales.table.column3"),
      selector: (row) => row.estado.descripcion,
      sortable: true,
    },
    {
      name: " ",
      button: true,
      cell: (row) => (
        <Link
          to={`/parametrosPrincipales/gestionDeSucursales/editarSucursal=${row.idSucursal}`}
          style={{ textDecoration: "underline" }}
          rel="noopener noreferrer"
        >
          {t("gestionsucursales.table.column4")}
        </Link>
      ),
    },
  ];
};

const dataGestionSucursales = [
  {
    id: 23,
    estado: "Activo",
    descripcion: "Sucursal cordoba",
    codigo: "0001",
  },
  {
    id: 32,
    estado: "Activo",
    descripcion: "Sucursal San juan",
    codigo: "0002",
  },
  {
    id: 34,
    estado: "Activo",
    descripcion: "Sucursal San Luis",
    codigo: "0003",
  },
  {
    id: 54,
    estado: "Activo",
    descripcion: "Sucursal Tucuman",
    codigo: "0004",
  },
  {
    id: 25,
    estado: "Activo",
    descripcion: "Sucursal Salta",
    codigo: "0005",
  },
];

export {
  dataGestionSucursales,
  ColumnsGestionSucursales,
  GestionSucursalesSearchMock,
};
