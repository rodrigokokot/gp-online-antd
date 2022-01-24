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
      codigo: 111,
    },
    {
      id: 32,
      estado: "Activo",
      descripcion: "buenas noches",
      codigo: 222,
    },
    {
      id: 34,
      estado: "Cancelado",
      descripcion: "buenas noches",
      codigo: 333,
    },
    {
      id: 54,
      estado: "Suspendido",
      descripcion: "buen dia",
      codigo: 444,





    },
    {
      id: 25,
      estado: "Suspendido",
      descripcion: "buen dia",
      codigo: 999,





    },
  ];
  


export {dataGestionSucursales,columnsGestionSucursales};