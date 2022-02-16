import React, { useState } from "react";
import Table from "../../../components/organisms/Table";
import { Button, Card,Col,Row } from "antd";
import SearchForm from "../../../components/organisms/SearchForm";
import { AjustesSearch, ColumnsAjustes, dataAjustes, } from "../mock";
import { useTranslation } from "react-i18next";

const Ajustes = () => {
  const { t } = useTranslation();
  let childResponse = null;
  const [data, setData] = useState(""); 
  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAjustes);
  }

  function selectedRows(value) {
    childResponse = value.selectedRows;
  }

  function showValues() {
    console.log("request:", childResponse);
  }

  return (
    <>
      <Card style={{ marginBottom: "6px", borderRadius: "0.5em" }}>
        <h2 style={{ color: "#AB218E" }}>{t("gestionaprobaciones.tab2.ajustes.title1")}</h2>  
        <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext1")}</h1><h1 className="bold-text">{'213432'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext2")}</h1><h1 className="bold-text">{'Emilia'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext3")}</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext4")}</h1><h1 className="bold-text">{'MasterCard'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext5")}</h1><h1 className="bold-text">{'Banco de Córdoba'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text1.greytext6")}</h1><h1 className="bold-text">{'Córdoba'}</h1>
        </Col> 
      </Row> <br></br>  
      <h2 style={{ color: "#AB218E" }}>{t("gestionaprobaciones.tab2.ajustes.title2")}</h2>  
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text2.greytext1")}</h1><h1 className="bold-text">{'DNI-35404040'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text2.greytext2")}</h1><h1 className="bold-text">{'Gonzalez'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("gestionaprobaciones.tab2.ajustes.text2.greytext3")}</h1><h1 className="bold-text">{'Ruben Dario'}</h1>
        </Col>
      </Row>   
      </Card>
      <SearchForm
        title={t("gestionaprobaciones.tab2.search.searchtitle")}
        array={AjustesSearch()}
        span={6}
        parentCallback={handleCallback}
      />
      <br />
      <Table
        data={data}
        columns={ColumnsAjustes()}
        expandible={false}
        selectable={true}
        parentCallback={selectedRows}
      />
      <br />
      <Button type="primary" onClick={showValues}>
      {t("gestionaprobaciones.tab2.button")}
      </Button>
    </>
  );
};

export default Ajustes;
