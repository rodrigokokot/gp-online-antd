import React ,{useState}from 'react';
import { Select} from 'antd';
import { SearchOutlined  } from '@ant-design/icons';

const { Option } = Select;


function onSearch(val) {
  console.log('search:', val);
}
function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function SelectSearch (props)  {
  
  const {texto}=props; const {Setear}=props;
  function onChange(value) {
    console.log("selected"+value)
    Setear(value)
  }

  return <Select 
              showSearch style={{width: 754}} 
              placeholder="Buscar por palabra clave"
              optionFilterProp="children"
              suffixIcon={<SearchOutlined />} 
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch} 
              filterOption={(input, option) =>  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 || option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
          >   
              {texto.map((p,i) => <Option key={p.title} value={i} >{p.title}</Option>)}
          </Select> 
};

export default SelectSearch;

/*<Select style={{width: 754}} showSearch 
            suffixIcon={<SearchOutlined />} 
            placeholder="Buscar por palabra clave"
            name='texto' id='selTexto'  onClick={handlerCargarDescrip}
         >  
           {
             texto.map((item,i)=>( 
                <Option key={texto.title} value={i}>{item.title}</Option>
             ) ) 
           }
         </Select> */