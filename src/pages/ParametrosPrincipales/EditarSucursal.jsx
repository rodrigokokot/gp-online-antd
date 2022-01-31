import React from "react";
import { Form, Row, Col, Switch, Card } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import Edit from "../../components/organisms/Edit/index";


function EditarSucursal() {
  const handleCallback = (values) => {
    console.log(values);
  };

  const FormularioEdicion = () =>{

    return (
    <>
    <Card>
    <h1 className="purple-title">Datos Principales</h1>

      <Col a={8}>
    <Form.Item
      name="descripcion"
      rules={[{ required: true, message: "Ingrese descripción" }]}
    >
      <FloatInput label="Descripcion" placeholder="Descripcion" />
    </Form.Item>
      </Col>

      <>
        <Card>
          <h3>Datos Principales</h3>

          <Form.Item
            name="descripcion"
            rules={[{ required: true, message: "Ingrese descripción" }]}
          >
            <FloatInput label="Descripcion" placeholder="Descripcion" />
          </Form.Item>

          <>
            <p>Estado de la Sucursal</p>
            <Form.Item name="estado" rules={[{ required: true }]}>
              <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />
            </Form.Item>
          </>
        </Card>

        <Card>
          <h3>Domicilio</h3>

          <Row gutter={24}>
            <Col>
              <Form.Item
                name="calle"
                rules={[{ required: true, message: "Ingrese calle" }]}
              >
                <FloatInput label="Calle" placeholder="Calle"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                name="num"
                rules={[{ required: true, message: "Ingrese número" }]}
              >
                <FloatInput label="Número" placeholder="Número"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name="piso">
                <FloatInput label="Piso" placeholder="Piso"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name="piso">
                <FloatInput label="Depto" placeholder="Depto"></FloatInput>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Item
                name="localidad"
                rules={[{ required: true, message: "Ingrese localidad" }]}
              >
                <FloatSelect
                  width={205}
                  label="Localidad"
                  placeholder="Localidad"
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
            <Col>
              <Form.Item
                name="provincia"
                rules={[{ required: true, message: "Ingrese provincia" }]}
              >
                <FloatSelect
                  width={205}
                  label="Provincia"
                  placeholder="Provincia"
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
            <Col>
              <Form.Item
                name="telefono"
                rules={[{ required: true, message: "Ingrese teléfono" }]}
              >
                <FloatInput
                  label="Telefono"
                  placeholder="Telefono"
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    </Card>

      <Card>
      <h1 className="purple-title">Domicilio</h1>

    <Row gutter={24}>
      <Col a={6}>
        <Form.Item
          name="calle"
          rules={[{ required: true, message: "Ingrese calle" }]}
        >
          <FloatInput label="Calle" placeholder="Calle"></FloatInput>
        </Form.Item>
      </Col>

      <Col a={2}>
        <Form.Item
          name="num"
          rules={[{ required: true, message: "Ingrese número" }]}
        >
          <FloatInput label="Número" placeholder="Número"></FloatInput>
        </Form.Item>
      </Col>

      <Col a={2}>
        <Form.Item name="piso">
          <FloatInput label="Piso" placeholder="Piso"></FloatInput>
        </Form.Item>
      </Col>

      <Col a={2}>
        <Form.Item name="piso">
          <FloatInput label="Depto" placeholder="Depto"></FloatInput>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col a={8}>
        <Form.Item
          name="localidad"
          rules={[{ required: true, message: "Ingrese localidad" }]}
        >
          <FloatSelect
            label="Localidad"
            placeholder="Localidad"
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
      <Col a={8}>
        <Form.Item
          name="provincia"
          rules={[{ required: true, message: "Ingrese provincia" }]}
        >
          <FloatSelect
            label="Provincia"
            placeholder="Provincia"
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
      <Col a={8}>
        <Form.Item
          name="telefono"
          rules={[{ required: true, message: "Ingrese teléfono" }]}
        >
          <FloatInput label="Telefono" placeholder="Telefono"></FloatInput>
        </Form.Item>
      </Col>
    </Row>
    </Card>
    </>);
  }

  return (
    <>
      <Edit component={FormularioEdicion} />
    </>
  );
}

export default EditarSucursal;
