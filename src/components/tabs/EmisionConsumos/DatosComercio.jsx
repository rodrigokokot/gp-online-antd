import { Card,Row,Col } from "antd";
import React from "react";

const DatosComercio = () => {
  return (
    <Card> 
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text"> Comercio descripcion</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">N° de comercio </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                  <h4 className="grey-text">Modo ingreso </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                  <h4 className="grey-text">Fecha informada </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>  
        <Col span={6}>
                  <h4 className="grey-text">MCC </h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
        <Col span={6}>
                  <h4 className="grey-text"> TCC</h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
        <Col span={6}>
                  <h4 className="grey-text">Cupon </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>    
        <Col span={6}>
                  <h4 className="grey-text"> Terminal</h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
      </Row> 
    </Card>
  );
};

export default DatosComercio;
