import React from "react";
import { Tabs, Card, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function AutorizacionesView() {
  const { t} = useTranslation();
  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab={t("autorizaciones.view.tab1.tab1")}  key="1">
          <Card>
          <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext1")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext2")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext6")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext7")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext8")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext9")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext10")} </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext11")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext12")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext13")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext14")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext15")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext16")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext17")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab1.greytext18")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
      </Row>
    </Card>
  </TabPane>

        <TabPane tab={t("autorizaciones.view.tab2.tab2")} key="2">
          <Card>
          <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext1")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext2")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext6")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab2.greytext7")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
            </Row>
          </Card>
        </TabPane>

        <TabPane tab={t("autorizaciones.view.tab3.tab3")} key="3">
          <Card>
          <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext1")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext2")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext3")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext4")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext5")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext6")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext7")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">{t("autorizaciones.view.tab3.greytext8")}</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
            </Row>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AutorizacionesView;
