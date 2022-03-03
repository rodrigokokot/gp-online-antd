import { Link } from "react-router-dom";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import DateRangeFilter from "../../../../components/organisms/DateRangeFilter";
import FloatInput from "../../../../components/molecules/FloatInput/index";
import {cuentas, productosServices, grupoAfinidad} from "../../../../services";
import { useEffect } from "react";
import { CuentasGetRequest } from "../../../../classes/Request";
import { ProductosResponse, GruposAfinidadResponse, CuentasResponse } from "../../../../classes/Response";
import { useSelectAsync } from "../../../../hooks";
import { useTranslation } from "react-i18next";

const useMock = () => {
  const cuentasRequest = new CuentasGetRequest()
  const productos = useSelectAsync()
  const gruposAfinidad = useSelectAsync()
  const { t } = useTranslation();

  useEffect(async() => {
    let [responseP, responseGA] = await Promise.all([
      productosServices.getProductos(),
      grupoAfinidad.getGruposAfinidad()
    ])

    let listP = responseP?.length > 0? responseP.map((element) => {
      const producto = new ProductosResponse(element)
      return {
        value: producto.IdProducto,
        title: producto.Descripcion,
      }
    }) : [];

    productos.setDataSelect({
      data: listP,
      loading: false
    })


    let listGA = responseGA?.length > 0? responseGA.map((grupo) => {
      const gAfinidad = new GruposAfinidadResponse(grupo)
      return {
        value: gAfinidad.IdGrupoAfinidad,
        title: gAfinidad.Descripcion,
      }
    }) : [];
    gruposAfinidad.setDataSelect({
      data: listGA,
      loading: false
    })

  }, [])

  const columnsGestionCuenta = [
    {
      name: t("gestioncuenta.table.column1"), //"N° de cuenta",
      selector: (row = new CuentasResponse()) => row.IdCuenta,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column2"), //"Producto",
      selector: (row = new CuentasResponse()) => row.Producto.Descripcion,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column3"), //"Grupo de afinidad",
      selector: (row = new CuentasResponse()) => row.GrupoAfinidad.Descripcion,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column4"), //"Cuenta externa",
      selector: (row) => (row = new CuentasResponse()) => row.IdCuentaExterna,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column5"), //"Nombre",
      selector: (row = new CuentasResponse()) => row.Socio.Persona.Nombre,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column6"), //"Documento",
      selector: (row = new CuentasResponse()) => row.Socio.Persona.NumeroDocumento,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column7"), // "N° tarjeta",
      selector: (row = new CuentasResponse()) => row.Socio.Tarjeta,
      sortable: true,
    },
    {
      name: t("gestioncuenta.table.column8"), //"Estado",
      selector: (row = new CuentasResponse()) => row.IdEstado,
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: (row = new CuentasResponse()) => (
        <Link
          to={`/emision/socios/cuentas/editarCuenta=${row.idCuenta}`}
          style={{ textDecoration: "underline" }}
          rel="noopener noreferrer"
        >
          {t("gestioncuenta.table.column9")}
        </Link>
      ),
    },
  ];

  const GestionCuentaSearch = [
    {
      name: "N° de tarjeta",
      index: cuentasRequest.Tarjeta,
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input1")}
          placeholder={t("gestioncuenta.search.input1")}
        />
      ),
    },
    {
      name: "N° de documento",
      index: cuentasRequest.NroDocumento,
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input2")}
          placeholder={t("gestioncuenta.search.input2")}
        />
      ),
    },
    {
      name: "N° de cuenta",
      index: cuentasRequest.IdCuenta,
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input3")}
          placeholder={t("gestioncuenta.search.input3")}
        />
      ),
    },
    {
      index: cuentasRequest.IdCuentaExterna,
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input4")}
          placeholder={t("gestioncuenta.search.input4")}
        />
      ),
    },
    {
      index: cuentasRequest.IdProducto,
      input: (
        <FloatSelected
          label={t("gestioncuenta.search.input5")}
          placeholder={t("gestioncuenta.search.input5")}
          options={productos?.dataSelect.data}
          loading={productos?.dataSelect.loading}
        />
      ),
    },
    {
      index: cuentasRequest.IdGrupoAfinidad,
      input: (
        <FloatSelected
          label={t("gestioncuenta.search.input6")}
          placeholder={t("gestioncuenta.search.input6")}
          options={gruposAfinidad?.dataSelect.data}
          loading={gruposAfinidad?.dataSelect.loading}
        />
      ),
    },
    {
      name: "Nombre",
      index: cuentasRequest.Nombre,
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input7")}
          placeholder={t("gestioncuenta.search.input7")}
        />
      ),
    },
    {
      name: "Fecha Rel. Hasta",
      index: "fechahasta",
      input: (
        <FloatInput
          label={t("gestioncuenta.search.input8")}
          placeholder={t("gestioncuenta.search.input8")}
        />
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
  ];
  return { columnsGestionCuenta, GestionCuentaSearch };

}

export default useMock;

// async function getListaProductos() {
//   const response = await cuentas.getProductos();
//   response.map((producto) => {
//     productos.push({
//       value: producto.idProducto,
//       title: producto.descripcion,
//     });
//   });
//   productosLoading = false
//   // console.log(productosLoading);
// }

// async function getListaGruposAfinidad() {
//   const response = await cuentas.getGruposAfinidad();
//   response.map((grupo) => {
//     gruposAfinidad.push({
//       value: grupo.idGrupoAfinidad,
//       title: grupo.descripcion,
//     });
//   });
//   // console.log(gruposAfinidad);
// }

