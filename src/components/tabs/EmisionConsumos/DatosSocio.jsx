import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const DatosSocio = () => {
  const { t} = useTranslation();
  return (
    <Card> 
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext1")}</h4><h1 className="bold-text">{'nombre'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext2")}</h4><h1 className="bold-text">{'Apellido'}</h1> 
        </Col> 
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>  
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext6")}</h4><h1 className="bold-text">{'tarjeta'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab2.text.greytext7")}</h4><h1 className="bold-text">{'producto'}</h1> 
        </Col> 
      </Row>
    </Card>
  );
};

export default DatosSocio;
