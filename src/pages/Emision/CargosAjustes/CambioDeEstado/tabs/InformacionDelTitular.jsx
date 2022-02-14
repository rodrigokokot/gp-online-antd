import { Card,Row,Col } from "antd";
import React from "react";

const InformacionDelTitular = () => {
  return (
    <>
      <Card>
      <Row gutter={[24, 24]}>
        <Col span={6}>
                  <h4 className="grey-text"> Documento</h4><h1 className="bold-text">{'DNI  - 8410775'}</h1> 
        </Col> 
        <Col span={6}>
                  <h4 className="grey-text"> Apellidos</h4><h1 className="bold-text">{'Martin'}</h1> 
        </Col> 
        <Col span={6}>
                  <h4 className="grey-text"> Nombres</h4><h1 className="bold-text">{'Francisco'}</h1> 
        </Col>    
      </Row>
      </Card>
    </>
  );
};

export default InformacionDelTitular;
