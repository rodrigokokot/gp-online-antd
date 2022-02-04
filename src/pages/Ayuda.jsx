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
    const suffix = (
      <RightOutlined 
        style={{ marginTop:14, 
          color: '#ab218e',
        }}
      />
    );
  return (
    <Card> 
      <Row gutter={6} style={{ marginTop:110}} >
      <Col span={11} > 
          <ImageHelp/>
      </Col>
      <Col span={10} >
      { (flag 
             && <Card hoverable style={{width: 550, height:'flex', borderRadius: "10px"}}><Ayuda2 texto={texto[idtitulo]}/> </Card>
              )        
             || <Menu style={{border:0}}><Row gutter={[26, 5]}><SelectSearch texto={texto} Setear={Setear}/>
             <Col span={22}>
                 <Menu.Item key="Preguntas frecuentes" style={{ marginTop:14}} >
                        <a href="https://ant.design" target="_blank" rel='noreferrer' style={{color: '#ab218e'}} >
                            Preguntas frecuentes
                        </a></Menu.Item>
             </Col>
             <Col span={2} style={{ marginTop:14}}>
                 {suffix}
             </Col>
             <Col span={22}>
                 <Menu.Item key="Configuraciones" >
                        <a href="/ayuda" style={{color: '#ab218e'}}>
                              Configuraciones
                        </a> </Menu.Item> 
             </Col>
             <Col span={2}>
                 {suffix}
             </Col>
             <Col span={22}>
                 <Menu.Item key="Crear una cuenta" >
                        <a href="/ayuda"  style={{color: '#ab218e'}}>
                            Crear una cuenta
                        </a> </Menu.Item> 
             </Col>
             <Col span={2}>
                 {suffix}
             </Col>
           </Row> </Menu>
        } </Col></Row>
    </Card>
  )
}
export default Ayuda;
 