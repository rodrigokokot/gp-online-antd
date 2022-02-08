import React from "react";
import { Card, Row,Col } from "antd";
import Title from "antd/lib/typography/Title";

const InfoCuenta= () => {
return(<>
    <Card>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h4>N° de cuenta</h4><Title level={4}>{'112233831'}</Title> 
        </Col>
        <Col span={5}>
            <h4>N° de cuenta original</h4><Title level={4}>{'N/D'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Fecha de alta</h4><Title level={4}>{'18/05/2021'}</Title>
        </Col>
        <Col span={5}>
            <h4>Tipo de cuenta</h4><Title level={4}>{'Personal'}</Title> 
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
    </>
);
}
export default InfoCuenta;
