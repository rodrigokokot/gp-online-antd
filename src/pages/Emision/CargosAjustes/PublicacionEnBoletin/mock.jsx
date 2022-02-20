import { Link } from 'react-router-dom';
import FloatSelected from '../../../../components/molecules/FloatSelected';
import FloatInput from "../../../../components/molecules/FloatInput/index";  
import { useTranslation } from 'react-i18next';
const ColumnsPBoletin=()=>{
  const { t} = useTranslation();
  return( [
    {
        name: (t("boletin.table.column1")),
        selector: (row) => row.esucursal,
        sortable: true
      },
      {
        name: (t("boletin.table.column2")),
        selector: (row) => row.id,
        sortable: true
      },
      {
        name: (t("boletin.table.column3")),
        selector: (row) => row.cliente,
        sortable: true
      },
      {
        name: (t("boletin.table.column4")),
        selector: (row) => row.documento,
        sortable: true
      },
      {
        name: (t("boletin.table.column5")),
        selector: (row) => row.marca,
        sortable: true
      },
      {
        name: (t("boletin.table.column6")),
        selector: (row) => row.cuenta,
        sortable: true
      },
      {
        name: (t("boletin.table.column7")),
        selector: (row) => row.producto,
        sortable: true
      },
      {
        name: (t("boletin.table.column8")),
        selector: (row) => row.adicional,
        sortable: true
      },
      {
        name: (t("boletin.table.column9")),
        selector: (row) => row.tarjeta,
        sortable: true
      },
      {
        name: "",
        button: true,
        cell: (row) => (
          <Link
            to={`/emision/cargosAjustes/publicacionEnBoletin/detalle=${row.id}`}
            style={{ textDecoration: "underline" }}
            rel="noopener noreferrer"
          >
            {t("boletin.table.column10")}
          </Link>
        ),
      },
  ])
}
  
  const dataPBoletin = [
    {
        esucursal: 'Tarjeta Grupar - Cordoba',
        id: '3227811',
        cliente: "Mari",
        documento: "DNI 24801003",
        marca: "Tarjeta Grupar",
        cuenta: "54071107", 
        producto: "Tarjeta Grupar",
        adicional: "0",
        tarjeta: "6063011055857316",
        option:<Link>Ver detalle</Link>
      }, 
      {
          esucursal: 'Tarjeta Grupar - Cordoba',
          id: '1617811',
          cliente: "Mari",
          documento: "DNI 24801003",
          marca: "Tarjeta Grupar",
          cuenta: "001471108", 
          producto: "Tarjeta Grupar",
          adicional: "0",
          tarjeta: "6063011055857316",
          option:<Link>Ver detalle</Link>
        }, 
  ];
  const PBoletinSearch=()=>{
    const { t} = useTranslation();
    return( [
      {
        name: "Emisor",
        index: "emisor",
        input: <FloatSelected label={t("boletin.search.input1")} placeholder={t("boletin.search.input1")} />,
      },
      {
        name: "Marca",
        index: "marca",
        input: <FloatSelected label={t("boletin.search.input2")}  placeholder={t("boletin.search.input2")}  />,
      },
      {
        name: "Producto",
        index: "producto",
        input: <FloatSelected label={t("boletin.search.input3")}  placeholder={t("boletin.search.input3")} />,
      },
       {
         index: 'N° de cuenta',
         name: 'cuenta',
         input: <FloatInput placeholder={t("boletin.search.input4")} label={t("boletin.search.input4")} />,
       },
       {
         index: 'N° de cuenta orginal',
         name: 'cuenta',
         input: <FloatInput placeholder={t("boletin.search.input5")} label={t("boletin.search.input5")}/>,
       },
       {
         name: "Nº Cuenta relacionada",
         index: "cuentaexterna",
         input: <FloatSelected label={t("boletin.search.input6")}  placeholder={t("boletin.search.input6")} />,
       },
       {
         name: "Apellidos",
         index: "producto",
         input: <FloatInput label={t("boletin.search.input7")}  placeholder={t("boletin.search.input7")}  />,
       },
       {
         name: "Nombres",
         index: "cuenta",
         input: <FloatInput label={t("boletin.search.input8")}  placeholder={t("boletin.search.input8")}  />,
       },
       {
         name: "Tipo de Documento",
         index: "producto",
         input: <FloatSelected label={t("boletin.search.input9")}  placeholder={t("boletin.search.input9")} />,
       },
       {
         name: "Nº de Documento",
         index: "cuenta",
         input: <FloatSelected label={t("boletin.search.input10")}  placeholder={t("boletin.search.input10")}  />,
       },
       {
         name: "Razón Social",
         index: "cuenta",
         input: <FloatInput label={t("boletin.search.input11")}  placeholder={t("boletin.search.input11")}  />,
       },
       {
         name: "Nº Empresa",
         index: "cuenta",
         input: <FloatInput label={t("boletin.search.input12")}  placeholder={t("boletin.search.input12")}  />,
       },
   ])
  }
export { dataPBoletin, ColumnsPBoletin,PBoletinSearch};