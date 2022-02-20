import React from "react";
import { Card, Row,Col,Form} from "antd"; 
import FloatSelected from "../../../components/molecules/FloatSelected/index";
import { useTranslation } from "react-i18next";

const InfoTitular= () => {
  const { t } = useTranslation();
  return (<>
    <Card> 
    <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">{t("boletin.view.tab3.greytext1")}</h1><h1 className="bold-text">{'213432'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("boletin.view.tab3.greytext2")}</h1><h1 className="bold-text">{'Emilia'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">{t("boletin.view.tab3.greytext3")}</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>  
      </Row><br></br>
        
            <h4 className="grey-text">{t("boletin.view.tab3.greytext4")}</h4> 
            <Col span={5} style={{marginTop:20}}>
            <Form.Item 
                name="motivopublicacion" 
            >
                <FloatSelected 
                    placeholder={t("boletin.view.tab3.input")}
                    label={t("boletin.view.tab3.input")}
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
