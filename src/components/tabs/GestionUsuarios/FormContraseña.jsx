import React from "react";
import { Form, Typography, Card ,Col,Input} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';  
const { Title } = Typography;

const Contraseña = () => {

  return (<>
      <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
        <Title level={4}  style={{ color: '#ab218e' }}>Contraseña</Title>
        <Col span={6}>
          <Form.Item name="password" rules = {[
              { required: true, message: 'Ingrese Contraseña' },
              {
                validator: (_, value1) =>
                  value1 && value1.length >= 8
                    ? Promise.resolve()
                    : Promise.reject(new Error('Debe ingresar al menos 8 caracteres')),
              },
              {
                validator: (_, value2) =>
                  value2 && value2.match(/\d+/g)
                    ? Promise.resolve()
                    : Promise.reject(new Error('Debe ingresar al menos un número')),
              },
            ]}
          >
            <Input.Password 
              outline
              type="password"
              label="Ingresa tu contraseña para generar cambios"
              placeholder="Contraseña" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            ></Input.Password>
          </Form.Item>
        </Col>
      </Card>
    </>
  );
};

export default Contraseña;
