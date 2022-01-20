import React from 'react'
import { Typography} from 'antd';
import "./index.less";
const { Title, Paragraph } = Typography;

const ayuda2 = ({texto}) => {
    return (
      <Typography style={{ width: 637, height:448 }}  >
            <Title className='titulo' style={{ width: 630, height:34 }}>{texto.title}</Title>
            <Paragraph className='descrip' style={{ width: 630, marginTop: 40}}>{texto.descripcion}</Paragraph>
        </Typography>
       
    )
}
export default ayuda2; 
    