import React from "react";
import { Form, Row, Col, Switch, Card } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import Edit from "../../components/organisms/Edit/index";
import PurpleTitle from "../../components/molecules/PurpleTitle";

function EditarSucursal() {




  const handleCallback = (values) => {
    console.log(values);
  };

  const FormularioEdicion = () =>{
    
    return (  
    <>
    <Card>
    <PurpleTitle text="Datos Principales" />

      <Col span={8}>
    <Form.Item
      name="descripcion"
      rules={[{ required: true, message: "Ingrese descripción" }]}
    >
      <FloatInput label="Descripcion" placeholder="Descripcion" />
    </Form.Item>
      </Col>

      <>
        <p>Estado de la Sucursal</p>
        <Form.Item name="estado" rules={[{ required: true }]}>
          <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />
        </Form.Item>
      </>
    </Card>

      <Card>
    <PurpleTitle text="Domicilio"/>

    <Row gutter={24}>
      <Col span={6}>
        <Form.Item
          name="calle"
          rules={[{ required: true, message: "Ingrese calle" }]}
        >
          <FloatInput label="Calle" placeholder="Calle"></FloatInput>
        </Form.Item>
      </Col>

      <Col span={2}>
        <Form.Item
          name="num"
          rules={[{ required: true, message: "Ingrese número" }]}
        >
          <FloatInput label="Número" placeholder="Número"></FloatInput>
        </Form.Item>
      </Col>

      <Col span={2}>
        <Form.Item name="piso">
          <FloatInput label="Piso" placeholder="Piso"></FloatInput>
        </Form.Item>
      </Col>

      <Col span={2}>
        <Form.Item name="piso">
          <FloatInput label="Depto" placeholder="Depto"></FloatInput>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={8}>
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
      <Col span={8}>
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
      <Col span={8}>
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
  <Edit component={FormularioEdicion}/>
  </>);
}

export default EditarSucursal;
