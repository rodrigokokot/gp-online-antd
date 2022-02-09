import React from "react";
import { Form, Typography, Card ,Col,Input} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'; 
const { Title } = Typography;

const Contraseña = () => {

  return (<>
      <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
        <Title level={3}  style={{ color: '#ab218e' }}>Contraseña</Title>
        <Col span={6}>
          <Form.Item name="password" rules = {[
              { required: true, message: 'Ingrese contraseña para generar cambios' },
              {
                validator: (_, value1) =>
                  value1 && value1.length >= 8
                    ? Promise.resolve()
                    : value1.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error('Debe ingresar al menos 8 caracteres')),
              },
              {
                validator: (_, value2) =>
                  value2 && value2.match(/\d+/g)
                    ? Promise.resolve()
                    : value2.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error('Debe ingresar al menos un número')),
              },
            ]}
          >
             <Input.Password 
             style={ { borderRadius: '0.5em', boxShadow: '#ab218e'} }   
              placeholder="Ingrese Contraseña" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            ></Input.Password>  
          </Form.Item>
        </Col>
      </Card>
    </>
  );
};

export default Contraseña;
