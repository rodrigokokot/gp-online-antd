import { Link } from "react-router-dom";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelected from "../../components/molecules/FloatSelected/index";
import { useTranslation } from 'react-i18next';
///////MOCK PARA LOS INPUTS DEL SEARCH////////
const GestionSucursalesSearchMock =()=> {
  const { t} = useTranslation();
  return([
  {
    index: 'descripcion',
    name: "Descripción",
    input: <FloatInput placeholder={t("gestionsucursales.search.input1")} label={t("gestionsucursales.search.input1")} />,
  },


  {
    index: 'codigo',
    name: "Código",
    input: <FloatInput placeholder={t("gestionsucursales.search.input2")} label={t("gestionsucursales.search.input2")} />,
  },

  {
    index: 'cp',
    name: "Código Postal",
    input: <FloatInput placeholder={t("gestionsucursales.search.input3")} label={t("gestionsucursales.search.input3")}/>,
  },

  {
    index: 'provincia',
    name: "Provincia",
    input: (
      <FloatSelected
        placeholder={t("gestionsucursales.search.input4")}
        label={t("gestionsucursales.search.input4")}
        options={[
          {
            title: "San Juan",
            value: "San Juan",
            disabled: false,
          },
          {
            title: "Mendoza",
            value: "Mendoza",
            disabled: false,
          },
          {
            title: "San Luis",
            value: "San Luis",
            disabled: false,
          },
        ]}
      />
    ),
  },

  {
    index: 'estado',
    name: "Estado",
    input: (
      <FloatSelected
        placeholder={t("gestionsucursales.search.input5")}
        label={t("gestionsucursales.search.input5")}
        options={[
          {
            title: "Activo",
            value: "Activo",
            disabled: false,
          },

          {
            title: "Suspendido",
            value: "Suspendido",
            disabled: false,
          },

          {
            title: "Cancelado",
            value: "Cancelado",
            disabled: false,
          },
        ]}
      />
    ),
  },
])
}

const ColumnsGestionSucursales =()=> {
  const { t} = useTranslation();
  return([
  
  {
    name: (t("gestionsucursales.table.column1")),
    selector: (row) => row.codigo,
    sortable: true,
  },
  {
    name: (t("gestionsucursales.table.column2")),
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: (t("gestionsucursales.table.column3")),
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: " ",
		button: true,
		cell: row => (
			<Link to={`/parametrosPrincipales/gestionDeSucursales/editarSucursal=${row.codigo}`} style={{textDecoration:"underline"}} rel="noopener noreferrer">
				{t("gestionsucursales.table.column4")}
			</Link>
		),
  },
])
}

const dataGestionSucursales = [
  {
    id: 23,
    estado: "Activo",
    descripcion: "Sucursal cordoba",
    codigo: '0001',
  },
  {
    id: 32,
    estado: "Activo",
    descripcion: "Sucursal San juan",
    codigo: '0002',
  },
  {
    id: 34,
    estado: "Activo",
    descripcion: "Sucursal San Luis",
    codigo: '0003',
  },
  {
    id: 54,
    estado: "Activo",
    descripcion: "Sucursal Tucuman",
    codigo: '0004',
  },
  {
    id: 25,
    estado: "Activo",
    descripcion: "Sucursal Salta",
    codigo: '0005',
  },
];

export { dataGestionSucursales, ColumnsGestionSucursales,GestionSucursalesSearchMock };
