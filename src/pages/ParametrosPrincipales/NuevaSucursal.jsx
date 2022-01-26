import React from 'react';
import Edit from '../../components/organisms/Edit';
import { Form, Row, Col, Card } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";

function NuevaSucursal() {
 
    const FormularioNueva = () =>{
        <>
    <Card>
    <h3>Datos Principales</h3>

      <Form.Item
        name="codigo"
        rules={[{ required: true, message: "Ingrese código" }]}
      >
        <FloatInput label="Codigo" placeholder="Código"></FloatInput>
      </Form.Item>
    )

    <Form.Item
      name="descripcion"
      rules={[{ required: true, message: "Ingrese descripción" }]}
    >
      <FloatInput label="Descripcion" placeholder="Descripcion" />
    </Form.Item>

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
          <FloatInput label="Telefono" placeholder="Telefono"></FloatInput>
        </Form.Item>
      </Col>
    </Row>
    </Card>
    </>
    }
 
 
    return <Edit component={FormularioNueva}/>;
}

export default NuevaSucursal;
