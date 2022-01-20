import React ,{useState} from 'react'
import { Menu, Card, Col, Row} from 'antd';
import ImageHelp from '../assets/jpg/ImageHelp.js';
import SelectSearch from '../components/molecules/SelectSearch';
import Ayuda2 from '../components/molecules/TextoHelp';

const { SubMenu } = Menu;
const texto = [
    { "id": 1,
      "title": '¿Cómo realizar un Ajuste de socios?',
      "descripcion": 'alguna descripcion ajuste de socio'
    },
    { "id": 2,
      "title": '¿Cómo realizar una Autorización?',
      "descripcion": 'alguna descripcion autorización alguna descripcion autorización alguna descripcion autorización alguna descripcion autorización alguna descripcion autorización alguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorización alguna descripcion autorización alguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorizaciónalguna descripcion autorización'
    },
    { "id": 3,
      "title": '¿Cómo exportar un movimiento IPM?',
      "descripcion": 'alguna descripcion ipm'
    },
  ];
function Ayuda() {
    const [flag, setFlag] = useState(false);
    const [idtitulo, setTitulo] = useState('');

    function Setear (e){ 
        setFlag(true)
        setTitulo(e);
    }
  return (
    <>
      { flag 
             &&   <Row style={{width: 'absolute', backgroundColor: 'white'}}>
                        <Col style={{width:456,marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col   style={{marginTop:126}}>
                        <Card hoverable style={{width: 550, height:'flex', borderRadius: "10px"}}><Ayuda2 texto={texto[idtitulo]}/> </Card>
                        </Col>
                  </Row>
             || 
                  <Row style={{width: 'absolute', backgroundColor: 'white'}}>
                        <Col style={{width:456,marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col  style={{width: 'absolute', height:680 , marginTop:126}} >
                            <Card  style={{width: 'absolute', height:'flex', borderRadius: "10px"}} bordered={false} >
                                <SelectSearch texto={texto} Setear={Setear}/> 
                            <br/><br/>
                            <Menu style={{width: 550, color: '#ab218e'}}  >
                                <SubMenu className='SubMenu' key="sub1"  title="Preguntas frecuentes" >
                                </SubMenu>
                                <SubMenu className='SubMenu' key="sub2"  title="Configuraciones">
                                </SubMenu>
                                <SubMenu className='SubMenu' key="sub3"  title="Crear una cuenta">
                                </SubMenu>
                            </Menu>
                            </Card>
                        </Col>
                  </Row>
      } 
    </>
  )
}

export default Ayuda;
