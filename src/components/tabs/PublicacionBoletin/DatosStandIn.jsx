import React, { useState } from "react";
import { Card, Row,Col,Form,Checkbox,Typography} from "antd";
import Title from "antd/lib/typography/Title";  
import { useTranslation } from "react-i18next";
const { Text } = Typography;  

const DatosStandIn= () => {
  const { t } = useTranslation();
    
    const [checkedList1, setCheckedList1]=useState("");
    function onChangeCheck(list){
        setCheckedList1(list.target.value);
      };  
  return (<>
    <Card>
        <h4>{t("boletin.view.tab4.greytext1")}</h4><Title level={4}>{'31/12/2017'}</Title>
        <br></br><h4></h4>
        <Row gutter={48}>
        <Col span={4}>
        <Title level={5}>{t("boletin.view.tab4.regiones.r1")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r2")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r3")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r4")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r5")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r6")}</Title>
        <Title level={5}>{t("boletin.view.tab4.regiones.r7")}</Title> 
        </Col>
        <Col span={5} ><Form.Item name='regiones'>   
                    <Checkbox value='Region 0' onChange={onChangeCheck}></Checkbox> <br/><br/>
                    <Checkbox  value='Region 1' onChange={onChangeCheck}></Checkbox> <br/><br/>
                    <Checkbox  value='Region A' onChange={onChangeCheck}></Checkbox><br/><br/>
                    <Checkbox  value='Region B' onChange={onChangeCheck}></Checkbox>   <br/><br/>
                    <Checkbox  value='Region C' onChange={onChangeCheck}></Checkbox> <br/><br/>
                    <Checkbox  value='Region D' onChange={onChangeCheck}></Checkbox> <br/><br/>
                    <Checkbox  value='Region E' onChange={onChangeCheck}></Checkbox><br/><br/>  
       
           </Form.Item>  
        </Col>
        <Col span={5}>
        <Title level={5}>{t("boletin.view.tab4.fechas.f1")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f2")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f3")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f4")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f5")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f6")}</Title>
        <Title level={5}>{t("boletin.view.tab4.fechas.f7")}</Title>
        </Col>
        <Col span={4}>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        <Text underline>{'31/12/2017'}</Text><br/><br/>
        </Col>
        </Row>
    </Card> <br></br>
  </>        
  );
};
export default DatosStandIn;
