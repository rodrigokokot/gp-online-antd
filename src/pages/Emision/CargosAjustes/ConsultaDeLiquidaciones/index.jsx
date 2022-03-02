import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import Table from "../../../../components/organisms/Table";
import {
  ColumnsConsultaLiquidaciones,
  ConsultaLiquidacionesSearchArray,
  dataConsultaLiquidaciones,
} from "./mock";
import SearchForm from "../../../../components/organisms/SearchForm";
import { useTranslation } from "react-i18next";

export default function ConsultaLiquidacionesSearch() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataConsultaLiquidaciones);
  }

  const SearchCards = () => {
    return (
      <>
        <Card>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
          {t("liquidacion.title1")}
          </h1>
          <Row gutter={[36, 36]}>
            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext1")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext2")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext3")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext4")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext5")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext6")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext7")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text1.greytext8")}</b>
              <b className="bold-text">0.00</b>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
            {t("liquidacion.title2")}
          </h1>

          <Row gutter={[36, 36]}>
            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext1")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext2")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext3")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext4")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext5")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext6")}</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">{t("liquidacion.text2.greytext7")}</b>
              <b className="bold-text">0.00</b>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card style={{ marginBottom: "4px" }}>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
            {t("liquidacion.title3")}
          </h1>
          <Col span={8}>
            <Row gutter={[36, 36]}>
              <Col span={12}>
                <b className="grey-text">{t("liquidacion.text3.greytext1")}</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">{t("liquidacion.text3.greytext2")}</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">{t("liquidacion.text3.greytext3")}</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">{t("liquidacion.text3.greytext4")}</b>
              </Col>
            </Row>
          </Col>
        </Card><br></br>
      </>
    );
  };

  return (
    <>
      <SearchCards />
      <SearchForm
        array={ConsultaLiquidacionesSearchArray()}
        title={t("liquidacion.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table
        columns={ColumnsConsultaLiquidaciones()}
        data={data}
        expandible={false}
        editable={false}
      />
    </>
  );
}
