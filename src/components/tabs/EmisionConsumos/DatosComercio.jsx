import { Card } from "antd";
import React from "react";

const DatosComercio = () => {
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
          Comercio descripcion:<h5>Consumo</h5>
        </h3>
        <h3>
          Numero comercio:<h5>826178</h5>
        </h3>
        <h3>
          Modo ingreso:<h5>-</h5>
        </h3>
        <h3>
          Fecha informada <h5>%</h5>
        </h3>
        <h3>
          MMC:<h5>826178</h5>
        </h3>
        <h3>
          TCC:<h5>-</h5>
        </h3>
        <h3>
          Cupon:<h5>826178</h5>
        </h3>
        <h3>
          Terminal:<h5>-</h5>
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

export default DatosComercio;
