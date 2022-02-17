import React from "react";
import { Form, Typography, Card ,Col,Input} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'; 
import { useTranslation } from 'react-i18next';
const { Title } = Typography;

const Contraseña = () => {
  const { t} = useTranslation();

  return (<>
      <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
        <Title level={3}  style={{ color: '#ab218e' }}>{t("gestionusuarios.edit.tab2.password.title")}</Title>
        <Col span={6}>
          <Form.Item name="password" rules = {[
              { required: true, message: (t("gestionusuarios.edit.tab2.password.error1")) },
              {
                validator: (_, value1) =>
                  value1 && value1.length >= 8
                    ? Promise.resolve()
                    : value1.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error((t("gestionusuarios.edit.tab2.password.error2")))),
              },
              {
                validator: (_, value2) =>
                  value2 && value2.match(/\d+/g)
                    ? Promise.resolve()
                    : value2.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error((t("gestionusuarios.edit.tab2.password.error3")))),
              },
            ]}
          >
             <Input.Password 
             style={ { borderRadius: '0.5em', boxShadow: '#ab218e'} }   
              placeholder={t("gestionusuarios.edit.tab2.password.label")} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            ></Input.Password>  
          </Form.Item>
        </Col>
      </Card>
    </>
  );
};

export default Contraseña;
