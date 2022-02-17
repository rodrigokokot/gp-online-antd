import React, { useState } from "react";
import { Radio, Form, Typography, Card, Row, Col } from "antd";
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { useTranslation } from 'react-i18next';
const { Title, Text } = Typography;
const FormUsuNew = () => {
  const { t} = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [value2, setValue2] = useState("");
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const [value3, setValue3] = useState("");
  const onChange3 = (e) => {
    setValue3(e.target.value);
  };

  const FormularioUsuario = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Title level={3} style={{ color: "#ab218e" }}>
          {t("gestionusuarios.new.title1")}
          </Title>
          <Col span={6}>
            <Form.Item
              name="nombre"
              rules={[{ required: true, message: (t("gestionusuarios.new.outline.nombre.error")) }]}
            >
              <FloatInput
                outline
                type="text"
                label={t("gestionusuarios.new.outline.nombre.label")}
                placeholder={t("gestionusuarios.new.outline.nombre.label")}
              ></FloatInput>
            </Form.Item>

            <Form.Item
              name="apellido"
              rules={[{ required: true, message: (t("gestionusuarios.new.outline.apellido.error")) }]}
            >
              <FloatInput
                outline
                type="text"
                label={t("gestionusuarios.new.outline.apellido.label")}
                placeholder={t("gestionusuarios.new.outline.apellido.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          <Text>{t("gestionusuarios.new.typedoc.label")}</Text>
          <Form.Item name="tipodocumento" rules={[{ required: true,message: (t("gestionusuarios.new.typedoc.error")) }]}>
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value1")}>
                  {t("gestionusuarios.new.typedoc.value1")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value2")}>
                  {t("gestionusuarios.new.typedoc.value2")}
                  </Radio>
                </Col>
                <Col span={8}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value3")}>
                  {t("gestionusuarios.new.typedoc.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.new.typedoc.value4")}
                  >
                    {t("gestionusuarios.new.typedoc.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value5")}>
                  {t("gestionusuarios.new.typedoc.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value6")}>
                  {t("gestionusuarios.new.typedoc.value6")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.typedoc.value7")}>
                    {t("gestionusuarios.new.typedoc.value7")}
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Col span={6}>
            <Form.Item
              name="documento"
              rules={[{ required: true, message: (t("gestionusuarios.new.outline.documento.error")) }]}
            >
              <FloatInput
                outline
                type="number"
                label={t("gestionusuarios.new.outline.documento.label")}
                placeholder={t("gestionusuarios.new.outline.documento.label")}
              ></FloatInput>
            </Form.Item>

            <Form.Item name="email" 
              rules={[{ required: true, message: (t("gestionusuarios.new.outline.email.error")) }]}
            >
              <FloatInput
                outline
                type="email"
                label={t("gestionusuarios.new.outline.email.label")}
                placeholder={t("gestionusuarios.new.outline.email.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          <Text>{t("gestionusuarios.new.estado.label")}</Text>
          <Form.Item name="estado">
            <Radio.Group onChange={onChange3} value={value3}>
              <Radio value={t("gestionusuarios.new.estado.value1")}>
                {t("gestionusuarios.new.estado.value1")}
              </Radio> <br />
              <Radio value={t("gestionusuarios.new.estado.value2")} style={{ marginTop: 14 }}>
                {t("gestionusuarios.new.estado.value2")}
              </Radio><br />
              <Radio value={t("gestionusuarios.new.estado.value3")} style={{ marginTop: 14 }}>
                {t("gestionusuarios.new.estado.value3")}
              </Radio><br />
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Title level={3} style={{ color: "#ab218e" }}>
          {t("gestionusuarios.new.title2")}
          </Title>
          <Col span={6}>
            <Form.Item
              name="usuario"
              rules={[{ required: true, message: (t("gestionusuarios.new.outline.usuario.error"))}]}
            >
              <FloatInput
                outline
                type="text"
                label={t("gestionusuarios.new.outline.usuario.label")}
                placeholder={t("gestionusuarios.new.outline.usuario.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          <Text>{t("gestionusuarios.new.perfil.label")}</Text>
          <Form.Item name="perfil" rules={[{ required: true,message:(t("gestionusuarios.new.perfil.error")) }]}>
            <Radio.Group onChange={onChange} value={value}>
              <Row>
                <Col span={5}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.perfil.value1")}>
                  {t("gestionusuarios.new.perfil.value1")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.new.perfil.value2")}
                  >
                    {t("gestionusuarios.new.perfil.value2")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.perfil.value3")}>
                    {t("gestionusuarios.new.perfil.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.new.perfil.value4")}
                  >
                    {t("gestionusuarios.new.perfil.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.new.perfil.value5")}
                  >
                    {t("gestionusuarios.new.perfil.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.perfil.value6")}>
                   {t("gestionusuarios.new.perfil.value6")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.perfil.value7")}>
                   {t("gestionusuarios.new.perfil.value7")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.new.perfil.value8")}>
                    {t("gestionusuarios.new.perfil.value8")}
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit
        component={FormularioUsuario}
        textModalConfirm={t("gestionusuarios.new.edit.confirm")}
        textBtnSave={t("gestionusuarios.new.edit.save")}
        textBtnModalConfirm={t("gestionusuarios.new.edit.btnconfirm")}
      />
    </>
  );
};
export default FormUsuNew;
