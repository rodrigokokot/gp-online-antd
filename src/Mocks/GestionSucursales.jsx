import { DownOutlined } from "@ant-design/icons";
const columnsGestionSucursales = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Codigo",
      selector: (row) => row.codigo,
      sortable: true,
    }
  ];
  
  const dataGestionSucursales = [
    {
      id: 23,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 999,




       branch: "Cordoba",

    },
    {
      id: 32,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 999,




       branch: "Cordoba",
    },
    {
      id: 34,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 999,




       branch: "Cordoba",
    },
    {
      id: 54,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 999,




       branch: "Cordoba",

    },
    {
      id: 25,
      estado: "Activo",
      descripcion: "buen dia",
      codigo: 999,




       branch: "Cordoba",

    },
  ];
  


export {dataGestionSucursales,columnsGestionSucursales};