// getListaProductos();
// getListaGruposAfinidad();

// const columnsGestionCuenta = [
//   {
//     name: "N° de cuenta",
//     selector: (row  = new CuentasResponse) => row.idCuenta,
//     sortable: true,
//   },
//   {
//     name: "Producto",
//     selector: (row  = new CuentasResponse) => row.producto.descripcion,
//     sortable: true,
//   },
//   {
//     name: "Grupo de afinidad",
//     selector: (row  = new CuentasResponse) => row.grupoAfinidad.descripcion,
//     sortable: true,
//   },
//   {
//     name: "Cuenta externa",
//     selector: (row  = new CuentasResponse) => row.idCuentaExterna,
//     sortable: true,
//   },
//   {
//     name: "Nombre",
//     selector: (row  = new CuentasResponse) => row.socio.persona.nombre,
//     sortable: true,
//   },
//   {
//     name: "Documento",
//     selector: (row  = new CuentasResponse) => row.socio.persona.numeroDocumento,
//     sortable: true,
//   },
//   {
//     name: "N° tarjeta",
//     selector: (row  = new CuentasResponse) => row.socio.tarjeta.numeroTarjeta,
//     sortable: true,
//   },
//   {
//     name: "Estado",
//     selector: (row  = new CuentasResponse) => row.idEstado,
//     sortable: true,
//   },
//   {
//     name: "",
//     button: true,
//     cell: (row  = new CuentasResponse) => (
//       <Link
//         to={`/emision/socios/cuentas/editarCuenta=${row.idcuenta}`}
//         style={{ textDecoration: "underline" }}
//         rel="noopener noreferrer"
//       >
//         Editar
//       </Link>
//     ),
//   },
// ];

// const dataGestionCuenta = [
//   {
//     idcuenta: "001471107",
//     producto: "Producto Sobre Disponible",
//     gpafinidad: "Disponible",
//     cexterna: "8",
//     nombre: "Marianela Esteves",
//     dni: "DNI 24801003",
//     tarjeta: "552268XXXX",
//     estado: "activo",
//   },
//   {
//     idcuenta: "001471107",
//     producto: "Producto Sobre Disponible",
//     gpafinidad: "Disponible",
//     cexterna: "8",
//     nombre: "Marianela Esteves",
//     dni: "DNI 24801003",
//     tarjeta: "552268XXXX",
//     estado: "activo",
//   },
//   {
//     idcuenta: "001471107",
//     producto: "Producto Sobre Disponible",
//     gpafinidad: "Disponible",
//     cexterna: "8",
//     nombre: "Marianela Esteves",
//     dni: "DNI 24801003",
//     tarjeta: "552268XXXX",
//     estado: "activo",
//   },
//   {
//     idcuenta: "001471107",
//     producto: "Producto Sobre Disponible",
//     gpafinidad: "Disponible",
//     cexterna: "8",
//     nombre: "Marianela Esteves",
//     dni: "DNI 24801003",
//     tarjeta: "552268XXXX",
//     estado: "activo",
//   },
//   {
//     idcuenta: "001471107",
//     producto: "Producto Sobre Disponible",
//     gpafinidad: "Disponible",
//     cexterna: "8",
//     nombre: "Marianela Esteves",
//     dni: "DNI 24801003",
//     tarjeta: "552268XXXX",
//     estado: "activo",
//   },
// ];
// const GestionCuentaSearch = [
//   {
//     name: "N° de tarjeta",
//     index: "Tarjeta",
//     input: <FloatInput label="N° de tarjeta" placeholder="N° de tarjeta" />,
//   },
//   {
//     name: "N° de documento",
//     index: "NroDocumento",
//     input: <FloatInput label="N° de documento" placeholder="N° de documento" />,
//   },
//   {
//     name: "N° de cuenta",
//     index: "IdCuenta",
//     input: <FloatInput label="N° de cuenta" placeholder="N° de cuenta" />,
//   },
//   {
//     index: "IdCuentaExterna",
//     input: (
//       <FloatInput
//         label="N° de cuenta externa"
//         placeholder="N° de cuenta externa"
//       />
//     ),
//   },
//   {
//     index: "IdProducto",
//     input:
//       (
//         <FloatSelected
//           label="Producto"
//           placeholder="Producto"
//           options={productos}
//           loading={productosLoading}
//         />
//       ),
//   },
//   {
//     index: "IdGrupoAfinidad",
//     input: (
//       <FloatSelected
//         label="Grupo de afinidad"
//         placeholder="Grupo de afinidad"
//         options={gruposAfinidad}
//         loading={true}
//       />
//     ),
//   },
//   {
//     name: "Nombre",
//     index: "Nombre",
//     input: <FloatInput label="Nombre" placeholder="Nombre" />,
//   },
//   {
//     name: "Fecha Rel. Hasta",
//     index: "fechahasta",
//     input: (
//       <FloatInput label="Fecha Rel. Hasta" placeholder="Fecha Rel. Hasta" />
//     ),
//   },
//   {
//     name: "Cuotas",
//     index: "cuotas",
//     input: (
//       <FloatSelected
//         placeholder="Cuotas"
//         label="Cuotas"
//         options={[
//           {
//             title: "1",
//             value: "1",
//             disabled: false,
//           },
//           {
//             title: "3",
//             value: "3",
//             disabled: false,
//           },
//         ]}
//       />
//     ),
//   },

//   {
//     index: "fecha",
//     input: <DateRangeFilter placeholder="fecha" label="Por fecha" />,
//   },
// ];
// export { dataGestionCuenta, columnsGestionCuenta, GestionCuentaSearch };
