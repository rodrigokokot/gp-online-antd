import { Card } from "antd";
import React from "react";

const DatosSocio = () => {
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
          Nombre:<h5>Consumo</h5>
        </h3>
        <h3>
          Apellido:<h5>826178</h5>
        </h3>
        <h3>
          Numero Documento:<h5>-</h5>
        </h3>
        <h3>
          N° de Cuenta <h5>%</h5>
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

    </Card>
  );
};

export default DatosSocio;
