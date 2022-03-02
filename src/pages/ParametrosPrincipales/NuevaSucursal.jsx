import React from "react";
import Edit from "../../components/organisms/Edit";
import { Form, Row, Col, Card, Typography } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import { useTranslation } from "react-i18next";
import { sucursales } from "../../services";

function NuevaSucursal() {
  const { t } = useTranslation();
  const FormularioNueva = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            {t("gestionsucursales.new.title1")}
          </Typography.Title>
          <Col span={8}>
            <Form.Item
              name="codigo"
              rules={[
                {
                  required: true,
                  message: t("gestionsucursales.new.outline.codigo.error"),
                },
              ]}
            >
              <FloatInput
                outline
                label={t("gestionsucursales.new.outline.codigo.label")}
                placeholder={t("gestionsucursales.new.outline.codigo.label")}
              ></FloatInput>
            </Form.Item>

            <Form.Item name="descripcion">
              <FloatInput
                outline
                label={t("gestionsucursales.new.outline.descripcion.label")}
                placeholder={t(
                  "gestionsucursales.new.outline.descripcion.label"
                )}
              />
            </Form.Item>
          </Col>
        </Card>

        <Card style={{ borderRadius: "16px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            {t("gestionsucursales.new.title2")}
          </Typography.Title>

          <Row gutter={24}>
            <Col span={6}>
              <Form.Item
                name="calle"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.new.outline.calle.error"),
                  },
                ]}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.calle.label")}
                  placeholder={t("gestionsucursales.new.outline.calle.label")}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                name="numero"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.new.outline.numero.error"),
                  },
                ]}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.numero.label")}
                  placeholder={t("gestionsucursales.new.outline.numero.label")}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="piso">
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.piso.label")}
                  placeholder={t("gestionsucursales.new.outline.piso.label")}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="Depto">
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.depto.label")}
                  placeholder={t("gestionsucursales.new.outline.depto.label")}
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item
                name="cp"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.new.outline.cp.error"),
                  },
                ]}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.cp.label")}
                  placeholder={t("gestionsucursales.new.outline.cp.label")}
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
                    message: t("gestionsucursales.new.outline.localidad.error"),
                  },
                ]}
              >
                <FloatSelect
                  outline
                  label={t("gestionsucursales.new.outline.localidad.label")}
                  placeholder={t(
                    "gestionsucursales.new.outline.localidad.label"
                  )}
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
                  ]}
                ></FloatSelect>
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
                    message: t("gestionsucursales.new.outline.provincia.error"),
                  },
                ]}
              >
                <FloatSelect
                  outline
                  label={t("gestionsucursales.new.outline.provincia.label")}
                  placeholder={t(
                    "gestionsucursales.new.outline.provincia.label"
                  )}
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
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item name="barrio">
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.barrio.label")}
                  placeholder={t("gestionsucursales.new.outline.barrio.label")}
                ></FloatInput>
              </Form.Item>
              <Form.Item
                name="telefono"
                rules={[
                  {
                    required: true,
                    message: t("gestionsucursales.new.outline.telefono.error"),
                  },
                ]}
              >
                <FloatInput
                  outline
                  label={t("gestionsucursales.new.outline.telefono.label")}
                  placeholder={t(
                    "gestionsucursales.new.outline.telefono.label"
                  )}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <Edit
      component={FormularioNueva}
      textBtnSave={t("gestionsucursales.new.edit.save")}
      textModalConfirm={t("gestionsucursales.new.edit.confirm")}
      textBtnModalConfirm={t("gestionsucursales.new.edit.btnconfirm")}
      service={sucursales.postSucursal}
    />
  );
}

export default NuevaSucursal;
