import React from "react";
import { Form, Typography, Card } from "antd";

import FloatInput from "../../molecules/FloatInput";
const { Title } = Typography;

const Contraseña = () => {

  return (
      <Card>
        <Title level={2}>Contraseña</Title>

        <Form.Item name="password" style={{ width: 414 }}>
          <FloatInput
            type="password"
            label="Ingresa tu contraseña para generar cambios"
            placeholder="Contraseña"
          ></FloatInput>
        </Form.Item>
      </Card>
  );
};

export default Contraseña;
