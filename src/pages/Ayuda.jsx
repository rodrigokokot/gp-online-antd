import React ,{useState} from 'react'
import { Menu, Card, Col, Row} from 'antd';
import ImageHelp from '../assets/jpg/ImageHelp.js';
import SelectSearch from '../components/molecules/SelectSearch';
import Ayuda2 from '../components/molecules/TextoHelp';
import { RightOutlined} from '@ant-design/icons';
import  texto  from "../Mocks/Ayuda";

function Ayuda() {
    const [flag, setFlag] = useState(false);
    const [idtitulo, setTitulo] = useState('');

    function Setear (e){ 
        setFlag(true)
        setTitulo(e);
    }
  return (
    <>
      { (flag 
             &&   <Row style={{width: 'absolute', backgroundColor: 'white'}}>
                        <Col style={{width:456,marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col   style={{marginTop:126}}>
                        <Card hoverable style={{width: 550, height:'flex', borderRadius: "10px"}}><Ayuda2 texto={texto[idtitulo]}/> </Card>
                        </Col>
                  </Row>)
             || 
                  <Row style={{width: 'absolute', backgroundColor: 'white'}}>
                        <Col style={{width:456,marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col  style={{width: 'absolute', height:680 , marginTop:126}} >
                            <Card  style={{width: 'absolute', height:'flex', borderRadius: "10px"}} bordered={false} >
                                <SelectSearch texto={texto} Setear={Setear}/> 
                            <br/><br/>
                            <Menu style={{width: 550}}  >
                                <Menu.Item key="Preguntas frecuentes" >
                                  <a href="https://ant.design" target="_blank" style={{color: '#ab218e'}}>
                                      Preguntas frecuentes
                                  </a><RightOutlined style={{marginLeft: '70%'}}/>
                                </Menu.Item>
                                <Menu.Item key="Configuraciones" >
                                  <a href="" style={{color: '#ab218e'}}>
                                      Configuraciones
                                  </a><RightOutlined style={{marginLeft: '76%'}}/>
                                </Menu.Item>
                                <Menu.Item key="Crear una cuenta" >
                                  <a href=""  style={{color: '#ab218e'}}>
                                      Crear una cuenta
                                  </a><RightOutlined style={{marginLeft: '75%'}}/>
                                </Menu.Item>
                            </Menu> 
                            </Card>
                        </Col>
                  </Row>
      } 
    </>
  )
}

export default Ayuda;
