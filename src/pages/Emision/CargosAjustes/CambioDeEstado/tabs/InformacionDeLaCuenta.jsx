import { Card } from "antd";
import React from "react";

const InformacionDeLaCuenta = () => {
  return (
    <>
      <Card>
        <h2 style={{ color: "#AB218E" }}>Informacion de la cuenta</h2>
        <div
          style={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "left",
            gap: "10% 10%",
            flexDirection: "row",
          }}
        >
          <h3>
          Nº de cuenta :<h5>124235</h5>
          </h3>
          <h3>
          Nº de Cta. Original:<h5>N/A</h5>
          </h3>
          <h3>
          Fecha de Alta:<h5>14/11/2011</h5>
          </h3>
          <h3>
          Tipo de cuenta:<h5>Personal </h5>
          </h3>
          <h3>
          Marca:<h5>Tarjeta Grupar    </h5>
          </h3>
          <h3>
          Emisor:<h5>Tarjeta Grupar</h5>
          </h3>
          <h3>
          Sucursal:<h5>Cordoba</h5>
          </h3>
        </div>
        <div
          style={{
            display: "block",
            height: "1px",
            border: 0,
            borderTop: "1px solid #ccc",
            margin: "1em 0",
            padding: 0,
          }}
        ></div>
      </Card>
    </>
  );
};

export default InformacionDeLaCuenta;
