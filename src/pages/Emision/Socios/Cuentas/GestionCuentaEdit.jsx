import React, { useState } from 'react';
import {  Form ,Card, Row, Col,DatePicker} from 'antd'; 
import Edit from '../../../../components/organisms/Edit';  
 
const GestionCuentaEdit = () => { 
     
 const [valuedat,setValuedat]=useState('01/01/2015');
  function onChangedat(date, dateString){ 
    setValuedat(dateString);    
    }  
  const FormularioUsuarioEdit = () => {
    
    return (<>  
        
        <Card> 
            <Row gutter={24}>
                <Col>
                    <Form.Item
                    name="fechanacimiento"
                    rules={[{ required: true, message: "Ingrese Fecha de Nacimiento" }]}
                    >
                    <DatePicker value={valuedat} format={'DD/MM/YYYY'} onChange={onChangedat}/>
                    </Form.Item>
                </Col> 
            </Row>
             
        </Card>  
  </>)
  };

  return(
  <>
    <Edit component={FormularioUsuarioEdit} />
  </>);
}
export default GestionCuentaEdit;
