import React  from "react";
import { Card, Row,Col } from "antd";
import Title from "antd/lib/typography/Title";    

const InfoProducto= () => { 
  return (<>
    <Card>  
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
                    <h4>Estado</h4><Title level={4}>{'Normal'}</Title> 
                </Col>
            </Row>
    </Card> <br></br>
     
  </>      
);
}
export default InfoProducto;
