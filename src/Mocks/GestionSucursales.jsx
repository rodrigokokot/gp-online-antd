const gestionSucursalesData = [
  {
    id: 1,
    descripcion: "tarjeta",
    codigo: "666",
    cp: "5425",
    provincia: "San Juan",
    estado: "Suspendido",
  },
  {
    id: 2,
    descripcion: "debito",
    codigo: "999",
    cp: "5400",
    provincia: "San Luis",
    estado: "Activo",
  },
];

const gestionSucursalesColumns = [
  {
    name: "Codigo",
    selecor: (row) => row.codigo,
    sortable: true,
  },
  {
    name: "Descripción",
    selector: (row) => row.descripcion,
    sortable: false,
  },
  {
    name: "Estado",
    selecor: (row) => row.estado,
    sortable: true,
  },
];

export { gestionSucursalesData, gestionSucursalesColumns };
