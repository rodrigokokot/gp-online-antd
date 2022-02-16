import React from "react";
import { Form, Row, Col, Card, Typography, Radio, Space } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import Edit from "../../components/organisms/Edit/index";
import { useTranslation } from 'react-i18next';

function EditarSucursal() {
  const { t} = useTranslation();
  const FormularioEdicion = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
          {t("gestionsucursales.edit.title1")}
          </Typography.Title>

          <Col span={8}>
          <Form.Item
              name="descripcion"
            >
              <FloatInput outline label={t("gestionsucursales.edit.outline.descripcion.label")} placeholder={t("gestionsucursales.new.outline.descripcion.label")}/>
            </Form.Item>

            <>
              <Typography.Text style={{ marginBottom: "10px" }}>
                Estado de la Sucursal
              </Typography.Text>
              <Form.Item name="estado" rules={[{ required: true, message:(t("gestionsucursales.edit.estado.error")) }]}>
                {/* <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" /> */}
                <Radio.Group
                // onChange={this.onChange} value={value}
                >
                  <Space direction="vertical">
                    <Radio value={t("gestionsucursales.edit.estado.value1")}>{t("gestionsucursales.edit.estado.value1")}</Radio>
                    <Radio value={t("gestionsucursales.edit.estado.value2")}>{t("gestionsucursales.edit.estado.value2")}</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </>
          </Col>
        </Card>

        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
          {t("gestionsucursales.edit.title2")}
          </Typography.Title>
          <Row gutter={24}>
            <Col span={6}>
            <Form.Item
                name="calle"
                rules={[{ required: true, message:(t("gestionsucursales.edit.outline.calle.error")) }]}
              >
                <FloatInput outline label={t("gestionsucursales.edit.outline.calle.label")}
                 placeholder={t("gestionsucursales.edit.outline.calle.label")}
                 ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                name="numero"
                rules={[{ required: true, message:(t("gestionsucursales.edit.outline.numero.error")) }]}
              >
                <FloatInput outline label={t("gestionsucursales.edit.outline.numero.label")}
                 placeholder={t("gestionsucursales.edit.outline.numero.label")}
                 ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="piso">
                <FloatInput outline label={t("gestionsucursales.edit.outline.piso.label")}
                 placeholder={t("gestionsucursales.edit.outline.piso.label")}
                 ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="Depto">
                <FloatInput outline label={t("gestionsucursales.edit.outline.depto.label")}
                 placeholder={t("gestionsucursales.edit.outline.depto.label")}
                 ></FloatInput>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="localidad"
                rules={[{ required: true, message: (t("gestionsucursales.edit.outline.localidad.error")) }]}
              >
                <FloatSelect
                  outline
                  label={t("gestionsucursales.edit.outline.localidad.label")}
                  placeholder={t("gestionsucursales.edit.outline.localidad.label")}
                  options={[
                    {
                      title: "San Juan",
                      value: "San Juan",
                      disabled: false,
                    },
                    {
                      title: "Mendoza",
                      value: "Mendoza",
                      disabled: false,
                    },
                    {
                      title: "San Luis",
                      value: "San Luis",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="provincia"
                rules={[{ required: true, message: (t("gestionsucursales.edit.outline.provincia.error")) }]}
              >
                <FloatSelect
                  outline
                  label={t("gestionsucursales.edit.outline.provincia.label")}
                  placeholder={t("gestionsucursales.edit.outline.provincia.label")}
                  options={[
                    {
                      title: "San Juan",
                      value: "San Juan",
                      disabled: false,
                    },
                    {
                      title: "Mendoza",
                      value: "Mendoza",
                      disabled: false,
                    },
                    {
                      title: "San Luis",
                      value: "San Luis",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}> 
              <Form.Item
                name="telefono"
                rules={[{ required: true, message: (t("gestionsucursales.edit.outline.telefono.error"))}]}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.edit.outline.telefono.label")}
                  placeholder={t("gestionsucursales.edit.outline.telefono.label")}
                ></FloatInput>
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
        component={FormularioEdicion}
        textBtnSave={t("gestionsucursales.edit.edit.save")}
        textModalConfirm={t("gestionsucursales.edit.edit.confirm")}
        textBtnModalConfirm= {t("gestionsucursales.edit.edit.btnconfirm")} 
      />
    </>
  );
}

export default EditarSucursal;
