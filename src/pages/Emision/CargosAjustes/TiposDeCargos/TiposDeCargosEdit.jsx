import React, { useState } from "react";
import Edit from "../../../../components/organisms/Edit";
import { Form, Typography, Card, Row, Col, Radio, Checkbox } from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
const { Title } = Typography;

function TipoDeCargoEdit() {
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

  const FormularioTipoDeCargo = () => {
    return (
      <>
        <Card>
          <Title style={{ color: "#AB218E" }} level={3}>{t("tiposcargos.edit.title1")}</Title><br></br>
          <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="codigo" rules={[{ required: true, message: (t("tiposcargos.edit.outline.codigo.error"))}]}>
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.edit.outline.codigo.label")}
                placeholder={t("tiposcargos.edit.outline.codigo.label")}
              ></FloatInput>
            </Form.Item> 
            <Form.Item name="descripcion" >
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.edit.outline.descripcion.label")}
                placeholder={t("tiposcargos.edit.outline.descripcion.label")}
              ></FloatInput>
            </Form.Item>
            <Form.Item name="tipoCargo" rules={[{ required: true, message: (t("tiposcargos.edit.outline.tipocargo.error")) }]}>
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.edit.outline.tipocargo.label")}
                placeholder={t("tiposcargos.edit.outline.tipocargo.label")}
              ></FloatInput>
            </Form.Item>
          </Col>
            <Col span={4}><Form.Item name="anulacion" rules={[{ required: true, message: (t("tiposcargos.edit.outline.anulacion.error"))  }]}>
              <FloatInput
                outline
                type="text"
                label={t("tiposcargos.edit.outline.anulacion.label")}
                placeholder={t("tiposcargos.edit.outline.anulacion.label")}
              ></FloatInput>
            </Form.Item></Col>
          </Row>
          
          <Title level={5}>{t("tiposcargos.edit.aplicaiba.label")}</Title>
          <Form.Item name="aplicaIva" rules={[{ required: true, message: (t("tiposcargos.edit.aplicaiva.error")) }]}>
            <Radio.Group onChange={onChange1} value={value1}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.aplicaiva.value1")}>
                  {t("tiposcargos.edit.aplicaiva.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.aplicaiva.value2")}>
                  {t("tiposcargos.edit.aplicaiva.value2")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.aplicaiva.value3")}>
                {t("tiposcargos.edit.aplicaiva.value3")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>{t("tiposcargos.edit.typetarjeta.label")}</Title>
          <Form.Item name="tipoTarjeta" rules={[{ required: true, message: (t("tiposcargos.edit.typetarjeta.error")) }]}>
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.typetarjeta.value1")}>
                  {t("tiposcargos.edit.typetarjeta.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.typetarjeta.value2")}>
                 {t("tiposcargos.edit.typetarjeta.value2")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>{t("tiposcargos.edit.moneda.label")}</Title>
          <Form.Item name="moneda">
            <Radio.Group onChange={onChange3} value={value3}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.moneda.value1")}>
                  {t("tiposcargos.edit.moneda.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.moneda.value2")}>
                  {t("tiposcargos.edit.moneda.value2")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Col span={6}><Form.Item
                name="tipomoneda" rules={[{ required: true, message: (t("tiposcargos.edit.outline.moneda.error")) }]}
            > 
                <SelectImg suffix={<SearchOutlined />} 
                bordered showSearch={true} placeholder={t("tiposcargos.edit.outline.moneda.label")}
                style={{width: '100%'}}
                />            
            </Form.Item> 
          <Title level={5}>{t("tiposcargos.edit.outline.cuota.label")}</Title>
          <Form.Item name="cuotas" rules={[{ required: true, message: (t("tiposcargos.edit.outline.cuota.error"))}]}>
            <FloatInput outline type="number"></FloatInput>
          </Form.Item></Col>
          <Title level={5}>{t("tiposcargos.edit.estado.label")}</Title>
          <Form.Item name="estado" rules={[{ required: true, message: (t("tiposcargos.edit.estado.error"))}]}>
            <Radio.Group onChange={onChange3} value={value3}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.estado.value1")}>
                  {t("tiposcargos.edit.estado.value1")}
                </Radio>
                <Radio style={{ marginTop: 10 }} value={t("tiposcargos.edit.estado.value2")}>
                  {t("tiposcargos.edit.estado.value2")}
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="cargos">
            <Checkbox>{t("tiposcargos.edit.cargo.label")}</Checkbox>
          </Form.Item>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit 
        component={FormularioTipoDeCargo}
        textBtnSave={t("tiposcargos.edit.edit.save")}
        textModalConfirm={t("tiposcargos.edit.edit.confirm")}
        textBtnModalConfirm={t("tiposcargos.edit.edit.btnconfirm")}
      ></Edit>
    </>
  );
}

export default TipoDeCargoEdit;
