import React from "react";
import { Card, Row,Col,Form} from "antd";
import Title from "antd/lib/typography/Title";   
import FloatSelected from "../../../components/molecules/FloatSelected/index";

const InfoTitular= () => {
  return (<>
    <Card> 
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h4>Documento</h4><Title level={4}>{'DNI - 385000678'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Apellidos</h4><Title level={4}>{'Ortiz'}</Title> 
        </Col>
        <Col span={5}>
            <h4>Nombres</h4><Title level={4}>{'Darma Micaela'}</Title> 
        </Col> 
      </Row><br></br>
        
            <h4>Datos de la publicación</h4>
            <Col span={5}>
            <Form.Item
                name="motivopublicacion" 
            >
                <FloatSelected 
                    placeholder="Motivo de la pubicación"
                    label="Motivo de la pubicación"
                    options={[
                    { title: "Motivo 1", value:"Motivo 1" ,disabled: false, },
                    { title: "Motivo 2", value:"Motivo 2" ,disabled: false, },
                    { title: "Motivo 3", value:"Motivo 3" ,disabled: false, },
                    ]} 
                >
                </FloatSelected> 
            </Form.Item> 
        </Col> 
    </Card> <br></br>
  </>      
);
}
export default InfoTitular;
