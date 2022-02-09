import { Card } from "antd";
import React from "react";

const DatosComercio = () => {
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
          Comercio descripcion:<h5>Consumo</h5>
        </h3>
        <h3>
          N° de comercio:<h5>826178</h5>
        </h3>
        <h3>
          Modo ingreso:<h5>-</h5>
        </h3>
        <h3>
          Fecha informada <h5>%</h5>
        </h3>
        <h3>
          MCC:<h5>826178</h5>
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
    </Card>
  );
};

export default DatosComercio;
