import React, { useState } from 'react';
import { Radio,Form,Typography,Card, Row, Col,DatePicker,Checkbox} from 'antd';
import FloatInput from '../../../../components/molecules/FloatInput';
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from '../../../../components/organisms/Edit'; 
const { Title } = Typography;

const GestionCuentaNew = () => { 
    const [value, setValue] = useState("");
    const onChange = e => {
    setValue(e.target.value);
    }; 

  const FormularioUsuario = () => {
    //para calendario 
    const [valuedate,setValuedate]=useState('');//Ver datos del calendario como enviar fecha como string
    function onChangedate(date, dateString){
    setValuedate(dateString);  
    }
    //para bloquear input y cambiar valor de entradas
    const [disabled,setDisabled]=useState(true);
    const [valor,setValor]=useState(undefined);//VER NO Elimina valor asignado luego de deshabilitar el checkbox
    function onChangeActivar(e){
        setDisabled(!disabled); setValor(undefined);console.log(e.target.value);
        }

    return (<>  
        
        <Card>
        <Title level={2}>Datos Principales</Title>
         
            <Row gutter={24}>
                <Col>
                    <Form.Item
                    name="sucursal"
                    rules={[{ required: true, message: "Ingrese sucursal" }]}
                    >
                        <FloatSelect
                                    width={205}
                                    label="Sucursal*"
                                    placeholder="Sucursal*"
                                    options={[
                                    {
                                        title: "Sucursal CABA",
                                        value: "Sucursal CABA",
                                        disabled: false,
                                    },
                                    {
                                        title: "Sucursal Mendoza",
                                        value: "Sucursal Mendoza",
                                        disabled: false,
                                    },
                                    {
                                        title: "Sucursal San Luis",
                                        value: "Sucursal sSan Luis",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                </Col>

                <Col>
                    <Form.Item name='gpafinidad'>
                    <FloatSelect
                                    width={205}
                                    label="Grupo de afinidad"
                                    placeholder="Grupo de afinidad"
                                    options={[
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                </Col> 
            </Row>
            <Row gutter={24}>
                <Col>
                    <Form.Item
                    name="tipoproducto"
                    rules={[{ required: true, message: "Ingrese Tipo de Producto" }]}
                    >
                        <FloatInput label="Tipo de Producto*" placeholder="Tipo de Producto*"></FloatInput>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                    name="producto"
                    rules={[{ required: true, message: "Ingrese Producto" }]}
                    >
                        <FloatInput label="Producto*" placeholder="Producto*"></FloatInput>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col>
                    <Form.Item
                    name="posicion"
                    rules={[{ required: true, message: "Ingrese posición" }]}
                    >
                        <FloatSelect
                                    width={205}
                                    label="Posición impositiva*"
                                    placeholder="Posición impositiva*"
                                    options={[
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                </Col>
                <Col>  
                    <Form.Item  name='cuentaexterna'>
                        <FloatInput label='Cuenta externa' placeholder='Cuenta externa'></FloatInput>
                    </Form.Item>            
                </Col> 
            </Row>  
            <Row gutter={24}>
                <Col>
                    <Form.Item
                    name="entregatarjeta"
                    rules={[{ required: true, message: "Ingrese Entrega" }]}
                    >
                        <FloatSelect
                                    width={205}
                                    label="Entrega de tarjeta*"
                                    placeholder="Entrega de tarjeta*"
                                    options={[
                                    {
                                        title: "Domicilio legal",
                                        value: "Domicilio legal",
                                        disabled: false,
                                    },
                                    {
                                        title: "Domicilio legal",
                                        value: "Domicilio legal",
                                        disabled: false,
                                    },
                                    {
                                        title: "Domicilio legal",
                                        value: "Domicilio legal",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                    name="estado"
                    rules={[{ required: true, message: "Ingrese estado" }]}
                    >
                    <FloatSelect
                                    width={205}
                                    label="Estado*"
                                    placeholder="Estado*"
                                    options={[
                                    {
                                        title: "Activa",
                                        value: "Activa",
                                        disabled: false,
                                    }, 
                                    {
                                        title: "Activa",
                                        value: "Activa",
                                        disabled: false,
                                    }, 
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                </Col>
            </Row> 
        </Card>  
        <br></br>
        <Card>
        <Title level={2}>Titular</Title>
        
        <Title level={5}>Tipo de documento</Title>
        <Form.Item name='Tipo de documento' > 
            <Radio.Group onChange={onChange} value={value} >
                <Radio  value={"DNI"}>DNI</Radio> 
                <Radio  value={"LIBRETA CIVICA"} style={{marginLeft: 139}} >LIBRETA CIVICA</Radio>
                <Radio  value={"CUIL"} style={{marginLeft: 200,marginTop: 14}}>CUIL</Radio>
                <Radio  value={"CI"} style={{marginLeft: 150,marginTop: 14}} >CI</Radio><br />
                <Radio  value={"CUIT"} style={{marginTop: 14}}>CUIT</Radio>
                <Radio  value={"LIBRETA DE ENROLAMIENTO"} style={{marginLeft: 133,marginTop: 14}} >LIBRETA DE ENROLAMIENTO</Radio>
                <Radio  value={"PASAPORTE"} style={{marginLeft: 119,marginTop: 14}} >PASAPORTE</Radio> 
            </Radio.Group>
        </Form.Item> 

        <Form.Item name='documento' 
            rules={[{ required: true, message: "Ingrese Documento" }]}
        >
            <FloatInput type="number" label='N° de Documento*' placeholder='N° de Documento*'></FloatInput>
        </Form.Item>
 
        <Row gutter={24}>
            <Col>
                <Form.Item name='nombre' 
                    rules={[{ required: true, message: "Ingrese Nombre" }]}
                >
                    <FloatInput label='Nombre*' placeholder='Nombre*'></FloatInput>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item name='apellido' 
                    rules={[{ required: true, message: "Ingrese Apellido" }]}
                >
                    <FloatInput label='Apellido*' placeholder='Apellido*'></FloatInput>
                </Form.Item>
            
            </Col>
        </Row>

        <Row gutter={24}>
            <Col>
                <Form.Item
                name="sexo"
                rules={[{ required: true, message: "Ingrese sexo" }]}
                >
                        <FloatSelect
                                    width={205}
                                    label="Sexo"
                                    placeholder="Sexo"
                                    options={[
                                        {
                                            title: "Masculino",
                                            value: "Masculino",
                                            disabled: false,
                                        },
                                        {
                                            title: "Femenino",
                                            value: "Femenino",
                                            disabled: false,
                                        },
                                        {
                                            title: "Sexo",
                                            value: "Sexo",
                                            disabled: false,
                                        }
                                    ]}
                ></FloatSelect>
                </Form.Item>
            </Col> 
            <Col>
                <Form.Item
                name="estadocivil"
                rules={[{ required: true, message: "Ingrese Estado Civil" }]}
                >
                        <FloatSelect
                                    width={205}
                                    label="Estado civil"
                                    placeholder="Estado civil"
                                    options={[
                                        {
                                            title: "Soltero/a",
                                            value: "Soltero/a",
                                            disabled: false,
                                        },
                                        {
                                            title: "Casado/a",
                                            value: "Casado/a",
                                            disabled: false,
                                        },
                                        {
                                            title: "Separado/a",
                                            value: "Separado/a",
                                            disabled: false,
                                        }
                                    ]}
                ></FloatSelect>
                </Form.Item>
            </Col> 
        </Row>

            <Row gutter={24}>
                <Col>
                    <Form.Item 
                    name="fechanacimiento"
                    rules={[{ required: true, message: "Ingrese Fecha de Nacimiento" }]}
                    >
                    <DatePicker label='Fecha de Nacimiento' placeholder='Fecha de Nacimiento' style={{width: 205}} format={'DD/MM/YYYY'} onChange={onChangedate}/></Form.Item>
                </Col>
                <Col>
                    <Form.Item 
                    name="paisnacimiento"
                    rules={[{ required: true, message: "Ingrese País" }]}
                    >
                    <FloatSelect
                                    width={205}
                                    label="País de Nacimiento*"
                                    placeholder="País de Nacimiento*"
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
            </Row>
             
            <Row gutter={24}>
                <Col>
                    <Form.Item 
                    name="email"
                    rules={[{ required: true, message: "Ingrese E-Mail" }]}
                    >
                    <FloatInput type="email" label='E-mail*' placeholder='E-mail*'></FloatInput>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item 
                    name="codigotribtario"
                    rules={[{ required: true, message: "Ingrese Código" }]}
                    >
                    <FloatInput type="number" label='Código tribtario*' placeholder='Código tribtario*'></FloatInput>
                    </Form.Item>
                </Col> 
            </Row>
            <Form.Item 
                    name="nombreembozado" 
                    >
                    <FloatInput label='Nombre embozado' placeholder='Nombre embozado'></FloatInput>
            </Form.Item>
        </Card>   
        <br></br>
        <Card >
        <Title level={2}>Domicilio Legal</Title>
 
        <Title level={5}>Por defecto, el domicilio de correspondencia es el mismo que el domicilio legal</Title>
        <Checkbox onChange={e=>onChangeActivar(e)}>
        <Title level={5}>Ingresar un domicilio de correspondencia diferente</Title></Checkbox>
            <Form.Item 
                name="calle"
                rules={[{ required: true, message: "Ingrese Calle" }]}
            >
                <FloatInput disabled={disabled} label="Calle*" placeholder="Calle*"></FloatInput>
            </Form.Item>
            <Row gutter={24}>
            <Col>
                <Form.Item name='numero'
                >
                    <FloatInput disabled={disabled} label='Numero' placeholder='Numero' ></FloatInput>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item name='piso'  
                >
                    <FloatInput disabled={disabled} label='Piso' placeholder='Piso'></FloatInput>
                </Form.Item> 
            </Col>
            <Col>
                <Form.Item name='depto'  
                >
                    <FloatInput disabled={disabled} label='Depto' placeholder='Depto'></FloatInput>
                </Form.Item> 
            </Col>
            <Col>
                <Form.Item name='codpostal'
                rules={[{ required: true, message: "Ingrese Codigo postal" }]}  
                >
                    <FloatInput disabled={disabled} label='Codigo postal*' placeholder='Codigo postal*'></FloatInput>
                </Form.Item> 
            </Col>
        </Row> 
        <Col>
                <Form.Item name='entrecalle'  
                >
                    <FloatInput disabled={disabled} label='Entre Calles' placeholder='Entre Calles'></FloatInput>
                </Form.Item> 
                <Form.Item name='barrio'  
                >
                    <FloatInput disabled={disabled} label='Barrio' placeholder='Barrio'></FloatInput>
                </Form.Item> 
                <Form.Item name='localidad' 
                rules={[{ required: true, message: "Ingrese Localidad" }]}   
                >
                    <FloatInput disabled={disabled} label='Localidad*' placeholder='Localidad*'></FloatInput>
                </Form.Item> 
                <Form.Item
                    name="provincia" disabled={disabled} 
                    rules={[{ required: true, message: "Ingrese provincia" }]}
                >
                    <FloatSelect disabled={disabled} 
                            //width={205}
                            label="Provincia"
                            placeholder="Provincia"
                            options={[
                            {
                                        title: "San Juan",
                                        value: "San Juan",
                                        disabled: false,
                            },
                            {
                                        title: "Mendoza",
                                        value: "Mendoza",
                                        disabled: false,
                            },
                            {
                                        title: "San Luis",
                                        value: "San Luis",
                                        disabled: false,
                            },
                            ]}
                    ></FloatSelect>
                </Form.Item>                    
                <Form.Item name='telefono' 
                rules={[{ required: true, message: "Ingrese Télefono" }]}   
                >
                    <FloatInput disabled={disabled} label='Télefono*' placeholder='Télefono*'></FloatInput>
                </Form.Item>  
                <Form.Item name='referencia'   
                >
                    <FloatInput disabled={disabled} label='Referencia' placeholder='Referencia'></FloatInput>
                </Form.Item></Col>
        </Card>   
        <br></br>
        <Card>
        <Title level={2}>Domicilio Correspondencia</Title>
 
        <Title level={5}>Por defecto, el domicilio de correspondencia es el mismo que el domicilio legal</Title>
        <Checkbox >
        <Title level={5}>Ingresar un domicilio de correspondencia diferente</Title></Checkbox>
        </Card>   
        <br></br>
        <Card>
        <Title level={2}>Domicilio Laboral</Title>
 
        <Title level={5}>Por defecto, el domicilio de correspondencia es el mismo que el domicilio legal</Title>
        <Checkbox >
        <Title level={5}>Ingresar un domicilio de correspondencia diferente</Title></Checkbox>
        </Card>   
        <br></br>
  </>)
  };

  return(
  <>
    <Edit component={FormularioUsuario} />
  </>);
}
export default GestionCuentaNew;
