import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const DatosAdicionales = () => {
  const { t} = useTranslation();
  return (
    <Card>  
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext1")}</h4><h1 className="bold-text">{'22/07/21 11:57:29'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext2")}</h4><h1 className="bold-text">{'MCC'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col> 
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab3.text.greytext6")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>   
      </Row>
    </Card>
  );
};

export default DatosAdicionales;
