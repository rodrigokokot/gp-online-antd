import { Button, Card, Modal, Typography } from "antd";
import React from "react";
import { useState } from "react/cjs/react.development";

function DeploymentConfirmation() {
  // const [isModalVisible, setIsModalVisible] = useState(false); 
  const [permission, setPermission] = useState(true);    //permisos para aplicar confirmaciones 

  const showModal = () => {
    // setIsModalVisible(true);
    Modal.confirm({
      icon: null,
      content: <Typography.Title level={4} style={{ textAlign: 'center' }}>¿Estás seguro que deseas aplicar esta confimación?</Typography.Title>,
      okText: "Aplicar Confirmación",
      width: 800,
      cancelText: "Cancelar",
      closable: true,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <Card style={{ borderRadius: '0.5rem' }}>
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
            ID de la transaccion:<h5><b>213432</b></h5>
          </p>
          <p>
            Usuario de inicio:<h5><b>Emilia</b></h5>
          </p>
          <p>
            Usuario de finalizo:<h5><b>Emilia</b></h5>
          </p>
        </div>
        <div>
          <p>
            Tipo de transaccion:<h5><b>Actualizacion de la targeta</b></h5>
          </p>
          <p>
            Fecha de inicio:<h5><b>23/4/19</b></h5>
          </p>
          <p>
            Fecha de finalizacion:<h5><b>-</b></h5>
          </p>
        </div>
        <div>
          <p>
            Estado de transaccion:<h5><b>Pendiente</b></h5>
          </p>
          <p>
            Comentario:<h5><b>-</b></h5>
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
            Emisor:<h5><b>pedro</b></h5>
          </p>
          <p>
            Documento:<h5><b>Pendiente</b></h5>
          </p>
          <p>
            Marca:<h5><b>23/4/19</b></h5>
          </p>
          <p>
            Datos de transaccion:<h5><b>Emilia</b></h5>
          </p>
        </div>
        <div>
          <p>
            Sucursal:<h5><b>Actualizacion de la targeta</b></h5>
          </p>

          <p>
            Cliente:<h5><b>Emilia</b></h5>
          </p>

          <p>
            Cuenta:<h5><b>-</b></h5>
          </p>

          <p>
            Producto:<h5><b>-</b></h5>
          </p>
        </div>
      </div>
      {permission ? (           //permisos para aplicar confirmaciones 
        <div style={{ marginTop: '36px', display: 'flex', gap: '12px' }}>
          <Button type="primary" onClick={showModal}>
            Aplicar confirmacion
          </Button>
          {/* <Modal
            title="¿Estás seguro que deseas aplicar esta confimación?"
            centered
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Aplicar Confirmacion
              </Button>,
              <Button key="back" onClick={handleCancel} style={{ border: '2px solid #0DD8B0' }}>
                Cancelar
              </Button>,
            ]}
          ></Modal> */}
          <Button style={{ border: '2px solid #0DD8B0' }}>Cancelar confirmacion</Button>
        </div>
      ) : null}
    </Card>
  );
}

export default DeploymentConfirmation;
