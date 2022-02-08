import { Card } from "antd";
import React from "react";

const InformacionDelTitular = () => {
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
          Documento:<h5>DNI  - 8410775</h5>
          </h3>
          <h3>
          Apellidos :<h5>Martin</h5>
          </h3>
          <h3>
          Nombres:<h5>Francisco</h5>
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

export default InformacionDelTitular;
