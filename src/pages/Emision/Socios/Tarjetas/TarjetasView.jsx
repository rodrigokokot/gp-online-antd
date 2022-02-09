import React from "react";
import { Card, Checkbox, Row, Col, Form } from "antd";
import Edit from "../../../../components/organisms/Edit";
import FloatSelected from "../../../../components/molecules/FloatSelected";

export default function TarjetasView() {
  const FormularioEdit = () => {
    const generaReimpresion = (e) => {
      console.log(e.target.value);
    };

    return (
      <>
        <Card>
          <h1 className="purple-title">Datos principales</h1>

          <Row>
            <Col span={6}>
              <p className="grey-text">N° de Tarjeta</p>
              <h1 className="bold-text">552268XXXXXX0372</h1>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <p className="grey-text">Nombre</p>
              <h1 className="bold-text">Mauro</h1>
            </Col>

            <Col span={6}>
              <p className="grey-text">Apellido</p>
              <h1 className="bold-text">Ramirez</h1>
            </Col>

            <Col span={6}>
              <p className="grey-text">Vigencia desde</p>
              <h1 className="bold-text">{new Date().toString()}</h1>
            </Col>

            <Col span={6}>
              <p className="grey-text">Vencimiento</p>
              <h1 className="bold-text">{new Date().toString()}</h1>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <p className="grey-text">Nombre embozado</p>
              <h1 className="bold-text">Mauro Ramirez</h1>
            </Col>

            <Col span={6}>
              <p className="grey-text">Cta/Adic.</p>
              <h1 className="bold-text">14/0</h1>
            </Col>

            <Col span={6}>
              <p className="grey-text">Sucursal</p>
              <h1 className="bold-text">Sucursal C.A.B.A</h1>
            </Col>
          </Row>

          <Row style={{marginTop: 46}} gutter={48}>
            <Col span={6}>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: "Ingrese Estado" }]}
              >
                <FloatSelected
                  label="Estado"
                  placeholder="Estado"
                  options={[
                    {
                      title: "Habilitada",
                      value: "Habilitada",
                      disabled: false,
                    },
                    {
                      title: "Inhabilitada",
                      value: "Inhabilitada",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Checkbox onChange={generaReimpresion}>
                Genera reimpresión
              </Checkbox>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <div>
      <Edit component={FormularioEdit}
      textBtnSave="Guardar"
      textModalConfirm="¿Realizar cambios en la tarjet?"
      textBtnModalConfirm="Si, guardar" />
    </div>
  );
}
