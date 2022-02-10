import React  from "react";
import { Card, Row,Col } from "antd";  

const InfoProducto= () => { 
  return (<>
    <Card>  
            <Row gutter={[6, 24]}>
                <Col span={5}>
                    <h4 className="grey-text">Producto</h4><h1 className="bold-text">{'Tarjeta Grupar'}</h1> 
                </Col>
                <Col span={5}>
                    <h4 className="grey-text">Tarjeta</h4><h1 className="bold-text">{'6063011...'}</h1> 
                </Col>
                <Col span={5}>
                    <h4 className="grey-text">Fecha de alta</h4><h1 className="bold-text">{'18/05/2021'}</h1>
                </Col>  
                <Col span={5}>
                    <h4 className="grey-text">Estado</h4><h1 className="bold-text">{'Normal'}</h1> 
                </Col>
            </Row>
    </Card> <br></br>
     
  </>      
);
}
export default InfoProducto;
