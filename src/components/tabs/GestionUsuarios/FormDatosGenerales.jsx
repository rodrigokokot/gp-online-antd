import React, { useState } from "react";
import { Radio, Form, Typography,Card ,Col,Row} from "antd";
import FloatInput from "../../molecules/FloatInput";
import { useParams } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';
const { Title, Text } = Typography;

const DatosGenerales = () => {
  const { t} = useTranslation();

  const { usuario } = useParams();
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

  return (
    <>
      <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
        <Title level={3}  style={{ color: '#ab218e' }}>
        {t("gestionusuarios.edit.tab1.title1")}
        </Title>

        <Title level={5}>{t("gestionusuarios.edit.tab1.outline.usuario.label")}</Title>
          <Form.Item name="usuario">
            <Title level={3}>{usuario}</Title>
          </Form.Item>
          <Text>{t("gestionusuarios.edit.tab1.perfil.label")}</Text>
          <Form.Item name="perfil" rules={[{ required: true,message:(t("gestionusuarios.edit.tab1.perfil.error")) }]}>
            <Radio.Group onChange={onChange} value={value}>
              <Row>
                <Col span={5}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.perfil.value1")}>
                  {t("gestionusuarios.edit.tab1.perfil.value1")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.edit.tab1.perfil.value2")}
                  >
                    {t("gestionusuarios.edit.tab1.perfil.value2")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.perfil.value3")}>
                    {t("gestionusuarios.edit.tab1.perfil.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.edit.tab1.perfil.value4")}
                  >
                    {t("gestionusuarios.edit.tab1.perfil.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.edit.tab1.perfil.value5")}
                  >
                    {t("gestionusuarios.edit.tab1.perfil.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.perfil.value6")}>
                   {t("gestionusuarios.edit.tab1.perfil.value6")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.perfil.value7")}>
                   {t("gestionusuarios.edit.tab1.perfil.value7")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.perfil.value8")}>
                    {t("gestionusuarios.edit.tab1.perfil.value8")}
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
      </Card>
      <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Title level={3} style={{ color: "#ab218e" }}>
          {t("gestionusuarios.edit.tab1.title1")}
          </Title>
          <Col span={6}>
            <Form.Item
              name="nombre"
              rules={[{ required: true, message: (t("gestionusuarios.edit.tab1.outline.nombre.error")) }]}
            >
              <FloatInput
                outline
                type="text"
                label={t("gestionusuarios.edit.tab1.outline.nombre.label")}
                placeholder={t("gestionusuarios.edit.tab1.outline.nombre.label")}
              ></FloatInput>
            </Form.Item>

            <Form.Item
              name="apellido"
              rules={[{ required: true, message: (t("gestionusuarios.edit.tab1.outline.apellido.error")) }]}
            >
              <FloatInput
                outline
                type="text"
                label={t("gestionusuarios.edit.tab1.outline.apellido.label")}
                placeholder={t("gestionusuarios.edit.tab1.outline.apellido.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          <Text>{t("gestionusuarios.edit.tab1.typedoc.label")}</Text>
          <Form.Item name="tipodocumento" rules={[{ required: true,message: (t("gestionusuarios.new.typedoc.error")) }]}>
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value1")}>
                  {t("gestionusuarios.edit.tab1.typedoc.value1")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value2")}>
                  {t("gestionusuarios.edit.tab1.typedoc.value2")}
                  </Radio>
                </Col>
                <Col span={8}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value3")}>
                  {t("gestionusuarios.edit.tab1.typedoc.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestionusuarios.edit.tab1.typedoc.value4")}
                  >
                    {t("gestionusuarios.edit.tab1.typedoc.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value5")}>
                  {t("gestionusuarios.edit.tab1.typedoc.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value6")}>
                  {t("gestionusuarios.edit.tab1.typedoc.value6")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestionusuarios.edit.tab1.typedoc.value7")}>
                    {t("gestionusuarios.edit.tab1.typedoc.value7")}
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Col span={6}>
            <Form.Item
              name="documento"
              rules={[{ required: true, message: (t("gestionusuarios.edit.tab1.outline.documento.error")) }]}
            >
              <FloatInput
                outline
                type="number"
                label={t("gestionusuarios.edit.tab1.outline.documento.label")}
                placeholder={t("gestionusuarios.edit.tab1.outline.documento.label")}
              ></FloatInput>
            </Form.Item>

            <Form.Item name="email" 
              rules={[{ required: true, message: (t("gestionusuarios.edit.tab1.outline.email.error")) }]}
            >
              <FloatInput
                outline
                type="email"
                label={t("gestionusuarios.edit.tab1.outline.email.label")}
                placeholder={t("gestionusuarios.edit.tab1.outline.email.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          <Text>{t("gestionusuarios.edit.tab1.estado.label")}</Text>
          <Form.Item name="estado">
            <Radio.Group onChange={onChange3} value={value3}>
              <Radio value={t("gestionusuarios.edit.tab1.typedoc.value1")}>
                {t("gestionusuarios.edit.tab1.typedoc.value1")}
              </Radio> <br />
              <Radio value={t("gestionusuarios.edit.tab1.typedoc.value2")} style={{ marginTop: 14 }}>
                {t("gestionusuarios.edit.tab1.typedoc.value2")}
              </Radio><br />
              <Radio value={t("gestionusuarios.edit.tab1.typedoc.value3")} style={{ marginTop: 14 }}>
                {t("gestionusuarios.edit.tab1.typedoc.value3")}
              </Radio><br />
            </Radio.Group>
          </Form.Item>
        </Card>
    </>
  );
};

export default DatosGenerales;
