import React, { useState } from "react";
import { Radio, Form, Typography, Card, Row, Col } from "antd";
import Edit from "../../../../components/organisms/Edit/index";
import FloatInput from "../../../../components/molecules/FloatInput";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
const { Title } = Typography;
const TipoDeCargoCrear = () => {
  const { t} = useTranslation();
  const [value1, setValue1] = useState("");
  const onChange1 = (e) => {
    setValue1(e.target.value);
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
        <Card>
          <Title level={3}  style={{ color: '#ab218e' }}>{t("tiposcargos.new.title1")}</Title><br></br>
          <Row gutter={24}><Col span={6}>
            <Form.Item name="codigo" rules={[{ required: true, message: (t("tiposcargos.new.outline.codigo.error")) }]}>
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.new.outline.codigo.label")}
                placeholder={t("tiposcargos.new.outline.codigo.label")}
              ></FloatInput>
            </Form.Item>
            <Form.Item name="tipoCargo" rules={[{ required: true, message: (t("tiposcargos.new.outline.tipocargo.error")) }]}>
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.new.outline.tipocargo.label")}
                placeholder={t("tiposcargos.new.outline.tipocargo.label")}
              ></FloatInput>
            </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item name="descripcion">
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.new.outline.descripcion.label")}
                placeholder={t("tiposcargos.new.outline.descripcion.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
          </Row>
          <Title level={5}>{t("tiposcargos.new.aplicaiva.label")}</Title>
          <Form.Item name="aplicaIva" rules={[{ required: true, message: (t("tiposcargos.new.aplicaiva.error")) }]}>
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.new.aplicaiva.value1")}>
                  {t("tiposcargos.new.aplicaiva.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.new.aplicaiva.value2")}>
                 {t("tiposcargos.new.aplicaiva.value2")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.new.aplicaiva.value3")}>
                  {t("tiposcargos.new.aplicaiva.value3")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="tipoDeTarjeta" rules={[{ required: true, message: (t("tiposcargos.new.typetarjeta.error")) }]}>
            <Radio.Group onChange={onChange1} value={value1}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.new.typetarjeta.value1")}>
                  {t("tiposcargos.new.typetarjeta.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.new.typetarjeta.value2")}>
                  {t("tiposcargos.new.typetarjeta.value2")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>{t("tiposcargos.new.moneda.label")}</Title>
          <Form.Item name="moneda">
            <Radio.Group onChange={onChange3} value={value3}>
              <Radio value={t("tiposcargos.new.moneda.value1")}>{t("tiposcargos.new.moneda.value1")}</Radio>
              <Radio value={t("tiposcargos.new.moneda.value2")}>{t("tiposcargos.new.moneda.value2")}</Radio>
            </Radio.Group>
          </Form.Item>
          <Col span={6}><Form.Item
                name="tipomoneda" rules={[{ required: true, message: (t("tiposcargos.new.outline.moneda.error")) }]}
            > 
                <SelectImg suffix={<SearchOutlined />} 
                bordered showSearch={true} placeholder={t("tiposcargos.new.outline.moneda.label")} 
                style={{width: '100%'}}
                />            
            </Form.Item> </Col>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit 
        component={FormularioUsuario}
        textBtnSave={t("tiposcargos.new.edit.save")}
        textModalConfirm={t("tiposcargos.new.edit.confirm")}
        textBtnModalConfirm={t("tiposcargos.new.edit.btnconfirm")} />
    </>
  );
};
export default TipoDeCargoCrear;
