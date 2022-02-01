import { Card } from "antd";
import React from "react";

const DatosSocio = () => {
  return (
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
          Nombre:<h5>Consumo</h5>
        </h3>
        <h3>
          Apellido:<h5>826178</h5>
        </h3>
        <h3>
          Numero Documento:<h5>-</h5>
        </h3>
        <h3>
          Numero de cuenta <h5>%</h5>
        </h3>
        <h3>
          Adicional:<h5>826178</h5>
        </h3>
        <h3>
          Numero de tarjeta:<h5>-</h5>
        </h3>
        <h3>
          Producto <h5>%</h5>
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
  );
};

export default DatosSocio;
