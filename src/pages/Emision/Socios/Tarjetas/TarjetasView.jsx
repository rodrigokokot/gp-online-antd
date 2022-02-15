import React from "react";
import { Card, Checkbox, Row, Col, Form, Typography } from "antd";
import Edit from "../../../../components/organisms/Edit";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import { Link, useParams } from "react-router-dom";

export default function TarjetasView() {
  const FormularioEdit = () => {
    const generaReimpresion = (e) => {
      console.log(e.target.value);
    };

    const { id } = useParams();

    return (
      <>
        <Card>
          <Row justify="space-between" style={{ marginBottom: "36px" }}>
            <h1 className="purple-title">Datos principales</h1>
            <Link
              to={`/emision/socios/tarjetas/detalle=:${id}/historial`}
              style={{ textDecoration: "underline" }}
              rel="noopener noreferrer"
            >
              Ver historial
            </Link>
          </Row>

          <Row gutter={[48, 48]}>
            <Col span={6}>
              <h1 className="grey-text">N° de Tarjeta</h1>
              <h1 className="bold-text">552268XXXXXX0372</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Nombre</h1>
              <h1 className="bold-text">Mauro</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Apellido</h1>
              <h1 className="bold-text">Ramirez</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Vigencia desde</h1>
              <h1 className="bold-text">
                {new Date().toISOString().split("T")[0]}
              </h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Vencimiento</h1>
              <h1 className="bold-text">
                {new Date().toISOString().split("T")[0]}
              </h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Nombre embozado</h1>
              <h1 className="bold-text">Mauro Ramirez</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Cta/Adic.</h1>
              <h1 className="bold-text">14/0</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">Sucursal</h1>
              <h1 className="bold-text">Sucursal C.A.B.A</h1>
            </Col>
          </Row>

          <Row style={{ marginTop: 46 }} gutter={48}>
            <Col span={6}>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: "Ingrese Estado" }]}
              >
                <FloatSelected
                  outline
                  label="Estado*"
                  placeholder="Estado*"
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
      <Edit
        component={FormularioEdit}
        textBtnSave="Guardar"
        textModalConfirm="¿Realizar cambios en la tarjet?"
        textBtnModalConfirm="Si, guardar"
      />
    </div>
  );
}
