import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const ConsultasAutorizacion = () => {
  const { t} = useTranslation();
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab4.text.greytext1")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext2")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext6")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext7")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext8")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext9")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext10")} </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext11")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext12")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext13")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext14")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext15")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext16")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext17")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("consumos.tab4.text.greytext18")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
      </Row>
    </Card>
  );
};

export default ConsultasAutorizacion;
