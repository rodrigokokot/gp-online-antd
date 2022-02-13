import React from "react";
import { Card, Row,Col,Form} from "antd"; 
import FloatSelected from "../../../components/molecules/FloatSelected/index";

const InfoTitular= () => {
  return (<>
    <Card> 
      <Row gutter={[24, 24]}>
        <Col span={6}>
            <h4 className="grey-text">Documento </h4><h1 className="bold-text">{'DNI - 385000678'}</h1> 
        </Col> 
        <Col span={6}>
            <h4 className="grey-text"> Apellidos</h4><h1 className="bold-text">{'Ortiz'}</h1> 
        </Col>
        <Col span={6}>
            <h4 >Nombres </h4><h1 className="bold-text">{'Darma Micaela'}</h1> 
        </Col> 
      </Row><br></br>
        
            <h4 className="grey-text">Datos de la publicación</h4> 
            <Col span={5} style={{marginTop:20}}>
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
    </Card> 
  </>      
);
}
export default InfoTitular;
