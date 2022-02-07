import React, { useState } from "react";
import { Card, Row,Col,Form,Checkbox,Typography} from "antd";
import Title from "antd/lib/typography/Title";  
const { Text } = Typography;  

const DatosStandIn= () => {
    
    const [checkedList1, setCheckedList1]=useState('');
    function onChangeCheck(list){
        setCheckedList1(list); 
      }; 
    
  return (<>
    <Card>
        <h4>Fecha Vigencia S.I.</h4><Title level={4}>{'31/12/2017'}</Title>
        <br></br><h4>Datos de EWBF</h4>
        <Row gutter={48}>
        <Col span={3}>
        <Title level={5}>{'Región 0: '}</Title>
        <Title level={5}>{'Región 1: '}</Title>
        <Title level={5}>{'Región A: '}</Title>
        <Title level={5}>{'Región B: '}</Title>
        <Title level={5}>{'Región C: '}</Title>
        <Title level={5}>{'Región D: '}</Title>
        <Title level={5}>{'Región E: '}</Title> 
        </Col>
        <Col span={4} ><Form.Item name='regiones'>  
                <Checkbox.Group  onChange={onChangeCheck}>
                    <Checkbox value='Región 0'></Checkbox> <br/><br/>
                    <Checkbox  value='Región 1'></Checkbox> <br/><br/>
                    <Checkbox  value='Región A'></Checkbox><br/><br/>
                    <Checkbox  value='Región B'></Checkbox>   <br/><br/>
                    <Checkbox  value='Región C'></Checkbox> <br/><br/>
                    <Checkbox  value='Región D'></Checkbox> <br/><br/>
                    <Checkbox  value='Región E'></Checkbox><br/><br/>
                     
                </Checkbox.Group>
           </Form.Item> 
        </Col>
        <Col span={4}>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        <Title level={5}>{'Fecha Vigencia'}</Title>
        </Col>
        <Col span={3}>
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
