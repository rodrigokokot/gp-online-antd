import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import useMock from "./mock";
import { Col, Button } from "antd";
import {cuentas} from "../../../../services";
import { useTranslation } from "react-i18next";
import { useRequestGetToSend, useDataTable } from "../../../../hooks";

/* hacer que router tengo la dir de app.js  */
const GestionCuentas = () => {
  const { t} = useTranslation();
  const { requestGetToSend } = useRequestGetToSend()
  const mock = useMock();
  const { dataTable, setDataTable } = useDataTable()

  async function handleCallback(values) {
    //console.log(values);
    const request= requestGetToSend(values);
    setDataTable({
      initial: true,
      data: [],
      loading: true
    });
    const response = await cuentas.getCuentas(request);
    setDataTable({
      initial: false,
      data: response,
      loading: false
    });
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/cuentas/crearCuenta">
          <Button type="primary" size="small">
            {t("gestioncuenta.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        span={4}
        array={mock.GestionCuentaSearch}
        parentCallback={handleCallback}
        title={t("gestioncuenta.search.searchtitle")}
      />
      <br></br>
      <Table data={dataTable} columns={mock.columnsGestionCuenta} />
    </>
  );
};
export default GestionCuentas;
