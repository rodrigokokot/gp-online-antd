import React from "react";
import { Tabs, Card, Row, Col } from "antd";

function AutorizacionesView() {
  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Datos Autorización" key="1">
          <Card>
            <Row gutter={[24, 48]}>
              <Col span={6}>
                <p className="grey-text">ID Autorización</p>
                <h1 className="bold-text">número</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Fecha Autorización</p>
                <h1 className="bold-text">
                  <date>date</date>
                </h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Autorización Emisor</p>
                <h1 className="bold-text">autorizacion</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Movimiento</p>
                <h1 className="bold-text">movimiento</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Estado</p>
                <h1 className="bold-text">estado</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Moneda</p>
                <h1 className="bold-text">moneda</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Importe</p>
                <h1 className="bold-text">importe</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Fecha de presentación</p>
                <h1 className="bold-text">
                  <date>fecha</date>
                </h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Moneda</p>
                <h1 className="bold-text">moneda</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Importe origen</p>
                <h1 className="bold-text">importe orig</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Cuotas</p>
                <h1 className="bold-text">cuotas</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Respuesta</p>
                <h1 className="bold-text">20069 - Fondos Insuficientes</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Origen</p>
                <h1 className="bold-text">origen</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Pais Comercio</p>
                <h1 className="bold-text">pais</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Pais Emisor</p>
                <h1 className="bold-text">pais</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Cotizacion</p>
                <h1 className="bold-text">cotizacion</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Fecha de anulación</p>
                <h1 className="bold-text">
                  <date>fecha</date>
                </h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Usuario anulación</p>
                <h1 className="bold-text">usuario</h1>
              </Col>
            </Row>
          </Card>
        </TabPane>

        <TabPane tab="Datos Socio" key="2">
          <Card>
            <Row gutter={[24, 48]}>
              <Col span={6}>
                <p className="grey-text">Nombre</p>
                <h1 className="bold-text">nombre</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Apellido</p>
                <h1 className="bold-text">apellido</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">N° de documento</p>
                <h1 className="bold-text">número</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">N° de cuenta</p>
                <h1 className="bold-text">cuenta</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Adicionales</p>
                <h1 className="bold-text">adicionales</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">Producto</p>
                <h1 className="bold-text">1-Producto sobre disponibilidad</h1>
              </Col>

              <Col span={6}>
                <p className="grey-text">N° de tarjeta</p>
                <h1 className="bold-text">522268XXXXXX3051</h1>
              </Col>
            </Row>
          </Card>
        </TabPane>

        <TabPane tab="Datos Comercio" key="3">
          <Card>
            <Row gutter={[24, 48]}>
              <Col span={6}>
                <p className="grey-text">Comercio descripción</p>
                <h1 className="bold-text">comercio</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">N° Comercio</p>
                <h1 className="bold-text">número</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">Modo ingreso</p>
                <h1 className="bold-text">numero</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">Fecha informada</p>
                <h1 className="bold-text"><date>fecha</date></h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">MCC</p>
                <h1 className="bold-text">5732 Electronic Sales</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">TCC</p>
                <h1 className="bold-text">A - Automobile/Vehicle Rental</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">Cupon</p>
                <h1 className="bold-text">cupon</h1>
              </Col>
              <Col span={6}>
                <p className="grey-text">Terminal</p>
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
