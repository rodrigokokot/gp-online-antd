import React, { useState } from 'react';
import { Radio,Form,Typography,Card, Row, Col,DatePicker,Checkbox } from 'antd';
import FloatInput from '../../../../components/molecules/FloatInput';
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from '../../../../components/organisms/Edit'; 
import { SearchOutlined } from '@ant-design/icons';
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
const { Title } = Typography;  
function CPMovimientoEdit() {
  


    const FormularioCuenta = () => {
        const [value, setValue] = useState("");
        const onChange = e => {
        setValue(e.target.value);
        }; 
    
        //para calendario
        const [valuedate,setValuedate]=useState('Fecha desde'); 
        function onChangedate(date, dateString){
        setValuedate(dateString);  console.log("date ",dateString);
        }
        // check 1 
        const [checkedList1, setCheckedList1]=useState('');
        function onChangeCheck(list){
            setCheckedList1(list); 
          }; 
        return (<>  
            
            <Card>
            <Title level={2}>Datos Principales</Title>
            <Col span={8}>
                <Form.Item
                        name="producto" 
                        >
                            <FloatSelect outline showSearch={true} suffix={<SearchOutlined />}
                                        label="Producto"
                                        placeholder="Busca por tipo de producto"
                                        options={[
                                        {
                                            title: "P 1",
                                            value: "P 1",
                                            disabled: false,
                                        },
                                        {
                                            title: "P 2",
                                            value: "P 2",
                                            disabled: false,
                                        },
                                        {
                                            title: "P 3",
                                            value: "P 3",
                                            disabled: false,
                                        },
                                        ]}
                            ></FloatSelect>
                </Form.Item>
                <Form.Item
                        name="codigomov" 
                        >
                            <FloatSelect outline showSearch={true} suffix={<SearchOutlined />}
                                        label="Código de movimiento"
                                        placeholder="Ingresá Código de movimiento"
                                        options={[
                                        {
                                            title: "CM 1",
                                            value: "CM 1",
                                            disabled: false,
                                        },
                                        {
                                            title: "CM 2",
                                            value: "CM 2",
                                            disabled: false,
                                        },
                                        {
                                            title: "CM 3",
                                            value: "CM 3",
                                            disabled: false,
                                        },
                                        ]}
                            ></FloatSelect>
                </Form.Item>
                <Form.Item
                        name="tipored" 
                        >
                            <FloatSelect outline showSearch={true} suffix={<SearchOutlined />}
                                        label="Tipo de Red"
                                        placeholder="Busca tipo de Red"
                                        options={[
                                        {
                                            title: "Red 1",
                                            value: "Red 1",
                                            disabled: false,
                                        },
                                        {
                                            title: "R 2",
                                            value: "R 2",
                                            disabled: false,
                                        },
                                        {
                                            title: "R 3",
                                            value: "R 3",
                                            disabled: false,
                                        },
                                        ]}
                            ></FloatSelect>
                </Form.Item> 
                <Title level={5}>Locación</Title>
                <Form.Item name='locacion'> 
                <Checkbox.Group  onChange={onChangeCheck}>
                    <Checkbox value='Local'>Local</Checkbox>
                    <Checkbox  value='Exterior'>Exterior</Checkbox> 
                </Checkbox.Group>
                </Form.Item>
                <Title level={5}>Tipo de documento</Title>
                <Form.Item name='evento' > 
                    <Radio.Group onChange={onChange} value={value}>
                        <Row gutter={55}>
                        <Col span={7}>
                            <Radio  value={"Autorización"}>Autorización</Radio> 
                        </Col>
                        <Col span={7}>
                            <Radio  value={"Presentación"} >Presentación</Radio></Col>
                        <Col span={10}>
                            <Radio value={"No aplica"}>No aplica</Radio> 
                        </Col>
                        </Row>
                    </Radio.Group>
                </Form.Item>
                <Form.Item 
                    name="fechadesde" 
                >
                    <DatePicker style={{width: '50%' ,borderRadius:6}} onChange={onChangedate} placeholder={valuedate} format={'DD/MM/YYYY'}/>
                </Form.Item> 
            </Col>  
            <Row gutter={48}>
              <Col span={6}>                           
                  <Form.Item name='porcentajecargo'  
                  >
                    <FloatInput outline type="number" label='Ingresá porcentaje cargo' placeholder='Ingresá porcentaje cargo'></FloatInput>
                  </Form.Item>
              </Col>   
              <Col span={4}>                           
                  <Form.Item name='precio'  
                  >
                    <FloatInput outline type="number" label='Ingresá precio' placeholder='Ingresá precio'></FloatInput>
                  </Form.Item>
              </Col>      
            </Row> 
            <Form.Item name='moneda'> 
                <Checkbox.Group  onChange={onChangeCheck}>
                    <Checkbox value='DOLAR U$S'>DOLAR U$S</Checkbox>
                    <Checkbox  value='EUROS'>EUROS</Checkbox> 
                    <Checkbox  value='Pesos AR'>Pesos AR</Checkbox> 
                </Checkbox.Group>
                </Form.Item>
            <Col span={8}>
            <Form.Item
                name="tipomoneda" 
            > 
                <SelectImg suffix={<SearchOutlined />} 
                bordered showSearch={true} placeholder="Busca tipo de moneda" 
                style={{width: '100%'}}
                />            
            </Form.Item> 
            <Row gutter={48}>
              <Col span={12}>                           
                  <Form.Item name='minimo'  
                  >
                    <FloatInput outline type="number" label='Mínimo' placeholder='Mínimo'></FloatInput>
                  </Form.Item>
              </Col>   
              <Col span={12}>                           
                  <Form.Item name='maximo'  
                  >
                    <FloatInput outline type="number" label='Máximo' placeholder='Máximo'></FloatInput>
                  </Form.Item>
              </Col>      
            </Row> 
            <Form.Item
                        name="conceptocargo" 
                        >
                            <FloatSelect outline showSearch={true} suffix={<SearchOutlined />} 
                                placeholder="Busca concepto por cargo"
                                label="Concepto por cargo"
                                options={[
                                { title: "C 1", value:"C 1" ,disabled: false, },
                                { title: "C 2", value:"C 2" ,disabled: false, },
                                { title: "C 3", value:"C 3" ,disabled: false, },
                                ]} 
                            >
                            </FloatSelect> 
            </Form.Item>  
            </Col>
            </Card>  
            <br></br>
      </>)
      };
    
      return(
      <>
        <Edit component={FormularioCuenta} />
      </>);
    
}

export default CPMovimientoEdit;
