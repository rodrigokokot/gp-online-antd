import React from 'react'
import { Typography} from 'antd'; 
const { Title, Paragraph } = Typography;

const ayuda2 = ({texto}) => {
    return (
      <Typography  >
            <Title  
            style={{ width: 500, height:34, textAlign: 'center',fontSize:28, letterSpacing: '-0.02em', fontweight: 'bold' }}
            >
                {texto.title}
            </Title>
            <Paragraph  
            style={{ width: 630, marginTop: 40, marginLeft: 30,fontSize:16, letterSpacing:'-0.02em'}}
            > 
                {texto.descripcion}
            </Paragraph>
        </Typography>
       
    )
}
export default ayuda2; 
    