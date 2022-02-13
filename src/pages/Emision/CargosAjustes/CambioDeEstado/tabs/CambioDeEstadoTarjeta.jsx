import { Form , Card, Row,Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react"; 
import FloatSelected from "../../../../../components/molecules/FloatSelected";
import Edit from "../../../../../components/organisms/Edit"; 

const CambioDeEstadoTarjeta = () => {
  function form() {
    return (
      <Card> 
        <Row>
          <Col span={6}>
            <h4 className="grey-text">Estado Tarjeta Original</h4><h1 className="bold-text">{'Normal'}</h1> 
	        </Col>
          <Col span={6}>  
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
             
	        </Col>
          <Col span={6}>
            <Form.Item name="reimprimir">
            <Switch
              checkedChildren="Reimprimir"
              unCheckedChildren="No reimprimir"
              defaultChecked
            />
          </Form.Item>
	        </Col>  
        </Row> 
        
        <Col span={18}> 
            <h4>Comentarios</h4>
            <Form.Item name="comentario">
              <TextArea
                style={{ width: "50%", borderRadius: 6 }}
                maxLength={2200}
              />
            </Form.Item>
          </Col>
      </Card>
    );
  }
  return ( 
        <Edit 
          component={form}
          textBtnSave="Guardar cambios"
          textModalConfirm="¿Realizar cambios en el estado de la tarjeta?"
          textBtnModalConfirm="Si, guardar" />  
  );
};

export default CambioDeEstadoTarjeta;
