import { Button, Card, Modal } from "antd";
import React from "react";
import { useState } from "react/cjs/react.development";

function DeploymentConfirmation() {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [permission, setPermission] = useState(true);    //permisos para aplicar confirmaciones 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card>
      <h2 style={{ color: "#AB218E" }}>Informacion de la novedad</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 10%",
          flexDirection: "row",
        }}
      >
        <div>
          <p>
            ID de la transaccion:<h5>213432</h5>
          </p>
          <p>
            Usuario de inicio:<h5>Emilia</h5>
          </p>
          <p>
            Usuario de finalizo:<h5>Emilia</h5>
          </p>
        </div>
        <div>
          <p>
            Tipo de transaccion:<h5>Actualizacion de la targeta</h5>
          </p>
          <p>
            Fecha de inicio:<h5>23/4/19</h5>
          </p>
          <p>
            Fecha de finalizacion:<h5>-</h5>
          </p>
        </div>
        <div>
          <p>
            Estado de transaccion:<h5>Pendiente</h5>
          </p>
          <p>
            Comentario:<h5>-</h5>
          </p>
        </div>
      </div>

      <h2 style={{ color: "#AB218E" }}>Datos de la operacion</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 10%",
          flexDirection: "row",
        }}
      >
        <div>
          <p>
            Emisor:<h5>pedro</h5>
          </p>
          <p>
            Documento:<h5>Pendiente</h5>
          </p>
          <p>
            Marca:<h5>23/4/19</h5>
          </p>
          <p>
            Datos de transaccion:<h5>Emilia</h5>
          </p>
        </div>
        <div>
          <p>
            Sucursal:<h5>Actualizacion de la targeta</h5>
          </p>

          <p>
            Cliente:<h5>Emilia</h5>
          </p>

          <p>
            Cuenta:<h5>-</h5>
          </p>

          <p>
            Producto:<h5>-</h5>
          </p>
        </div>
      </div>
      {permission ? (           //permisos para aplicar confirmaciones 
        <div>
          <Button type="primary" onClick={showModal}>
            Aplicar confirmacion
          </Button>
          <Modal
            title="¿Estás seguro que deseas aplicar esta confimación?"
            centered
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Aplicar Confirmacion
              </Button>,
              <Button key="back" onClick={handleCancel}>
                Cancelar
              </Button>,
            ]}
          ></Modal>
          <Button>Cancelar confirmacion</Button>
        </div>
      ) : null}
    </Card>
  );
}

export default DeploymentConfirmation;
