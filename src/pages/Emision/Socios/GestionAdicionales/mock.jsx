import FloatInput from "../../../../components/molecules/FloatInput";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
  ///////// MOCK DE LA BÚSQUEDA ////////
  const GestionAdicionalesSearchArray=()=>{
  const { t} = useTranslation();
  return([
    {
      index: "cuenta",
      input: <FloatInput label={t("adicionales.search.input1")} />,
    },
    {
      index: "cuenta-adicional",
      input: <FloatInput label={t("adicionales.search.input2")} />,
    },
    {
      index: "documento",
      input: <FloatInput label={t("adicionales.search.input3")} />,
    },
    {
      index: "tarjeta",
      input: <FloatInput label={t("adicionales.search.input4")} />,
    },
    {
      index: "nombre",
      input: <FloatInput label={t("adicionales.search.input5")} />,
    },
  ])
}

  //////// COLUMNAS DE LA TABLA /////////
  const ColumnsGestionAdicionales=()=>{
  const { t} = useTranslation();
  return([
    {
      name: (t("adicionales.table.column1")),
      selector: (row) => row.adicional,
      sortable: true,
    },
    {
      name: (t("adicionales.table.column2")),
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: (t("adicionales.table.column3")),
      selector: (row) => row.documento,
      sortable: false,
    },
    {
      name: (t("adicionales.table.column4")),
      selector: (row) => row.producto,
      sortable: true,
    },
    {
      name: (t("adicionales.table.column5")),
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
          {t("adicionales.table.column6")}
        </Link>
      ),
    },
  ])
}

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
    ColumnsGestionAdicionales,
    GestionAdicionalesSearchArray,
  };
  
