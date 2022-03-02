import { Card, DatePicker, Form, Row, Col, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput";
import Edit from "../../../../components/organisms/Edit";

export default function CargosPorProdutosAfinidadEdit() {
  const { t} = useTranslation();
  const FormularioEdit = () => {
    return (
      <>
        <Card>
          <Title level={3} style={{ color: "#ab218e" }}>
           {t("afinidad.edit.title")}
          </Title>
          <br></br>
          <Row gutter={[36, 24]}>
            <Col span={6}>
              <Space direction="vertical" size={16}>
                <h4>{t("afinidad.edit.h.h1")} </h4>

                <h4>{t("afinidad.edit.h.h2")} </h4>
              </Space>
            </Col>

            <Col span={5}>
              <h4>{t("afinidad.edit.h.h3")}</h4>
              <Form.Item
                name="precio"
                rules={[{ required: true, message: (t("afinidad.edit.outline.precio.error")) }]}
              >
                <FloatInput outline type="number" />
              </Form.Item>
            </Col>

            <Col span={5}>
              <h4>{t("afinidad.edit.h.h4")}</h4>
              <Form.Item name="porcentaje">
                <FloatInput outline type="number" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <h4>{t("afinidad.edit.h.h5")}</h4>
              <Form.Item
                name="fecha"
                rules={[{ required: true, message: (t("afinidad.edit.outline.fecha.error")) }]}
              >
                <DatePicker placeholder={t("afinidad.edit.outline.fecha.label")}/>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit
        component={FormularioEdit}
        textBtnSave={t("afinidad.edit.edit.save")}
        textModalConfirm={t("afinidad.edit.edit.confirm")}
        textBtnModalConfirm={t("afinidad.edit.edit.btnconfirm")}
      />
    </>
  );
}
