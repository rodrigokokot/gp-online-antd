import { Card,Row,Col } from "antd";
import React from "react";

const InformacionDelProducto = () => {
  return (
    <>
      <Card>
        <Row gutter={[24, 24]}>
          <Col span={6}>
              <h4 className="grey-text"> Producto</h4><h1 className="bold-text">{'Tarjeta Grupar'}</h1> 
          </Col>
          <Col span={6}>
              <h4 className="grey-text"> Tarjeta</h4><h1 className="bold-text">{'6063010022211304'}</h1> 
          </Col>
          <Col span={6}>
              <h4 className="grey-text">Fecha de Alta </h4><h1 className="bold-text">{'14/11/2011'}</h1> 
          </Col>  
          <Col span={6}>
              <h4 className="grey-text"> Estado</h4><h1 className="bold-text">{'Normal'}</h1> 
          </Col>  
        </Row>    
      </Card>
    </>
  );
};

export default InformacionDelProducto;
