import { Card, Divider } from "antd";
import React from "react";

const DatosConsumo = () => {
  return (
    <Card>
      <h2 style={{ color: "#AB218E" }}>Informacion de la cuenta</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 10%",
          flexDirection: "row",
        }}
      >
        <div>
          <h3>
            Movimentos:<h5>Consumo</h5>
          </h3>
          <h3>
            Autorización Emisor:<h5>826178</h5>
          </h3>
          <h3>
            Importe sin descuento:<h5>-</h5>
          </h3>
          <h3>
            Arancel <h5>%</h5>
          </h3>
        </div>
        <div>
          <h3>
            Grupo de Transacción:<h5>Compras/Devolución/Contrap Mon Local</h5>
          </h3>
          <h3>
            Comprobante:<h5>-</h5>
          </h3>
          <h3>
            Terminal <h5>23946499</h5>
          </h3>
          <h3>
            Importe Arancel <h5>0,00</h5>
          </h3>
        </div>
        <div>
          <h3>
            Fecha/Hora:<h5>22/07/21 00:00:00</h5>
          </h3>
          <h3>
            Lote:<h5>-</h5>
          </h3>
          <h3>
            Fecha Cierre:<h5>-</h5>
          </h3>
          <h3>
            Nº de tarjeta<h5>559997XXXXX</h5>
          </h3>
        </div>
        <div>
          <h3>
            Cuotas:<h5>1</h5>
          </h3>
          <h3>
            Caida Cuotas:<h5>No</h5>
          </h3>
          <h3>
            Fecha Pago:<h5>-</h5>
          </h3>
          <h3>
            Id consumo:<h5>11261</h5>
          </h3>
        </div>
        <div>
          <h3>
            Moneda Origen:<h5>Dolar de EEUU</h5>
          </h3>
          <h3>
            Importe total:<h5>381,76</h5>
          </h3>
          <h3>
            Fecha Presentación:<h5>02/03/2020</h5>
          </h3>
        </div>
      </div>
      <h3>
        Comercio
        <h4>Spotify \C. PROLONGACION AVDA MEDI0 \Stockholm\04006 SWE</h4>
      </h3>

      <Divider style={{'background-color':'#DADADA'}}></Divider> <h2>Detalles de Cuotas</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 10%",
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
