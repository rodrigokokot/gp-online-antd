import React from 'react';
import { Form,Typography, Card} from 'antd';

import FloatInput from '../../molecules/FloatInput';
const { Title } = Typography;

const Contraseña = () => {
    const [form] = Form.useForm();
    const onFinish = (values) =>{
        console.log("contra",values)
    }
    
  return (<> 
    <Form 
                  form={form}
                  name="advanced_search1"
                  className="ant-advanced-search-form"
                  onFinish={onFinish} 
                  size="large"
        >    
                <Card>
                        <Title level={2}>Contraseña</Title>
                                
                        <Form.Item name='password' style={{ width: 414 }}>
                            <FloatInput type="password" label='Ingresa tu contraseña para generar cambios' placeholder='Contraseña'></FloatInput>
                            </Form.Item>
                        </Card>
        </Form>
  </>)
};

export default Contraseña;
