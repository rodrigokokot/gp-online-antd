import FloatInput from "../../../../components/molecules/FloatInput";
import { Link } from "react-router-dom";
  ///////// MOCK DE LA BÚSQUEDA ////////
  const GestionAdicionalesSearchArray = [
    {
      index: "cuenta",
      input: <FloatInput label="N° de cuenta" />,
    },
    {
      index: "cuenta-adicional",
      input: <FloatInput label="Cta./Adicional" />,
    },
    {
      index: "documento",
      input: <FloatInput label="N° de documento" />,
    },
    {
      index: "tarjeta",
      input: <FloatInput label="N° de tarjeta" />,
    },
    {
      index: "nombre",
      input: <FloatInput label="Nombre" />,
    },
  ];

  //////// COLUMNAS DE LA TABLA /////////
  const columnsGestionAdicionales = [
    {
      name: "Cta/Adic.",
      selector: (row) => row.adicional,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.documento,
      sortable: false,
    },
    {
      name: "Producto",
      selector: (row) => row.producto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <Link
          to={`/emision/socios/adicionales/nueva/${row.adicional}`}
          style={{ textDecoration: "underline" }}
          rel="noopener noreferrer"
        >
          Nuevo Adicional
        </Link>
      ),
    },
  ];

  ////////// MOCK DATOS TABLA //////////
  const dataGestionAdicionales = [
    {
      adicional: "001471107-0",
      nombre: "Marianela Esteves",
      documento: "DNI 24801003",
      producto: "Producto Sobre Disponible",
      estado: "Activo",
    },
  ];
  
export {
    dataGestionAdicionales,
    columnsGestionAdicionales,
    GestionAdicionalesSearchArray,
  };
  
