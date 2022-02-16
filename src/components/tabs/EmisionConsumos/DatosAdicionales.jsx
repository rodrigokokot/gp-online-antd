import { Card,Row,Col } from "antd";
import React from "react";

const DatosAdicionales = () => {
  return (
    <Card>  
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">Fecha IPM </h4><h1 className="bold-text">{'22/07/21 11:57:29'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text"> Producto</h4><h1 className="bold-text">{'MCC'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text"> MCC</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col> 
        <Col span={6}>
            <h4 className="grey-text"> ICA Emisor</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">ICA Adquiriente </h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text"> Tasa conversión</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>   
      </Row>
    </Card>
  );
};

export default DatosAdicionales;
