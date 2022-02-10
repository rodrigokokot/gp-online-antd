import { Card } from "antd";
import React from "react";

const DatosAdicionales = () => {
  return (
    <Card> 
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
          Fecha IPM:<h5>Consumo</h5>
        </h3>
        <h3>
          Producto:<h5>826178</h5>
        </h3>
        <h3>
          MCC:<h5>-</h5>
        </h3>
        <h3>
          ICA Emisor <h5>%</h5>
        </h3>
        <h3>
          ICA Adquiriente:<h5>826178</h5>
        </h3>
        <h3>
          Tasa conversión:<h5>-</h5>
        </h3>
      </div> 
    </Card>
  );
};

export default DatosAdicionales;
