import { Form, Typography, Card, Row, Switch } from "antd";
import React from "react";
import FloatInput from "../../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../../components/molecules/FloatSelected";
import Edit from "../../../../../components/organisms/Edit";
const { Title } = Typography;

const CambioDeEstadoTarjeta = () => {
  function form() {
    return (
      <Card>
        <Title level={2}>Cambiar</Title>
        <Row>
          <Form.Item
            name="nuevoEstado"
            rules={[
              { required: true, message: "Ingrese nuevo estado de tarjeta" },
            ]}
          >
            <FloatSelected
              width={200}
              type="text"
              label="Nuevo estado de tarjeta"
              placeholder="Nuevo estado de tarjeta"
              options={[{value:"normal",title:"normal"},{value:"nuevo",title:"nuevo"}]}
            ></FloatSelected>
          </Form.Item>
          <Form.Item name="reimprimir">
            <Switch
              checkedChildren="Reimprimir"
              unCheckedChildren="No reimprimir"
              defaultChecked
            />
          </Form.Item>
        </Row>
        <Form.Item name="comentarios">
          <FloatInput
            outline
            type="text"
            label="Comentarios"
            placeholder="Comentarios"
          ></FloatInput>
        </Form.Item>
      </Card>
    );
  }
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
            Estado Tarjeta Original:<h5>Normal</h5>
          </h3>
        </div>
        <Edit 
          component={form}
          textBtnSave="Guardar cambios"
          textModalConfirm="¿Realizar cambios en el estado de la tarjeta?"
          textBtnModalConfirm="Si, guardar" />
      </Card>
    </>
  );
};

export default CambioDeEstadoTarjeta;
