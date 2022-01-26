import React from "react";
import Edit from "../../components/organisms/Edit";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import FloatInput from "../../components/molecules/FloatInput";

const EditarSucursal = () => {
  const EditeTemplate = () => {
    const [value, setValue] = React.useState(1);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <>
        <h2>Datos principales</h2>
        <Form.Item
          label="Descripcion"
          name="descripcion"
          rules={[{ required: true, message: "Ingrese Descripcion" }]}
        >
          <FloatInput></FloatInput>
        </Form.Item>

        <Form.Item
          label="Estado de la sucursal"
          name="estado"
          rules={[{ required: true, message: "Ingrese" }]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Activo</Radio>
            <Radio value={2}>Inactivo</Radio>
          </Radio.Group>
        </Form.Item>
      </>
    );
  };

  return (
    <>
      <Edit component={EditeTemplate}></Edit>
    </>
  );
};

export default EditarSucursal;
