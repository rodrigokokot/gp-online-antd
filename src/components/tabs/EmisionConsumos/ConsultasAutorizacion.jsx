import { Card,Row,Col } from "antd";
import React from "react";

const ConsultasAutorizacion = () => {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text"> ID Autorización</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Fecha Autorización</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Autorización Emisor</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Movimiento </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Estado</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Moneda</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Importe</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Fecha de presentación</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Moneda</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Importe Origen </h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Cuotas</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Respuesta</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Origen</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">País Comercio</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">País Emisor</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Cotización</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Fecha de Anulación</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
        <Col span={6}>
                <h4 className="grey-text">Usuario Anulación</h4><h1 className="bold-text">{'-'}</h1> 
        </Col>
      </Row>
    </Card>
  );
};

export default ConsultasAutorizacion;
