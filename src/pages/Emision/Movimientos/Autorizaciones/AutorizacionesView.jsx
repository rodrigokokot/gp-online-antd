import React from "react";
import { Tabs, Card, Row, Col } from "antd";

function AutorizacionesView() {
  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Datos Autorización" key="1">
          <Card>
          <Row gutter={[24, 24]}>
              <Col span={6}>
            <h1 className="grey-text">ID Autorización</h1><h1 className="bold-text">{'112233831'}</h1> 
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Fecha Autorización</h1><h1 className="bold-text"><date>date</date></h1> 
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Autorización Emisor</h1><h1 className="bold-text">{'autorizacion'}</h1>
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Movimiento</h1><h1 className="bold-text">{'Movimiento'}</h1> 
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Estado</h1><h1 className="bold-text">{'Estado'}</h1>
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Emisor</h1><h1 className="bold-text">{'Emisor'}</h1>
        </Col>
              <Col span={6}>
            <h1 className="grey-text">Moneda</h1><h1 className="bold-text">{'moneda'}</h1>
        </Col> 
              <Col span={6}>
        <h1 className="grey-text">Importe</h1>
        <h1 className="bold-text">importe</h1>
        </Col>
              <Col span={6}>
              <h1 className="grey-text">Fecha de presentación</h1>
              <h1 className="bold-text">
                <date>fecha</date>
              </h1>
        </Col>
              <Col span={6}>
                <h1 className="grey-text">Moneda</h1>
                <h1 className="bold-text">moneda</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Importe origen</h1>
                <h1 className="bold-text">importe orig</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Cuotas</h1>
                <h1 className="bold-text">cuotas</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Respuesta</h1>
                <h1 className="bold-text">20069 - Fondos Insuficientes</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Origen</h1>
                <h1 className="bold-text">origen</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Pais Comercio</h1>
                <h1 className="bold-text">pais</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Pais Emisor</h1>
                <h1 className="bold-text">pais</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Cotizacion</h1>
                <h1 className="bold-text">cotizacion</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">Fecha de anulación</h1>
                <h1 className="bold-text">
                  <date>fecha</date>
                </h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">Usuario anulación</h1>
                <h1 className="bold-text">usuario</h1>
              </Col> 
      </Row>    
    </Card>
  </TabPane>

        <TabPane tab="Datos Socio" key="2">
          <Card>
            <Row gutter={[24, 24]}>
              <Col span={6}>
                <h1 className="grey-text">Nombre</h1>
                <h1 className="bold-text">nombre</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">Apellido</h1>
                <h1 className="bold-text">apellido</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">N° de documento</h1>
                <h1 className="bold-text">número</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">N° de cuenta</h1>
                <h1 className="bold-text">cuenta</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">Adicionales</h1>
                <h1 className="bold-text">adicionales</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">Producto</h1>
                <h1 className="bold-text">1-Producto sobre disponibilidad</h1>
              </Col>

              <Col span={6}>
                <h1 className="grey-text">N° de tarjeta</h1>
                <h1 className="bold-text">522268XXXXXX3051</h1>
              </Col>
            </Row>
          </Card>
        </TabPane>

        <TabPane tab="Datos Comercio" key="3">
          <Card>
            <Row gutter={[24, 24]}>
              <Col span={6}>
                <h1 className="grey-text">Comercio descripción</h1>
                <h1 className="bold-text">comercio</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">N° Comercio</h1>
                <h1 className="bold-text">número</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Modo ingreso</h1>
                <h1 className="bold-text">numero</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Fecha informada</h1>
                <h1 className="bold-text"><date>fecha</date></h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">MCC</h1>
                <h1 className="bold-text">5732 Electronic Sales</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">TCC</h1>
                <h1 className="bold-text">A - Automobile/Vehicle Rental</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Cupon</h1>
                <h1 className="bold-text">cupon</h1>
              </Col>
              <Col span={6}>
                <h1 className="grey-text">Terminal</h1>
                <h1 className="bold-text">terminal</h1>
              </Col>
            </Row>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AutorizacionesView;
