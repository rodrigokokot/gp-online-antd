import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const InformacionDelProducto = () => {
  const { t } = useTranslation();
  return (
    <>
      <Card>
        <Row gutter={[6, 24]}>
          <Col span={5}>
              <h1 className="grey-text">{t("estado.view.tab2.greytext1")}</h1><h1 className="bold-text">{'213432'}</h1> 
          </Col>
          <Col span={5}>
              <h1 className="grey-text">{t("estado.view.tab2.greytext2")}</h1><h1 className="bold-text">{'Emilia'}</h1> 
          </Col>
          <Col span={5}>
              <h1 className="grey-text">{t("estado.view.tab2.greytext3")}</h1><h1 className="bold-text">{'18/05/2021'}</h1>
          </Col>
          <Col span={5}> 
              <h1 className="grey-text">{t("estado.view.tab2.greytext4")}</h1><h1 className="bold-text">{'MasterCard'}</h1>
          </Col>
        </Row>    
      </Card>
    </>
  );
};

export default InformacionDelProducto;
