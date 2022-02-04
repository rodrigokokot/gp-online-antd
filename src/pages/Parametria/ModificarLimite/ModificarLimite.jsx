import React, { useState } from "react";
import { Card, Row,Col ,InputNumber,Input, Comment,Form} from "antd";
import Title from "antd/lib/typography/Title";  
import Edit from "../../../components/organisms/Edit"; 
const { TextArea } = Input;

const ModificarLimite= () => {
const FormularioLimite= () => {
  const [value, setValue] = useState('0');
  console.log('import ',value); 
 
  const [valor, setvalor] = useState(''); 

  return (<>
    <Card>
      <h2 style={{ color: "#AB218E" }}>Informacion de la cuenta</h2>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h4>N° de cuenta</h4><Title level={4}>{'112233831'}</Title> 
        </Col>
        <Col span={5}>
            <h4>N° de cuenta original</h4><Title level={4}>{'N/D'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Tipo de cuenta</h4><Title level={4}>{'Personal'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Fecha de alta</h4><Title level={4}>{'18/05/2021'}</Title>
        </Col>
        <Col span={5}> 
            <h4>Marca</h4><Title level={4}>{'Tarjeta Grupar'}</Title>
        </Col>
        <Col span={5}> 
            <h4>Emisor</h4><Title level={4}>{'Tarjeta Grupar'}</Title>
        </Col>
        <Col span={5}> 
            <h4>Sucursal</h4><Title level={4}>{'Córdoba'}</Title>
        </Col> 
      </Row>
    </Card> <br></br>
    <Card>
            <h2 style={{ color: "#AB218E" }}>Informacion del producto</h2>
            <Row gutter={[6, 24]}>
                <Col span={5}>
                    <h4>Producto</h4><Title level={4}>{'Tarjeta Grupar'}</Title> 
                </Col>
                <Col span={5}>
                    <h4>Tarjeta</h4><Title level={4}>{'6063011...'}</Title> 
                </Col>
                <Col span={5}>
                    <h4>Fecha de alta</h4><Title level={4}>{'18/05/2021'}</Title>
                </Col>  
                <Col span={5}>
                    <h4>Estado</h4><Title level={4}>{'-'}</Title> 
                </Col>
            </Row>
    </Card> <br></br>
    <Card>
      <h2 style={{ color: "#AB218E" }}>Informacion del titular</h2>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h4>Documento</h4><Title level={4}>{'DNI - 385000678'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Apellidos</h4><Title level={4}>{'Ortiz'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Nombres</h4><Title level={4}>{'Darma Micaela'}</Title> 
        </Col> 
      </Row>
    </Card> <br></br>
    <Card>
      <h2 style={{ color: "#AB218E" }}>Cambio de límite de tarjeta</h2>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h4>Límite global de la cuenta</h4><Title level={4}>{'14985'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Importe asignado a préstamos</h4><Title level={4}>{'14985'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Límite actual de la tarjeta</h4><Title level={4}>{'14985'}</Title> 
        </Col>
        <Col span={5}> 
            <h4>% de asignación</h4><Title level={4}>{'100'}</Title>
        </Col>
        <Col span={5}>
            <h4>Importe global actual adicional</h4><Title level={4}>{'-'}</Title>
        </Col>
        <Col span={5}> 
            <h4>Límite actual de la tarjeta</h4><Title level={4}>{'14985'}</Title>
        </Col>
      </Row>
        <div
            style={{
            display: "block",
            height: "1px",
            border: 0,
            borderTop: "1px solid #ccc",
            margin: "1em 0",
            padding: 0, }}  >
        </div>
        <Col span={5}><h4>Importe global del adicional</h4> 
        </Col> 
        <Col span={5}> 
        <Form.Item name='numerooo'  
              >
                 <InputNumber value={value} onChange={setValue} />
         </Form.Item> 
        </Col> 
        <Col span={3}>   
           
        </Col> 
    </Card> <br></br>
  </>      
  );
};
return(
<Edit component={FormularioLimite} />
);
}
export default ModificarLimite;
