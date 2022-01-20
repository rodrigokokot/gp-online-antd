import React ,{useState} from 'react'
import { Menu, Card, Col, Row} from 'antd';
import ImageHelp from '../assets/jpg/ImageHelp.js';
import SelectSearch from '../components/molecules/SelectSearch';
import Ayuda2 from '../components/molecules/TextoHelp';

const { SubMenu } = Menu;
const texto = [
    {
      "title": '¿Cómo realizar un Ajuste de socios?',
      "descripcion": 'alguna descripcion ajuste de socio'
    },
    {
      "title": '¿Cómo realizar una Autorización?',
      "descripcion": 'alguna descripcion autorización'
    },
    {
      "title": '¿Cómo exportar un movimiento IPM?',
      "descripcion": 'alguna descripcion ipm'
    },
  ];
function Ayuda() {
    const [flag, setFlag] = useState(false);
    const [idtitulo, setTitulo] = useState('');

    function Setear (e){ 
        console.log("desde setear"+e)
        setFlag(true)
        setTitulo(e);
    }
    return (
        <>
      { flag 
             &&   <Row style={{width: 1259, height: 680, backgroundColor: 'white'}}>
                        <Col style={{marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col  style={{width: 780, height:680 , marginTop:126}} >
                            <Ayuda2 texto={texto[idtitulo]}/>
                        </Col>
                  </Row>
             || 
                  <Row style={{width: 1259, height: 680, backgroundColor: 'white'}}>
                        <Col style={{marginTop:126}} >
                                <ImageHelp/>
                        </Col>
                        <Col  style={{width: 780, height:680 , marginTop:126}} >
                            <Card  bordered={false} >
                                <SelectSearch texto={texto} Setear={Setear}/> 
                            <br/><br/>
                            <Menu style={{width: 754}}  >
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
