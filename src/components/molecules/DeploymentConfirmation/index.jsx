import { Button, Card, Modal, Typography } from "antd";
import React from "react";
import { useState } from "react/cjs/react.development";
import { useTranslation } from 'react-i18next';

function DeploymentConfirmation() {
  // const [isModalVisible, setIsModalVisible] = useState(false); 
  const [permission, setPermission] = useState(true);    //permisos para aplicar confirmaciones 
  const { t } = useTranslation();

  const showModal = () => {
    // setIsModalVisible(true);
    Modal.confirm({
      icon: null,
      content: <Typography.Title level={4} style={{ textAlign: 'center' }}>{t("gestionaprobaciones.tab1.deploymentconfirmation.button.modal.title")}</Typography.Title>,
      okText:(t("gestionaprobaciones.tab1.deploymentconfirmation.button.modal.confirm")),
      width: 800,
      cancelText:(t("gestionaprobaciones.tab1.deploymentconfirmation.button.modal.cancel")),
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
      <h2 style={{ color: "#AB218E" }}>{t("gestionaprobaciones.tab1.deploymentconfirmation.title1")}</h2>
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
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext1")}<h5><b>213432</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext2")}<h5><b>Emilia</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext3")}<h5><b>Emilia</b></h5>
          </p>
        </div>
        <div>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext4")}<h5><b>Actualizacion de la targeta</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext5")}<h5><b>23/4/19</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext6")}<h5><b>-</b></h5>
          </p>
        </div>
        <div>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext7")}<h5><b>Pendiente</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text1.greytext8")}<h5><b>-</b></h5>
          </p>
        </div>
      </div>

      <h2 style={{ color: "#AB218E" }}>{t("gestionaprobaciones.tab1.deploymentconfirmation.title2")}</h2>
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
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext1")}<h5><b>pedro</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext2")}<h5><b>Pendiente</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext3")}<h5><b>23/4/19</b></h5>
          </p>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext4")}<h5><b>Emilia</b></h5>
          </p>
        </div>
        <div>
          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext5")}<h5><b>Actualizacion de la targeta</b></h5>
          </p>

          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext6")}<h5><b>Emilia</b></h5>
          </p>

          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext7")}<h5><b>-</b></h5>
          </p>

          <p>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.text2.greytext8")}<h5><b>-</b></h5>
          </p>
        </div>
      </div>
      {permission ? (           //permisos para aplicar confirmaciones 
        <div style={{ marginTop: '36px', display: 'flex', gap: '12px' }}>
          <Button type="primary" onClick={showModal}>
          {t("gestionaprobaciones.tab1.deploymentconfirmation.button.confirm")}
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
          <Button style={{ border: '2px solid #0DD8B0' }}>{t("gestionaprobaciones.tab1.deploymentconfirmation.button.cancel")}</Button>
        </div>
      ) : null}
    </Card>
  );
}

export default DeploymentConfirmation;
