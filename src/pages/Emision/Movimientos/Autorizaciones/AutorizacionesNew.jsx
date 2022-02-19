import { Card, Form, Radio, Row, Col, DatePicker, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import Edit from "../../../../components/organisms/Edit";

export default function AutorizacionesNew() {
  const { t} = useTranslation();
  const FormularioNuevo = () => {
    return (
      <>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
          {t("autorizaciones.new.title1")}
          </Typography.Title>
          <br></br>
          <Col span={6}>
            <Form.Item
              name="tarjeta"
              rules={[
                {
                  required:true,
                  validator: (_, value) =>
                    value && value.match(/^[0-9]+$/)
                      ? Promise.resolve()
                      : value.length === 0
                      ? Promise.reject(new Error(""))
                      : Promise.reject(new Error((t("autorizaciones.new.outline.tarjeta.error")))),
                },
              ]}
            >
              <FloatInput
                outline
                type="number"
                placeholder={t("autorizaciones.new.outline.tarjeta.label")}
                label={t("autorizaciones.new.outline.tarjeta.label")}
              />
            </Form.Item>

            <Form.Item
              name="nombre"
              rules={[{ required: true, message: (t("autorizaciones.new.outline.nombre.error")) }]}
            >
              <FloatInput outline placeholder={t("autorizaciones.new.outline.nombre.label")} label={t("autorizaciones.new.outline.nombre.label")} />
            </Form.Item>

            <Form.Item
              name="apellido"
              rules={[{ required: true, message: (t("autorizaciones.new.outline.apellido.error")) }]}
            >
              <FloatInput outline placeholder={t("autorizaciones.new.outline.apellido.label")} label={t("autorizaciones.new.outline.apellido.label")} />
            </Form.Item>
          </Col>

          <p>{t("autorizaciones.new.typedoc.label")}</p>
          <Form.Item name="tipodocumento" rules={[{ required: true,message: (t("autorizaciones.new.typedoc.error")) }]}>
            <Radio.Group name="radiogroup">
              <Row justify="space-between">
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value1")}>
                  {t("autorizaciones.new.typedoc.value1")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value2")}>
                  {t("autorizaciones.new.typedoc.value2")}
                  </Radio>
                </Col>
                <Col span={8}>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value3")}>
                  {t("autorizaciones.new.typedoc.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("autorizaciones.new.typedoc.value4")}
                  >
                    {t("autorizaciones.new.typedoc.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value5")}>
                  {t("autorizaciones.new.typedoc.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value6")}>
                  {t("autorizaciones.new.typedoc.value6")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("autorizaciones.new.typedoc.value7")}>
                    {t("autorizaciones.new.typedoc.value7")}
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>

          <Col span={6}>
            <Form.Item
              name="doc"
              rules={[{ required: true, message:(t("autorizaciones.new.outline.documento.error") )}]}
            >
              <FloatInput
                placeholder={t("autorizaciones.new.outline.documento.label")}
                label={t("autorizaciones.new.outline.documento.label")}
                outline
              />
            </Form.Item>

            <Form.Item
              name="marca"
              rules={[{ required: true, message:(t("autorizaciones.new.outline.marca.error") ) }]}
            >
              <FloatInput outline placeholder={t("autorizaciones.new.outline.marca.label")} label={t("autorizaciones.new.outline.marca.label")}/>
            </Form.Item>

            <Form.Item
              name="emisor"
              rules={[{ required: true, message: (t("autorizaciones.new.outline.emisor.error") ) }]}
            >
              <FloatInput outline placeholder={t("autorizaciones.new.outline.emisor.label")} label={t("autorizaciones.new.outline.emisor.label")} />
            </Form.Item>

            <Form.Item
              name="producto"
              rules={[{ required: true, message: (t("autorizaciones.new.outline.producto.error") ) }]}
            >
              <FloatInput
                placeholder={t("autorizaciones.new.outline.producto.label")}
                label={t("autorizaciones.new.outline.producto.label")}
                outline
              />
            </Form.Item>
          </Col>
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
          {t("autorizaciones.new.title2")}
          </Typography.Title>{" "}
          <br></br>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="fecha-origen"
                rules={[{ required: true, message: (t("autorizaciones.new.outline.forigen.error") )}]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder={t("autorizaciones.new.outline.forigen.label")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="importe"
                rules={[{ required: true, message:(t("autorizaciones.new.outline.importe.error") ) }]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.importe.label")} label={t("autorizaciones.new.outline.importe.label")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="moneda"
                rules={[{ required: true, message:(t("autorizaciones.new.outline.moneda.error") ) }]}
              >
                <FloatSelected
                  outline
                  label={t("autorizaciones.new.outline.moneda.label")}
                  placeholder={t("autorizaciones.new.outline.moneda.label")}
                  options={[
                    {
                      title: "Euro",
                      value: "Euro",
                      disabled: false,
                    },
                    {
                      title: "USD",
                      value: "USD",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="proceso"
                rules={[
                  { required: true, message:(t("autorizaciones.new.outline.proceso.error") ) },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder={t("autorizaciones.new.outline.proceso.label")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="plan"
                rules={[{ required: true, message:(t("autorizaciones.new.outline.plan.error") )}]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.plan.label")} label={t("autorizaciones.new.outline.plan.label")} />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="relacion"
                rules={[{ required: true, message: (t("autorizaciones.new.outline.relacion.error") ) }]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.relacion.label")} label={t("autorizaciones.new.outline.relacion.label")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="cuotas"
                rules={[{ required: true, message:(t("autorizaciones.new.outline.cuotas.error") )}]}
              >
                <FloatSelected
                  outline
                  placeholder={t("autorizaciones.new.outline.cuotas.label")}
                  label={t("autorizaciones.new.outline.cuotas.label")}
                  options={[
                    {
                      title: 3,
                      value: 3,
                      disabled: false,
                    },
                    {
                      title: 6,
                      value: 6,
                      disabled: false,
                    },
                    {
                      title: 9,
                      value: 9,
                      disabled: false,
                    },
                    {
                      title: 12,
                      value: 9,
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="origen"
                rules={[{ required: true, message:(t("autorizaciones.new.outline.origen.error") ) }]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.origen.label")}label={t("autorizaciones.new.origen.label")}/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="autorizacion"
                rules={[
                  { required: true, message:(t("autorizaciones.new.outline.autorizacion.error") )},
                ]}
              >
                <FloatInput
                  placeholder={t("autorizaciones.new.outline.autorizacion.label")}
                  label={t("autorizaciones.new.outline.autorizacion.label")}
                  outline
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="modo"
                rules={[{ required: true, message: (t("autorizaciones.new.outline.entrada.error") ) }]}
              >
                <FloatInput
                  placeholder={t("autorizaciones.new.outline.entrada.label")}
                  label={t("autorizaciones.new.outline.entrada.label")}
                  outline
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="comercio"
                rules={[{ required: true, message: (t("autorizaciones.new.outline.comercio.error") ) }]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.comercio.label")} label={t("autorizaciones.new.outline.comercio.label")} />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="terminal"
                rules={[{ required: true, message: (t("autorizaciones.new.outline.terminal.error") )}]}
              >
                <FloatInput outline placeholder={t("autorizaciones.new.outline.terminal.label")} label={t("autorizaciones.new.outline.terminal.label")} />
              </Form.Item>
            </Col>
          </Row>
          <Col span={24}> 
              <p>{t("autorizaciones.new.estado.label")}</p> 
            <Form.Item
              name="estado"
              rules={[{ required: true, message: (t("autorizaciones.new.estado.error") ) }]}
            >
              <Radio.Group name="radiogroup">
                <Row >
                  <Col span={5}>
                    <Radio value={t("autorizaciones.new.estado.radio1")}>{t("autorizaciones.new.estado.radio1")}</Radio>
                    <Radio value={t("autorizaciones.new.estado.radio2")}>{t("autorizaciones.new.estado.radio2")}</Radio>
                  </Col>

                  <Col span={7}>
                    <Radio value={t("autorizaciones.new.estado.radio3")}>{t("autorizaciones.new.estado.radio3")}</Radio>
                    <Radio value={t("autorizaciones.new.estado.radio4")}>{t("autorizaciones.new.estado.radio4")}</Radio>
                  </Col>

                  <Col span={8}>
                    <Radio value={t("autorizaciones.new.estado.radio5")}>{t("autorizaciones.new.estado.radio5")}</Radio>
                    <Radio value={t("autorizaciones.new.estado.radio6")}>{t("autorizaciones.new.estado.radio6")}</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit
        component={FormularioNuevo}
        textBtnModalConfirm={t("autorizaciones.new.edit.btnconfirm")}
        textBtnSave={t("autorizaciones.new.edit.save")}
        textModalConfirm={t("autorizaciones.new.edit.confirm")}
      />
    </>
  );
}
