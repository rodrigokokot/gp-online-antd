import { Card,Row,Col } from "antd";
import React from "react";

const InformacionDeLaCuenta = () => {
  return (
    <>
      <Card>
        <Row gutter={[24, 24]}>
          <Col span={6}>
              <h4 className="grey-text">Nº de cuenta  </h4><h1 className="bold-text">{'124235'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text">Nº de Cta. Original </h4><h1 className="bold-text">{'N/A'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text"> Fecha de Alta</h4><h1 className="bold-text">{'14/11/2011'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text">Tipo de cuenta </h4><h1 className="bold-text">{'Personal'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text">Marca </h4><h1 className="bold-text">{'Tarjeta Grupar'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text"> Emisor</h4><h1 className="bold-text">{'Tarjeta Grupar'}</h1> 
          </Col>
          <Col span={6}>
                    <h4 className="grey-text">Sucursal </h4><h1 className="bold-text">{'Cordoba'}</h1> 
          </Col>
        </Row>      
      </Card>
    </>
  );
};

export default InformacionDeLaCuenta;
