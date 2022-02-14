import React from "react";
import { Card, Row,Col } from "antd";

const InfoCuenta= () => {
return(<>
    <Card>
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">N° de cuenta</h1><h1 className="bold-text">{'112233831'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">N° de cuenta original</h1><h1 className="bold-text">{'N/D'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Fecha de alta</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Tipo de cuenta</h1><h1 className="bold-text">{'Personal'}</h1> 
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Marca</h1><h1 className="bold-text">{'Tarjeta Grupar'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Emisor</h1><h1 className="bold-text">{'Tarjeta Grupar'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Sucursal</h1><h1 className="bold-text">{'Córdoba'}</h1>
        </Col> 
      </Row>
    </Card> <br></br> 
    </>
);
}
export default InfoCuenta;
