import { Card, Divider, Row,Col } from "antd";
import React from "react";

const DatosConsumo = () => {
  return (
    <Card>  
    <Row gutter={[24, 24]}>
        <Col span={6}>
            <h1 className="grey-text">Movimientos</h1><h1 className="bold-text">{'Consumo'}</h1> 
        </Col>
        <Col span={12}>
            <h1 className="grey-text"> Grupo de Transacción</h1><h1 className="bold-text">{'Compras/Devolución/Contrap Mon Local '}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">Nº de tarjeta </h4><h1 className="bold-text">{'559997XXXXX'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">Id consumo </h4><h1 className="bold-text">{'11261'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text"> Autorización Emisor</h1><h1 className="bold-text">{'14591'}</h1> 
        </Col>
        <Col span={6}>
            <h1 className="grey-text">Comprobante</h1><h1 className="bold-text">{'-'}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">Fecha/Hora </h4><h1 className="bold-text">{'22/07/21 00:00:00'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">Cuotas </h4><h1 className="bold-text">{'1'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text"> Moneda Origen</h4><h1 className="bold-text">{'Dolar de EEUU'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text">Importe sin descuento</h1><h1 className="bold-text">{'-'}</h1>
        </Col>
        <Col span={6}>
            <h1 className="grey-text"> Terminal</h1><h1 className="bold-text">{'2398548'}</h1>
        </Col> 
        <Col span={6}>
            <h4 className="grey-text">Lote </h4><h1 className="bold-text">{'-'}</h1> 
	      </Col> 
        <Col span={6}>
            <h4 className="grey-text">Caida Cuotas </h4><h1 className="bold-text">{'No'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">Importe total </h4><h1 className="bold-text">{'381,76'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text">Arancel</h1><h1 className="bold-text">{'%'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">Importe Arancel </h4><h1 className="bold-text">{'0,00'}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">Fecha Cierre </h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">Fecha Pago </h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text"> Fecha Presentación</h4><h1 className="bold-text">{'02/03/2020'}</h1> 
	      </Col>
      </Row>   <br></br>
            <h4 className="grey-text"> Comercio </h4><h4 className="bold-text">Spotify \C. PROLONGACION AVDA MEDI0 \Stockholm\04006 SWE</h4>
	      

      <Divider style={{'background-color':'#DADADA'}}></Divider> <h2>Detalles de Cuotas</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 7%", 
          flexDirection: "row",
        }}
      >   
          <h3>
          Cuota<h5>0/1</h5>
          </h3>
          <h3>
          Importe<h5>381,76</h5>
          </h3>
          <h3>
          Arancel<h5>0%</h5>
          </h3>
          <h3>
          Importe Arancel<h5>0,0</h5>
          </h3>
          <h3>
          Fecha Cierre<h5>N/A</h5>
          </h3>
          <h3>
          Fecha Pago<h5>N/A</h5>
          </h3>
          <h3>
          Liq Comercios<h5>N</h5>
          </h3>

      </div>
    </Card>
  );
};

export default DatosConsumo;
