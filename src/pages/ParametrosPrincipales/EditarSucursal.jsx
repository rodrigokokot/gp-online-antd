import React, { useEffect, useState } from "react";
import { Form, Row, Col, Card, Typography, Radio, Space } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import Edit from "../../components/organisms/Edit/index";
import { useTranslation } from "react-i18next";
import sucursales from "../../services/sucursales";
import { useParams } from "react-router-dom";

function EditarSucursal() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [sucursal, setSucursal] = useState(null);
  const [disable, setDisable] = useState(true);

  useEffect(async () => {
    const response = await sucursales.getSucursales(id);
    console.log(response);
    setSucursal(response);
    setDisable(false);
  }, []);

  const FormularioEdicion = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            {t("gestionsucursales.edit.title1")}
          </Typography.Title>

          <Col span={8}>
            <Form.Item name="descripcion">
              <FloatInput
                outline
                disabled={disable}
                label={t("gestionsucursales.edit.outline.descripcion.label")}
                placeholder={t(
                  "gestionsucursales.new.outline.descripcion.label"
                )}
                defaultValue={sucursal?.descripcion}
              />
            </Form.Item>

            <>
              <Typography.Text style={{ marginBottom: "10px" }}>
                Estado de la Sucursal
              </Typography.Text>
              <Form.Item
                name="estado"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.edit.estado.error"),
                  },
                ]}
                initialValue={sucursal?.estado.idEstado}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={0}>
                      {t("gestionsucursales.edit.estado.value1")}
                    </Radio>
                    <Radio value={1}>
                      {t("gestionsucursales.edit.estado.value2")}
                    </Radio>
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
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.edit.outline.calle.error"),
                  },
                ]}
                initialValue={sucursal?.domicilio.direccion}
              >
                <FloatInput
                  outline
                  disable={disable}
                  label={t("gestionsucursales.edit.outline.calle.label")}
                  placeholder={t("gestionsucursales.edit.outline.calle.label")}
                  defaultValue={sucursal?.domicilio.direccion}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                name="numero"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.edit.outline.numero.error"),
                  },
                ]}
                initialValue={sucursal?.domicilio.numero}
              >
                <FloatInput
                  outline
                  disabled={disable}
                  label={t("gestionsucursales.edit.outline.numero.label")}
                  placeholder={t("gestionsucursales.edit.outline.numero.label")}
                  defaultValue={sucursal?.domicilio.numero}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="piso">
                <FloatInput
                  outline
                  disabled={disable}
                  label={t("gestionsucursales.edit.outline.piso.label")}
                  placeholder={t("gestionsucursales.edit.outline.piso.label")}
                  defaultValue={sucursal?.domicilio.piso}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="Depto">
                <FloatInput
                  outline
                  disabled={disable}
                  label={t("gestionsucursales.edit.outline.depto.label")}
                  placeholder={t("gestionsucursales.edit.outline.depto.label")}
                  defaultValue={sucursal?.domicilio.depto}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="localidad"
                rules={[
                  {
                    required: true,
                    message: t(
                      "gestionsucursales.edit.outline.localidad.error"
                    ),
                  },
                ]}
                initialValue={sucursal?.domicilio.localidad}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.edit.outline.localidad.label")}
                  placeholder={t(
                    "gestionsucursales.edit.outline.localidad.label"
                  )}
                  defaultValue={sucursal?.domicilio.localidad}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="provincia"
                rules={[
                  {
                    required: true,
                    message: t(
                      "gestionsucursales.edit.outline.provincia.error"
                    ),
                  },
                ]}
                initialValue={parseInt(sucursal?.domicilio.idProvincia)}
              >
                <FloatSelect
                  outline
                  label={t("gestionsucursales.edit.outline.provincia.label")}
                  placeholder={t(
                    "gestionsucursales.edit.outline.provincia.label"
                  )}
                  defaultValue={parseInt(sucursal?.domicilio.idProvincia)}
                  options={[
                    {
                      title: "San Juan",
                      value: 0,
                    },
                    {
                      title: "Mendoza",
                      value: 1,
                    },
                    {
                      title: "San Luis",
                      value: 2,
                    },
                    {
                      title: "bs as",
                      value: 3,
                    },
                    {
                      title: "jujuy",
                      value: 4,
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
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.edit.outline.telefono.error"),
                  },
                ]}
                initialValue={sucursal?.domicilio.telefono}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.edit.outline.telefono.label")}
                  placeholder={t(
                    "gestionsucursales.edit.outline.telefono.label"
                  )}
                  defaultValue={sucursal?.domicilio.telefono}
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
        textBtnModalConfirm={t("gestionsucursales.edit.edit.btnconfirm")}
        service={sucursales.putSucursal}
      />
    </>
  );
}

export default EditarSucursal;
