import React from "react";
import { Form, Typography, Card ,Col} from "antd";

import FloatInput from "../../molecules/FloatInput";
const { Title } = Typography;

const Contraseña = () => {

  return (<> 
      <Card>
        <Title level={2}>Contraseña</Title>
        <Col span={6}>
        <Form.Item name="password" rules = {[
                    { required: true, message: 'Ingrese Contraseña' },
                    {
                      validator: (_, value1) =>
                        value1 && value1.length >= 8
                          ? Promise.resolve()
                          : Promise.reject(new Error('Password must be at least 8 characters')),
                    },
                    {
                      validator: (_, value2) =>
                        value2 && value2.match(/\d+/g)
                          ? Promise.resolve()
                          : Promise.reject(new Error('Password must have one number')),
                    }, 
                    ]}
        >
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
