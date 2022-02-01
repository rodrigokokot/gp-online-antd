import React from "react";
import { Form, Typography, Card ,Col} from "antd";

import FloatInput from "../../molecules/FloatInput";
const { Title } = Typography;

const Contraseña = () => {

  return (<> 
      <Card>
        <Title level={2}>Contraseña</Title>
        <Col span={6}>
        <Form.Item name="password" >
          <FloatInput
            type="password"
            label="Ingresa tu contraseña para generar cambios"
            placeholder="Contraseña"
          ></FloatInput>
        </Form.Item></Col>
      </Card>   
        <br></br></>
  );
};

export default Contraseña;
