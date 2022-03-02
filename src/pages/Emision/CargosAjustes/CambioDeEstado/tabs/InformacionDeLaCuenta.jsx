import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const InformacionDeLaCuenta = () => {
  const { t } = useTranslation();
  return (
    <>
      <Card>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab1.greytext1")}</h1><h1 className="bold-text">{'213432'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab1.greytext2")}</h1><h1 className="bold-text">{'Emilia'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab1.greytext3")}</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("estado.view.tab1.greytext4")}</h1><h1 className="bold-text">{'MasterCard'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("estado.view.tab1.greytext5")}</h1><h1 className="bold-text">{'Banco de Córdoba'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">{t("estado.view.tab1.greytext6")}</h1><h1 className="bold-text">{'Córdoba'}</h1>
        </Col> 
        <Col span={5}> 
            <h1 className="grey-text">{t("estado.view.tab1.greytext7")}</h1><h1 className="bold-text">{'Córdoba'}</h1>
        </Col> 
        </Row>      
      </Card>
    </>
  );
};

export default InformacionDeLaCuenta;
