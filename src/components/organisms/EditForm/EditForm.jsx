import Title from 'antd/lib/skeleton/Title';
import React, {useState} from 'react';
import {Form,Card, Button, Modal, Input, Row} from 'antd'


export const EditForm = ({componente, parentCallBack}) => {
  
  const [form]=Form.useForm();
  
  const onFinish = (values) =>{
    console.log(values);
  }

  const setModalVisible = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const [isModalVisible, setIsModalVisible] = useState(false);

  
  return (
  <div>
      <Form
      form={form}
      id='formulario-edicion-creacion'
      name="formulario-edicion-creacion"

      onFinish={onFinish}
      size='large'
      >

      {componente}

      
    <Row span={24}>
      <Button type="primary"  onClick={setModalVisible}>
            Guardar Cambios
          </Button>

          <Button onClick={form.resetFields()}>Cancelar</Button>


    </Row>


    <Modal 
        title='¿Aplicar Cambios?'
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button form='formulario-edicion-creacion' key='submit' type="primary" htmlType="submit" onClick={handleOk}>
              Aplicar Confirmacion
          </Button>,
          <Button key='back' onClick={handleCancel}>
              Cancelar
          </Button>
        ]}>

      </Modal>

      </Form>

  </div>)
};
