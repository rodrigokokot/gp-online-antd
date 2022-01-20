import React from 'react';
import { Select} from 'antd';
import { SearchOutlined  } from '@ant-design/icons';

const { Option } = Select;


function onSearch(val) {
}
function onBlur() {
}

function onFocus() {
}

function SelectSearch (props)  {
  
  const {texto}=props; const {Setear}=props;
  function onChange(value) {
    const idd = texto.findIndex(e => e.title === value) 
    Setear(idd)
  }

  return <Select 
              showSearch style={{width: 550}} 
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
              {texto.map((p,j) => <Option key={p.title} value={p.title} >{p.title}</Option>)}
          </Select> 
};

export default SelectSearch;