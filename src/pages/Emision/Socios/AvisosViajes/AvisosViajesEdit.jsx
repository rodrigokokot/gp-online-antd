import React, { useState } from 'react';
import {Form,Typography,Card, Row, Col,DatePicker,Checkbox } from 'antd';
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from '../../../../components/organisms/Edit';  
const { RangePicker } = DatePicker;
const { Title } = Typography;

const AvisosViajesEdit = () => { 
  const FormularioCuenta = () => {
    const dateFormat='DD/MM/YY'
    const [fecha,setFecha]=useState(['Fecha desde','Fecha hasta']); 
    //para calendario
    function onChange1(value, dateString) {
        setFecha(dateString);console.log("date ",dateString);
      }
    function onChangeCheck(){
        console.log('click en check'); 
    }
    return (<>  
        
    <Card>
        <Title level={2}>{"Nombre Usu"}</Title>  
        <p >Número de cuenta</p>
            <Checkbox  onChange={onChangeCheck}> 
            <Title level={5}>{"Numero de la targeta"}</Title></Checkbox><br></br><br></br>
        <Form.Item name='fecha'
        >
        <RangePicker bordered={false} onChange={onChange1} placeholder={[fecha[0],fecha[1]]} format={[dateFormat,dateFormat]} />
        </Form.Item>

        <Row gutter={48}>
            <Col span={6}>
                <Form.Item name="pais"
                        >
                        <FloatSelect 
                                        label="País"
                                        placeholder="País"
                                        options={[
                                            {
                                                title: "Argentina",
                                                value: "Argentina",
                                                disabled: false,
                                            },
                                            {
                                                title: "Argentina",
                                                value: "Argentina",
                                                disabled: false,
                                            },
                                            {
                                                title: "Argentina",
                                                value: "Argentina",
                                                disabled: false,
                                            },
                                        ]}
                        >   </FloatSelect> 
                </Form.Item> 
                </Col>
                <Col span={6}>
                <Form.Item name='estado'>
                    <FloatSelect 
                                    label="Estado"
                                    placeholder="Estado"
                                    options={[
                                    {
                                        title: "Dada de baja",
                                        value: "Dada de baja",
                                        disabled: false,
                                    },
                                    {
                                        title: "Dada de baja",
                                        value: "Dada de baja",
                                        disabled: false,
                                    },
                                    {
                                        title: "Dada de baja",
                                        value: "Dada de baja",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                </Form.Item>
            </Col> 
        </Row> 
    </Card>  
    <br></br>
  </>)
  };

  return(
  <>
    <Edit component={FormularioCuenta} />
  </>);
}
export default AvisosViajesEdit;
