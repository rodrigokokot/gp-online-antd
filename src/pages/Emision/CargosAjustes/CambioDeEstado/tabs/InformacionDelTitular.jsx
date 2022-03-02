import { Card,Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const InformacionDelTitular = () => {
  const { t } = useTranslation();
  return (
    <>
      <Card>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab3.greytext1")}</h1><h1 className="bold-text">{'213432'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab3.greytext2")}</h1><h1 className="bold-text">{'Emilia'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("estado.view.tab3.greytext3")}</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>  
      </Row>
      </Card>
    </>
  );
};

export default InformacionDelTitular;
