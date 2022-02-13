import { Card,Row,Col } from "antd";
import React from "react";

const DatosSocio = () => {
  return (
    <Card> 
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text"> Nombre</h4><h1 className="bold-text">{'nombre'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">Apellido </h4><h1 className="bold-text">{'Apellido'}</h1> 
        </Col> 
        <Col span={6}>
            <h4 className="grey-text"> Numero Documento</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">N° de Cuenta </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>  
        <Col span={6}>
            <h4 className="grey-text">Adicional </h4><h1 className="bold-text">{'-'}</h1> 
        </Col> 
        <Col span={6}>
            <h4 className="grey-text"> Numero de tarjeta</h4><h1 className="bold-text">{'tarjeta'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text"> Producto</h4><h1 className="bold-text">{'producto'}</h1> 
        </Col> 
      </Row>
    </Card>
  );
};

export default DatosSocio;
